/* 오늘장 마켓 데모: 상품 목록·장바구니·주문·로그인 (localStorage). 데이터라이즈 독립몰 가이드 규격:
   - 로그인 시 <meta name="user_id">에 회원 ID
   - 상품 노출 링크에 data-dtr-track="상품ID"  */
var PRODUCTS=[
 {id:"1001",name:"유기농 방울토마토 1kg",price:9800,cat:"채소",emoji:"🍅",img:"#fde2dc"},
 {id:"1002",name:"제주 노지 감귤 3kg",price:15900,cat:"과일",emoji:"🍊",img:"#ffe9c7"},
 {id:"1003",name:"무항생제 한돈 삼겹살 600g",price:18900,cat:"정육",emoji:"🥩",img:"#f9dcdc"},
 {id:"1004",name:"동물복지 유정란 15구",price:8900,cat:"계란",emoji:"🥚",img:"#f3ecd9"},
 {id:"1005",name:"국내산 생새우 500g",price:21900,cat:"수산",emoji:"🦐",img:"#ffe4d1"},
 {id:"1006",name:"강릉 수제 잼 3종 세트",price:24000,cat:"가공",emoji:"🫙",img:"#e7e3f6"},
 {id:"1007",name:"즉석 소고기 미역국 4팩",price:12900,cat:"간편식",emoji:"🍲",img:"#e3f0e6"},
 {id:"1008",name:"햇살 품은 백미 10kg",price:34900,cat:"쌀",emoji:"🌾",img:"#f6efd3"},
 {id:"1009",name:"흑돼지 양념 불고기 1kg",price:16900,cat:"정육",emoji:"🍖",img:"#f6dfd4"},
 {id:"1010",name:"아삭 사과 2kg",price:13900,cat:"과일",emoji:"🍎",img:"#fde3e3"},
 {id:"1011",name:"구운 김 24봉",price:11900,cat:"가공",emoji:"🍙",img:"#e0ebe3"},
 {id:"1012",name:"콜드브루 원액 1L",price:14900,cat:"음료",emoji:"🧋",img:"#eadfd3"}
];
function won(n){return n.toLocaleString("ko-KR")+"원"}
function store(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k)||"null");localStorage.setItem(k,JSON.stringify(v));}catch(e){return null}}
function cart(){return store("cart")||[]}
function cartCount(){return cart().reduce(function(s,i){return s+i.qty},0)}
function user(){return store("user")}
function setMetaUser(){var u=user();var m=document.querySelector('meta[name="user_id"]');if(!m){m=document.createElement("meta");m.name="user_id";document.head.appendChild(m);}m.content=u?u.id:"";}
function header(){
  var u=user();
  document.getElementById("hdr").innerHTML='<div class="bar"><a class="logo" href="./">오늘장 마켓</a><nav><a href="?cat=채소">채소</a><a href="?cat=과일">과일</a><a href="?cat=정육">정육</a><a href="?cat=간편식">간편식</a></nav><span class="sp"></span><span class="user">'+(u?u.name+'님 · <a href="login.html">로그아웃</a>':'<a href="login.html">로그인</a>')+'</span><a href="cart.html">장바구니<span class="badge" id="cc">'+cartCount()+'</span></a></div>';
}
function card(p){return '<a class="p" href="product.html?id='+p.id+'" data-dtr-track="'+p.id+'"><div class="img" style="--img:'+p.img+'">'+p.emoji+'</div><div class="b"><div class="n">'+p.name+'</div><div class="pr"><b>'+won(p.price)+'</b> · '+p.cat+'</div></div></a>'}
function addToCart(id,qty){var c=cart(),f=c.find(function(i){return i.id===id});if(f)f.qty+=qty;else c.push({id:id,qty:qty});store("cart",c);header();}
function qs(k){return new URLSearchParams(location.search).get(k)}
setMetaUser();
document.addEventListener("DOMContentLoaded",function(){header();if(window.page)window.page();});
