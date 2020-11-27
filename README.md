# Hubblr Website

This is the source code for hubblr's current website located at [hubblr.io](https://hubblr.io/).
The page is set up as a [Gatsby](https://www.gatsbyjs.com/) project utilizing
[Tailwind CSS](https://tailwindcss.com/) for styling based on this [awesome
starter](https://github.com/oddstronaut/gatsby-starter-tailwind) from oddstronaut. Uses
[Framer Motion](https://www.framer.com/motion/) to create scroll-based animation effects.

## Table of Contents
* [Page Overview](#page-overview)
* [Setup](#setup)
* [Used Libraries and Frameworks](#used-libraries-and-frameworks)

## Page Overview
### Landing Page
On the main page, you can find out what hubblr can do for you.

![The Contact Page](src/images/example-screens/index.png?raw=true "The Contact Page")
### Contact Page
The contact page is used to get in touch with hubblr.

![The Landing Page](src/images/example-screens/contact.png?raw=true "The Landing Page")

## Setup

Clone the repo:
```
git clone https://github.com/hubblr/hubblr-website.git
```
Install all dependencies:
```
npm install
```
Run the project in development mode (per default on localhost:8000):
```
npm run develop
```
Alternatively, build the project and run it in production mode (per default on localhost:9000):
```
npm run build && npm run serve
```

## Used Libraries and Frameworks
* Gatsby 2.24.92
* React 16.13.1
* Tailwind 1.9.1
* Framer Motion ^2.9.4

