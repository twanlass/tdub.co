---
layout: ../../layouts/LayoutNote.astro
title: '1D & 4D features'
date: 2024-11-04
tags: ['product', 'design', 'startups']
---

Not all product features are created equal. Some are straightforward – let's call them 1D features. They add a narrow bit of specific functionality to the product and often sit in isolation.

But then there's the 4D features that introduce dimensional complexity. These are the cross-cutting features that are interwoven in the product and create tons of hidden connections. They make every feature now and in the future a little harder to reason about. 

The classic 4D feature in enterprise SaaS is Role-Based Access Controls (RBACs). Every new feature added to our product must now consider how various roles intersect with RBAC. Or whether a specific feature – and any other connected features – are available to the current user.

> 4D features add a silent tax on everything your team will do. 

Product and design will need to consider it in every PRD. Engineering will need to build code abstractions for it. And your marketing, sales, and support teams will need to consider it in customer facing comms, support docs, and sales calls. 

There's an obvious 2x2 matrix here where you've got 1D vs 4D on one axis and low value vs high value on the other.

Of course you should try really hard to never build a low value 4D feature. The time will come though when you have to build RBACs, or add localization to your product, or implement pricing tiers with feature gates. 

You're gonna have to build 4D features. But at least now you and your team know that's what you're doing. 