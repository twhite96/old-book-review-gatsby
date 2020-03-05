const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-template-jsx": hot(preferDefault(require("/Volumes/Elements/old_book-notes/src/templates/post-template.jsx"))),
  "component---src-templates-tag-template-jsx": hot(preferDefault(require("/Volumes/Elements/old_book-notes/src/templates/tag-template.jsx"))),
  "component---src-templates-category-template-jsx": hot(preferDefault(require("/Volumes/Elements/old_book-notes/src/templates/category-template.jsx"))),
  "component---src-templates-page-template-jsx": hot(preferDefault(require("/Volumes/Elements/old_book-notes/src/templates/page-template.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Elements/old_book-notes/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Volumes/Elements/old_book-notes/src/pages/404.jsx"))),
  "component---src-pages-categories-jsx": hot(preferDefault(require("/Volumes/Elements/old_book-notes/src/pages/categories.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Volumes/Elements/old_book-notes/src/pages/index.jsx"))),
  "component---src-pages-tags-jsx": hot(preferDefault(require("/Volumes/Elements/old_book-notes/src/pages/tags.jsx")))
}

