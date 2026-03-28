---
title: 'I Overengineered a Shopping List App'
description: "I'm too lazy to manually deploy a private project that only 2 people will ever use. Do you overengineer your private projects too?"
pubDate: '2026-03-28'
heroImage: '../../assets/shoppingList.png'
tags: ['react', 'dotnet', 'devops', 'docker']
---

I don't know, but I'm too lazy to manually deploy a private project that only 2 people will ever use — me and my wife. Do you overengineer your private projects too?

I hate wandering around the store like a headless chicken. My wife sends me the list. I do the shopping. And I always end up going back and forth between aisles like an idiot.

So I built an app that orders the shopping list based on how I walk through the store.

## Simple problem. Simple stack:

- React + Vite (PWA)
- .NET Minimal API
- PostgreSQL
- VPS for 200 PLN/year
- Cloudflare Access for auth

## But then it started.

I already had a few projects on that VPS, so I wanted Docker to keep things clean. Makes sense, right?

Docker means I need images. Images mean I need a registry. GHCR is free — let's go. GHCR means I need to push something. Okay, simple CI/CD. Tests, build, push. CI/CD is set up... but pulling on VPS manually is annoying.

So I created a shell alias on my local machine. `vps-update`. One command. It SSHes into the VPS and does everything for me.

## Now my workflow is:

- Ask AI for a new feature
- Fix minor stuff
- Push
- Wait 2 minutes
- Run `vps-update`

Done. App updated. Wife happy (to be honest, I'm happier).

Is it overengineered for a 2-person app? Absolutely. But I used it to test AI agent orchestration on a "real" project — and it works surprisingly well.

Do you overengineer your side projects? I do and I feel good with that.
