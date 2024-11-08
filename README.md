﻿# ShowCaseMe
# Scotty R. White - Portfolio Website

This repository contains the portfolio website for **Scotty R. White**, a professional software engineer. This site showcases skills, projects, and contact information in a streamlined and user-friendly interface.

## Project Structure

The website is structured into four main pages:

- **About:** Introduction to Scotty, highlighting his skills, experience, and approach to software development.
- **Skills:** Overview of Scotty’s technical skills, languages, and frameworks.
- **Projects:** A showcase of completed projects with descriptions of goals, technologies, and outcomes.
- **Contact:** Form to reach out directly to Scotty for project discussions or general inquiries.

### Key Files and Directories

- `index.html`: The main entry file.
- `Skills.html`, `Projects.html`, `About.html`, `Contact.html`: Pages dedicated to each section of the portfolio.
- `styles.css`: Stylesheet for the site's layout, typography, and color themes.
- `images/`: Contains images used across the site, including profile images and project screenshots.
- `scripts.js`: JavaScript functionality for interactive elements like the responsive navigation menu.

## Features

### Navigation Bar

The navigation bar contains links to all sections:
- On larger screens, these links are centered.
- On smaller screens (width < 1020px), a circular menu icon appears that expands to a full-screen menu when clicked.

### Footer Hero Section

A full-height section in the footer provides a professional and impactful closing to each page, occupying the entire screen.

### Mobile Responsiveness

The site is optimized for mobile devices:
- The navigation bar adjusts to a hamburger-style menu with smooth transitions.
- Content adjusts to fit the screen size, ensuring a seamless experience on smaller devices.

## Styling and Customization

- **Colors**: Blacks, greys, and reds are used to create a professional and consistent color scheme.
- **Fonts**: The site uses system defaults, but feel free to adjust via CSS to personalize the style.
- **Buttons and Links**: Hover effects add interactivity to the navigation links and call-to-action buttons.

### Custom JavaScript

JavaScript enables several interactive features:
1. **Toggle Menu**: Controls the mobile menu, switching between a hamburger icon and an "X" when open.
2. **Show Content Function**: Loads either skills or projects content dynamically within sections when invoked.

### Example Code

#### `toggleMenu` Function
```javascript
function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const fullScreenMenu = document.querySelector('.full-screen-menu');

    menuIcon.classList.toggle('open');
    fullScreenMenu.style.display = fullScreenMenu.style.display === 'flex' ? 'none' : 'flex';
}
