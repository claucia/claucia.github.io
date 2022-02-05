---
title: FAQ accordion card
date: 2022-01-24T21:15:39Z
draft: true
categories:
  - Frontend Mentor
tags: 
  - HTML
  - CSS
  - SCSS
resources:
  - name: cover
    src: images/cover.png
externalLinks:
  - title: GitHub
    url: https://github.com/claucia/faq-accordion-card
  - title: Live demo
    url: https://claucia.com/faq-accordion-card/
  - title: Frontend Mentor
    url: https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam
---


I believe that learning by practicing is the best way to learn. With that in mind, I found an interesting way to get hands-on to real-world projects to acquire experience: [Frontend Mentor challenges][frontend-mentor-challenges].

This _FAQ accordion card_ was my first challenge. The goal was get it looking as close as possible to the design provided, keeping in mind that the users should be able to:

> - View the optimal layout for the component depending on their device’s screen size.
> - See hover states for all interactive elements on the page;
> - Hide/show the answer to a question when the question gets clicked.

To bundle the application, I picked [Parcel.js][parcel-js]. It has plenty of default configurations, which made things a lot quicker to get up and running.

The styles were written using SCSS, and here is what I learned (or what I want to remember on my next projects):

- `width: 100%`: the element is going to be 100% of the width of the parent container that got defined dimensions.

- `position: relative`: position an element _relatively_ to its normal position in the document flow. Then we can use `top`, `bottom`, `left`, and `right` to offset the element.

- `position: absolute`: the element is removed from the normal document flow, and no space is created for the element in the page layout. And the funny thing that causes confusion: despite the name it's positioned _relatively_ to its closest positioned ancestor, if any exist. If none exist, it's positioned relatively to the document.

- To define the layout, I used Flexbox. And I would like to hightlight something nice I learned about it: When all children of a flexbox container have `flex-grow` set to `1`, then the remaining space in the container will be distributed equally to all children.

```javascript
console.log('foo');
```

```html
<table>
  <tr>
    <td bgcolor="chucknorris" cellpadding="8" width="100" align="center">chuck norris</td>
    <td bgcolor="mrt"         cellpadding="8" width="100" align="center" style="color:#ffffff">Mr T</td>
    <td bgcolor="ninjaturtle" cellpadding="8" width="100" align="center" style="color:#ffffff">ninjaturtle</td>
  </tr>
  <tr>
    <td bgcolor="sick"  cellpadding="8" width="100" align="center">sick</td>
    <td bgcolor="crap"  cellpadding="8" width="100" align="center">crap</td>
    <td bgcolor="grass" cellpadding="8" width="100" align="center">grass</td>
  </tr>
</table>
```

{{<
  figure src="./images/screenshot-desktop.png"
  title="Screenshot of page on desktop"
  alt="Screenshot of page on desktop"
>}}

{{<
  figure src="./images/screnshot-mobile.png"
  title="Screenshot of page on mobile"
  alt="Screenshot of page on mobile"
>}}

[frontend-mentor-challenges]: https://www.frontendmentor.io/challenges
[parcel-js]: https://parceljs.org