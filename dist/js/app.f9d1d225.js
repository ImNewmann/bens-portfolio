(function(e){function t(t){for(var a,s,r=t[0],c=t[1],u=t[2],h=0,p=[];h<r.length;h++)s=r[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],a=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0286":function(e,t,o){e.exports=o.p+"img/markus-website-blur.d71b4d06.jpg"},"091f":function(e,t,o){e.exports=o.p+"img/mobile-nav.77fe1609.png"},1214:function(e,t,o){e.exports=o.p+"img/tom-website-mood.0303ee48.jpg"},"143c":function(e,t,o){e.exports=o.p+"img/desktop-indulgent.3fe6f933.png"},"1f2c":function(e,t,o){e.exports=o.p+"img/portrait.bb982641.png"},"43fd":function(e,t,o){e.exports=o.p+"img/desktop-search.fbd49f95.png"},"50e8":function(e,t,o){e.exports=o.p+"img/main-logo2.effbe146.png"},"56d7":function(e,t,o){"use strict";o.r(t);o("14c6"),o("08c1"),o("4842"),o("d9fc");var a=o("2b0e"),n=(o("b107"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:{"about-overlay":e.aboutView},attrs:{id:"app"}},[e.aboutView?o("About",{attrs:{touchDevice:e.touchDevice,aboutImageURL:e.aboutImage},on:{toggleAboutView:e.toggleAboutView}}):e._e(),e.touchDevice?e._e():o("CustomCursor",{ref:"Cursor",attrs:{onLink:e.isOnLink}}),e.showNav?o("NavLinks",{ref:"navLinks",attrs:{aboutView:e.aboutView,touchDevice:e.touchDevice},on:{aboutClicked:e.toggleAboutView}}):e._e(),o("Intro",{ref:"Intro",attrs:{touchDevice:e.touchDevice},on:{introFinished:function(t){e.introFinished=!0}}}),e.listView?o("ProjectsList",{ref:"projectsList",attrs:{touchDevice:e.touchDevice,projectTitle:e.projectTitles,projectImage:e.projectImages},on:{projectClicked:e.loadProjectView}}):e._e(),e.projectView?o("Project",{ref:"project",attrs:{touchDevice:e.touchDevice,currentIndex:e.currentIndex,projectImage:e.projectImages[e.currentIndex],projectTitle:e.projectTitles[e.currentIndex],nextProjectImage:e.projectImages[e.currentIndex===this.projectTitles.length-1?0:e.currentIndex+1],nextProjectTitle:e.projectTitles[e.currentIndex===this.projectTitles.length-1?0:e.currentIndex+1]},on:{projectClicked:e.loadProjectView}}):e._e()],1)}),i=[],s=(o("ac6a"),o("5df3"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cursor",class:{"cursor--show":e.isActive,"cursor--moving":e.isMoving,"cursor--link":e.onLink}},[o("div",{staticClass:"cursor__inner",style:{left:e.mouseX+"px",top:e.mouseY+"px"}}),o("div",{staticClass:"cursor__outer",style:{left:e.cssLeft+"px",top:e.cssTop+"px"}})])}),r=[],c=o("109c"),u={name:"Cursor",props:{onLink:Boolean},data:function(){return{isActive:!1,isMoving:!1,timeout:null,posX:0,posY:0,mouseX:0,mouseY:0,cssLeft:0,cssTop:0}},mounted:function(){this.initializeCursor(),this.animateCursor()},methods:{initializeCursor:function(){var e=this;document.addEventListener("mousemove",(function(t){e.isActive=!0,e.isMoving=!0,e.mouseX=t.pageX,e.mouseY=t.pageY,clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.isMoving=!1}),200)}))},animateCursor:function(){var e=this;c["a"].to({},.016,{repeat:-1,onRepeat:function(){e.posX+=(e.mouseX-e.posX)/9,e.posY+=(e.mouseY-e.posY)/9,e.cssLeft=e.posX,e.cssTop=e.posY}})}}},l=u,h=o("2877"),p=Object(h["a"])(l,s,r,!1,null,null,null),m=p.exports,d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",[o("Name",{ref:"name",attrs:{touchDevice:e.touchDevice}}),o("div",{ref:"navLinks",staticClass:"nav-links"},[o("ul",[o("li",{staticClass:"nav-links__item link",class:{active:e.aboutView},on:{click:e.aboutClicked}},[e._v("\n                About Me\n            ")]),e._m(0)])])],1)},f=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"nav-links__item link"},[o("a",{attrs:{href:"mailto:newman1602@gmail.com"}},[e._v("\n                    Contact\n                ")])])}],v=(o("7f7f"),o("cffa")),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",e._g({ref:"name",staticClass:"name link",on:{click:e.onClick}},e.touchDevice?{}:{mouseover:e.mouseOver,mouseleave:e.mouseLeave}),[o("span",[e._v("B")]),o("span",[e._v("E")]),o("span",[e._v("N")]),o("span",[e._v("N")]),o("span",[e._v("E")]),o("span",[e._v("W")]),o("span",[e._v("M")]),o("span",[e._v("A")]),o("span",[e._v("N")])])},b=[],j={name:"Name",props:{touchDevice:Boolean},methods:{mouseOver:function(){var e=this.$refs.name,t=[].slice.call(e.childNodes,1,-1),o=new v["b"];o.staggerTo(t,.4,{autoAlpha:1,fontSize:"".concat(this.touchDevice?"6vw":30),ease:v["a"].easeOut},.02)},mouseLeave:function(){var e=this.$refs.name,t=[].slice.call(e.childNodes,1,-1),o=new v["b"];o.staggerTo(t,.4,{autoAlpha:0,fontSize:0,ease:v["a"].easeOut},.02)},onClick:function(){location.reload()},fadeOut:function(){var e=this.$refs.name;v["c"].to(e,.4,{autoAlpha:0,x:-50,ease:v["a"].easeOut},0)},fadeIn:function(){var e=this.$refs.name;v["c"].fromTo(e,.4,{autoAlpha:0,x:-50},{autoAlpha:.9,x:0,ease:v["a"].easeOut},0)}}},k=j,x=Object(h["a"])(k,g,b,!1,null,null,null),w=x.exports,_={name:"NavLinks",components:{Name:w},props:{aboutView:Boolean,touchDevice:Boolean},mounted:function(){this.animIn(1300)},methods:{aboutClicked:function(){this.$emit("aboutClicked")},animIn:function(e){var t=this.$refs.navLinks,o=this.$refs.name;setTimeout((function(){v["c"].to(t,.4,{autoAlpha:1,transform:"translateX(0)",ease:v["a"].easeOut}),o.fadeIn()}),e)},animOut:function(){var e=this.$refs.navLinks,t=this.$refs.name;v["c"].to(e,.4,{autoAlpha:0,transform:"translateX(100%)",ease:v["a"].easeOut},0),t.fadeOut()}}},I=_,A=Object(h["a"])(I,d,f,!1,null,null,null),T=A.exports,O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Name",{ref:"name",staticClass:"intro"})},P=[],y={name:"Intro",components:{Name:w},mounted:function(){this.introAnimation()},methods:{introAnimation:function(){var e=this,t=this.$refs.name.$el,o=new v["b"],a=[].slice.call(t.childNodes,1,-1);o.fromTo(t,3,{autoAlpha:0},{autoAlpha:1,ease:v["a"].easeOut}).staggerTo(a,.4,{autoAlpha:0,fontSize:0,ease:v["a"].easeOut},.02,2).eventCallback("onComplete",(function(){e.$emit("introFinished")}))},fadeOut:function(){var e=this.$refs.name.$el;v["c"].to(e,1,{autoAlpha:0,ease:v["a"].easeOut},5)}}},$=y,C=Object(h["a"])($,O,P,!1,null,null,null),L=C.exports,N=function(){var e=this,t=this,o=t.$createElement,a=t._self._c||o;return a("div",{ref:"projectList",staticClass:"projects-list"},[a("ProjectBackground",{ref:"backgroundImage1",attrs:{backgroundURL:t.backgroundImages.image1}}),a("ProjectBackground",{ref:"backgroundImage2",attrs:{backgroundURL:t.backgroundImages.image2}}),a("Title",{ref:"titlePrev",attrs:{text:t.prevProjectTitle,classModifier:"title--prev"}}),a("div",t._g({staticClass:"projects-list__link link",on:{click:function(){t.animateContent("out")}}},t.touchDevice?{}:{mouseover:function(){t.handleHover(e.$refs,"over")},mouseleave:function(){t.handleHover(e.$refs,"leave")}}),[a("Title",{ref:"currentTitle",attrs:{showBase:"",text:t.currentProjectTitle}}),a("ProjectThumbnail",{ref:"currentProjectImage",attrs:{src:t.currentImageUrl}})],1),a("ProjectCounter",{ref:"counter",attrs:{currentNum:"0"+(t.currentIndex+1),maximumNum:t.projectTitle.length.toString()}}),a("Title",{ref:"titleNext",attrs:{text:t.nextProjectTitle,classModifier:"title--next"}}),a("div",{ref:"heightBlock",staticClass:"height-block"})],1)},D=[],E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"project-thumbnail"},[o("img",{staticClass:"project-thumbnail__image",attrs:{src:e.src,alt:e.alt}})])},S=[],B={name:"ProjectThumbnail",props:{src:String,alt:String}},V=B,M=Object(h["a"])(V,E,S,!1,null,null,null),Y=M.exports,X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"project-background"},[o("div",{staticClass:"project-background__item",style:{backgroundImage:"url("+e.backgroundURL[0]+")"}}),o("div",{staticClass:"project-background__item blur",style:{backgroundImage:"url("+e.backgroundURL[1]+")"}})])},R=[],H={name:"ProjectBackground",props:{backgroundURL:Array}},U=H,F=Object(h["a"])(U,X,R,!1,null,null,null),z=F.exports,J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:["title",e.classModifier]},[e.showBase?o("h1",{staticClass:"title__base",domProps:{innerHTML:e._s(e.text)}}):e._e(),o("h1",{staticClass:"title__outline",domProps:{innerHTML:e._s(e.text)}})])},W=[],q={name:"Title",props:{text:String,classModifier:String,showBase:Boolean}},G=q,K=Object(h["a"])(G,J,W,!1,null,null,null),Q=K.exports,Z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"counter"},[o("span",{staticClass:"counter--min"},[e._v(e._s(e.currentNum))]),o("span",{staticClass:"counter--max"},[e._v(" / "+e._s(e.maximumNum))])])},ee=[],te={name:"ProjectsCounter",props:{currentNum:String,maximumNum:String}},oe=te,ae=Object(h["a"])(oe,Z,ee,!1,null,null,null),ne=ae.exports,ie=o("ca34"),se=o.n(ie),re={name:"ProjectsList",components:{ProjectThumbnail:Y,ProjectBackground:z,Title:Q,ProjectCounter:ne},props:{projectTitle:Array,projectImage:Array,touchDevice:Boolean},data:function(){return{next:!1,prev:!1,currentImageUrl:null,currentProjectTitle:null,prevProjectTitle:null,nextProjectTitle:null,currentIndex:0,hoverActive:!1,projectTitles:this.projectTitle,projectImages:this.projectImage,backgroundImages:{image1:this.projectImage[0],image1Active:!0,image2:this.projectImage[1],image2Active:!1},touchStartVal:0}},mounted:function(){this.updateProject(),se()()},methods:{updateProject:function(){var e=this;!0===this.next?(this.handleBackgrounds("down"),this.animateProjectTitles(this.$refs,"down"),this.animateProjectImage(this.$refs,"down"),this.currentIndex+=1):!0===this.prev&&(this.handleBackgrounds("up"),this.animateProjectTitles(this.$refs,"up"),this.animateProjectImage(this.$refs,"up"),this.currentIndex-=1),this.currentIndex=this.getIndex(this.currentIndex,this.projectTitles.length),this.currentProjectTitle=this.projectTitles[this.currentIndex],this.prevProjectTitle=0===this.currentIndex?this.projectTitles[this.projectTitles.length-1]:this.projectTitles[this.currentIndex-1],this.nextProjectTitle=this.currentIndex===this.projectTitles.length-1?this.projectTitles[0]:this.projectTitles[this.currentIndex+1],setTimeout((function(){e.currentImageUrl=e.projectImages[e.currentIndex][0]}),500)},getIndex:function(e,t){return e===t?0:e<0?t-1:e},scroll:function(){var e=this;document.addEventListener("wheel",this.handleScroll,!0),document.addEventListener("touchstart",(function(t){e.touchStartVal=t.changedTouches[0].clientY})),document.addEventListener("touchmove",this.handleScroll,!0)},removeScroll:function(){document.removeEventListener("wheel",this.handleScroll,!0),document.removeEventListener("touchmove",this.handleScroll,!0)},handleScroll:function(e){var t=this;e.deltaY?e.deltaY>0&&!1===this.next&&!1===this.prev?(this.next=!0,this.prev=!1,this.updateProject()):e.deltaY<0&&!1===this.prev&&!1===this.next&&(this.next=!1,this.prev=!0,this.updateProject()):e.changedTouches&&(e.changedTouches[0].clientY<this.touchStartVal&&!1===this.next&&!1===this.prev?(this.next=!0,this.prev=!1,this.updateProject()):e.changedTouches[0].clientY>this.touchStartVal&&!1===this.prev&&!1===this.prev&&(this.next=!1,this.prev=!0,this.updateProject())),clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.next=!1,t.prev=!1}),200)},handleBackgrounds:function(e){var t=this.backgroundImages.image1Active?"image2":"image1";"down"===e?this.backgroundImages[t]=this.currentIndex===this.projectImages.length-1?this.projectImages[0]:this.projectImages[this.currentIndex+1]:"up"===e&&(this.backgroundImages[t]=0===this.currentIndex?this.projectImages[this.projectImages.length-1]:this.projectImages[this.currentIndex-1]),this.backgroundImages.image1Active=!this.backgroundImages.image1Active,this.backgroundImages.image2Active=!this.backgroundImages.image2Active,this.animateBackground(this.$refs)},handleHover:function(e,t){var o=e.currentTitle.$el.children[0],a=e.currentTitle.$el.children[1],n=e.currentProjectImage.$el,i=e.titlePrev.$el.children[0],s=e.titleNext.$el.children[0],r=this.backgroundImages.image1Active?e.backgroundImage1.$el.childNodes[1]:e.backgroundImage2.$el.childNodes[1],c=new v["b"];this.hoverActive||"over"!==t?this.hoverActive&&"leave"===t&&(this.hoverActive=!1,c.to(o,.4,{scale:1,ease:v["a"].easeOut},0).to(a,.4,{scale:1,ease:v["a"].easeOut},0).to(n,.8,{scale:1,ease:v["a"].easeOut},0).to(i,.4,{yPercent:0,autoAlpha:.3,ease:v["a"].easeOut},0).to(s,.4,{yPercent:0,autoAlpha:.3,ease:v["a"].easeOut},0).to(r,.4,{filter:"grayscale(0)"},0)):(this.hoverActive=!0,c.to(o,.4,{scale:1.1,ease:v["a"].easeOut},0).to(a,.4,{scale:1.1,ease:v["a"].easeOut},0).to(n,.8,{scale:1.1,ease:v["a"].easeOut},0).to(i,.4,{yPercent:-50,autoAlpha:0,ease:v["a"].easeOut},0).to(s,.4,{yPercent:50,autoAlpha:0,ease:v["a"].easeOut},0).to(r,.4,{filter:"grayscale(0.7)"},0))},animateContent:function(e){var t=this,o=this.$refs.currentTitle.$el.children[0],a=this.$refs.currentTitle.$el.children[1],n=this.$refs.currentProjectImage.$el,i=this.$refs.titlePrev.$el.children[0],s=this.$refs.titleNext.$el.children[0],r=this.backgroundImages.image1Active?this.$refs.backgroundImage1.$el:this.$refs.backgroundImage2.$el,c=this.$refs.heightBlock,u=this.$refs.counter.$el,l=this.$refs.projectList,h=new v["b"];if("out"===e){i.style.display="none",s.style.display="none",l.style.pointerEvents="none",this.removeScroll(),setTimeout((function(){t.handleHover(t.$refs,"leave")}),200),this.$emit("projectClicked",this.currentIndex);var p=1,m=.2;h.to(n,.6*p,{autoAlpha:0,xPercent:10,ease:v["a"].easeOut},0+m).to(o,.4*p,{autoAlpha:0,ease:v["a"].easeOut},.2+m).to(r,1.8*p,{scale:1,autoAlpha:.9,ease:v["a"].easeOut},.2+m).to(r.childNodes[0],1.2*p,{autoAlpha:1,ease:v["a"].easeOut},.2+m).to(u,.4*p,{autoAlpha:0,ease:v["a"].easeOut},.2+m).to(o,1.2*p,{autoAlpha:1,ease:v["a"].easeOut},1.2+m).to(c,.6*p,{transform:"translateY(1px)",ease:v["a"].easeOut},1.6+m)}else if("in"===e){var d=1,f=1.5;h.fromTo(o,.4*d,{autoAlpha:.001,yPercent:-50,xPercent:-10},{autoAlpha:1,yPercent:-50,xPercent:0,ease:v["a"].easeOut},.1+f).fromTo(a,.4*d,{autoAlpha:.001,yPercent:-50,xPercent:-10},{autoAlpha:1,yPercent:-50,xPercent:0,ease:v["a"].easeOut},.1+f).fromTo(n,.4*d,{autoAlpha:.001,yPercent:-50,xPercent:"".concat(this.touchDevice?15:20),skewX:-12},{autoAlpha:1,yPercent:-50,xPercent:0,skewX:0,ease:v["a"].easeOut},.3+f).fromTo(i,.4*d,{autoAlpha:.001,yPercent:-100,skewX:-20,skewY:-20},{autoAlpha:.3,yPercent:0,skewX:0,skewY:0,ease:v["a"].easeOut},.5+f).fromTo(s,.4*d,{autoAlpha:.001,yPercent:100,skewX:-20,skewY:20},{autoAlpha:.3,yPercent:0,skewX:0,skewY:0,ease:v["a"].easeOut},.5+f).fromTo(u,.4*d,{autoAlpha:.001,yPercent:50},{autoAlpha:1,yPercent:0,ease:v["a"].easeOut},.5+f).fromTo(r,1*d,{autoAlpha:.001},{autoAlpha:.7},.9+f),setTimeout((function(){l.style.pointerEvents="all",t.scroll()}),2500)}},animateBackground:function(e){var t=e.backgroundImage1.$el,o=e.backgroundImage2.$el,a=this.backgroundImages.image1Active?o:t,n=this.backgroundImages.image1Active?t:o;v["c"].to(a,1,{autoAlpha:0,delay:.7}),v["c"].to(n,1,{autoAlpha:.7,delay:.7})},animateProjectTitles:function(e,t){var o=e.currentTitle.$el.children[0],a=e.currentTitle.$el.children[1],n=e.titlePrev.$el.children[0],i=e.titleNext.$el.children[0];v["c"].from(o,.4,{autoAlpha:0,yPercent:"".concat("down"===t?"50vh":"-50vh"),ease:v["a"].easeOut}),v["c"].from(a,.4,{autoAlpha:0,yPercent:"".concat("down"===t?"50vh":"-50vh"),ease:v["a"].easeOut}),v["c"].from(n,.4,{autoAlpha:0,yPercent:"".concat("down"===t?"50vh":"-50vh"),ease:v["a"].easeOut}),v["c"].from(i,.4,{autoAlpha:0,yPercent:"".concat("down"===t?"50vh":"-50vh"),ease:v["a"].easeOut})},animateProjectImage:function(e){var t=e.currentProjectImage.$el,o=new v["b"]({paused:!0}),a=e.projectList;v["c"].set(a,{pointerEvents:"none"}),v["c"].set(a,{pointerEvents:"all",delay:1.4}),o.to(t,.5,{autoAlpha:.01,xPercent:"".concat(this.touchDevice?15:20),skewX:-12,ease:v["a"].easeOut},0).to(t,.6,{autoAlpha:1,xPercent:0,skewX:0,ease:v["a"].easeOut},.7),o.progress(1).progress(0).play()}}},ce=re,ue=Object(h["a"])(ce,N,D,!1,null,null,null),le=ue.exports,he=function(){var e=this,t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"project"},[a("div",{ref:"projectHeader",staticClass:"project__header"},[a("ProjectBackground",{attrs:{backgroundURL:t.projectImage}}),a("Title",{attrs:{showBase:"",text:t.projectTitle}}),a("div",{staticClass:"height-block"})],1),a("div",{staticClass:"project__content"},[a("div",{staticClass:"about-project"},[a("div",{staticClass:"about-project__item"},[a("ul",[a("li",[t._v("Year")]),a("li",{staticClass:"list__item"},[t._v(t._s(this.projects[t.currentIndex].year))])])]),a("div",{staticClass:"about-project__item"},[a("ul",[a("li",[t._v("Role")]),a("li",{staticClass:"list__item"},[t._v(t._s(this.projects[t.currentIndex].role))])])]),a("div",{staticClass:"about-project__item"},[a("ul",[a("li",[t._v("Technology")]),t._l(t.projects[t.currentIndex].technology,(function(e){return a("li",{key:e.index,staticClass:"list__item"},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"about-project__item"},[a("ul",[a("li",{staticClass:"list__item"},[t._v(t._s(this.projects[t.currentIndex].description))])])]),a("a",{staticClass:"about-project__visit-link link",attrs:{href:this.projects[t.currentIndex].link,target:"_blank"}},[t._v("Visit Project")])]),a("div",{staticClass:"project__content-logo-container"},t._l(t.projects[t.currentIndex].logo,(function(e){return a("div",{key:e.index,staticClass:"image image--logo"},[a("img",{attrs:{src:e}})])})),0),t._l(t.projects[t.currentIndex].imagesDesktop,(function(e){return a("div",{key:e.index,staticClass:"image image--desktop"},[a("img",{attrs:{src:e}})])})),a("div",{staticClass:"project__content-mobile-container"},t._l(t.projects[t.currentIndex].imagesMobile,(function(e){return a("div",{key:e.index,staticClass:"image image--mobile"},[a("img",{attrs:{src:e}})])})),0)],2),a("div",{ref:"projectFooter",staticClass:"project__footer"},[a("Title",{attrs:{showBase:"",text:t.nextProjectTitle}}),a("ProjectBackground",{attrs:{backgroundURL:t.nextProjectImage}}),a("ArrowLink",{ref:"nextLink",attrs:{touchDevice:t.touchDevice,text:"VIEW PROJECT"},on:{hover:function(o){t.handleNextHover(e.$refs,o)},clicked:function(){e.animateOut(e.$refs)}}}),a("div",{ref:"heightBlock",staticClass:"height-block"})],1)])},pe=[],me=(o("c5f6"),o("5abe"),function(){var e=this,t=this,o=t.$createElement,a=t._self._c||o;return a("div",t._g({ref:"arrowLinkContainer",staticClass:"arrow-link link",on:{click:function(){e.$emit("clicked"),e.animOut()}}},t.touchDevice?{}:{mouseover:function(){t.handleHover(e.$refs,"over")},mouseleave:function(){t.handleHover(e.$refs,"leave")}}),[a("span",{ref:"arrowLink",staticClass:"animated-arrow"},[t._m(0),a("span",{staticClass:"main"},[a("span",{staticClass:"text"},[t._v(t._s(t.text))]),t._m(1)])])])}),de=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"the-arrow -left"},[o("span",{staticClass:"shaft"})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",{staticClass:"the-arrow -right"},[o("span",{staticClass:"shaft"})])}],fe={name:"ArrowLink",props:{touchDevice:Boolean,text:String},methods:{handleHover:function(e,t){var o=e.arrowLink;"over"===t?(o.classList.add("hover"),this.$emit("hover","over")):"leave"===t&&(o.classList.remove("hover"),this.$emit("hover","leave"))},animOut:function(){var e=this.$refs.arrowLinkContainer,t=new v["b"];t.to(e,.2,{xPercent:-10,ease:v["a"].easeOut},0).to(e,.7,{autoAlpha:0,xPercent:50,ease:v["a"].easeOut},.2)},animIn:function(){var e=this.$refs.arrowLinkContainer;v["c"].fromTo(e,.4,{autoAlpha:0,xPercent:50},{autoAlpha:1,xPercent:0,ease:v["a"].easeOut})}}},ve=fe,ge=Object(h["a"])(ve,me,de,!1,null,null,null),be=ge.exports,je=[{projectTitle:"MARKUS SIEGEL</br> PORTFOLIO",projectImage:[o("f29b"),o("0286")],role:"Web Designer & Developer",year:"Jan 2019",technology:["WordPress","Amplitude.js","Fullpage.js"],description:"Markus Siegel is an aspiring film music composer who wanted a minimalist portfolio to showcase his work. The website features a custom music player built with Amplitude.js to stream his music.",link:"http://www.markussiegel.co.uk",logo:[],imagesDesktop:[o("9fb4"),o("a329"),o("c44b")],imagesMobile:[o("dd12"),o("dbe0"),o("938b")]},{projectTitle:"TOM NEWMAN</br> PORTFOLIO",projectImage:[o("1214"),o("f957")],role:"Web Designer & Developer",year:"July 2017",technology:["WordPress","jQuery"],description:"Tom Newman is a film maker who produces a variety of content for companies within the eSports and MMA industry. The idea for his portfolio was a simple yet effective design, that puts his content at the forefront.",link:"http://www.tomnewman.eu",logo:[o("50e8")],imagesDesktop:[o("9cdb"),o("cefa")],imagesMobile:[o("b039"),o("091f"),o("c44d")]},{projectTitle:"JET2 &</br> JET2HOLIDAYS",projectImage:[o("74a7"),o("8b19")],role:"Front End Developer",year:"Aug 2017 - Aug 2019",technology:["Vue.js","BEM","Qubit","Optimizely"],description:"At Jet2 I worked within a large team to deliver the new jet2holidays.com website. The website draws in milions of visits a month, so the emphasis was on building something that was scalable and reusable, as we continued to test and develop features post-launch.",link:"http://www.jet2holidays.com",logo:[o("e05b"),o("ea9b")],imagesDesktop:[o("9096"),o("43fd"),o("143c"),o("ced9")],imagesMobile:[]}],ke={name:"Project",components:{ProjectBackground:z,Title:Q,ArrowLink:be},props:{currentIndex:Number,projectImage:Array,projectTitle:String,nextProjectTitle:String,nextProjectImage:Array,touchDevice:Boolean},data:function(){return{animationActive:!1,projects:je}},updated:function(){this.resetNextProjectStyles(this.$refs),this.initObserver(".image",this.fadeIn,200,.25),this.initObserver(".about-project ul",this.fadeIn,200,1)},mounted:function(){se()(),this.initObserver(".image",this.fadeIn,200,.25),this.initObserver(".about-project ul",this.fadeIn,200,1)},methods:{initObserver:function(e,t,o,a){var n=document.querySelectorAll(e),i={root:null,rootMargin:"0px",threshold:a};n.forEach((function(e){var a=new IntersectionObserver((function(a,n){a[0].intersectionRatio<i.threshold||(t(e,o),n.disconnect())}),i);a.observe(e)}))},fadeIn:function(e,t){v["c"].fromTo(e,1.4,{autoAlpha:0,y:t},{autoAlpha:1,y:0,ease:v["a"].easeOut})},resetNextProjectStyles:function(e){var t=e.projectFooter,o=t.childNodes[0].childNodes[0],a=t.childNodes[1],n=a.childNodes[0],i=t.childNodes[2],s=e.heightBlock,r=document.querySelectorAll(".image"),c=document.querySelectorAll(".about-project ul");v["c"].set(n,{scale:2,autoAlpha:0}),v["c"].set(a,{autoAlpha:.6,height:"100vh"}),v["c"].set(o,{autoAlpha:0}),v["c"].set(i,{autoAlpha:1,xPercent:0}),v["c"].set(s,{transform:"translateY(100%)"}),r.forEach((function(e){v["c"].set(e,{autoAlpha:0})})),c.forEach((function(e){v["c"].set(e,{autoAlpha:0})}))},animateOut:function(e){var t=this,o=document.querySelector("html"),a=e.projectFooter,n=a.childNodes[0].childNodes[0],i=a.childNodes[1],s=i.childNodes[0],r=e.heightBlock,c=new v["b"];se()({force:!0}),this.animationActive=!0,this.$emit("projectClicked",this.currentIndex+1),c.to(window,5,{scrollTo:document.body.scrollHeight},{ease:v["a"].easeOut},0).set(o,{overflow:"hidden"},.2).to(s,1.4,{scale:1,autoAlpha:1,rotation:0,ease:v["a"].easeOut},.2).to(i,1.4,{autoAlpha:.9,ease:v["a"].easeOut},.2).to(n,1,{autoAlpha:1,ease:v["a"].easeOut},.8).to(r,.6,{transform:"translateY(1px)",ease:v["a"].easeOut},1.2).eventCallback("onComplete",(function(){t.animationActive=!1,o.style.overflow="inherit"}))},handleNextHover:function(e,t){var o=e.projectFooter,a=o.childNodes[0].childNodes[0],n=o.childNodes[1].childNodes[0];"over"!==t||this.animationActive?"leave"!==t||this.animationActive||(v["c"].to(n,.8,{rotation:0,scale:2,autoAlpha:0,ease:v["a"].easeOut},0),v["c"].to(a,1,{autoAlpha:0,ease:v["a"].easeOut},0)):(v["c"].to(n,.8,{rotation:7,scale:2.2,autoAlpha:1,ease:v["a"].easeOut},0),v["c"].to(a,1,{autoAlpha:1,ease:v["a"].easeOut},0))}}},xe=ke,we=Object(h["a"])(xe,he,pe,!1,null,null,null),_e=we.exports,Ie=function(){var e=this,t=this,o=t.$createElement,a=t._self._c||o;return a("section",{ref:"about",staticClass:"about"},[a("div",{ref:"aboutBG",staticClass:"about__bg",style:{backgroundImage:"url("+t.aboutImageURL+")"}}),a("div",{ref:"aboutBlock",staticClass:"about__desc"},[a("div",{ref:"aboutText",staticClass:"about__desc-text"},[a("p",{domProps:{innerHTML:t._s(t.aboutDescription)}}),a("a",{staticClass:"link",attrs:{href:"mailto:newman1602@gmail.com"}},[t._v("Let's talk")])])]),a("ArrowLink",{ref:"backLink",attrs:{text:"GO BACK",touchDevice:t.touchDevice},on:{clicked:function(){t.animOut(e.$refs)}}})],1)},Ae=[],Te={name:"About",props:{touchDevice:Boolean,aboutImageURL:String},components:{ArrowLink:be},data:function(){return{aboutDescription:"Hello. My name is Ben Newman. I'm a Web Designer & Developer based in London, UK. I'm currently available for work opportunities."}},mounted:function(){var e=this;setTimeout((function(){e.animIn(e.$refs),se()()}),400)},methods:{animIn:function(e){var t=e.about,o=e.aboutBG,a=e.aboutBlock,n=e.aboutText,i=e.backLink,s=new v["b"]({paused:!0}),r=1,c=0;s.to(t,.6*r,{scaleY:1,ease:v["a"].easeOut},0+c).to(o,1*r,{autoAlpha:1},.4+c).from(a,.6,{scaleX:0,autoAlpha:0,ease:v["a"].easeOut},.6+c).fromTo(a,.6,{scaleY:.1},{scaleY:1,ease:v["a"].easeOut},1+c).fromTo(n,.6,{autoAlpha:0,xPercent:30,ease:v["a"].easeOut},{xPercent:0,autoAlpha:1,ease:v["a"].easeOut},1.3+c),s.progress(1).progress(0).play(),setTimeout((function(){i.animIn()}),1600)},animOut:function(e){var t=e.about,o=e.aboutBG,a=e.aboutBlock,n=e.aboutText,i=new v["b"];this.$emit("toggleAboutView"),i.to(n,.6,{autoAlpha:0,ease:v["a"].easeOut},.4).to(a,.6,{scaleY:.1,ease:v["a"].easeOut},.6).to(a,.6,{scaleX:0,ease:v["a"].easeOut},1).to(o,1,{autoAlpha:0,ease:v["a"].easeOut},1.4).to(t,.6,{scaleY:0,ease:v["a"].easeOut},1.8)}}},Oe=Te,Pe=Object(h["a"])(Oe,Ie,Ae,!1,null,null,null),ye=Pe.exports,$e={name:"app",components:{CustomCursor:m,NavLinks:T,Intro:L,ProjectsList:le,Project:_e,About:ye},data:function(){return{touchDevice:!1,showNav:!1,isOnLink:!1,introFinished:!1,projectView:!1,listView:!0,aboutView:!1,currentIndex:0,aboutImage:o("1f2c"),projectImages:je.map((function(e){return e.projectImage})),projectTitles:je.map((function(e){return e.projectTitle}))}},created:function(){this.touchDevice=this.isTouchDevice()},mounted:function(){var e=this,t=this.projectImages.concat(this.aboutImage).reduce((function(e,t){return e.concat(t)}),[]);Promise.all(t.map(this.preloadImages)).then((function(){e.loadProjectListView()}))},updated:function(){var e=this;this.$nextTick((function(){e.handleLinkAnimations()}))},methods:{preloadImages:function(e){return new Promise((function(t){var o=new Image;o.src=e,o.onload=function(){return t({path:e,status:"ok"})}}))},loadProjectListView:function(){var e=this,t=setInterval((function(){e.introFinished&&(e.$refs.Intro.fadeOut(),clearInterval(t),e.$refs.projectsList.animateContent("in"),e.showNav=!0)}),50)},loadProjectView:function(e){var t=this;this.isOnLink=!1,this.handleNavAnimations(this.listView?400:200,this.listView?2200:2e3),setTimeout((function(){t.currentIndex=e===t.projectTitles.length?0:e,window.scrollTo(0,0)}),1800),setTimeout((function(){t.projectView=!0}),2e3),setTimeout((function(){t.$refs.project.$el.style.opacity="1",t.$refs.project.$el.style.visibility="visible",t.listView=!1}),2400)},toggleAboutView:function(){var e=this;!1===this.aboutView?(se()({force:!0}),this.handleNavAnimations(0,2200),this.isOnLink=!1,this.aboutView=!0):!0===this.aboutView&&(this.isOnLink=!1,this.handleNavAnimations(200,2400),setTimeout((function(){return e.aboutView=!1}),2400))},handleLinkAnimations:function(){var e=this,t=document.querySelectorAll(".link");t.forEach((function(t){t.addEventListener("mouseenter",(function(){e.isOnLink=!0})),t.addEventListener("mouseleave",(function(){e.isOnLink=!1}))}))},handleNavAnimations:function(e,t){var o=this;setTimeout((function(){o.$refs.navLinks.animOut(0)}),e),setTimeout((function(){o.$refs.navLinks.animIn()}),t)},isTouchDevice:function(){var e=this;window.addEventListener("touchstart",(function(){e.touchDevice=!0})),window.addEventListener("mousemove",(function(){e.touchDevice=!1}))}}},Ce=$e,Le=Object(h["a"])(Ce,n,i,!1,null,null,null),Ne=Le.exports;o("16aa");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(Ne)}}).$mount("#app")},"74a7":function(e,t,o){e.exports=o.p+"img/jet2.4d9fdbc6.jpg"},"8b19":function(e,t,o){e.exports=o.p+"img/jet2-blur.e6b834ab.jpg"},9096:function(e,t,o){e.exports=o.p+"img/desktop-homepage.018e1807.png"},"938b":function(e,t,o){e.exports=o.p+"img/mobile-video.e846badc.png"},"9cdb":function(e,t,o){e.exports=o.p+"img/desktop-front.adf6e1e9.png"},"9fb4":function(e,t,o){e.exports=o.p+"img/desktop-landing-resized.1f48b1da.png"},a329:function(e,t,o){e.exports=o.p+"img/desktop-music-resized.cf169e56.png"},b039:function(e,t,o){e.exports=o.p+"img/mobile-front.ef0ae9fe.png"},b107:function(e,t,o){},c44b:function(e,t,o){e.exports=o.p+"img/desktop-video-resized.428ee604.png"},c44d:function(e,t,o){e.exports=o.p+"img/mobile-post.47ca382a.png"},ced9:function(e,t,o){e.exports=o.p+"img/desktop-indulgentSearch.8c9594fd.png"},cefa:function(e,t,o){e.exports=o.p+"img/desktop-post.5744a137.png"},dbe0:function(e,t,o){e.exports=o.p+"img/mobile-music.02f2be90.png"},dd12:function(e,t,o){e.exports=o.p+"img/mobile-landing.348a7bf6.png"},e05b:function(e,t,o){e.exports=o.p+"img/jet2logo.95be56f9.png"},ea9b:function(e,t,o){e.exports=o.p+"img/indulgentlogo.f95eb14b.png"},f29b:function(e,t,o){e.exports=o.p+"img/markus-website.a86d65f5.jpg"},f957:function(e,t,o){e.exports=o.p+"img/tom-website-blur.cf35a388.jpg"}});
//# sourceMappingURL=app.f9d1d225.js.map