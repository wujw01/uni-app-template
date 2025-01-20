---
to: "src/utils/routes.js"
inject: true
after: "// PACKAGE_PATH"
---
const <%= packageName.toUpperCase() %> = '/pages/package-<%= packageName %>'