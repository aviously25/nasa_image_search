# NASA Image Search
This web app, which can be found at https://nasa-image-search-phi.vercel.app/, provides a frontend for the nasa images api. 

## Features
- Responsive and mobile-first experience
- Download original sized image
- Optimized Images through the next/image component
  - Lazy Loading (images are only loaded when they are in view, which saves quite a bit of bandwidth)
  - Image resizing based on device size (basically smaller devices will load smaller images)
  - Avoids Cumulative Layout Shift (Web content will not shift when images are loading, creating a better experience for the user), which Google will take into account as a factor for its search rankings
- Accessibily
  - All images have a descriptive `alt` property
  - Color contrasts meet WCAG guidelines
- Design offers a space-like experience with a dark blue gradient background and a starry background

## Tools Used
- Next.js and ReactJS
- Hosted on Vercel
- React-Bootstrap and SASS
- ESLint and Prettier
- Figma for desgin
  - The figma file can be found here: https://www.figma.com/file/0PiqBq5ygj1bGYUREIVnBv/NASA-Image-Search?node-id=0%3A1
- And of course, the NASA Images API (https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)
