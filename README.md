# intro-html5-browser-js

a simple intro to programming with a modern browser

## mix of static elements and dynamic elements

It's not <i>if</i> either-or, but <i>when</i>. You will certainly have some static tags to start, and you might augment that dynamically via script. (The EJS template engine for Express.js is a nice automation for both when using Express.js for your web server.)

HTML styling information can be embedded directly in the webpage, it is not necessary to have separate CSS files. That said, styling data like Fonts & Colors is generally kept consistent across a suite of related pages (unless you're doing a '90s Angelfire/Geocities Tribute page, then yeah, go bananas wih per-element styling). 

To make CSS a little more programmer-friendly, there are a variety of pre-processors out there that generate CSS from a simple scripting language. SASS is my preference of that group, though the alternatives are generally equally serviceable.

## Be Selective about Libraries

You do not need a framework like React. You can just use HTML and a little Javascript.

I think Bootstrap is lightweight, and a good choice to *start* any app. Over time, if your app needs something different, it will become painfully obvious, you'll be better informed to select something else then.

## Supplementary Website Files

By convention, browsers will expect other files around like icon formats. They aren't necessary, but you can plug them in when you want.

## Development Tool

I pay an annual subscription for JetBrains tools, seems worth it to me. I enjoy using WebStorm for Javascript/Node.js development. I had used Intelli/J for years doing Java work, and the transition was fairly straightforward. If I didn't use it, I wouldn't pay for it.

I think there is a free 'community' edition and it probably works fine.

VS Code is free.

## Adding Node.js & WebPack

Recommended: use NVM (https://github.com/nvm-sh/nvm) for managing your Node.js installation.

I've never used NVM on a Windows box, but I assume there is a way to get it to work (e.g. Git for Windows has a Bash).

## Configure and Run App

<code>nvm use lts/iron</code>

<code>npm install</code>

<code>npm run build-sass</code>

<code>npm run build-wd</code>

<code>npm run start</code>

Should open a browser window on port 8008 with your app.

