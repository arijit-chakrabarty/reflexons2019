(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(150),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(169),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var m=a(50);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},151:function(e,t,a){"use strict";var n=a(221),r=a(0),i=a.n(r),l=a(4),s=a.n(l),c=a(170),o=a.n(c),u=a(148),m=a(222),d=a.n(m);function p(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,s=e.title,c=e.socialPreview;return i.a.createElement(u.StaticQuery,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{name:"og:site_name",content:e.site.siteMetadata.title},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:image",content:e.site.siteMetadata.siteUrl+(c||d.a)},{property:"og:url",content:e.site.siteMetadata.siteUrl},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:image",content:e.site.siteMetadata.siteUrl+(c||d.a)},{name:"twitter:image:alt",content:"Reflexons 2019 - annual reunion + tech fest"},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=p;var f="2229664651"},152:function(e,t,a){"use strict";var n=a(182),r=a(0),i=a.n(r),l=a(4),s=a.n(l),c=a(148),o=a(170),u=a.n(o),m=a(7),d=a.n(m),p=a(160),f=a(198),h=(a(214),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loaded:!1},a.location="/",a.showSub=!1,a.aboutListRef=i.a.createRef(),a.arrowRef=i.a.createRef(),a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.location=window.location.pathname,this.setState({loaded:!0})},a.renderLinks=function(){var e=this;if(this.location)return i.a.createElement(f.slide,{pageWrapId:"page-wrap",outerContainerId:"outer-container",right:!0,width:"260px",onStateChange:function(e){e.isOpen?document.querySelector(".bm-burger-button").style.display="none":document.querySelector(".bm-burger-button").style.display="block"}},i.a.createElement(c.Link,{to:"/",className:"menu-item"},"Home"),"/"===this.location?i.a.createElement(p.Link,{to:"section-2",className:"menu-item"},"Events"):i.a.createElement(c.Link,{to:"/#section-2",className:"menu-item"},"Events"),i.a.createElement(c.Link,{to:"/register",className:"menu-item"},"Register"),i.a.createElement("div",{className:"menu-item sub-menu-trigger",onClick:function(){e.showSub=!e.showSub,e.showSub?(e.aboutListRef.current.style.height="200px",e.arrowRef.current.style.transform="rotate(180deg)"):(e.aboutListRef.current.style.height="0",e.arrowRef.current.style.transform="rotate(0deg)")}},i.a.createElement("i",{className:"fas fa-angle-down",style:{marginRight:"1em"},ref:this.arrowRef}),"About"),i.a.createElement("div",{className:"sub-menu-list",ref:this.aboutListRef,style:{height:"0"}},i.a.createElement(c.Link,{to:"/about",className:"sub-menu bm-item"},"About Reflexons"),i.a.createElement(c.Link,{to:"/gallery",className:"sub-menu bm-item"},"Gallery"),i.a.createElement(c.Link,{to:"/team",className:"sub-menu bm-item"},"Team")),i.a.createElement(c.Link,{to:"/sponsors",className:"menu-item"},"Sponsors"),i.a.createElement(c.Link,{to:"/contact",className:"menu-item"},"Contact"),"/"===this.location?i.a.createElement(p.Link,{to:"section-4",className:"menu-item"},"Location"):i.a.createElement(c.Link,{to:"/#section-4",className:"menu-item"},"Location"))},a.render=function(){return i.a.createElement(i.a.Fragment,null,this.state.loaded?this.renderLinks():null)},t}(r.Component)),g=a(156),b=(a(215),function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"pages-list"},i.a.createElement("div",{className:"list-head"},"Reflexon Contents"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/",className:"sky-blue-link"},"Home")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/#section-2",className:"sky-blue-link"},"Events")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/gallery",className:"sky-blue-link"},"Gallery")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/about",className:"sky-blue-link"},"About")))),i.a.createElement("div",{className:"contact-us"},i.a.createElement("div",{className:"list-head"},"Contact Us"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"tel:+919434538125",className:"sky-blue-link"},"(+91)9434538125")),i.a.createElement("li",null,i.a.createElement("a",{href:"tel:+918250149961",className:"sky-blue-link"},"(+91)8250149961")),i.a.createElement("li",null,i.a.createElement("a",{href:"tel:+919874052864",className:"sky-blue-link"},"(+91)9874052864")),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:reflexons.2019@gmail.com",className:"sky-blue-link"},"reflexons.2019@gmail.com")))),i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"list-head"},"© Reflexons ",(new Date).getFullYear()),i.a.createElement("br",null),"Department of Computer Science and Engineering,",i.a.createElement("br",null),i.a.createElement(c.Link,{to:"/#section-4",className:"sky-blue-link"},"University of Calcutta, Tech Campus"),i.a.createElement("br",null),"Designed by"," ",i.a.createElement(g.OutboundLink,{href:"https://www.nparchments.com",target:"_blank",className:"sky-blue-link"},"Nabhoneel Majumdar")))}),E=a(216),y=a(157),v=a.n(y),w=(a(217),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loaded:!1},a.location="/",a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.location=window.location.pathname,this.setState({loaded:!0})},a.renderBar=function(){if(this.location&&"/"!==this.location)return i.a.createElement("div",{className:"top-bar"},i.a.createElement(c.Link,{to:"/"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("span",{className:"logo-text"},"Reflexons 2019"),i.a.createElement(c.StaticQuery,{query:"2151183000",render:function(e){return i.a.createElement(v.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:E}))),i.a.createElement("div",{className:"social-links"}))},a.render=function(){return i.a.createElement(i.a.Fragment,null,this.state.loaded?this.renderBar():null)},t}(r.Component)),k=(a(218),a(219)),N=a.n(k),L=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"page-bg",style:{background:"#000 url("+N.a+") no-repeat center center"}}),i.a.createElement("div",{className:"animation-wrapper"},i.a.createElement("div",{className:"particle particle-1"}),i.a.createElement("div",{className:"particle particle-2"}),i.a.createElement("div",{className:"particle particle-3"}),i.a.createElement("div",{className:"particle particle-4"})))};a(220);a.e(15).then(a.t.bind(null,296,7)),a.e(14).then(a.t.bind(null,297,7));var A=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.1/css/all.css",integrity:"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",crossorigin:"anonymous"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Josefin+Sans",rel:"stylesheet"})),i.a.createElement("div",{className:"main-content",id:"outer-container"},i.a.createElement(h,null),i.a.createElement(L,null),i.a.createElement("main",{id:"page-wrap"},i.a.createElement(w,null),t,i.a.createElement(b,null))))},data:n})};A.propTypes={children:s.a.node.isRequired};t.a=A},169:function(e,t,a){var n;e.exports=(n=a(183))&&n.default||n},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Reflexons 2019"}}}}},183:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(68),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},214:function(e,t,a){},215:function(e,t,a){},216:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEYUlEQVQ4y12V209cVRTG14CVlpRSTeqDttFSLsMw58yZGR4aG0198Ua1XIeWewdmYLjMheFShstc2jClcik0VIgiNZFWK2lrrUWCjcTWvvTFxETUB+Mf4Zsv/s6ZIRR3srLP3rPXt771rbX3iOijqNWYJL9exBEVcUYzZXscObVXijucUuJfkKK2V9gxybOjxG/ahWEMi48Nt0mciQxjXezzizXwpaj9UVEHLok2HGF9XSzd10XpdYul8x3OdGCFxnlze8qvyKODde0KCAtFbIMPcPxbbEOPxTH2nSh9a5x7IsWdP4s1eJMAk2I7vwSRJsOn9g+RwhbTs7T3sPGiFHeVijq4IKWJX0QJb0lJzxYsf2L/Kew2sTUx+x4AvEqQCQIPc+bkDhn3dspdx0UJLYkt4hf72J+wegzgfcCmkSHMnCS9m2Lu+BrAFeYvSHMFbRcJcoNvj+RVH9lhqPSeJNo10SLrpHOXVD3iiH0ojgR24QNxjpeJGqmXoo64FLbNYFPoNc08K4WttwGdEbPnvR1AbXgF0L8ACog9Wg5YpTjirgxtqCVb9Y7v083mG9unticyir0fATSH1ldSoK2TML6EBGVpdqE3qOS3pLUBcNhgZo+ehV31c1qfN1epX81V6r5hvp2jnpvP0vxBsfT0A3oV00F1xvNIMoaeuULVNgFsEvvoKtptUb0EvXhKnMn3s2w9/QettY8OWcv/PaRU/HNQqbufqQ24TY5ojVh7u9Jg08xTMF2SgpZ3qXCglGI0iB3tnPFfAX0CW3SM9GfZAt251jM/HFAabmWrnon9qns2y+YPiT1eTbEqIdIG4GeAzVGYKclvnNMBVbRrFPsIgLHfSHlTtKFlAAM6oM4wR21ZhG04R21e0hkiRxWy1KJzpVhDg0jlxcdP2jC0dB7FuSIN+JR0Q4CW6ZV93hYIwvAhzGb2aL2+A0rjyl5b9wCV13V2cbYVpj58g2QVhJwZDQNVovZdRLsNKb3YykEOj1GUmMtkH6nTC5OhnW/G2UUAf6bxHaOtosMQGEWiCKn3iDbqguHLelE6AbwC07tsDJNGjTgvVKQYxGpgU2nsOeLlNPskvfoxQJP8No7mEfq3DwIUKdQtx2oPp1snfIxeSiLquhS6P2HdiU4VOFVz+Exar3LjxjhGPwdoAmZJyCzTf71kF+Tadctrp1/guYqZpLDcRJXaJL9pFbsD8B0YbxA9JKXcEtIHtBLhk7BbIN3L/MbLE75Fuw0CWrVzS7afnuL243T/74CtSX7DOsCPpKD5HjIkUprGT9NaUwAsA0zPxr7iewbQesmr3Z9+E016UVLPjhI8DKsQoNyEriSBxumvWZr1BjIsGHtq3z1AH5L294aWlq5FXqm3dhEzhv5Kb4/XL5uIquJwVrQRHz12jrUf53nmHwH8lLlZzF6L5LlekoLGbMPvaKVeCz5sgykgtV+veKa8mpbD7FF5Rbj43re5Zm9iJ1hfJYsT8v+h/3WkfOQ/HQ53YiewS0kAAAAASUVORK5CYII=",aspectRatio:1.003921568627451,src:"/static/504396c60f29f54ac5a3db4e899899a1/9146f/logo.png",srcSet:"/static/504396c60f29f54ac5a3db4e899899a1/3e547/logo.png 200w,\n/static/504396c60f29f54ac5a3db4e899899a1/9146f/logo.png 256w",sizes:"(max-width: 256px) 100vw, 256px"}}}}}},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){e.exports=a.p+"static/logo-504396c60f29f54ac5a3db4e899899a1.png"},220:function(e,t,a){},221:function(e){e.exports={data:{site:{siteMetadata:{title:"Reflexons 2019",description:"The annual reunion and fest of the department of Computer Science and Engineering at the University of Calcutta",author:"@nabhoneel",siteUrl:"https://reflexons.cucse.org"}}}}},222:function(e,t,a){e.exports=a.p+"static/socialCard-812e0b7d3c1000a8fa3a5d0b7d16b3dc.jpg"}}]);
//# sourceMappingURL=1-e03f15436c98d90eb13c.js.map