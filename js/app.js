// ===== Esencja Pet Care — wspólna logika (koszyk, render, i18n) =====

const CART_KEY = "esencja_cart";
const LANG = localStorage.getItem("epc_lang") || "pl";
function setLang(l){ localStorage.setItem("epc_lang", l); location.reload(); }
function T(pl,en){ return LANG==="en" ? en : pl; }

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
  toast(T("Dodano do koszyka 🐾","Added to cart 🐾"));
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

// product field helpers (bilingual)
function pf(p, field){ if(LANG==="en"){ const v=p[field+"En"]; if(v!==undefined && v!==null && v!=="") return v; } return p[field]; }
function psub(p){ return LANG==="en" ? (p.subEn||"") : (p.namePl||""); }
const BADGE={"Nowość":"New","Ulubieniec":"Favourite","Dla szczeniąt":"For puppies","Po spacerze":"After a walk","Zestaw −6%":"Bundle −6%","Zestaw −5%":"Bundle −5%","Mega zestaw −10%":"Mega bundle −10%"};
function pbadge(p){ return LANG==="en" ? (BADGE[p.badge]||p.badge) : p.badge; }

function toast(msg){
  const m = (LANG==="en" && DICT[norm(msg)]) ? DICT[norm(msg)] : msg;
  let t = document.getElementById("toast");
  if(!t){ t = document.createElement("div"); t.id="toast"; document.body.appendChild(t); }
  t.textContent = m;
  t.classList.add("show");
  clearTimeout(t._tm);
  t._tm = setTimeout(()=>t.classList.remove("show"), 2200);
}

// ---- product card HTML ----
function productCard(p){
  const cta = T("Do koszyka","Add to cart");
  return `
  <div class="card">
    <a href="produkt.html?id=${p.id}" class="imgwrap">
      ${p.badge ? `<span class="badge ${p.badgeClass}">${pbadge(p)}</span>` : ""}
      <img src="${p.img}" alt="${p.name}" loading="lazy"
           onerror="this.onerror=null;this.src='assets/img/placeholder.svg'">
    </a>
    <div class="card-body">
      <h3><a href="produkt.html?id=${p.id}">${p.name}</a></h3>
      <div class="desc">${psub(p)}. ${pf(p,"short")}</div>
      <div class="price-row">
        <span class="price">${p.oldPrice ? `<s class="old-price">${money(p.oldPrice)}</s> ` : ""}${money(p.price)} <span class="vol">/ ${p.volume}</span></span>
        <button class="btn sm" onclick="addToCart('${p.id}')">${cta}</button>
      </div>
    </div>
  </div>`;
}

function renderGrid(elId, list){
  const el = document.getElementById(elId);
  if(el) el.innerHTML = list.filter(p=>!p.hidden).map(productCard).join("");
}

/* =========================================================
   i18n — słownik PL → EN + tłumaczenie DOM
   ========================================================= */
function norm(s){ return (s||"").replace(/ /g," ").replace(/\s+/g," ").trim(); }
const DICT = {
  // nav / topbar / footer
  "Strona główna":"Home","Sklep":"Shop","O nas":"About","Kontakt":"Contact",
  "🚚 Darmowa dostawa od 149 zł • 🐾 Gratis-próbka w każdej paczce":"🚚 Free shipping over 149 zł • 🐾 Free sample in every parcel",
  "Wszystkie produkty":"All products","Pielęgnacja":"Care","Higiena":"Hygiene","Kąpiel":"Bath",
  "Informacje":"Information","Regulamin":"Terms","Polityka prywatności":"Privacy policy","Dostawa i zwroty":"Shipping & returns",
  "Polskie, naturalne kosmetyki dla psów i kotów. Tworzone z miłości — dla tych, którzy kochają bezwarunkowo.":"Polish, natural cosmetics for dogs and cats. Made with love — for those who love unconditionally.",
  "© 2026 Esencja Pet Care. Wszystkie prawa zastrzeżone.":"© 2026 Esencja Pet Care. All rights reserved.",
  // home hero / buttons
  "Esencja Pet Care to polskie, naturalne kosmetyki dla psów i kotów — bez parabenów, silikonów i zbędnej chemii. Tylko to, co naprawdę potrzebne.":"Esencja Pet Care is a Polish brand of natural cosmetics for dogs and cats — free from parabens, silicones and needless chemistry. Only what your pet truly needs.",
  "Zobacz produkty":"Shop products","Poznaj markę":"Discover the brand",
  // trust
  "Składniki naturalne":"Natural ingredients","pochodzenia roślinnego":"of plant origin",
  "Polska marka":"Polish brand","tworzone z miłością w Polsce":"made with love in Poland",
  "Darmowa dostawa":"Free shipping","przy zamówieniu od 149 zł":"on orders over 149 zł",
  "14 dni na zwrot":"14-day returns","bez podawania przyczyny":"no reason needed",
  // sections
  "Nasze produkty":"Our products","Wszystko, czego potrzebuje Twój pupil — od łap aż po uśmiech":"Everything your pet needs — from paws to smile",
  "Dlaczego Esencja?":"Why Esencja?","Bo czytamy etykiety tak samo uważnie, jak Ty":"Because we read labels as carefully as you do",
  "Przemyślane receptury":"Thoughtful formulas",
  "Krótkie, czytelne składy bez parabenów, silikonów i sztucznych barwników. Kompozycje zapachowe wolne od alergenów.":"Short, clear ingredient lists — no parabens, silicones or artificial dyes. Allergen-free fragrances.",
  "Produkty wegańskie":"Vegan products",
  "Składniki pochodzenia naturalnego i roślinnego. Zrównoważone pH dopasowane do skóry psów i kotów.":"Ingredients of natural, plant-based origin. Balanced pH suited to the skin of dogs and cats.",
  "Tworzone z miłości":"Made with love",
  "Esencja powstała z potrzeby serca — chcieliśmy dla naszych zwierząt tego, co najlepsze. Teraz dzielimy się tym z Wami.":"Esencja was born from the heart — we wanted the best for our own animals. Now we share it with you.",
  "Jesteśmy polską marką rodzinnną. Wierzymy, że pielęgnacja zwierząt nie wymaga długiej listy chemicznych dodatków — wystarczy kilka dobrze dobranych, naturalnych składników.":"We're a Polish family brand. We believe pet care doesn't need a long list of chemical additives — a few well-chosen natural ingredients are enough.",
  "Każdy produkt testujemy najpierw na… własnych psach-łasuchach, które niczego nie podpiszą, ale wszystko szczerze ocenią merdaniem ogona.":"We test every product first on… our own snack-loving dogs, who won't sign anything but honestly rate it all with a wag of the tail.",
  "Nasza historia":"Our story",
  "Opinie opiekunów":"Owner reviews","Najważniejsza recenzja to merdający ogon — ale te też nas cieszą":"The best review is a wagging tail — but these make us happy too",
  "Dołącz do sfory 🐕":"Join the pack 🐕","Zapisuję się":"Subscribe","Twój adres e-mail":"Your email address",
  // shop
  "Naturalne kosmetyki dla psów i kotów":"Natural cosmetics for dogs and cats",
  "Wszystkie":"All","Pielęgnacja łap i nosa":"Paw & nose care","Higiena jamy ustnej":"Oral hygiene",
  "Kosmetyki dla psa — naturalna pielęgnacja od łap po świeży oddech":"Dog cosmetics — natural care from paws to fresh breath",
  // product page
  "Może też polubicie":"You may also like","Inne produkty Esencja Pet Care":"Other Esencja Pet Care products",
  "Skład":"Ingredients","Sposób użycia":"How to use","Dodaj do koszyka 🐾":"Add to cart 🐾",
  "Wysyłka w 24 h (InPost, kurier). Darmowa dostawa od 149 zł. Masz 14 dni na zwrot bez podawania przyczyny.":"Shipped within 24 h (InPost, courier). Free delivery over 149 zł. 14 days to return, no reason needed.",
  // cart
  "Twój koszyk":"Your cart","Sprawdź zamówienie i wybierz dostawę":"Review your order and choose delivery",
  "Koszyk jest pusty…":"Your cart is empty…","a Twój pupil już merda ogonem z niecierpliwości!":"and your pet is already wagging its tail with excitement!",
  "Przejdź do sklepu":"Go to shop","Dane do wysyłki":"Shipping details",
  "Imię i nazwisko *":"Full name *","E-mail *":"E-mail *","Telefon *":"Phone *","Kod pocztowy *":"Postal code *",
  "Ulica i numer *":"Street and number *","Miasto *":"City *","Dostawa":"Delivery","Płatność":"Payment",
  "Uwagi do zamówienia":"Order notes","Podsumowanie":"Summary","Wartość produktów":"Products value","Razem":"Total",
  "Zamawiam i płacę":"Order & pay","Usuń":"Remove","Do koszyka":"Add to cart",
  "Dziękujemy za zamówienie!":"Thank you for your order!","Wróć do sklepu":"Back to shop",
  "Wysyłanie zamówienia…":"Sending order…","Nie udało się wysłać 😿 Napisz: info@esencjapetcare.eu":"Couldn't send 😿 Email: info@esencjapetcare.eu",
  // contact
  "Odpowiadamy zwykle w ciągu 24 godzin":"We usually reply within 24 hours",
  "📧 Napisz do nas":"📧 Write to us","📱 Zadzwoń":"📱 Call us","📍 Adres":"📍 Address","🐾 Social media":"🐾 Social media",
  "Formularz kontaktowy":"Contact form","Imię *":"Name *","Temat":"Subject","Wiadomość *":"Message *","Wyślij wiadomość":"Send message",
  "Pytanie o produkt":"Product question","Zamówienie i dostawa":"Order & delivery","Zwrot / reklamacja":"Return / complaint","Współpraca":"Collaboration","Inne":"Other",
  "pon.–pt. 9:00–17:00":"Mon–Fri 9:00–17:00","Wiadomość wysłana! Odpowiemy wkrótce 🐾":"Message sent! We'll reply soon 🐾",
  // reviews
  "„Balsam do łap uratował nas zimą! Popękane poduszki zagoiły się w kilka dni, a Bruno nawet nie próbuje go zlizywać… no dobrze, próbuje, ale może — jest bezpieczny 😄”":"“The paw balm saved us this winter! Cracked pads healed in a few days, and Bruno doesn't even try to lick it off… well, he does, but he can — it's safe 😄”",
  "„Dental Spray to wybawienie — mój york nigdy nie dał sobie szczotkować zębów. Po dwóch tygodniach oddech naprawdę świeższy, a stosowanie zajmuje 5 sekund.”":"“Dental Spray is a lifesaver — my Yorkie never let me brush his teeth. After two weeks his breath is genuinely fresher, and it takes 5 seconds.”",
  "„Szampon Anti Odour faktycznie neutralizuje zapach psa, a nie przykrywa go perfumami. Sierść miękka i lśniąca, a skład krótki i czytelny. Polecam!”":"“The Anti Odour shampoo actually neutralises dog smell instead of masking it with perfume. Coat soft and shiny, ingredients short and clear. Recommend!”",
  "„Pianka do łap to nasz codzienny rytuał po spacerze. Silikonowa szczoteczka dociera między opuszki, błoto znika bez kąpieli. Parkiet w końcu czysty!”":"“The paw foam is our daily post-walk ritual. The silicone brush reaches between the pads, mud gone without a bath. The floor is finally clean!”",
  "„Puppy Shampoo kupiłam dla 3-miesięcznej Tosi. Bezzapachowy, nie szczypie, a mała pierwszy raz nie trzęsła się w kąpieli. Skóra bez podrażnień.”":"“I bought Puppy Shampoo for 3-month-old Tosia. Fragrance-free, no sting, and for the first time she didn't shiver in the bath. No skin irritation.”",
  "„Zamówiłam cały zestaw — szybka wysyłka, ładnie zapakowane, w paczce próbka gratis. Widać, że marka robiona z sercem. Wracam na pewno.”":"“I ordered the whole set — fast shipping, nicely packed, a free sample in the parcel. You can tell it's a brand made with heart. I'll be back for sure.”"
};
const SPECIAL = [
  [".hero h1", "Natural care<br>your dog deserves 🐾"],
  [".about-grid h2", "The essence of<br>what's natural"]
];
const SEO_EN = {
  "Naturalne kosmetyki dla psów i kotów — Esencja Pet Care": `<h2 class="serif" style="font-size:1.5rem;margin-bottom:14px">Natural cosmetics for dogs and cats — Esencja Pet Care</h2>
    <p>Looking for <b>natural dog cosmetics</b> that really work? Esencja Pet Care is a Polish care brand created out of love for animals. Our range includes a <b>natural dog shampoo</b> that neutralises odours, a <b>very gentle puppy shampoo</b> with balanced pH, a <b>dog paw and nose balm</b> for dry, cracked pads, a <b>no-rinse paw-cleaning foam</b> and an <b>oral hygiene spray for dogs and cats</b> that keeps breath fresh without brushing.</p>
    <p>All our products are built on <b>ingredients of natural origin</b> — free from parabens, silicones and artificial dyes. Esencja cosmetics are <b>vegan</b>, with a <b>balanced pH</b> suited to the skin of dogs and cats, and allergen-free fragrances. Products like the paw balm are <b>safe if licked</b>, so you can use them with peace of mind.</p>
    <p>Caring for your dog has never been easier: after an autumn walk, the paw foam with its silicone brush is all you need; in winter, a protective balm for pads exposed to road salt and frost; and a daily spritz of dental spray looks after your pet's teeth and gums. Order online with delivery across Poland — <b>free shipping from 149 zł</b>, and a little free gift in every parcel. 🐾</p>`,
  "Kosmetyki dla psa — naturalna pielęgnacja od łap po świeży oddech": `<h2 class="serif" style="font-size:1.4rem;margin-bottom:14px">Dog cosmetics — natural care from paws to fresh breath</h2>
    <p>At the Esencja Pet Care shop you'll find complete <b>care for dogs and cats</b>: a <b>natural dog shampoo</b> with zinc ricinoleate that absorbs even the toughest odours, an <b>extra-gentle puppy shampoo</b> with oat and calendula extract, a <b>regenerating paw and nose balm</b> based on grape-seed oil and propolis, a <b>paw-cleaning foam</b> with a silicone brush, and a <b>dental spray for dogs and cats</b> with erythritol and inulin.</p>
    <p>All cosmetics are <b>vegan</b>, based on <b>ingredients of natural origin</b> and made in the EU. Free shipping from 149 zł, dispatch within 24 h, 14-day returns.</p>`
};
function translateEl(root){
  const w=document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const nodes=[]; while(w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach(n=>{ const k=norm(n.nodeValue); if(k && DICT[k]!==undefined) n.nodeValue = n.nodeValue.replace(/\S[\s\S]*\S|\S/, DICT[k]); });
  root.querySelectorAll?.("input[placeholder],textarea[placeholder]").forEach(el=>{ const k=norm(el.placeholder); if(DICT[k]!==undefined) el.placeholder=DICT[k]; });
}
function applyI18n(){
  if(LANG!=="en") return;
  document.documentElement.lang="en";
  SPECIAL.forEach(([sel,html])=>{ const el=document.querySelector(sel); if(el) el.innerHTML=html; });
  document.querySelectorAll(".seo-text .container").forEach(c=>{ const h=c.querySelector("h2"); if(!h) return; const k=norm(h.textContent); if(SEO_EN[k]) c.innerHTML=SEO_EN[k]; });
  translateEl(document.body);
  const mo=new MutationObserver(muts=>{ muts.forEach(m=>m.addedNodes.forEach(nd=>{ if(nd.nodeType===1) translateEl(nd); else if(nd.nodeType===3){ const k=norm(nd.nodeValue); if(DICT[k]!==undefined) nd.nodeValue=nd.nodeValue.replace(/\S[\s\S]*\S|\S/, DICT[k]); } })); });
  mo.observe(document.body,{childList:true,subtree:true});
}
function buildLangSwitcher(){
  const host=document.querySelector(".nav-actions"); if(!host||document.getElementById("langSw")) return;
  const b=document.createElement("button");
  b.id="langSw"; b.type="button";
  b.style.cssText="background:transparent;border:1px solid rgba(74,55,40,.35);border-radius:20px;padding:5px 10px;margin-right:8px;cursor:pointer;font-weight:800;font-size:.8rem;color:inherit;letter-spacing:.5px";
  b.textContent = LANG==="en" ? "PL" : "EN";
  b.title = LANG==="en" ? "Przełącz na polski" : "Switch to English";
  b.onclick=()=>setLang(LANG==="en"?"pl":"en");
  host.insertBefore(b, host.firstChild);
}

// ---- boot ----
document.addEventListener("DOMContentLoaded", ()=>{
  updateCartBadge();
  buildLangSwitcher();
  applyI18n();
  const burger = document.querySelector(".burger");
  if(burger){ burger.addEventListener("click", ()=>{ document.querySelector("nav.menu").classList.toggle("open"); }); }
});
