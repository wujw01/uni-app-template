---
to: "src/pages.json"
inject: true
after: <%= package[0]==='main'? '' + pageMsg:''  %>
---
<%_ if (package[0]==='main') { _%>
    {
     "path": "pages/<%= package[0] _%>/<%= name _%>/<%= name _%>",
      "style": {
         "navigationBarTitleText": "<%= title _%>"
      }
     }, <%_} else { _%>
        ,<%_ } _%>