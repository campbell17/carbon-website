(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{115:function(e,t,n){"use strict";var a=n(6),i=n.n(a),o=n(235),r=n(0),l=n.n(r),c=n(3),s=n.n(c),d=n(236),m=n.n(d),p=n(64),u=n(58),b=n.n(u),g=n(9),h=n(541),v=n(540),f=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&void 0!==window.docsearch||console.warn("Search has failed to load and now is being disabled"),window.docsearch({apiKey:"296ea0c1d0e96b2b04900d0f4d1a6329",indexName:"carbondesignsystem",inputSelector:"#doc-search",debug:!1})},n.render=function(){return l.a.createElement("div",{className:"bx--search bx--search--sm",role:"search"},l.a.createElement(v.a,{name:"icon--search",description:"Search Maginfier",className:"bx--search-magnifier"}),l.a.createElement("label",{htmlFor:"doc-search",className:"bx--label"},"Search"),l.a.createElement("input",{"aria-label":"Search",type:"text",className:"bx--search-input",id:"doc-search",placeholder:"Search"}))},t}(l.a.Component),y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={open:!1},t.toggleSubNav=function(){t.setState({open:!t.state.open})},t.renderSubNavItems=function(e,n,a){var i=n?E(n):[];return Object.keys(e).map(function(o){var r=i[0]===a&&function(e,t,n){var a=E(e);if(n<0)return a[a.length+n]===t;return a[n]===t}(n,o,1),c=b()("side-nav__sub-nav-item",{"side-nav__sub-nav-item--active":r});return e[o].internal?"":l.a.createElement("li",{className:c,key:o},l.a.createElement(p.Link,{activeClassName:"side-nav__sub-nav-item--active",to:"/"+t.props.itemSlug+"/"+o},e[o].title))})},t}return i()(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.location,a=e.itemSlug,i=t.open,o=t.prevLocation,r=t.prevItemSlug;return o===n&&r===a?null:{open:i||n&&a&&A(n,a),prevLocation:n,prevItemSlug:a}},t.prototype.render=function(){var e=this.props,t=e.item,n=e.itemSlug,a=e.location,i=!(void 0===t["sub-nav"]),o=b()("side-nav__nav-item",{"side-nav__nav-item--open":this.state.open,"side-nav__nav-item--active":A(a,n)&&!i});return l.a.createElement("li",{className:o},i?l.a.createElement("button",{onClick:this.toggleSubNav},t.title," ",l.a.createElement(v.a,{className:"side-nav__nav-item--arrow",name:"caret--down","aria-hidden":"true",description:"Menu arrow icon",alt:"Menu arrow icon"})):l.a.createElement(p.Link,{to:"/"+n},t.title),i&&l.a.createElement("ul",{className:"side-nav__sub-nav"},this.renderSubNavItems(t["sub-nav"],a,n)))},t}(l.a.Component);function E(e){return e.pathname.replace("","").split("/").filter(Boolean)}function A(e,t){return-1!==E(e).indexOf(t)}var w=n(250),k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).renderNavItems=function(e,t){return Object.keys(e).map(function(n){return e[n].internal?"":l.a.createElement(y,{itemSlug:n,item:e[n],key:n,location:t})})},t}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.isOpen,a=t.isFinal,i=b()({"side-nav":!0,"side-nav__closed":!n,"side-nav__closed--final":a&&!n}),o=b()({"side-nav-click-to-close":!0,"side-nav-click-to-close__closed":!n,"side-nav-click-to-close__closed--final":a&&!n});return l.a.createElement(g.Location,null,function(t){var n=t.location,a=e.renderNavItems(w,n);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:o,onClick:function(){e.props.clickToClose()}}),l.a.createElement("nav",{className:i},l.a.createElement("div",{className:"side-nav--header"},l.a.createElement(p.Link,{to:"/",className:"side-nav__logo"},l.a.createElement("span",null,"Carbon")," Design System"),l.a.createElement(f,null)),l.a.createElement("div",{className:"side-nav--items"},l.a.createElement("ul",{className:"side-nav__nav-items"},a),l.a.createElement("div",{className:"side-nav__links"},l.a.createElement(h.a,{className:"side-nav__link",kind:"secondary",icon:"icon--arrow--right",iconDescription:"Arrow right",href:"https://github.com/ibm/carbon-design-kit"},"Design Kit"),l.a.createElement(p.Link,{to:"/resources#github",className:"side-nav__link bx--btn bx--btn bx--btn--secondary"},"GitHub Repos",l.a.createElement(v.a,{className:"bx--btn__icon",name:"icon--arrow--right",description:"Arrow right"}))))))})},t}(l.a.Component),N=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.onToggleBtnClick,n=e.isOpen,a=b()({"side-nav-toggle-btn":!0,"side-nav-toggle-btn--closed":!n});return l.a.createElement("button",{"aria-label":"Toggle Side Navigation",onClick:t,className:a},l.a.createElement("div",null,l.a.createElement("span",{className:"line"}),l.a.createElement("span",{className:"line"}),l.a.createElement("span",{className:"line"})))},t}(l.a.Component);N.propTypes={onToggleBtnClick:s.a.func,isOpen:s.a.bool};var I=N,S=n(152),_=n(90),T=n.n(_),C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={copied:!1},t.handleClick=function(){t.setState({copied:!0}),setTimeout(function(){t.setState({copied:!1})},2e3)},t}return i()(t,e),t.prototype.render=function(){var e=this,t=l.a.createElement("svg",{className:"social-media__icon",width:"32",height:"32",viewBox:"0 0 32 32"},l.a.createElement("title",null,"Dribble"),l.a.createElement("path",{d:"M1 16c0-2.72.67-5.23 2.01-7.53 1.34-2.3 3.16-4.12 5.46-5.46C10.77 1.67 13.28 1 16 1c2.72 0 5.23.67 7.53 2.01 2.3 1.34 4.12 3.16 5.46 5.46C30.33 10.77 31 13.28 31 16c0 2.72-.67 5.23-2.01 7.53-1.34 2.3-3.16 4.12-5.46 5.46C21.23 30.33 18.72 31 16 31c-2.72 0-5.23-.67-7.53-2.01-2.3-1.34-4.12-3.16-5.46-5.46C1.67 21.23 1 18.72 1 16zm2.49 0c0 3.12 1.05 5.87 3.15 8.25.96-1.88 2.48-3.67 4.56-5.37 2.08-1.7 4.11-2.77 6.09-3.21-.3-.7-.59-1.33-.87-1.89-3.44 1.1-7.16 1.65-11.16 1.65-.78 0-1.36-.01-1.74-.03 0 .08-.005.18-.015.3-.01.12-.015.22-.015.3zm.39-3.09c.44.04 1.09.06 1.95.06 3.34 0 6.51-.45 9.51-1.35-1.52-2.7-3.19-4.95-5.01-6.75-1.58.8-2.935 1.91-4.065 3.33-1.13 1.42-1.925 2.99-2.385 4.71zm4.47 12.96c2.26 1.76 4.81 2.64 7.65 2.64 1.48 0 2.95-.28 4.41-.84-.4-3.42-1.18-6.73-2.34-9.93-1.84.4-3.695 1.41-5.565 3.03-1.87 1.62-3.255 3.32-4.155 5.1zm4.59-21.96c1.76 1.82 3.39 4.09 4.89 6.81 2.72-1.14 4.77-2.59 6.15-4.35C21.66 4.45 19 3.49 16 3.49c-1.02 0-2.04.14-3.06.42zm5.97 8.94c.3.64.64 1.45 1.02 2.43 1.48-.14 3.09-.21 4.83-.21 1.24 0 2.47.03 3.69.09-.16-2.72-1.14-5.14-2.94-7.26-1.3 1.94-3.5 3.59-6.6 4.95zm1.77 4.53c1.02 2.96 1.71 6 2.07 9.12 1.58-1.02 2.87-2.33 3.87-3.93s1.6-3.33 1.8-5.19c-1.46-.1-2.79-.15-3.99-.15-1.1 0-2.35.05-3.75.15z"})),n=l.a.createElement("svg",{className:"social-media__icon",width:"32",height:"32",viewBox:"0 0 32 32"},l.a.createElement("title",null,"Github"),l.a.createElement("g",null,l.a.createElement("path",{d:"M15.946 2C8.246 2 2 8.19 2 15.826c0 6.11 3.996 11.29 9.537 13.12.697.127.953-.3.953-.666 0-.33-.013-1.42-.02-2.574-3.88.836-4.698-1.63-4.698-1.63-.634-1.6-1.548-2.024-1.548-2.024-1.265-.858.095-.84.095-.84 1.4.097 2.132 1.424 2.132 1.424 1.244 2.114 3.263 1.503 4.06 1.15.124-.894.485-1.504.884-1.85-3.098-.35-6.354-1.535-6.354-6.832 0-1.51.545-2.743 1.437-3.71-.145-.35-.62-1.756.135-3.66 0 0 1.17-.372 3.834 1.417 1.112-.3 2.305-.46 3.49-.46 1.185.006 2.38.16 3.494.466 2.66-1.788 3.83-1.416 3.83-1.416.76 1.903.28 3.31.137 3.66.895.966 1.436 2.2 1.436 3.71 0 5.31-3.264 6.48-6.37 6.82.5.43.947 1.27.947 2.56 0 1.85-.015 3.34-.015 3.794 0 .368.25.8.956.663 5.538-1.83 9.53-7.01 9.53-13.117C29.894 8.19 23.646 2 15.946 2"}),l.a.createElement("path",{d:"M7.223 21.695c-.03.07-.14.09-.24.042-.1-.045-.157-.138-.124-.207.03-.07.133-.09.24-.043.1.045.153.14.12.208m.684.607c-.067.06-.197.033-.286-.064-.09-.096-.108-.225-.04-.287.07-.06.194-.03.286.07.09.097.11.225.04.287m.47.776c-.086.06-.225.004-.312-.12-.085-.122-.085-.27.002-.33.087-.06.224-.004.312.118.083.126.083.273-.004.334m.796.9c-.077.082-.24.06-.36-.054-.12-.113-.155-.27-.078-.355.077-.08.24-.06.36.056.122.114.16.27.078.356m1.028.302c-.032.11-.19.16-.347.113-.158-.047-.26-.173-.23-.283.034-.11.19-.16.35-.11.16.047.26.173.23.283m1.17.13c.005.113-.13.21-.295.21-.168.003-.303-.09-.304-.2 0-.116.13-.21.298-.213.164-.002.3.09.3.203m1.15-.044c.02.11-.095.225-.26.255-.16.03-.31-.04-.33-.15-.02-.112.095-.226.256-.255.166-.03.314.04.335.15"}))),a=l.a.createElement("svg",{className:"social-media__icon",width:"32",height:"32",viewBox:"0 0 32 32"},l.a.createElement("title",null,"Medium"),l.a.createElement("path",{fillRule:"evenodd",d:"M29.682 8.403c-.005-.005-.01-.01-.016-.013l-.01-.005-8.637-4.257c-.06-.03-.12-.048-.188-.064-.078-.02-.157-.032-.237-.032-.33 0-.66.164-.84.45l-4.97 7.964 6.24 9.995 8.68-13.9c.027-.043.013-.1-.03-.132m-17.63 2.228V19.7l8.176 4.03-8.173-13.1m9.403 13.703l6.73 3.316c.877.43 1.587.13 1.587-.68V11.01l-8.314 13.32M2.193 4.26c-.15-.075-.295-.11-.426-.11-.37 0-.63.282-.63.754v17.952c0 .48.358 1.05.794 1.264l7.43 3.662c.19.094.378.138.54.138.46 0 .787-.352.787-.943V8.497c0-.034-.02-.066-.05-.08L2.2 4.257z"})),i=l.a.createElement("svg",{className:"social-media__icon",width:"32",height:"32",viewBox:"0 0 32 32"},l.a.createElement("title",null,"Twitter"),l.a.createElement("g",{fillRule:"evenodd"},l.a.createElement("path",{fillRule:"nonzero",d:"M27.45 10.9c0-.256 0-.51-.018-.763 1.155-.835 2.15-1.87 2.943-3.053-1.077.477-2.22.79-3.388.928 1.23-.737 2.153-1.897 2.593-3.262-1.158.687-2.424 1.17-3.745 1.43-1.83-1.943-4.734-2.42-7.087-1.16-2.353 1.26-3.57 3.94-2.965 6.54C11.04 11.324 6.62 9.084 3.626 5.4c-1.566 2.693-.766 6.14 1.826 7.872-.938-.028-1.857-.28-2.677-.738v.075c0 2.804 1.98 5.223 4.732 5.78-.868.236-1.78.27-2.663.1.773 2.403 2.987 4.05 5.51 4.096-2.088 1.642-4.668 2.533-7.325 2.53-.47 0-.94-.03-1.407-.085 2.697 1.73 5.836 2.65 9.04 2.646 10.85.005 16.784-8.984 16.784-16.778z"}))),o=this.props.isExpanded,r=S.dependencies["carbon-components"],c=S.dependencies["carbon-components-react"],s=(new Date).getFullYear(),d=b()({"page-footer":!0,"page-footer--expanded":!o}),m=b()({"page-footer__link":!0,"page-footer__link--with-tooltip":!0,"show-tooltip":this.state.copied});return l.a.createElement("footer",{className:d},l.a.createElement("div",{className:"page-footer__content"},l.a.createElement("p",{className:"page-footer__text page-footer__version-link",id:"page-footer__version-label"},"Vanilla Components version"," ",l.a.createElement("a",{className:"page-footer__link",href:"https://github.com/ibm/carbon-components/releases",rel:"noopener noreferrer",target:"_blank","aria-labelledby":"page-footer__version-label page-footer__version-number",id:"page-footer__version-number"},r)),l.a.createElement("p",{className:"page-footer__text page-footer__version-link",id:"page-footer__react-version-label"},"React Components version"," ",l.a.createElement("a",{className:"page-footer__link",href:"https://github.com/ibm/carbon-components-react/releases",rel:"noopener noreferrer",target:"_blank","aria-labelledby":"page-footer__react-version-label page-footer__react-version-number",id:"page-footer__react-version-number"},c)),l.a.createElement("p",{className:"page-footer__text"},"Website last updated on"," ",l.a.createElement("span",{className:"page-footer__last-updated"},"October 3, 2018")),l.a.createElement("p",{className:"page-footer__text"},"Copyright © ",s," IBM")),l.a.createElement("div",{className:"page-footer__content"},l.a.createElement("ul",{className:"page-footer__social-media"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://dribbble.com/_carbondesign",className:"social-media__link",rel:"noopener noreferrer",target:"_blank","aria-label":"Dribble account for Carbon"},t)),l.a.createElement("li",null,l.a.createElement("a",{href:"https://medium.com/@_carbondesign",className:"social-media__link",rel:"noopener noreferrer",target:"_blank","aria-label":"Medium account for Carbon"},a)),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/_carbondesign",className:"social-media__link",rel:"noopener noreferrer",target:"_blank","aria-label":"Twitter account for Carbon"},i)),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/carbon-design-system",className:"social-media__link",rel:"noopener noreferrer",target:"_blank","aria-label":"GitHub account for Carbon"},n))),l.a.createElement("p",{className:"page-footer__text"},"Have questions?",l.a.createElement(T.a,{text:"carbon@us.ibm.com",onCopy:this.toggleCopied},l.a.createElement("button",{tabIndex:"0",className:m,onClick:function(){return e.handleClick()}},"Email us")),"or open an"," ",l.a.createElement("a",{href:"https://github.com/ibm/carbon-components/issues/new",className:"page-footer__link",rel:"noopener noreferrer",target:"_blank","aria-label":"Open a GitHub issue"},"issue")," ","in GitHub.")))},t}(r.Component);C.propTypes={isExpanded:s.a.bool};var M=C,D=n(253),x=n.n(D),O=(n(254),n(258),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={isOpen:!0,isFinal:!1},t.onToggleBtnClick=function(){t.state.isOpen?(t.setState({isOpen:!1}),setTimeout(function(){t.setState({isFinal:!0})},5)):(t.setState({isFinal:!1}),setTimeout(function(){t.setState({isOpen:!0})},5))},t.handleClose=function(e){var n=!1;e.target.classList&&e.target.classList.contains("main-nav-item__heading")&&e.target.classList.contains("main-nav-item__list")&&(n=!0);var a=window.innerWidth<1024||screen.width<1024;!n&&a&&t.setState({isOpen:!1})},t.clickToClose=function(){t.setState({isOpen:!1})},t.checkWidth=function(){"undefined"!=typeof window&&(window.innerWidth<1024&&t.setState({isOpen:!1}),document.addEventListener("keydown",function(e){27===e.which&&t.state.isOpen&&t.setState({isOpen:!1})}))},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.checkWidth()},n.render=function(){var e=this,t=this.props.children,n=b()("container",{"container--expanded":!this.state.isOpen});return l.a.createElement(p.StaticQuery,{query:"1044757290",render:function(a){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI."},{name:"keywords",content:"IBM, design, system, Carbon, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud"}],link:[{rel:"shortcut icon",type:"image/png",href:""+x.a}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(I,{onToggleBtnClick:e.onToggleBtnClick,isOpen:e.state.isOpen}),l.a.createElement(k,{isFinal:e.state.isFinal,isOpen:e.state.isOpen,location:e.props.location,clickToClose:e.clickToClose}),l.a.createElement("div",{className:n},t,l.a.createElement(M,{isExpanded:e.state.isOpen})))},data:o})},t}(l.a.Component));O.propTypes={children:s.a.any};t.a=O},117:function(e,t,n){"use strict";n(176),n(178),n(180),n(181),n(183),n(185),n(187),n(198),n(202),n(205);var a=n(214),i=n.n(a);(function(){try{new CustomEvent("test-event")}catch(e){return!0}})()&&"undefined"!=typeof window&&(window.CustomEvent=i.a);n(215),n(216),n(217)},151:function(e,t,n){var a;e.exports=(a=n(249))&&a.default||a},152:function(e){e.exports={name:"carbon-website-gatsby",description:"Carbon Design System website",private:!0,version:"0.0.0",license:"Apache-2.0",repository:{type:"git",url:"https://github.com/carbon-design-system/carbon-website-gatsby/"},keywords:["gatsby"],scripts:{build:"echo 'ERROR: Please specify environment by running either build:external or build:internal. This will set the correct environment variable for the build.'","build:external":"./tasks/build.sh --env external","build:internal":"./tasks/build.sh --env internal",dev:"yarn dev:external","dev:external":"rm -rf .cache && cross-env GATSBY_CARBON_ENV=external gatsby develop","dev:internal":"rm -rf .cache && cross-env GATSBY_CARBON_ENV=internal gatsby develop",format:'prettier --write "**/*.{scss,css,js,md}"',"format:diff":'prettier --list-different "**/*.{scss,css,js,md}"',test:'echo "Error: no test specified" && exit 1',storybook:"start-storybook -p 9001 -c .storybook","storybook:build":"build-storybook -c .storybook -o public/docs",deploy:"gatsby build && gh-pages -d public"},dependencies:{"@carbon/icons-react":"^0.0.1-alpha.2","@reach/router":"^1.2.1","@storybook/addon-info":"^3.4.11","carbon-components":"^9.26.0","carbon-components-react":"6.33.3","carbon-icons":"^7.0.7",classnames:"^2.2.6","custom-event":"^1.0.1",dotenv:"^6.0.0",flatpickr:"^4.5.2",fs:"0.0.1-security",gatsby:"2.0.6","gatsby-image":"2.0.7","gatsby-plugin-google-analytics":"^2.0.6","gatsby-plugin-manifest":"^2.0.2","gatsby-plugin-offline":"^2.0.5","gatsby-plugin-react-helmet":"3.0.0","gatsby-plugin-sass":"2.0.1","gatsby-plugin-sharp":"2.0.5","gatsby-react-router-scroll":"^2.0.0","gatsby-remark-autolink-headers":"^2.0.6","gatsby-remark-component":"^1.1.3","gatsby-remark-copy-linked-files":"2.0.5","gatsby-remark-embed-video":"^1.4.0","gatsby-remark-embedded-codesandbox":"^1.2.0","gatsby-remark-images":"2.0.1","gatsby-source-filesystem":"2.0.1","gatsby-transformer-remark":"2.1.3","gatsby-transformer-sharp":"next","markdown-it":"^8.4.2","markdown-loader":"^3.0.0",prismjs:"^1.15.0","prop-types":"^15.6.1","react-copy-to-clipboard":"^5.0.1","react-ga":"^2.5.3","react-helmet":"^5.2.0","react-router":"^4.3.1","rehype-react":"^3.0.2"},devDependencies:{"@storybook/addon-actions":"^3.4.7","@storybook/addon-knobs":"^3.4.7","@storybook/addon-options":"^3.4.7","@storybook/react":"^3.4.7","babel-core":"^6.26.3","babel-loader":"7.1.1","cross-env":"^5.2.0","gatsby-remark-static-images":"^1.0.0","gh-pages":"^1.2.0","html-loader":"^0.5.5","node-sass":"^4.9.3",prettier:"^1.12.0",react:"^16.4.2","react-dom":"^16.4.2","sass-loader":"^7.0.3","storybook-readme":"^3.3.0"},babel:{presets:[["@babel/preset-env",{loose:!0,modules:!1,useBuiltIns:!1,shippedProposals:!0,targets:{browsers:[">0.25%","not dead"]}}],["@babel/preset-react",{useBuiltIns:!1,pragma:"React.createElement"}]],plugins:[["@babel/plugin-proposal-class-properties",{loose:!0}],"@babel/plugin-syntax-dynamic-import","babel-plugin-macros",["@babel/plugin-transform-runtime",{helpers:!0,regenerator:!0}]]},eslintConfig:{globals:{__PATH_PREFIX__:!0}},prettier:{jsxBracketSameLine:!0,printWidth:80,singleQuote:!0,trailingComma:"es5"}}},215:function(e,t){"undefined"!=typeof Element&&"function"!=typeof Element.prototype.closest&&(Element.prototype.closest=function(e){for(var t=this.ownerDocument,n=this;n&&n!==t;n=n.parentNode)if(n.matches(e))return n;return null})},216:function(e,t){if("undefined"!=typeof Element){var n=["matches","webkitMatchesSelector","msMatchesSelector"].filter(function(e){return"function"==typeof Element.prototype[e]})[0];"matches"!==n&&(Element.prototype.matches=Element.prototype[n])}},217:function(e,t){var n,a,i;"undefined"!=typeof DOMTokenList&&((a=document.createElement("div"),i="_random_class_"+Math.random().toString(36).slice(2),a.classList.toggle(i,!1),a.classList.contains(i))&&(n=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return arguments.length<2||this.contains(e)===!t?n.call(this,e):t}))},235:function(e){e.exports={data:{site:{siteMetadata:{title:"Carbon Design System"}}}}},249:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),o=n(0),r=n.n(o),l=n(3),c=n.n(l),s=n(24),d=n(1),m=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,i()({location:t,pageResources:n},n.json))};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},250:function(e){e.exports={"about-carbon":{title:"About Carbon","sub-nav":{"whats-new":{title:"What's New"},"design-language":{title:"Design Language"}}},"getting-started":{title:"Getting Started","sub-nav":{designers:{title:"Designers"},"developers/vanilla":{title:"Developers"},faq:{title:"FAQ"},"add-ons":{title:"Add-Ons"}}},"contributing/designers":{title:"Contributing"},guidelines:{title:"Guidelines","sub-nav":{"accessibility/overview":{title:"Accessibility"},"content/general":{title:"Content"},"color/swatches":{title:"Color"},"grid/design":{title:"Grid"},"iconography/library":{title:"Iconography"},"layer/overview":{title:"Layer"},motion:{title:"Motion"},spacing:{title:"Spacing"},themes:{title:"Themes"},"typography/overview":{title:"Typography"}}},"your-product-on-ibm-cloud":{title:"Your Product on IBM Cloud",internal:!0,"sub-nav":{"catalog-entry":{title:"Catalog Entry"},"user-flow":{title:"User Flow"},"service-providers/general":{title:"Service Providers"},principles:{title:"Principles"}}},components:{title:"Components","sub-nav":{overview:{title:"Overview"},"accordion/code":{title:"Accordion"},"breadcrumb/code":{title:"Breadcrumb"},"button/code":{title:"Button"},"checkbox/code":{title:"Checkbox"},"code-snippet/code":{title:"Code Snippet"},"content-switcher/code":{title:"Content Switcher"},"data-table/code":{title:"Data Table"},"date-picker/code":{title:"Date Picker"},"dropdown/code":{title:"Dropdown"},"file-uploader/code":{title:"File Uploader"},"form/code":{title:"Form"},"inline-loading/code":{title:"Inline Loading"},"link/code":{title:"Link"},"list/code":{title:"List"},"loading/code":{title:"Loading"},"modal/code":{title:"Modal"},"notification/code":{title:"Notification"},"number-input/code":{title:"Number Input"},"overflow-menu/code":{title:"Overflow Menu"},"pagination/code":{title:"Pagination"},"progress-indicator/code":{title:"Progress Indicator"},"radio-button/code":{title:"Radio Button"},"search/code":{title:"Search"},"select/code":{title:"Select"},"slider/code":{title:"Slider"},"structured-list/code":{title:"Structured List"},"tabs/code":{title:"Tabs"},"tag/code":{title:"Tag"},"text-input/code":{title:"Text Input"},"tile/code":{title:"Tile"},"toggle/code":{title:"Toggle"},"tooltip/code":{title:"Tooltip"}}},experimental:{title:"Experimental","sub-nav":{"about/overview":{title:"About"},color:{title:"Color",internal:!0},layout:{title:"Layout",internal:!0},"iconography/library":{title:"Iconography",internal:!0},"ui-shell/code":{title:"UI Shell"},"accordion/code":{title:"Accordion"},"breadcrumb/code":{title:"Breadcrumb"},"checkbox/code":{title:"Checkbox"},"link/code":{title:"Link"},"text-input/code":{title:"Text Input"}}},"data-visualization":{title:"Data Visualization","sub-nav":{"overview/general":{title:"Overview"},"bar-graph/code":{title:"Bar Graph"},"gauge/code":{title:"Gauge"},"line-graph/code":{title:"Line Graph"},"pie-chart/code":{title:"Pie Chart"},"scatter-plot/code":{title:"Scatter Plot"},"tooltip/code":{title:"Tooltip"}}},utilities:{title:"Utilities","sub-nav":{"common-actions":{title:"Common Actions"},"disabled-states":{title:"Disabled States"},filtering:{title:"Filtering"},loading:{title:"Loading"},"overflow-content":{title:"Overflow Content"}}},"component-status":{title:"Component Status"},resources:{title:"Resources"}}},253:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAG0mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDgtMDZUMjE6MDc6NTQtMDU6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDktMTVUMTM6MTY6NDgtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA5LTE1VDEzOjE2OjQ4LTA1OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU1MDRhZmYzLTRmYTEtNDVkNi1iMzM2LTlkNzVkMDc2Njc1OCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmIwNDgyMGMwLWIxOGMtZDI0Zi04NzkwLTIyZTNlZDE0OGFhMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQzOTYwZTQ2LTA3ODctNDY0ZC04MjQxLTA3Mjk3ZDk0ZjMyYiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDM5NjBlNDYtMDc4Ny00NjRkLTgyNDEtMDcyOTdkOTRmMzJiIiBzdEV2dDp3aGVuPSIyMDE4LTA4LTA2VDIxOjA3OjU0LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MWE3MjdlMTgtZTg1ZS00NWFlLTkyZjYtMTExNzA1NDQ0ZWUxIiBzdEV2dDp3aGVuPSIyMDE4LTA4LTA2VDIxOjA3OjU0LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTUwNGFmZjMtNGZhMS00NWQ2LWIzMzYtOWQ3NWQwNzY2NzU4IiBzdEV2dDp3aGVuPSIyMDE4LTA5LTE1VDEzOjE2OjQ4LTA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6EF+DpAAADsUlEQVRYw+2Xa0iTURjHp7kuaiiySy5tSMaazXSzTcWmluUULxWV3dTltiIqMDKI6DIjSiNtfoguWFBEUdknJaovBdEFDCHoQ1+MtCsZSSolOufT/7y8iyXTve9WX6IXfl/Oznn+/+d5z7vzHAkRSYJ9DBbnjJJdDyscLnoOukA1xmKFrGW6nHYwBiCihNh+0A08gHx4A45iTtJfMYDgpeDtBFF/9IC1hiJnRMgGECQcpc5HwDYwKEDcyyhoB4Xx8/NmBmXA0UJyBDgLfnBBWwSL+zIOroA4wQbgOAYLasFLFqTm1A8qqX1AS7ecp431PeQ47QnGBNsfB7A/IgMawCSzd7H15CDpyw6RbKGBI35xLhXuaKdtwVVjGOgFGWDCy2zXSG0qh3AGqdKXU7K5kuRaIykXZZPOUkur9nWSXVw1hBlQm8rWzM/ZxGetJ02+DaXvJVvTCBU4bpEqbRnJYUqpy6asChdXpT9iIFat0ci1S1wI/pkJJ2WvheBNqm7o/y3Q+oOvyLCqnnsdzOQCcxVZdt6hrSeHgjMQJVdFQHgdeAdIkZJJ6aUHqPJ436Q7n+2Bsr1PKDGj+FeldJY9WPNFnAFkrYZoGxgBo+AxxBtszW4BJR3nTOZsOUdz9Su5vZKYUUTmqotkbfwmzAAEm1nWvPhBRYpxmu9XIJTNxz6StmDHr2rkWS/7q55fAy1gAKyQRs6eNvEzFIO1cYBSi+pIptFTbvUlUQb6gNLf/4BYMtc3/TfwbxjI+UsGvoO0gAZwGs7CxHXgMX+ShWpgDLwAW5GcNKABn0pEsxYLDIVggLVtLjDTbz8wlQHeRBg6oqUIcFuIEa8Bc1WrGwY6MLYcFZ0+aUcUyMCEnnAD+DqVgayKJv6AqryQv9kpDdgT8ga+g52RMlXMVAbik/PCWMcLoSZ/RjY4X+PotnNnAvtbF9QVY+IR/ixg3AVzBXbIWvCUCdtPu6l4931KMFi4PgEx3MAhyACyjsbkevAJjIMP4DDGA74SY/mJOQWOG9dTi+s8ihQTy5ydqI9i5mlWY32EqHsBFiaCez7V6AUFkwVRaI1S/H4cGY/xWTPx/ew0DfpmxPYAgtSALt5EP2hFz7DYOwfNy3RkuBHjnXyph8FVrDV4T9OQr2YIFoegZ/jgxH8ldpAM2sEYP94NLJgfLuaGJehigkzDY9SaQn5jDvPZ9vHC71n5UZmkYC62oq5mikWmMIhtB0PAA54BnSSER/TlNErGNa1W0AESJCE+XgM/AWspn0KaoWQCAAAAAElFTkSuQmCC"},254:function(e,t,n){},258:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return b});var a=n(0),i=n.n(a),o=n(3),r=n.n(o),l=n(70),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(11);n.d(t,"waitForRouteChange",function(){return s.c});var d=n(151),m=n.n(d);n.d(t,"PageRenderer",function(){return m.a});var p=n(16);n.d(t,"parsePath",function(){return p.a});var u=i.a.createContext({}),b=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}}}]);
//# sourceMappingURL=1-eaf78491f274cd14cbb5.js.map