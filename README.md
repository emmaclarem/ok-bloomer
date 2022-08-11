<p align="center"> <img src="https://user-images.githubusercontent.com/104512014/182873126-7dd146c4-9134-439a-9af6-b057e8139831.png" width="400px"/> </p>

## About
This is my final project for the Code First Girls Web Development Kickstarter course. 

<img src="https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/solid/arrow-up-right-from-square.svg" width="20" height="20">[ View Live Site](https://emmaclarem.github.io/ok-bloomer/)


## Project Requirements 
#### Must Have:
- [x] At least 2 HTML pages and one external CSS file
- [x] Consistent navbar on all pages 
- [x] Styled well
- [x] All links working
- [x] Basic user interaction (ex: hover, submit form, action on click)
#### Nice to Have:
- [x] Mobile-responsive website
- [x] Effective use of classes and IDs
- [x] JavaScript used to enable user interaction

## What Went Well
1. The JavaScript sorting function was a lot easier to write than I thought it would be, I'm really proud of that!
2. I'm really happy with the overall design and colour scheme.
3. I managed to create lots of reusable layouts, elements, and classes, so styling some things became quite quick towards the end.

## Where I Struggled
1. Getting the mobile nav menu to work took me forever, and it still doesn't look quite as I intended it to. I'd like to have the same frosted-glass effect on the mobile nav as is on the desktop nav, but the backdrop-filter property wasn't playing nice with the expanding menu. I settled for an opaque nav menu for now.
2. The accordion menus were a real challenge as I wasn't quite sure how to approach them, and wanted to avoid using the built-in ```<details><summary>``` HTML element. I watched several tutorials of different methods, but none of them were working quite as I wanted for some reason or another. Eventually I meshed together bits from a couple different tutorials to make something I was happy with.

## What I Learned
1. How to create a side-sliding mobile nav menu that opens on click
2. Implementing event listeners
3. Using JavaScript to add an 'active' class to various components on click
4. Using JavaScript to filter items on user interaction
5. Using a forEach loop to add event listeners to several elements with minimal code
6. Creating an accordion menu with JavaScript to toggle each item open and closed
7. Using the aria-controls element for accessibility

## Continued Development / Still To Do
- [ ] Add the aria-expanded attribute on the accordion items and mobile nav for increased accessibility, to be toggled with JS
- [ ] Add an 'About' page with more details about the project
- [ ] Do futher research into the content to improve the site copy and make it more personal and engaging
- [ ] Add an 'active' class to the current page to aid with visual navigation
- [ ] Fix primary buttons on the homepage (currently doing some weird things when tabbing through because it's a button wrapped in an anchor tag)
- [ ] Fix mobile nav so it doesn't briefly pop out when screen shrinks
- [ ] Check which CSS properties need -webkit- prefixes and add those in where needed

