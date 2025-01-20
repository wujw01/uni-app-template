---
to: "src/pages.json"
inject: true
after: "subPackages"
---
    {
      "root": "pages/package-<%= packageName%>/",
      "pages": [
        "<%= packageName%>_todo"
      ]
    },