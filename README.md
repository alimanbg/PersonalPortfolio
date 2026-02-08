# PersonalPortfolio
Created my personal portfolio using HTML, CSS and JS; deployed through Vercel


# Alima's Portfolio Website

## BAI4010 Web Programming for e-Business - Individual Assignment 1

### Deployed URL

[[https://alima-portfolio.vercel.app](https://alima-portfolio.vercel.app)](https://personal-portfolio-xi-sepia.vercel.app)

---

## Website Summary

Personal portfolio website showcasing my work as a Data Science student. Features a clean, professional design with dark maroon (#950606), black, and white color scheme.

### Pages

1. **index.html** - About me, personal statement, interests
2. **projects.html** - Portfolio projects with skills table
3. **experience.html** - Work experience, teaching, extracurriculars
4. **contact.html** - Contact form with validation

---

## Site Requirements Checklist

### I) Site Structure

| Requirement          | Implementation                                                         |
| -------------------- | ---------------------------------------------------------------------- |
| **Pages**            | 4 HTML pages: index.html, projects.html, experience.html, contact.html |
| **Content**          | Semantic HTML5 with proper h1/h2/h3 hierarchy                          |
| **Navigation Links** | About → Projects → Experience ▼ → Contact                              |
| **Active State**     | Active page has maroon border-bottom                                   |
| **Dropdown Menu**    | Bootstrap dropdown under "Experience" (Teaching, Startups)             |
| **Responsive**       | Bootstrap grid + custom media queries at 768px                         |
| **Embedded Media**   | Profile image and project images                                       |
| **HTML Forms**       | Contact form with text, email, textarea, checkbox inputs               |
| **Inline Message**   | Alert showing submitted data + success message                         |
| **Error Handling**   | Red inline errors with aria-invalid attribute                          |
| **Success**          | Thank you message displayed, form resets                               |

### II) CSS Methods & Customizations

| CSS Method       | Location                                      |
| ---------------- | --------------------------------------------- |
| **External CSS** | styles.css linked in all pages                |
| **Internal CSS** | <style> blocks in each HTML <head>            |
| **Inline CSS**   | style="" attributes (e.g., statement section) |

### CSS Customizations (6 areas)

1. **Colors** - CSS variables: --color-white, --color-maroon, --color-black
2. **Borders** - 4px solid borders, no rounded corners (border-radius: 0)
3. **Spacing** - Consistent padding/margins for sections
4. **Text** - Uppercase headings, letter-spacing, custom fonts
5. **Tables** - Styled skills table with alternating rows
6. **Float** - Float utility classes included
7. **Advanced CSS** - Transitions, CSS variables, flexbox

### III) Optional Advanced Features

- ✅ **Responsive Design** - Bootstrap grid + media queries
- ✅ **JavaScript Enhancement** - Form validation with error handling
- ✅ **Framework** - Bootstrap 5.3.2

---

## File Structure

```
portfolio/
├── index.html
├── projects.html
├── experience.html
├── contact.html
├── styles.css
├── form.js
└── README.md
```

---

## How to Run

1. Download/unzip the folder
2. Open index.html in browser
3. Navigate using the menu

---

© 2026 Alima

