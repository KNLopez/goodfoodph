(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){},30:function(e,t,a){e.exports=a(49)},35:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),o=(a(35),a(1)),l=a(2),s=a(4),u=a(3),m=a(5),p=a(14),h=a(15),d=a(7);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var v=r.a.createElement("g",null,r.a.createElement("path",{d:"M32.135,16.817H0.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h31.635c0.276,0,0.5,0.224,0.5,0.5 S32.411,16.817,32.135,16.817z"}),r.a.createElement("path",{d:"M19.598,29.353c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l12.184-12.184L19.244,4.136 c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l12.537,12.533c0.094,0.094,0.146,0.221,0.146,0.354 s-0.053,0.26-0.146,0.354L19.951,29.206C19.854,29.304,19.726,29.353,19.598,29.353z"})),O=function(e){var t=e.svgRef,a=b(e,["svgRef"]);return r.a.createElement("svg",f({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 32.635 32.635",style:{enableBackground:"new 0 0 32.635 32.635"},xmlSpace:"preserve",ref:t},a),v)},E=r.a.forwardRef(function(e,t){return r.a.createElement(O,f({svgRef:t},e))}),j=(a.p,function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cart-header"},r.a.createElement(E,{onClick:this.props.toggleCart}),r.a.createElement("h4",null,"YOUR ORDER"),r.a.createElement("span",null,this.props.total?this.props.total:0))}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){console.log(e.target.value)},a.quantityChange=function(e,t){a.props.adjustQuantity({val:e,id:t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cart-item",key:this.props.id},r.a.createElement("div",{className:"cart-item__image-container",style:{backgroundImage:"url(//".concat(this.props.img,")")}}),r.a.createElement("div",{className:"cart-item__info"},this.props.name,r.a.createElement("div",{className:"cart-item__bottom-info"},r.a.createElement("div",{className:"cart-controls"},r.a.createElement("button",{className:"cart-controls__button",onClick:function(){e.quantityChange(-1,e.props.id)}},"-"),r.a.createElement("input",{type:"text",onChange:function(t){return e.handleChange(t)},value:this.props.qty}),r.a.createElement("button",{className:"cart-controls__button",onClick:function(){e.quantityChange(1,e.props.id)}},"+")),r.a.createElement("div",{className:"price"},"\u20b1",this.props.price))))}}]),t}(n.Component),g=Object(d.b)(null,function(e){return{adjustQuantity:function(t){e({type:"ADJUST_QUANTITY",data:t})}}})(y),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.cartItems.map(function(e){return r.a.createElement(g,{key:e.id,id:e.id,img:e.img,name:e.name,price:e.price,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat,qty:e.qty})});return r.a.createElement("div",{className:"cart-item-list-container"},r.a.createElement("h2",null,"Items"),e)}}]),t}(n.Component),k=(a(26),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).computeTotalQuantity=function(e){var t=0;return e.map(function(e){return t+=e.qty}),t},a.computeTotalPrice=function(e){var t=0;return e.map(function(e){return t+=e.price*e.qty}),parseFloat(Math.round(100*t)/100).toFixed(2)},a.handleClick=function(e){a.props.toggleCart()},a.checkOut=function(e){a.props.checkOut(),a.props.history.push("/checkout")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.computeTotalQuantity(this.props.cartItems),t=this.computeTotalPrice(this.props.cartItems);return r.a.createElement("div",{className:this.props.showCart?"cart-container active":"cart-container"},r.a.createElement(j,{toggleCart:this.handleClick,total:e}),this.props.cartItems.length>0?r.a.createElement(C,{cartItems:this.props.cartItems}):r.a.createElement("div",{className:"no-cart-items"},"Nothing here.."),this.props.cartItems.length>0?r.a.createElement("div",{className:"checkout",onClick:this.checkOut},r.a.createElement("div",null,"Proceed to checkout"),r.a.createElement("div",null,"\u20b1",t)):"")}}]),t}(n.Component)),N=Object(d.b)(function(e){return{cartItems:e.cartItems,showCart:e.showCart}},function(e){return{toggleCart:function(){e({type:"TOGGLE_CART"})},checkOut:function(){e({type:"CHECKOUT"})}}})(Object(h.d)(k)),I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:this.props.id,className:"product-card"},r.a.createElement("div",{className:"product-image",style:{backgroundImage:"url(//".concat(this.props.img,")")}},r.a.createElement("div",{className:"nutrition-container"},r.a.createElement("div",{className:"nutrition"},r.a.createElement("p",null,this.props.calories),r.a.createElement("div",{className:"nutrition-label"},"Calories")),r.a.createElement("div",{className:"nutrition"},r.a.createElement("p",null,this.props.protein),r.a.createElement("div",{className:"nutrition-label"},"Protein")),r.a.createElement("div",{className:"nutrition"},r.a.createElement("p",null,this.props.carbs),r.a.createElement("div",{className:"nutrition-label"},"Carbs")),r.a.createElement("div",{className:"nutrition"},r.a.createElement("p",null,this.props.fat),r.a.createElement("div",{className:"nutrition-label"},"Fat")))),r.a.createElement("div",{className:"product-info"},r.a.createElement("h4",null,this.props.name),r.a.createElement("p",null,"\u20b1",this.props.price),r.a.createElement("button",{onClick:function(){e.props.addToCart(e.props.id)}}," Add to Cart "))))}}]),t}(n.Component),w=Object(d.b)(null,function(e){return{addToCart:function(t){e({type:"ADD_TO_CART",id:t})}}})(I),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.products.map(function(e){return r.a.createElement(w,{key:e.id,id:e.id,img:e.img,name:e.name,price:e.price,calories:e.calories,protein:e.protein,carbs:e.carbs,fat:e.fat})});return r.a.createElement("div",{className:"product-list"},e)}}]),t}(n.Component),_=(a(45),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{products:this.props.products}))}}]),t}(n.Component)),S=Object(d.b)(function(e){var t=e.products,a=e.searchText;return{products:t.filter(function(e){return e.name.includes(a)})}})(_),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-us"},r.a.createElement("div",{className:"info-container"},r.a.createElement("h2",null,"Call us +116123123"),r.a.createElement("h3",null,"445 Mount Eden Road, Mount Eden, Auckland.")))}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.cart.map(function(e){return r.a.createElement("div",{className:"cart-item",key:e.id},r.a.createElement("div",{className:"cart-item__image-container",style:{backgroundImage:"url(//".concat(e.img,")")}}),r.a.createElement("div",{className:"cart-item__info"},e.name,r.a.createElement("div",{className:"cart-item__bottom-info"},r.a.createElement("div",{className:"price"},e.price))))});return r.a.createElement("div",{className:"checkout-summary"},e,r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Total"),r.a.createElement("h2",null,"\u20b1",this.props.total)))}}]),t}(n.Component),F=Object(d.b)(function(e){return{cart:e.cartItems,total:e.total}},{})(R),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t={name:e.target.name.value,email:e.target.email.value,phone:e.target.phone.value,address:e.target.address.value};a.props.submitForm(t),a.props.history.push("/results")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-form"},r.a.createElement("h2",null,"Contact Information"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"email",placeholder:"Email",type:"email"}),r.a.createElement("input",{name:"name",placeholder:"Name",type:"text"}),r.a.createElement("input",{name:"phone",placeholder:"Contact Number",type:"text"}),r.a.createElement("input",{name:"address",placeholder:"Address",type:"text"}),r.a.createElement("input",{type:"submit",value:"submit"})))}}]),t}(n.Component),P=Object(d.b)(function(e){return{}},function(e){return{submitForm:function(t){e({type:"SUBMIT_FORM",formData:t})}}})(Object(h.d)(A)),M=(a(46),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"checkout-container"},r.a.createElement(P,null),r.a.createElement(F,null))}}]),t}(n.Component)),D=Object(d.b)(function(e){return{}},{})(M),G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-us"},r.a.createElement("div",{className:"info-container"},JSON.stringify(this.props.state,null,2)))}}]),t}(n.Component),q=Object(d.b)(function(e){return{state:{cartItems:e.cartItems,userInfo:e.userInfo,total:e.total}}},{})(G),U=(a(47),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){a.props.toggleCart()},a.computeTotalQuantity=function(e){var t=0;return e.map(function(e){return t+=e.qty}),t},a.filterProducts=function(e){a.props.filterProducts(e.target.value)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.computeTotalQuantity(this.props.cartItems);return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/"},"GoodFoodPh"),r.a.createElement("input",{onChange:this.filterProducts,type:"text",placeholder:"Search Products"})),r.a.createElement("div",{className:"menu-container"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"OUR Menu")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{onClick:function(t){return e.handleClick(t)},className:this.props.cartItems.length>0?"cart-active":""},"Cart",t>0?r.a.createElement("span",null,t):""))))))}}]),t}(n.Component)),W=Object(d.b)(function(e){return{cartItems:e.cartItems}},function(e){return{toggleCart:function(){e({type:"TOGGLE_CART"})},filterProducts:function(t){e({type:"FILTER_PRODUCTS",searchText:t})}}})(U),L=(a(48),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(W,null),r.a.createElement(N,null),r.a.createElement(h.a,{exact:!0,path:"/",component:S}),r.a.createElement(h.a,{path:"/contact",component:x}),r.a.createElement(h.a,{path:"/checkout",component:D}),r.a.createElement(h.a,{path:"/results",component:q})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(20),B=a(29),K=a(12),Q={searchText:"",products:[{id:"1",img:"cdn.shopify.com/s/files/1/0506/7861/products/1-Beef-Fajita-Wraps-With-Crunchy-Slaw-Web-12_720x.jpg?v=1554950480",name:"Beef Fajita Wraps with Crunchy Slaw - Meal Kitz (serves 2)",price:19.95,calories:525,protein:27.8,carbs:27.8,fat:23.5},{id:"2",img:"cdn.shopify.com/s/files/1/0506/7861/products/3-Chicken-Stir-Fry-With-Cashew-Nuts-Web-14_720x.jpg?v=1554950483",name:"Chicken Stir Fry with Cashew Nuts - Meal Kitz (serves 2)",price:19.25,calories:525,protein:27.8,carbs:27.8,fat:23.5},{id:"3",img:"cdn.shopify.com/s/files/1/0506/7861/products/1-Creamy-Gnocchi-Florentine-Web-13_720x.jpg?v=1554950486",name:"Creamy Gnocchi Florentine - Meal Kitz (serves 2)",price:19.25,calories:525,protein:27.8,carbs:27.8,fat:23.5},{id:"4",img:"cdn.shopify.com/s/files/1/0506/7861/products/2-Sweet-Paprika-Chicken-with-Super-Greens-Web-13.jpg?v=1554950492",name:"Sweet Chicken with Super Greens - Meal Kitz (serves 2)",price:19.95,calories:525,protein:27.8,carbs:27.8,fat:23.5},{id:"5",img:"cdn.shopify.com/s/files/1/0506/7861/products/3-Greek-Lamb-Salad-With-Toasted-Pita-Web-9.jpg?v=1554950489",name:"Greek Lamb Salad with Toasted Pita - Meal Kitz (serves 10)",price:89.95,calories:525,protein:27.8,carbs:27.8,fat:23.5},{id:"6",img:"cdn.shopify.com/s/files/1/0506/7861/products/3-Greek-Lamb-Salad-With-Toasted-Pita-Web-9.jpg?v=1554950489",name:"Thai Green Chicken Curry - Meal Kitz (serves 4)",price:29.95,calories:525,protein:27.8,carbs:27.8,fat:23.5}],cartItems:[],userInfo:{},showCart:!1,total:0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return e.cartItems.map(function(e){return e.id}).includes(t.id)?Object(K.a)({},e,{cartItems:e.cartItems.map(function(e){return e.id===t.id&&(e.qty+=1),e})}):Object(K.a)({},e,{cartItems:[].concat(Object(B.a)(e.cartItems),[Object(K.a)({},e.products.filter(function(e){return e.id===t.id})[0],{qty:1})]),showCart:!0});case"ADJUST_QUANTITY":var a;return e.cartItems.map(function(e){e.id===t.data.id&&(a=e.qty+t.data.val)}),a<0?Object(K.a)({},e,{cartItems:e.cartItems.filter(function(e){return e.id!==t.data.id})}):Object(K.a)({},e,{cartItems:e.cartItems.map(function(e){return e.id===t.data.id&&(e.qty+=t.data.val),e})});case"TOGGLE_CART":return Object(K.a)({},e,{showCart:!e.showCart});case"FILTER_PRODUCTS":return Object(K.a)({},e,{searchText:t.searchText});case"CHECKOUT":var n=0;return e.cartItems.map(function(e){n+=e.price*e.qty}),Object(K.a)({},e,{total:parseFloat(Math.round(100*n)/100).toFixed(2),showCart:!1});case"SUBMIT_FORM":return Object(K.a)({},e,{userInfo:Object(K.a)({},t.formData)})}return e},X=Object(z.b)(J,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(d.a,{store:X},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.bcf973bc.chunk.js.map