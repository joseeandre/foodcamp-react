(this["webpackJsonpfoodcamp-react"]=this["webpackJsonpfoodcamp-react"]||[]).push([[0],{27:function(e,o,i){"use strict";i.r(o);var a=i(8),n=i.n(a),c=(i(1),i(9)),r=i(2),t={prato:[],bebida:[],sobremesa:[]},s=i(0);function d(e){return Object(s.jsxs)("li",{class:"sobremesa",children:[Object(s.jsx)("div",{class:"nome",children:e.nome}),Object(s.jsx)("div",{class:"nome",children:e.quantidade}),Object(s.jsx)("div",{class:"preco",children:e.preco})]})}function l(){for(var e=0,o=0;o<t.prato.length;o++)e+=parseFloat(t.prato[o].quantidade)*parseFloat(t.prato[o].preco);for(var i=0;i<t.bebida.length;i++)e+=parseFloat(t.bebida[i].quantidade)*parseFloat(t.bebida[i].preco);for(var a=0;a<t.sobremesa.length;a++)e+=parseFloat(t.sobremesa[a].quantidade)*parseFloat(t.sobremesa[a].preco);return Object(s.jsx)("div",{class:"overlay",children:Object(s.jsxs)("div",{class:"confirmar-pedido",children:[Object(s.jsx)("div",{class:"titulo",children:"Confirme seu pedido"}),Object(s.jsxs)("ul",{children:[t.prato.map((function(e){return Object(s.jsx)(d,{nome:e.nome,preco:e.preco,quantidade:e.quantidade})})),t.bebida.map((function(e){return Object(s.jsx)(d,{nome:e.nome,preco:e.preco,quantidade:e.quantidade})})),t.sobremesa.map((function(e){return Object(s.jsx)(d,{nome:e.nome,preco:e.preco,quantidade:e.quantidade})})),Object(s.jsxs)("li",{class:"total",children:[Object(s.jsx)("div",{children:"Total"}),Object(s.jsxs)("div",{children:["R$ ",e.toFixed(2)]})]})]}),Object(s.jsx)("button",{class:"confirmar",onClick:function(){for(var o="",i="",a="",n=0;n<t.prato.length;n++)o+=" "+t.prato[n].nome;for(var c=0;c<t.bebida.length;c++)i+=" "+t.bebida[c].nome;for(var r=0;r<t.sobremesa.length;r++)a+=" "+t.sobremesa[r].nome;var s="Ol\xe1, gostaria de fazer o pedido:\n- Prato: "+o+"\n- Bebida: "+i+"\n- Sobremesa: "+a+"\nTotal: R$ "+e.toFixed(2),d="https://wa.me/5521999998844?text="+encodeURIComponent(s);window.open(d)},children:"Tudo certo, pode pedir!"}),Object(s.jsx)(c.b,{to:"/",children:Object(s.jsx)("button",{class:"cancelar",onClick:function(){n.a.render(Object(s.jsx)(h,{}),document.querySelector(".root"))},children:"Cancelar"})})]})})}function u(){return Object(s.jsxs)("div",{class:"header",children:[Object(s.jsx)("div",{class:"titulo",children:"FoodCamp"}),Object(s.jsx)("div",{class:"subtitulo",children:"Sua comida em 6 minutos"})]})}function m(e){var o="opcao "+e.id,i="."+e.id;function a(){if(t.prato.length>0&&t.bebida.length>0&&t.sobremesa.length>0){var e=document.querySelector(".fazer-pedido");e.classList.add("ativo"),e.innerHTML="Fechar pedido"}else{document.querySelector(".fazer-pedido").classList.remove("ativo")}}return Object(s.jsxs)("div",{class:o,onClick:function(){"bebidas"===e.tipo?function(){var o=document.querySelector(i),n=o.querySelector(".quantidade");o.classList.contains("selecionado")?"0"===n.innerHTML&&(document.querySelector(i).classList.remove("selecionado"),n.innerHTML="1"):(t.bebida.push({nome:e.nome,preco:e.preco,quantidade:1}),o.classList.add("selecionado")),a()}():"pratos"===e.tipo?function(){var o=document.querySelector(i),n=o.querySelector(".quantidade");o.classList.contains("selecionado")?"0"===n.innerHTML&&(document.querySelector(i).classList.remove("selecionado"),n.innerHTML="1"):(t.prato.push({nome:e.nome,preco:e.preco,quantidade:1}),o.classList.add("selecionado")),a()}():"sobremesas"===e.tipo&&function(){var o=document.querySelector(i),n=o.querySelector(".quantidade");o.classList.contains("selecionado")?"0"===n.innerHTML&&(document.querySelector(i).classList.remove("selecionado"),n.innerHTML="1"):(t.sobremesa.push({nome:e.nome,preco:e.preco,quantidade:1}),o.classList.add("selecionado")),a()}()},children:[Object(s.jsx)("img",{src:e.foto}),Object(s.jsx)("div",{class:"titulo",children:e.nome}),Object(s.jsx)("div",{class:"descricao",children:e.descricao}),Object(s.jsxs)("div",{class:"preco",children:["R$ ",e.preco]}),Object(s.jsxs)("div",{class:"check",children:[Object(s.jsx)("ion-icon",{name:"checkmark-circle"}),Object(s.jsxs)("div",{class:"adicionar-item",children:[Object(s.jsx)("ion-icon",{name:"remove-circle",onClick:function(){!function(e,o,i){var a="."+e,n=document.querySelector(a).querySelector(".quantidade"),c=parseInt(n.innerHTML);c-=1,n.innerHTML=c.toString();for(var r=i.slice(0,-1),s=0;s<t[r].length;s++)o===t[r][s].nome&&(t[r][s].quantidade=c,t[r][s].quantidade<=0&&t[r].splice(s,1))}(e.id,e.nome,e.tipo)}}),Object(s.jsx)("div",{class:"quantidade",children:"1"}),Object(s.jsx)("ion-icon",{name:"add-circle",onClick:function(){!function(e,o,i){var a="."+e,n=document.querySelector(a).querySelector(".quantidade"),c=parseInt(n.innerHTML);c+=1,n.innerHTML=c.toString();for(var r=i.slice(0,-1),s=0;s<t[r].length;s++)o===t[r][s].nome&&(t[r][s].quantidade=c)}(e.id,e.nome,e.tipo)}})]})]})]})}function p(e){var o="opcoes "+e.nome;return Object(s.jsxs)("div",{class:"secao",children:[Object(s.jsx)("div",{class:"titulo",children:e.descricao}),Object(s.jsxs)("div",{class:o,children:[e.produtos.map((function(o){return Object(s.jsx)(m,{tipo:e.nome,nome:o.name,preco:o.price,id:o.id,descricao:o.description,foto:o.image})})),";"]})]})}function b(){return Object(s.jsx)(c.b,{to:"/revisar",children:Object(s.jsx)("div",{class:"footer",children:Object(s.jsxs)("a",{href:"#",class:"fazer-pedido",onClick:function(){n.a.render(Object(s.jsx)(h,{}),document.querySelector(".root"))},children:["Selecione os 3 itens",Object(s.jsx)("br",{}),"para fechar o pedido"]})})})}var j=[{name:"pratos",description:"Primeiro, seu prato",options:[{name:"Frango Yin Yang",description:"Um pouco de batata, um pouco de salada",image:"img/frango_yin_yang.png",price:"14.90",id:"prato-frango"},{name:"Carne Yin Yang",description:"Um pouco de batata, um pouco de salada",image:"img/frango_yin_yang.png",price:"17.90",id:"prato-carne"},{name:"Peixe Yin Yang",description:"Um pouco de batata, um pouco de salada",image:"img/frango_yin_yang.png",price:"16.90",id:"prato-peixe"}]},{name:"bebidas",description:"Agora, sua bebida",options:[{name:"Coquinha gelada",description:"Lata 350 ml",image:"img/coquinha_gelada.png",price:"6.90",id:"bebida-coca"},{name:"Coquinha gelada",description:"Lata 350 ml",image:"img/coquinha_gelada.png",price:"4.90",id:"bebida-guarana"},{name:"Suquinho gelado",description:"500 ml",image:"img/coquinha_gelada.png",price:"7.90",id:"bebida-suco"}]},{name:"sobremesas",description:"Por fim, sua sobremesa",options:[{name:"Pudim",description:"Apenas um pudim",image:"img/pudim.png",price:"7.90",id:"sobremesa-pudim"},{name:"Mousse",description:"Cremoso e gostoso",image:"img/pudim.png",price:"6.90",id:"sobremesa-mousse"},{name:"Brownie",description:"\xc9 um bolinho",image:"img/pudim.png",price:"4.90",id:"sobremesa-brownie"}]}];function h(){return Object(s.jsxs)(c.a,{children:[Object(s.jsx)(u,{}),Object(s.jsx)("div",{class:"menu",children:j.map((function(e){return Object(s.jsx)(p,{nome:e.name,descricao:e.description,produtos:e.options})}))}),Object(s.jsx)(b,{}),Object(s.jsx)(r.c,{children:Object(s.jsx)(r.a,{path:"/revisar",children:Object(s.jsx)(l,{})})})]})}n.a.render(Object(s.jsx)(h,{}),document.querySelector(".root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.37238a6a.chunk.js.map