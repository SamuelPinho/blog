(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{144:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return p}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return f});var n=t(0),i=t.n(n),r=t(4),c=t.n(r),s=t(143),o=t.n(s);t.d(a,"Link",function(){return o.a}),t.d(a,"withPrefix",function(){return s.withPrefix}),t.d(a,"navigate",function(){return s.navigate}),t.d(a,"push",function(){return s.push}),t.d(a,"replace",function(){return s.replace}),t.d(a,"navigateTo",function(){return s.navigateTo});var l=t(148),u=t.n(l);t.d(a,"PageRenderer",function(){return u.a});var d=t(45);t.d(a,"parsePath",function(){return d.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},145:function(e,a,t){"use strict";var n=t(150),i=t(0),r=t.n(i),c=t(4),s=t.n(c),o=t(151),l=t.n(o),u=t(144),d=t(149),m=t(162),f=(t(163),function(e){var a=e.siteTitle;return r.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(u.Link,{className:"navbar-item",to:"/"},a)))}),p=t(165),h=function(e){var a=e.links;return r.a.createElement("footer",{className:"footer fixed-footer"},r.a.createElement("div",{className:"content has-text-centered"},"Samuel Monteiro Pinho",r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"icon is-large"},r.a.createElement("a",{href:a.github},r.a.createElement(p.a,{icon:["fab","github"],size:"2x"}))),r.a.createElement("span",{className:"icon is-large"},r.a.createElement("a",{href:a.linkedin},r.a.createElement(p.a,{icon:["fab","linkedin"],size:"2x"})))),r.a.createElement("div",{className:"content"})))};d.b.add(m.a);var v=function(e){var a=e.children;return r.a.createElement(u.StaticQuery,{query:"2686819463",render:function(e){return r.a.createElement("div",null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),r.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("section",{className:"section has-background-light has-navbar-fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-8 is-mobile is-offset-2"},a)))),r.a.createElement(h,{links:e.site.siteMetadata.links}))},data:n})};v.propTypes={children:s.a.node.isRequired};a.a=v},148:function(e,a,t){var n;e.exports=(n=t(161))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Samuel Monteiro",links:{github:"https://github.com/SamuelPinho/blog",linkedin:"https://www.linkedin.com/in/samuelmpinho/"}}}}}},161:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),i=t.n(n),r=t(4),c=t.n(r),s=t(70),o=t(2),l=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=l},163:function(e,a,t){}}]);
//# sourceMappingURL=1-25225cbdc4a980470526.js.map