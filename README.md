# matthewalmeria.com

Matthew Almeria's portfolio. Built with [Eleventy](https://www.11ty.dev/) and hosted on GitHub Pages at https://matthewalmeria.com.

## Run it on your computer

You need Node.js 22 or newer.

```bash
npm install
npm start
```

Then open http://localhost:8080. The page reloads when you save a file.

## How it's laid out

| Path | What it is |
|---|---|
| `src/index.njk` | The home page |
| `src/_includes/base.njk` | Header, footer and the "Currently into" pop-out, shared by every page |
| `src/_includes/case-study.njk` | The layout every case study uses |
| `src/work/*.md` | One file per project |
| `src/assets/img/` | Photos and project images (resized automatically at build time) |
| `src/css/style.css` | All styles. Sketch mode rules start with `.sketch` |
| `src/js/mode.js` | The "see how I think" / "see how it turns out" switch |
| `src/_data/site.json` | Name, email and social links |
| `src/404.njk` | The page shown for missing links |

## Add a case study

1. Make a folder for the images: `src/assets/img/<project-slug>/`. Name files in order, like `01-logo.png`, `02-sketches.png`. Use the biggest version you have; the build makes smaller copies.
2. Put a cover image in `src/assets/img/covers/<project-slug>.png`. It shows as the thumbnail in the work list.
3. Copy `src/work/sober-attraction.md` to `src/work/<project-slug>.md` and change:
   - `title`, `type`, `role`, `summary`
   - `order`: where it sits in the work list (1 is first)
   - `facts`: the label/value rows under the title
   - `gallery`: one entry per image. Every image needs `alt` text that describes what's in it. `caption` shows under the image. `stamp` and `note` are optional.
   - The text under the front matter: Overview, Challenge, Approach, Outcome.
4. To keep a project in the list but not publish its page yet, add `draft: true` and `permalink: false` to its front matter.
5. Run `npm start` and check the page at desktop and phone width.

## Publish

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) builds the site and deploys it to GitHub Pages, usually in about a minute. Check progress in the repo's Actions tab.

```bash
git add -A
git commit -m "Add <project> case study"
git push
```

## Domain

The domain is registered at Squarespace, but its DNS is managed in Cloudflare (account signed in with matt.almeria@gmail.com). The site's records there are set to "DNS only" (grey cloud) so GitHub can issue the HTTPS certificate:

- `matthewalmeria.com` A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www` CNAME: xd-raiine.github.io
- Keep the `_github-pages-challenge-xd-raiine` TXT record. It proves the domain belongs to this GitHub account.

The custom domain is set in the repo under Settings > Pages, with Enforce HTTPS on.

## Old site

The archive of the old Pixpa site (text, screenshots, images) is in Google Drive under `01 Career & Work/Portfolio & Career Development/Website Migration/archive/`.
