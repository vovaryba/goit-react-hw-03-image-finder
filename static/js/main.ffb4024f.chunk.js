(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=n(3),s=n(4),l=n(6),u=n(5),d=n(8),h=(n(16),n(1)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={imageKeyword:""},e.handleTagChange=function(t){e.setState({imageKeyword:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageKeyword.trim()?(e.props.onSubmit(e.state.imageKeyword),e.setState({imageKeyword:""})):d.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e\u0438\u0441\u043a\u0430")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.imageKeyword;return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{value:e,onChange:this.handleTagChange,name:"imageKeyword",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component),g=n(10),j=n(11),b=n.n(j);n(38);var p=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b.a,{type:"ThreeDots",color:"#3ebb2e",height:50,width:50,timeout:0,display:"block"})})};n(39);var f=function(e){var t=e.images,n=e.onClick;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("li",{onClick:function(){return n(e.largeImageURL,e.tags)},className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image"})},e.id)}))})},y=(n(40),document.querySelector("#modal-root")),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(r.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(h.jsx)("div",{className:"Modal",children:e})}),y)}}]),n}(a.Component),O=(n(41),function(e){var t=e.onClick;return Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})});var w={fetchImages:function(e,t,n,a,o){return fetch("".concat(e,"?q=").concat(t,"&page=").concat(n,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u043a\u043e\u0434\u043e\u0432\u044b\u043c \u0441\u043b\u043e\u0432\u043e\u043c ".concat(t)))}))}},x=(n(42),"https://pixabay.com/api/"),k="22634984-1ce924b253c51d48f10b47cfd",S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:null,error:null,status:"idle",showModal:!1,loading:!1,page:1},e.buttonClick=function(){var t=e.props.imageKeyword,n=e.state.page;w.fetchImages(x,t,n,k,12).then((function(t){e.setState((function(n){return{images:[].concat(Object(g.a)(n.images),Object(g.a)(t.hits)),page:e.state.page+1,status:"resolved",loading:!n.loading}})),e.scrollWindow()})).catch((function(t){return e.setState({error:t,status:"rejected"})})).finally(e.setState((function(e){return{loading:!e.loading}})))},e.toggleModal=function(t,n){e.setState((function(e){return{showModal:!e.showModal,modalImg:t,modalAlt:n}}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=e.imageKeyword,o=this.props.imageKeyword,r=this.state.page;a!==o&&(this.setState({status:"pending",loading:!0}),w.fetchImages(x,o,r,k,12).then((function(e){n.setState({images:e.hits,page:n.state.page+1,status:"resolved",loading:!0}),n.scrollWindow()})).catch((function(e){return n.setState({error:e,status:"rejected"})})))}},{key:"scrollWindow",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,n=e.error,a=e.status,o=e.showModal,r=e.modalImg,c=e.modalAlt,i=e.loading;return"idle"===a?Object(h.jsx)("div",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"}):"pending"===a?Object(h.jsx)(p,{}):"rejected"===a?Object(h.jsx)("h1",{children:n.message}):"resolved"===a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"ImageGallery",children:Object(h.jsx)(f,{images:t,onClick:this.toggleModal})}),i&&Object(h.jsx)(O,{onClick:this.buttonClick}),o&&Object(h.jsx)(v,{onClose:this.toggleModal,children:Object(h.jsx)("img",{src:r,alt:c})})]}):void 0}}]),n}(a.Component),C=(n(43),n(44),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={imageKeyword:""},e.handleFormSubmit=function(t){e.setState({imageKeyword:t})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.imageKeyword;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{onSubmit:this.handleFormSubmit}),Object(h.jsx)(S,{imageKeyword:e}),Object(h.jsx)(d.a,{autoClose:3e3})]})}}]),n}(a.Component));n(45);c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ffb4024f.chunk.js.map