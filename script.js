(function () {
  'use strict';

  /* ---- menu mobile ---- */
  var hamb = document.getElementById('hamb');
  var nav = document.getElementById('nav');

  if (hamb && nav) {
    hamb.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      hamb.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      hamb.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('aberto');
        hamb.setAttribute('aria-expanded', 'false');
        hamb.setAttribute('aria-label', 'Abrir menu');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('aberto')) {
        nav.classList.remove('aberto');
        hamb.setAttribute('aria-expanded', 'false');
        hamb.focus();
      }
    });
  }

  /* ---- ano no rodapé ---- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- reveal on scroll ---- */
  var alvos = document.querySelectorAll(
    '.cab, .passos li, .proc__item, .placa, .citacao blockquote, ' +
    '.duo__figura, .duo__texto, .perfil__figura, .perfil__texto, ' +
    '.google-bloco, .carta, .faq details, .contato__dados, .contato__mapa, ' +
    '.expediente__lista li, .capa__texto, .capa__figura'
  );

  if (!semMovimento && 'IntersectionObserver' in window) {
    Array.prototype.forEach.call(alvos, function (el, i) {
      el.classList.add('rv');
      el.style.transitionDelay = (i % 4) * 70 + 'ms';
    });

    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          obs.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(alvos, function (el) { obs.observe(el); });
  }

  /* ---- link ativo na navegação ---- */
  var links = document.querySelectorAll('.nav a[href^="#"]');
  var secoes = [];

  Array.prototype.forEach.call(links, function (a) {
    var alvo = document.querySelector(a.getAttribute('href'));
    if (alvo) secoes.push({ link: a, el: alvo });
  });

  if (secoes.length && 'IntersectionObserver' in window) {
    var obsNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        secoes.forEach(function (s) {
          s.link.classList.toggle('ativo', s.el === e.target);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    secoes.forEach(function (s) { obsNav.observe(s.el); });
  }

  /* ---- FAQ: fecha as outras ao abrir uma ---- */
  var faqs = document.querySelectorAll('.faq details');
  Array.prototype.forEach.call(faqs, function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      Array.prototype.forEach.call(faqs, function (outro) {
        if (outro !== d) outro.open = false;
      });
    });
  });
})();
