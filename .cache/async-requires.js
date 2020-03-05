// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-template-jsx": () => import("./../src/templates/post-template.jsx" /* webpackChunkName: "component---src-templates-post-template-jsx" */),
  "component---src-templates-tag-template-jsx": () => import("./../src/templates/tag-template.jsx" /* webpackChunkName: "component---src-templates-tag-template-jsx" */),
  "component---src-templates-category-template-jsx": () => import("./../src/templates/category-template.jsx" /* webpackChunkName: "component---src-templates-category-template-jsx" */),
  "component---src-templates-page-template-jsx": () => import("./../src/templates/page-template.jsx" /* webpackChunkName: "component---src-templates-page-template-jsx" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-jsx": () => import("./../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-categories-jsx": () => import("./../src/pages/categories.jsx" /* webpackChunkName: "component---src-pages-categories-jsx" */),
  "component---src-pages-index-jsx": () => import("./../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-tags-jsx": () => import("./../src/pages/tags.jsx" /* webpackChunkName: "component---src-pages-tags-jsx" */)
}

