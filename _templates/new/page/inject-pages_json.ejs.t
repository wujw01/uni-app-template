---
to: "src/pages.json"
inject: true
before: <%= package[0]==='main'?'':package[1]  %>

---
<%_ if (package[0]==='main') { _%>
  '',<%_} else { _%>
      {
        "path": "<%= name _%>/<%= name _%>",
        "style": {
           "navigationBarTitleText": "<%= title _%>"
        }
      },<%_ } _%>