# SEO & Indexing Checklist for React (Vercel + Vite)

This checklist provides actionable steps to ensure your React application ranks well on Google and other search engines.

## 1. Technical SEO Foundation

- [x] **Dynamic Head Management**: Installed `react-helmet-async` and implemented the `<SEO />` component.
- [x] **Robots.txt**: Configured `public/robots.txt` to allow crawling and point to the sitemap.
- [ ] **Sitemap.xml**: Create a `public/sitemap.xml`. For dynamic movie pages, consider a script that pulls TMDB IDs and generates this.
- [ ] **Canonical Tags**: Implemented in `<SEO />` to prevent duplicate content issues.

## 2. Content & Value (Google's Priority)

- [x] **Rich Homepage Content**: Added a descriptive section to the homepage with high-value keywords.
- [x] **Dynamic Metadata**: Movie pages now dynamically update their title, description, and Open Graph images based on the content.
- [ ] **Meaningful Alt Text**: Ensure all images (especially movie posters) have `alt` tags like `alt={movie.title}`.
- [ ] **Internal Linking**: Ensure "Similar Movies" and "Recommendations" use actual `<a>` tags (or `Link` from `react-router-dom`) so crawlers can follow them.

## 3. Vercel & Deployment Optimization

- [ ] **Pre-rendering (Vercel Prerender)**: If you're on a Pro plan, Vercel can pre-render pages for bots.
- [ ] **Custom 404 Page**: Ensure your 404 page returns a proper 404 status code (easy on Vercel via `vercel.json`).
- [x] **SSL/HTTPS**: Vercel handles this automatically. Redirection is key.

## 4. Fixing "React Indexing Issues"

React SPAs sometimes show a blank page to crawlers if the JS takes too long.

- **Solution A (Simple)**: Use `react-helmet-async` (Done).
- **Solution B (Pro)**: Use **Vite-plugin-ssr** or migrate to **Next.js** if SEO is the #1 priority.
- **Solution C (Balanced)**: Add a "Loading State" in `index.html` that contains some basic text and links so the crawler sees _something_ even before React hydrates.

## 5. Rich Snippets (Schema.org)

- [ ] **Movie Schema**: Add JSON-LD to movie pages. This helps Google show "Rich Results" (star ratings, release dates) in search.

### Example JSON-LD for Movie Page:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": "Movie Title",
    "description": "Movie description...",
    "image": "https://image.tmdb.org/t/p/w500/path.jpg"
  }
</script>
```

## How to Verify

1. **Google Search Console**: Submit your sitemap here.
2. **Rich Results Test**: Check if your movie pages show up with rich data.
3. **Inspect URL**: Use Search Console to see "View Crawled Page" to ensure Google sees your content, not just a blank root div.
