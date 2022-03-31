---
title: FAQ accordion card
date: 2022-01-24T21:15:39Z
draft: false
categories:
  - Frontend Mentor
tags: 
  - HTML
  - SCSS
resources:
  - name: cover
    src: images/cover.png
externalLinks:
  - title: GitHub
    url: https://github.com/claucia/frontend-mentor-faq-accordion-card
  - title: Live demo
    url: https://portfolio.claucia.com/frontend-mentor-faq-accordion-card
  - title: Frontend Mentor
    url: https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam
---

I believe that learning by practicing is the best way to learn. With that in mind, I found an interesting way to get some hands-on experience: [Frontend Mentor challenges][frontend-mentor-challenges].

This _FAQ accordion card_ was my first challenge. The goal was get it looking as close as possible to the design provided, allowing the users to:

> - View the optimal layout for the component depending on their device’s screen size.
> - See hover states for all interactive elements on the page;
> - Hide/show the answer to a question when the question gets clicked.  

The styles were written using SCSS. I reckon the font size is a bit too small, but I've attempted to follow the design as much as possible.

Theres's a tiny bit of JavaScript to show/hide the content of the answers.

To bundle the application, I picked [Parcel.js][parcel-js]. I attempted to use [webpack], but I found it a bit too complex to get started, so I plan to revisit webpack in the future. On the other hand, Parcel.js has plenty of default configurations, which made things a lot quicker to get up and running.

By the way, several things I've done for setting up this project can be reused for my next projects. With this in mind, I created [`web-app-template-parceljs`][app-template]. So I don't need to start a new project from the scratch every time.

## Lessons learned

Here is what I learned (or what I want to remember on my next projects):

- `width: 100%`: the element is going to be 100% of the width of the parent container that got defined dimensions.

- `position: relative`: position an element _relatively_ to its normal position in the document flow. Then we can use `top`, `bottom`, `left`, and `right` to offset the element.

- `position: absolute`: the element is removed from the normal document flow, and no space is created for the element in the page layout. And the funny thing that causes confusion: despite the name it's positioned _relatively_ to its closest positioned ancestor, if any exist. Otherwise it's positioned relatively to the document.

- To define the layout, I used Flexbox. And I would like to hightlight something nice I learned about it: When all children of a flexbox container have `flex-grow` set to `1`, then the remaining space in the container will be distributed equally to all children.

## Screenshots

See below some screenshots of the page:

{{<
  figure src="images/screenshot-desktop.png"
  title="Screenshot of page on desktop"
  alt="Screenshot of page on desktop"
>}}

{{<
  figure src="images/screnshot-mobile.png"
  title="Screenshot of page on mobile"
  alt="Screenshot of page on mobile"
>}}

[frontend-mentor-challenges]: https://www.frontendmentor.io/challenges
[parcel-js]: https://parceljs.org
[app-template]: https://github.com/claucia/web-app-template-parceljs
[webpack]: https://webpack.js.org/