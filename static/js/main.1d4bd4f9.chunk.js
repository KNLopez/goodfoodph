(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},30:function(e,t,a){e.exports=a(49)},35:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(35),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),p=a(14),h=a(16),d=a(7);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=r.a.createElement("g",null,r.a.createElement("path",{d:"M32.135,16.817H0.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h31.635c0.276,0,0.5,0.224,0.5,0.5 S32.411,16.817,32.135,16.817z"}),r.a.createElement("path",{d:"M19.598,29.353c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l12.184-12.184L19.244,4.136 c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l12.537,12.533c0.094,0.094,0.146,0.221,0.146,0.354 s-0.053,0.26-0.146,0.354L19.951,29.206C19.854,29.304,19.726,29.353,19.598,29.353z"})),v=function(e){var t=e.svgRef,a=b(e,["svgRef"]);return r.a.createElement("svg",f({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 32.635 32.635",style:{enableBackground:"new 0 0 32.635 32.635"},xmlSpace:"preserve",ref:t},a),g)},O=r.a.forwardRef(function(e,t){return r.a.createElement(v,f({svgRef:t},e))}),E=(a.p,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cart-header"},r.a.createElement(O,{onClick:this.props.toggleCart}),r.a.createElement("h4",null,"YOUR ORDER"),r.a.createElement("span",null,this.props.total?this.props.total:0))}}]),t}(n.Component));var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){console.log(e.target.value)},a.quantityChange=function(e,t){a.props.adjustQuantity({val:e,id:t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cart-item",key:this.props.id},r.a.createElement("div",{className:"cart-item__image-container",style:{backgroundImage:"url(//".concat(this.props.img,")")}}),r.a.createElement("div",{className:"cart-item__info"},this.props.name,r.a.createElement("div",{className:"cart-item__bottom-info"},r.a.createElement("div",{className:"cart-controls"},r.a.createElement("button",{className:"cart-controls__button",onClick:function(){e.quantityChange(-1,e.props.id)}},"-"),r.a.createElement("input",{type:"text",onChange:function(t){return e.handleChange(t)},value:this.props.qty}),r.a.createElement("button",{className:"cart-controls__button",onClick:function(){e.quantityChange(1,e.props.id)}},"+")),r.a.createElement("div",{className:"price"},"\u20b1",this.props.price))))}}]),t}(n.Component),y=Object(d.b)(null,function(e){return{adjustQuantity:function(t){e({type:"ADJUST_QUANTITY",quantity:t})}}})(j),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.cartItems.map(function(e){return r.a.createElement(y,{key:e.id,id:e.id,img:e.img,name:e.name,price:e.price,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,qty:e.qty})});return r.a.createElement("div",{className:"cart-item-list-container"},r.a.createElement("h2",null,"Items"),e)}}]),t}(n.Component),k=(a(27),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).computeTotalQuantity=function(e){var t=0;return e.map(function(e){return t+=e.qty}),t},a.computeTotalPrice=function(e){var t=0;return e.map(function(e){return t+=e.price*e.qty}),parseFloat(Math.round(100*t)/100).toFixed(2)},a.handleClick=function(e){a.props.toggleCart()},a.checkOut=function(e){a.props.checkOut(),a.props.history.push("/checkout")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.computeTotalQuantity(this.props.cartItems),t=this.computeTotalPrice(this.props.cartItems);return r.a.createElement("div",{className:this.props.showCart?"cart-container active":"cart-container"},r.a.createElement(E,{toggleCart:this.handleClick,total:e}),this.props.cartItems.length>0?r.a.createElement(C,{cartItems:this.props.cartItems}):r.a.createElement("div",{className:"no-cart-items"},"Nothing here.."),this.props.cartItems.length>0?r.a.createElement("div",{className:"checkout",onClick:this.checkOut},r.a.createElement("div",null,"Proceed to checkout"),r.a.createElement("div",null,"\u20b1",t)):"")}}]),t}(n.Component)),N=Object(d.b)(function(e){return{cartItems:e.cart.cartItems,showCart:e.cart.showCart}},function(e){return{toggleCart:function(){e({type:"TOGGLE_CART"})},checkOut:function(){e({type:"CHECKOUT"})}}})(Object(h.d)(k)),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:this.props.id,className:"product-card"},r.a.createElement("div",{className:"product-image",style:{backgroundImage:"url(//".concat(this.props.img,")")}},r.a.createElement("div",{className:"nutrition-container"},r.a.createElement("div",{className:"nutrition"},r.a.createElement("p",null,this.props.calories),r.a.createElement("div",{className:"nutrition-label"},"Calories")),r.a.createElement("div",{className:"nutrition"},r.a.createElement("p",null,this.props.protein),r.a.createElement("div",{className:"nutrition-label"},"Protein")),r.a.createElement("div",{className:"nutrition"},r.a.createElement("p",null,this.props.carbs),r.a.createElement("div",{className:"nutrition-label"},"Carbs")),r.a.createElement("div",{className:"nutrition"},r.a.createElement("p",null,this.props.fat),r.a.createElement("div",{className:"nutrition-label"},"Fat")))),r.a.createElement("div",{className:"product-info"},r.a.createElement("h4",null,this.props.name),r.a.createElement("p",null,"\u20b1",this.props.price),r.a.createElement("button",{onClick:function(){e.props.addToCart(e.props.id)}}," Add to Cart "))))}}]),t}(n.Component),T=Object(d.b)(null,function(e){return{addToCart:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}})(w),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.products.map(function(e){return r.a.createElement(T,{key:e.id,id:e.id,img:e.img,name:e.name,price:e.price,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat})});return r.a.createElement("div",{className:"product-list"},e)}}]),t}(n.Component),I=a(15),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){console.log(e.target.value),e.target.checked?a.props.addTag(e.target.value.toLowerCase()):a.props.removeTag(e.target.value.toLowerCase())},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tags.map(function(t,a){return r.a.createElement("div",{className:"checkbox-container",key:a},r.a.createElement("input",{onChange:e.handleClick,type:"checkbox",id:t,value:t}),r.a.createElement("label",{htmlFor:t},t))});return r.a.createElement("div",{className:"product-filter"},r.a.createElement("div",{className:"product-filter__inner"},r.a.createElement("div",{className:"product-filter__inner-bg"},r.a.createElement("h3",null,"FILTERS"),t)))}}]),t}(n.Component),x=Object(d.b)(function(e){return{tags:e.products.reduce(function(e,t){return Object(I.a)(new Set([].concat(Object(I.a)(e),Object(I.a)(t.tags))))},[])}},function(e){return{addTag:function(t){return e(function(e){return{type:"ADD_TAG",tag:e}}(t))},removeTag:function(t){return e(function(e){return{type:"REMOVE_TAG",tag:e}}(t))}}})(S),A=(a(45),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).filterProducts=function(e,t){return t.tagsFilter.length>0?e.reduce(function(e,a){return a.tags.filter(function(e){return t.tagsFilter.includes(e)}).length>0&&a.name.toLowerCase().includes(t.searchText.toLowerCase())&&e.push(a),e},[]):e.filter(function(e){return e.name.toLowerCase().includes(t.searchText.toLowerCase())})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.filterProducts(this.props.products,this.props.filter);return r.a.createElement("div",{className:"products-container"},r.a.createElement(x,null),r.a.createElement(_,{products:e}))}}]),t}(n.Component)),R=Object(d.b)(function(e){return{products:e.products,filter:e.filters}})(A),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-us"},r.a.createElement("div",{className:"info-container"},r.a.createElement("h2",null,"Call us +116123123"),r.a.createElement("h3",null,"445 Mount Eden Road, Mount Eden, Auckland.")))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.cart.map(function(e){return r.a.createElement("div",{className:"cart-item",key:e.id},r.a.createElement("div",{className:"cart-item__image-container",style:{backgroundImage:"url(//".concat(e.img,")")}}),r.a.createElement("div",{className:"cart-item__info"},e.name,r.a.createElement("div",{className:"cart-item__bottom-info"},r.a.createElement("div",{className:"price"},e.price))))});return r.a.createElement("div",{className:"checkout-summary"},e,r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Total"),r.a.createElement("h2",null,"\u20b1",this.props.total)))}}]),t}(n.Component),M=Object(d.b)(function(e){return{cart:e.cart.cartItems,total:e.cart.total}})(D),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t={name:e.target.name.value,email:e.target.email.value,phone:e.target.phone.value,address:e.target.address.value};a.props.submitForm(t),a.props.history.push("/results")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-form"},r.a.createElement("h2",null,"Contact Information"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"email",placeholder:"Email",type:"email"}),r.a.createElement("input",{name:"name",placeholder:"Name",type:"text"}),r.a.createElement("input",{name:"phone",placeholder:"Contact Number",type:"text"}),r.a.createElement("input",{name:"address",placeholder:"Address",type:"text"}),r.a.createElement("input",{type:"submit",value:"submit"})))}}]),t}(n.Component),L=Object(d.b)(function(e){return{}},function(e){return{submitForm:function(t){e(function(e){return{type:"SUBMIT_FORM",formData:e}}(t))}}})(Object(h.d)(P)),q=(a(46),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"checkout-container"},r.a.createElement(L,null),r.a.createElement(M,null))}}]),t}(n.Component)),U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-us"},r.a.createElement("div",{className:"info-container"},JSON.stringify(this.props.state,null,2)))}}]),t}(n.Component),G=Object(d.b)(function(e){var t=e.cart,a=e.filters;return{state:{cartItems:t.cartItems,userInfo:a.userInfo,total:t.total}}})(U),B=(a(47),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.toggleCart()},a.computeTotalQuantity=function(e){var t=0;return e.map(function(e){return t+=e.qty}),t},a.filterProducts=function(e){a.props.filterProducts(e.target.value)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.computeTotalQuantity(this.props.cartItems);return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/goodfoodph/"},"GoodFoodPh"),r.a.createElement("input",{onChange:this.filterProducts,type:"text",placeholder:"Search Products"})),r.a.createElement("div",{className:"menu-container"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/goodfoodph/"},"OUR Menu")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(t){return e.handleClick(t)},className:this.props.cartItems.length>0?"cart cart-active":"cart"},"Cart",t>0?r.a.createElement("span",null,t):""))))))}}]),t}(n.Component)),Q=Object(d.b)(function(e){return{cartItems:e.cart.cartItems}},function(e){return{toggleCart:function(){e({type:"TOGGLE_CART"})},filterProducts:function(t){e(function(e){return{type:"SEARCH_FILTER_PRODUCTS",searchText:e}}(t))}}})(B),J=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Q,null),r.a.createElement(N,null),r.a.createElement(h.a,{exact:!0,path:"/goodfoodph/",component:R}),r.a.createElement(h.a,{path:"/contact",component:F}),r.a.createElement(h.a,{path:"/checkout",component:q}),r.a.createElement(h.a,{path:"/results",component:G})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(17),V=a(8),X={cartItems:[],total:0,showCart:!1},W=[{id:"1",img:"images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg?w=640&h=426",name:"Beef Fajita Wraps with Crunchy Slaw - Meal   (serves 2)",price:19.95,calories:525,protein:27.8,carbs:27.8,fat:23.5,tags:["beef","fajita","crunchy"]},{id:"2",img:"images.pexels.com/photos/1440119/pexels-photo-1440119.jpeg?cs=srgb&dl=close-up-cucumber-cuisine-1440119.jpg&fm=jpg?w=640&h=426",name:"Chicken Stir Fry with Cashew Nuts - Meal   (serves 2)",price:19.25,calories:525,protein:27.8,carbs:27.8,fat:23.5,tags:["chicken","nuts"]},{id:"3",img:"images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?cs=srgb&dl=basil-blur-cheese-1279330.jpg&fm=jpg?w=640&h=426",name:"Creamy Pasta Florentine - Meal (serves 2)",price:19.25,calories:525,protein:27.8,carbs:27.8,fat:23.5,tags:["creamy","pasta"]},{id:"4",img:"images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?cs=srgb&dl=buffet-chicken-cooking-5938.jpg&fm=jpg?w=640&h=426",name:"Sweet Chicken with Super Greens - Meal   (serves 2)",price:19.95,calories:525,protein:27.8,carbs:27.8,fat:23.5,tags:["sweet","chicken","greens"]},{id:"5",img:"images.pexels.com/photos/323682/pexels-photo-323682.jpeg?cs=srgb&dl=beef-blur-chicken-323682.jpg&fm=jpg?w=640&h=426",name:"Greek Lamb Salad with Toasted Pita - Meal   (serves 10)",price:89.95,calories:525,protein:27.8,carbs:27.8,fat:23.5,tags:["lamb","salad","pita"]},{id:"6",img:"images.pexels.com/photos/675951/pexels-photo-675951.jpeg?cs=srgb&dl=asparagus-barbecue-bbq-675951.jpg&fm=jpg?w=640&h=426",name:"Beef Steak with Sauce - Meal   (serves 4)",price:29.95,calories:525,protein:27.8,carbs:27.8,fat:23.5,tags:["beef","steak"]}],Y={searchText:"",tagsFilter:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(V.a)({},X,{productState:W}),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return e.cartItems.map(function(e){return e.id}).includes(t.id)?Object(V.a)({},e,{cartItems:e.cartItems.map(function(e){return e.id===t.id&&(e.qty+=1),e})}):Object(V.a)({},e,{cartItems:[].concat(Object(I.a)(e.cartItems),[Object(V.a)({},e.productState.filter(function(e){return e.id===t.id})[0],{qty:1})]),showCart:!0});case"ADJUST_QUANTITY":var a;return e.cartItems.map(function(e){e.id===t.data.id&&(a=e.qty+t.data.val)}),a<0?Object(V.a)({},e,{cartItems:e.cartItems.filter(function(e){return e.id!==t.data.id})}):Object(V.a)({},e,{cartItems:e.cartItems.map(function(e){return e.id===t.data.id&&(e.qty+=t.data.val),e})});case"TOGGLE_CART":return Object(V.a)({},e,{showCart:!e.showCart});case"CHECKOUT":var n=0;return e.cartItems.map(function(e){return n+=e.price*e.qty}),Object(V.a)({},e,{total:parseFloat(Math.round(100*n)/100).toFixed(2),showCart:!1})}return e},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_FILTER_PRODUCTS":return Object(V.a)({},e,{searchText:t.searchText});case"ADD_TAG":return Object(V.a)({},e,{tagsFilter:[].concat(Object(I.a)(e.tagsFilter),[t.tag])});case"REMOVE_TAG":return Object(V.a)({},e,{tagsFilter:e.tagsFilter.filter(function(e){return e!==t.tag})});case"SUBMIT_FORM":return Object(V.a)({},e,{userInfo:Object(V.a)({},t.formData)})}return e},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;arguments.length>1&&arguments[1];return e},Z=Object(H.b)({cart:z,filters:K,products:$}),ee={cart:function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e).cart}catch(t){return}}()},te=Object(H.c)(Z,ee,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());te.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(te.getState({cart:te.getState().cart}))}),o.a.render(r.a.createElement(d.a,{store:te},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.1d4bd4f9.chunk.js.map