(this["webpackJsonpfoodcamp-react"]=this["webpackJsonpfoodcamp-react"]||[]).push([[0],{27:function(e,a,o){"use strict";o.r(a);var i=o(9),n=o.n(i),c=(o(1),o(8)),r=o(2),s={prato:[],bebida:[],sobremesa:[]},t=o(0);function d(e){return Object(t.jsxs)("li",{class:"sobremesa",children:[Object(t.jsx)("div",{class:"nome",children:e.nome}),Object(t.jsx)("div",{class:"quantidade",children:e.quantidade}),Object(t.jsx)("div",{class:"preco",children:e.preco})]})}function l(){for(var e=0,a=0;a<s.prato.length;a++)e+=parseFloat(s.prato[a].quantidade)*parseFloat(s.prato[a].preco);for(var o=0;o<s.bebida.length;o++)e+=parseFloat(s.bebida[o].quantidade)*parseFloat(s.bebida[o].preco);for(var i=0;i<s.sobremesa.length;i++)e+=parseFloat(s.sobremesa[i].quantidade)*parseFloat(s.sobremesa[i].preco);return Object(t.jsx)("div",{class:"overlay",children:Object(t.jsxs)("div",{class:"confirmar-pedido",children:[Object(t.jsx)("div",{class:"titulo",children:"Confirme seu pedido"}),Object(t.jsxs)("ul",{children:[s.prato.map((function(e){return Object(t.jsx)(d,{nome:e.nome,preco:e.preco,quantidade:e.quantidade})})),s.bebida.map((function(e){return Object(t.jsx)(d,{nome:e.nome,preco:e.preco,quantidade:e.quantidade})})),s.sobremesa.map((function(e){return Object(t.jsx)(d,{nome:e.nome,preco:e.preco,quantidade:e.quantidade})})),Object(t.jsxs)("li",{class:"total",children:[Object(t.jsx)("div",{children:"Total"}),Object(t.jsxs)("div",{children:["R$ ",e.toFixed(2)]})]})]}),Object(t.jsx)("button",{class:"confirmar",onClick:function(){for(var a="",o="",i="",n=0;n<s.prato.length;n++)a+=" "+s.prato[n].nome+": "+s.prato[n].quantidade+"\n";for(var c=0;c<s.bebida.length;c++)o+=" "+s.bebida[c].nome+": "+s.bebida[c].quantidade+"\n";for(var r=0;r<s.sobremesa.length;r++)i+=" "+s.sobremesa[r].nome+": "+s.sobremesa[r].quantidade+"\n";var t="Ol\xe1, gostaria de fazer o pedido:\n- Prato: "+a+"\n- Bebida: "+o+"\n- Sobremesa: "+i+"\nTotal: R$ "+e.toFixed(2),d="https://wa.me/5512981253244?text="+encodeURIComponent(t);window.open(d)},children:"Tudo certo, pode pedir!"}),Object(t.jsx)(c.b,{to:"/",children:Object(t.jsx)("button",{class:"cancelar",onClick:function(){n.a.render(Object(t.jsx)(h,{}),document.querySelector(".root"))},children:"Cancelar"})})]})})}function u(){return Object(t.jsxs)("div",{class:"header",children:[Object(t.jsx)("div",{class:"titulo",children:"FoodCamp"}),Object(t.jsx)("div",{class:"subtitulo",children:"Sua comida em 6 minutos"})]})}function m(e){var a="opcao "+e.id,o="."+e.id;function i(){if(s.prato.length>0&&s.bebida.length>0&&s.sobremesa.length>0){var e=document.querySelector(".fazer-pedido");e.classList.add("ativo"),e.innerHTML="Fechar pedido"}else{var a=document.querySelector(".fazer-pedido");a.classList.remove("ativo"),a.innerHTML="Selecione os 3 itens <br /> para fechar o pedido"}}return Object(t.jsxs)("div",{class:a,onClick:function(){"bebidas"===e.tipo?function(){var a=document.querySelector(o),n=a.querySelector(".quantidade");a.classList.contains("selecionado")?"0"===n.innerHTML&&(document.querySelector(o).classList.remove("selecionado"),n.innerHTML="1"):(s.bebida.push({nome:e.nome,preco:e.preco,quantidade:1}),a.classList.add("selecionado")),i()}():"pratos"===e.tipo?function(){var a=document.querySelector(o),n=a.querySelector(".quantidade");a.classList.contains("selecionado")?"0"===n.innerHTML&&(document.querySelector(o).classList.remove("selecionado"),n.innerHTML="1"):(s.prato.push({nome:e.nome,preco:e.preco,quantidade:1}),a.classList.add("selecionado")),i()}():"sobremesas"===e.tipo&&function(){var a=document.querySelector(o),n=a.querySelector(".quantidade");a.classList.contains("selecionado")?"0"===n.innerHTML&&(document.querySelector(o).classList.remove("selecionado"),n.innerHTML="1"):(s.sobremesa.push({nome:e.nome,preco:e.preco,quantidade:1}),a.classList.add("selecionado")),i()}()},children:[Object(t.jsx)("img",{src:e.foto,alt:e.nome}),Object(t.jsx)("div",{class:"titulo",children:e.nome}),Object(t.jsx)("div",{class:"descricao",children:e.descricao}),Object(t.jsxs)("div",{class:"preco",children:["R$ ",e.preco]}),Object(t.jsxs)("div",{class:"check",children:[Object(t.jsx)("ion-icon",{name:"checkmark-circle"}),Object(t.jsxs)("div",{class:"adicionar-item",children:[Object(t.jsx)("ion-icon",{name:"remove-circle",onClick:function(){!function(e,a,o){var i="."+e,n=document.querySelector(i),c=n.querySelector(".quantidade");if(n.classList.contains("selecionado")){var r=parseInt(c.innerHTML);r-=1,c.innerHTML=r.toString();for(var t=o.slice(0,-1),d=0;d<s[t].length;d++)a===s[t][d].nome&&(s[t][d].quantidade=r,s[t][d].quantidade<=0&&s[t].splice(d,1))}}(e.id,e.nome,e.tipo)}}),Object(t.jsx)("div",{class:"quantidade",children:"1"}),Object(t.jsx)("ion-icon",{name:"add-circle",onClick:function(){!function(e,a,o){var i="."+e,n=document.querySelector(i),c=n.querySelector(".quantidade");if(n.classList.contains("selecionado")){var r=parseInt(c.innerHTML);r+=1,c.innerHTML=r.toString();for(var t=o.slice(0,-1),d=0;d<s[t].length;d++)a===s[t][d].nome&&(s[t][d].quantidade=r)}}(e.id,e.nome,e.tipo)}})]})]})]})}function p(e){var a="opcoes "+e.nome;return Object(t.jsxs)("div",{class:"secao",children:[Object(t.jsx)("div",{class:"titulo",children:e.descricao}),Object(t.jsx)("div",{class:a,children:e.produtos.map((function(a){return Object(t.jsx)(m,{tipo:e.nome,nome:a.name,preco:a.price,id:a.id,descricao:a.description,foto:a.image})}))})]})}function b(){return Object(t.jsx)(c.b,{to:"/revisar",children:Object(t.jsx)("div",{class:"footer",children:Object(t.jsxs)("a",{href:"#",class:"fazer-pedido",children:["Selecione os 3 itens",Object(t.jsx)("br",{}),"para fechar o pedido"]})})})}var j=[{name:"pratos",description:"Primeiro, seu prato",options:[{name:"Frango Yin Yang",description:"Um pouco de batata, um pouco de salada",image:"img/frango_yin_yang.png",price:"14.90",id:"prato-frango"},{name:"Carne Yin Yang",description:"Um pouco de batata, um pouco de salada",image:"img/frango_yin_yang.png",price:"17.90",id:"prato-carne"},{name:"Peixe Yin Yang",description:"Um pouco de batata, um pouco de salada",image:"img/frango_yin_yang.png",price:"16.90",id:"prato-peixe"}]},{name:"bebidas",description:"Agora, sua bebida",options:[{name:"Coquinha gelada",description:"Lata 350 ml",image:"img/coquinha_gelada.png",price:"6.90",id:"bebida-coca"},{name:"Guarana gelado",description:"Lata 350 ml",image:"img/coquinha_gelada.png",price:"4.90",id:"bebida-guarana"},{name:"Suquinho gelado",description:"500 ml",image:"img/coquinha_gelada.png",price:"7.90",id:"bebida-suco"}]},{name:"sobremesas",description:"Por fim, sua sobremesa",options:[{name:"Pudim",description:"Apenas um pudim",image:"img/pudim.png",price:"7.90",id:"sobremesa-pudim"},{name:"Mousse",description:"Cremoso e gostoso",image:"img/pudim.png",price:"6.90",id:"sobremesa-mousse"},{name:"Brownie",description:"\xc9 um bolinho",image:"img/pudim.png",price:"4.90",id:"sobremesa-brownie"}]}];function h(){return Object(t.jsxs)(c.a,{children:[Object(t.jsx)(u,{}),Object(t.jsx)("div",{class:"menu",children:j.map((function(e){return Object(t.jsx)(p,{nome:e.name,descricao:e.description,produtos:e.options})}))}),Object(t.jsx)(b,{}),Object(t.jsx)(r.c,{children:Object(t.jsx)(r.a,{path:"/revisar",children:Object(t.jsx)(l,{})})})]})}n.a.render(Object(t.jsx)(h,{}),document.querySelector(".root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.258ee5f2.chunk.js.map