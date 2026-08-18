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
| `--tinta` | `#2B211B` | espresso dominante das fotos |
| `--ouro` | `#C2A066` | tampa dourada dos frascos da linha dela |
| `--ouro-med` | `#A8894F` | monograma na porta de vidro |
| `--ouro-txt` | `#7A6036` | variante para texto pequeno (5,15:1 sobre o creme) |
| `--creme` | `#F3EDE4` | papel |
| `--nude` / `--nude-claro` | `#E0B599` / `#ECC6B0` | parede da sala de atendimento |
| `--argila` | `#7C442A` | terracota queimada das paredes |

## Pendência conhecida

**Depoimentos** (`#depoimentos`): os três cards estão marcados como `e-placeholder`.
A pasta de imagens não trazia print de nenhuma avaliação real e depoimento de paciente não
se inventa. Para publicar: trocar o texto de `.carta__txt` / `.carta__autor` pelo conteúdo
real (Google ou Instagram) e **remover a classe `e-placeholder`** do `<article>` — o aviso
some sozinho. O bloco de nota do Google (5,0 · 8 avaliações) acima deles já é real.

## Imagens

Todas em `img/`, recortadas das fotos reais da Marina. Os cards de procedimento usam recorte
3:4 com os olhos a ~30% da altura, para o texto cair sobre pescoço/ombro e não sobre o rosto.
Os pares antes/depois estão inteiros, com a marca d'água dela preservada.
`og-image.jpg` (1200×630) é composta.
