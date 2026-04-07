---
title: 'Database.Migrate() on Startup: Anti-Pattern or Good Enough?'
description: "On Database.Migrate() in Program.cs in production, knowing your context, and picking the simplest thing that works."
pubDate: '2026-04-07'
heroImage: '../../assets/blog-database-migrate.png'
tags: ['dotnet', 'devops', 'architecture']
---

What about `Database.Migrate()` in `Program.cs` on production? Is it an anti-pattern or good enough? I'm using it. And I sleep well at night.

What if it's an internal tool with an acceptable 5-minute downtime? Used by 500+ users, hosted on a single Azure App Service.

Do you really need something more sophisticated?

I think this is the sweet spot — the system is small enough, and the migration approach is simple enough. You could build something better. But why? To prove you can? Everyone already knows you can.

## So when does it stop being enough?

When your system needs 99.99% availability. When you scale beyond a single instance. Because with multiple instances, you need to be 100% sure you won't end up in an unwanted state.

With one instance and `Database.Migrate()` on startup — you know exactly what's happening.

Know your context. Pick the simplest thing that works. Move on.
