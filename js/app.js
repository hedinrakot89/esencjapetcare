// ===== Esencja Pet Care — wspólna logika (koszyk, render) =====

const CART_KEY = "esencja_cart";

function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }catch(e){ return {}; } }
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartBadge(); }
function cartCount(){ return Object.values(getCart()).reduce((a,b)=>a+b,0); }
function cartTotal(){
  const c = getCart();
  return Object.entries(c).reduce((sum,[id,qty])=>{
    const p = PRODUCTS.find(p=>p.id===id);
    return p ? sum + p.price*qty : sum;
  },0);
}
function addToCart(id, qty=1){
  const c = getCart();
  c[id] = (c[id]||0) + qty;
  saveCart(c);
  toast("Dodano do koszyka 🐾");
}
function setQty(id, qty){
  const c = getCart();
  if(qty<=0) delete c[id]; else c[id]=qty;
  saveCart(c);
}
function removeFromCart(id){ setQty(id,0); }
function clearCart(){ localStorage.removeItem(CART_KEY); updateCartBadge(); }

function money(v){ return v.toFixed(2).replace(".",",") + " zł"; }

function updateCartBadge(){
  document.querySelectorAll(".cart-count").forEach(el=>{ el.textContent = cartCount(); });
}

function toast(msg){
  let t = document.getElementById("toast");
  if(!t){ t = document.createElement("div"); t.id="toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._tm);
  t._tm = setTimeout(()=>t.classList.remove("show"), 2200);
}

// ---- product card HTML ----
function productCard(p){
  return `
  <div class="card">
    <a href="produkt.html?id=${p.id}" class="imgwrap">
      ${p.badge ? `<span class="badge ${p.badgeClass}">${p.badge}</span>` : ""}
      <img src="${p.img}" alt="${p.name}" loading="lazy"
           onerror="this.onerror=null;this.src='assets/img/placeholder.svg'">
    </a>
    <div class="card-body">
      <h3><a href="produkt.html?id=${p.id}">${p.name}</a></h3>
      <div class="desc">${p.namePl}. ${p.short}</div>
      <div class="price-row">
        <span class="price">${p.oldPrice ? `<s class="old-price">${money(p.oldPrice)}</s> ` : ""}${money(p.price)} <span class="vol">/ ${p.volume}</span></span>
        <button class="btn sm" onclick="addToCart('${p.id}')">Do koszyka</button>
      </div>
    </div>
  </div>`;
}

function renderGrid(elId, list){
  const el = document.getElementById(elId);
  if(el) el.innerHTML = list.map(productCard).join("");
}

// ---- burger menu ----
document.addEventListener("DOMContentLoaded", ()=>{
  updateCartBadge();
  const burger = document.querySelector(".burger");
  if(burger){
    burger.addEventListener("click", ()=>{
      document.querySelector("nav.menu").classList.toggle("open");
    });
  }
});
