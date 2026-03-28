---
title: 'How I Built and Deployed This Site'
description: 'A deep dive into the Astro framework, GitHub Pages deployment, and the design decisions behind this blog.'
pubDate: '2026-03-16'
heroImage: '../../assets/blog-building-this-site.png'
tags: ['astro', 'devops', 'webdev']
---

I built this site to pour my thoughts onto paper. That is why there is no comments section — this is my place.

Maybe I will document technical things. Maybe it will be more about culture, about things that annoy me, or the opposite — things I genuinely value. I have no idea yet, and I think that is fine.

This is how I built it.

## The Stack

I chose [Astro](https://astro.build) for two reasons. First, I had used it before — not much, but enough to know it is not going to fight me. Second, I like being able to customize things. Hugo is fine, but it can get rigid when you want to do something slightly outside the happy path.

And WordPress? Who needs that big fatty service in 2026? A full PHP application, a database, a server, plugins on top of plugins — just to publish some text. No thanks.

Astro is a static site generator. You write Markdown, it generates HTML. No JavaScript shipped to the browser unless you explicitly ask for it. Fast by default.

The blog posts live as plain `.md` files in `src/content/blog/`. The schema is simple — a title, a description, a publication date. That is all you need to start writing.

No database. No backend. No server to maintain at 2am.

## Automation with GitHub Actions

The deployment is fully automated. Every push to `main` triggers a GitHub Actions workflow that:

1. Checks out the code
2. Installs Node.js and dependencies
3. Runs `npm run build`
4. Uploads the `dist/` folder to GitHub Pages

The workflow file sits in `.github/workflows/deploy.yml`. Once set up, you forget it exists. Push code, site is live within a minute.

Could I do it by hand? Sure. But do you know any programmer who enjoys doing the same thing more than once? Me neither. If you want to publish frequently, you need to minimize the friction.

## GitHub Pages and a Custom Domain

GitHub Pages hosts the site for free (a reasonable price, I like it!). Out of the box it gives you a `username.github.io` address, which is fine, but not particularly memorable.

For a custom domain, the steps are straightforward:

- Buy a domain. I went with `thechaotic.engineer` — because of course I did.
- Add a `CNAME` record at your DNS provider pointing to `username.github.io`.
- Configure the custom domain in the GitHub repository settings under Pages.
- Enable HTTPS. GitHub handles the certificate automatically via Let's Encrypt.

The whole process takes about fifteen minutes, plus some time waiting for DNS to propagate. Pro tip: lower the TTL on your DNS records before making the change — propagation will happen much faster. Once everything is working, bump it back up to the default.

## Why Bother?

It is mine. I control it. When something breaks, I know where to look.

That is enough for me.

Also, if I ever feel like it, I will improve the design. If you are reading this and the site looks amazing — well, I guess I felt like it.
