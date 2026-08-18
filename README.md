# Dra. Marina Scheid — Estética Avançada

Site institucional estático (HTML/CSS/JS, sem build) da **Marina Scheid Estética Avançada**
— harmonização facial em Osório/RS.

- WhatsApp: https://wa.me/5551992344567
- Instagram: [@dra.marinascheid](https://www.instagram.com/dra.marinascheid)
- Endereço: R. Bento Gonçalves, 1041 — Centro, Osório/RS, 95520-000
- Recepção: 8h30–11h30 | 13h30–17h30

## Rodar local

```bash
python -m http.server 8777
# http://127.0.0.1:8777
```

Deploy: qualquer host estático (Vercel — sem configuração, é a raiz do repo).

## Decisões de design

**Estilo:** *Editorial Grid / Magazine* (nº 66 do repositório `ui-ux-pro-max`), com a
materialidade do *Nature Distilled* (nº 61) — mas **recolorido para a paleta real**, não a
do CSV. A estrutura foge do padrão Hero → Selos → Serviços → Depoimentos → FAQ: aqui a
página se lê como uma revista — Capa, Expediente, capítulos numerados (01 Método,
02 Procedimentos), Ensaio fotográfico, Citação, 03 Cursos, Perfil, Cartas, Dúvidas, Colofão.

**Tipografia:** Bodoni Moda + Jost (nº 50, *Luxury Minimalist*). O didone de alto contraste
espelha os traços finos/grossos do monograma dela; o Jost geométrico conversa com o sans
das etiquetas dos produtos da linha própria.

**Paleta** — amostrada com PIL das fotos reais da clínica, não do briefing:

| Token | Hex | Origem |
|---|---|---|
| `--tinta` | `#241C17` | espresso dominante das fotos |
| `--tinta-70` | `#55453A` | corpo de texto — 7,2:1 sobre o papel |
| `--tinta-45` | `#665545` | legendas — 5,6:1 |
| `--ouro` | `#C2A066` | tampa dourada dos frascos da linha dela |
| `--ouro-med` | `#A8894F` | monograma na porta de vidro |
| `--ouro-txt` | `#705831` | ouro só para texto pequeno — 5,3:1 |
| `--creme` / `--creme-2` | `#EDE3D5` / `#E2D6C4` | papel e faixa alternada |
| `--nude` / `--nude-claro` | `#E0B599` / `#E3BCA1` | parede da sala de atendimento |
| `--argila` | `#6E3B23` | terracota queimada das paredes |

Os tons de texto foram fechados depois do primeiro deploy: o papel original (`#F3EDE4`) tinha
brilho demais e as legendas davam 3,2:1, reprovando no AA. O corpo também saiu de Jost 300
para 400 — o peso leve sumia sobre fundo claro.

## Depoimentos

A seção mostra os **prints das avaliações reais do Google**, em `img/depoimentos/` — Naira Daiany
(Local Guide), Neiva Campos Aragon e Jéssica Lara. Cada print fica numa placa branca (o screenshot
tem fundo branco e flutuaria solto sobre o papel creme) e abre em tamanho original ao clicar.

O `alt` de cada imagem carrega a transcrição completa da avaliação — imagem de texto precisa disso
para leitor de tela e para a busca entender o conteúdo.

Os prints têm ~460–485px de largura nativa e são exibidos em card de ~350px no celular, então
reduzem em vez de ampliar e continuam nítidos.

Para acrescentar mais: salvar o print em `img/depoimentos/`, duplicar um `<figure class="print">`
e escrever o `alt` com a transcrição.

## Imagens

Todas em `img/`, recortadas das fotos reais da Marina. Os cards de procedimento usam recorte
3:4 com os olhos a ~30% da altura, para o texto cair sobre pescoço/ombro e não sobre o rosto.
Os pares antes/depois estão inteiros, com a marca d'água dela preservada.
`og-image.jpg` (1200×630) é composta.
