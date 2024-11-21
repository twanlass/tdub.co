---
layout: ../../layouts/LayoutNote.astro
title: 'Good friction, bad friction'
date: 2024-11-21
tags: ['product', 'design']
---

Good friction is good. Bad friction is bad. 

Good friction is asking questions during an onboarding flow that are then visibily used to personalize the product experience thereafter. 

Bad friction is asking question after question in an onboarding flow that has no percieved value to the user. <sup><a href="#footnote1">1</a></sup>

Good friction is adding an extra step to a checkout flow to build trust when purchasing a high priced item. 

Bad friction is asking for full shipping details in a checkout flow when somone is just trying to buy a downloadable proudct. 

Good friction is making it harder for users to perform undoable actions that could cause them to lose work.

Bad friction is prompting users to confirm every delete action. “Are you super duper sure you want to do this thing that’s totally undoable and totally not important anyway?” <sup><a href="#footnote2">2</a></sup>

Good friction is adding hotkeys or advanced features for your power users that they can discover on their own. 

Bad friction is interupting all your users to make sure they know about all those hotkeys and advanced features. 

Good friction is introducing a well timed nudge about a new feature as close as possible to where and when the feature will actually be used.

Bad friction is interupting every user who signs in with a giant modal that says “Hey! You look like you’re trying to get sometheing done (that’s probably why you logged in, right?). Anyway, check out this new marginally useful feature that you’re totally not gonna use right now. ”

**Two parting thoughts:**

1. Going from bad friction to good friction is often about shifting the "where and when" – move the friction point to where and when it’s impact will have the shortest user feedback loop. 
2. Add good friciton to build trust that cam then remove fear, uncertainly, or doubts (FUDs). Yes, adding steps to flows can actually increase the conversion rates. 

---

<div class="text-[14px] text-[#909090]">
<p class="text-[14px] mb-1">Footnote:</p>
<div class="flex flex-col gap-2">
    <div id="footnote2">
        <a id="footnote1">1.</a> Assuming you’ve built a great product people actually want to use (or their boss forces them to use), you’ll have plenty more changes to ask them questions like “how big is your team?” or “Do you want Sales to spam your inbox?."
    </div>
    <div id="footnote2">
        <a id="footnote1">2.</a> Most products have _very few_ truly destructive  or undoable workflows. Go easy on those confirmation modals. This is espeically true if the time required by a user to fix a mistake is sub 5 seconds. 
    </div>
</div>
</div>