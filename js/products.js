// ===== Esencja Pet Care — katalog produktów =====
const PRODUCTS = [
  {
    id: "paw-nose-balm",
    name: "Paw & Nose Natural Balm",
    namePl: "Naturalny balsam do łap i nosa",
    category: "pielegnacja",
    price: 45.00,
    volume: "50 ml",
    badge: "Bestseller",
    badgeClass: "",
    img: "assets/img/paw-nose-balm.png",
    short: "Naturalny balsam do suchych i popękanych opuszek łap oraz nosa. Bezzapachowy, bezpieczny przy zlizywaniu.",
    long: "Naturalny balsam stworzony, aby pielęgnować suche i popękane opuszki łap oraz nosy. Wykonany w całości z naturalnych składników, zapewnia długotrwałą pielęgnację i odżywienie. Bezzapachowy i bezpieczny przy ewentualnym zlizywaniu — idealny dla wrażliwych zwierząt domowych.",
    attrs: ["100% naturalne składniki", "Bezpieczny przy zlizywaniu", "Bezzapachowy", "Dla psów i kotów"],
    ingredients: "INCI: Vitis Vinifera Seed Oil, Caprylic/Capric Triglyceride, Olea Europaea Fruit Oil, Glycerin, Helianthus Annuus Seed Oil, Aqua, Propolis Cera Extract, Quillaja Saponaria Wood Extract, Tocopherol, Saponaria Officinalis (Soapwort) Leaf/Root Extract. Składniki: olej z nasion winorośli właściwej, trójglicerydy kaprylowo-kaprynowe, olej z owoców oliwki europejskiej, gliceryna, olej z nasion słonecznika, woda, ekstrakt z propolisu, ekstrakt z mydłodrzewu, tokoferol, ekstrakt z mydlnicy lekarskiej.",
    usage: "Wetrzeć niewielką ilość w opuszki łap lub nos pupila codziennie, aby utrzymać je miękkie i gładkie. Odpowiedni również do pielęgnacji suchych i szorstkich miejsc, takich jak łokcie psów. Tylko do użytku zewnętrznego. Przechowywać w miejscu niedostępnym dla dzieci."
  },
  {
    id: "dental-spray",
    name: "Dental Spray",
    namePl: "Spray do higieny jamy ustnej",
    category: "higiena",
    price: 41.00,
    volume: "100 ml",
    badge: "Nowość",
    badgeClass: "blue",
    img: "assets/img/dental-spray.png",
    short: "Erytrytol i inulina chronią mikrobiom jamy ustnej, ograniczają osad i dają świeży oddech.",
    long: "Formuła opracowana wyłącznie z użyciem składników pochodzenia naturalnego. Zawiera erytrytol oraz inulinę, które chronią mikrobiom jamy ustnej i ograniczają powstawanie osadu nazębnego oraz zapewniają świeży oddech zwierzęcia. Bez stresującego szczotkowania.",
    attrs: ["Składniki pochodzenia naturalnego", "Produkt wegański", "Dla psów i kotów w każdym wieku", "Bez szczotkowania"],
    ingredients: "INCI: Aqua, Fructooligosaccharides, Erythritol, Inulin, Glycerin, Sodium Gluconate, p-Anisic Acid, Polyglycerin-10, Polylysine, Coco-Glucoside, Arginine, Aroma. Składniki: woda, fruktooligosacharydy, erytrytol, inulina, gliceryna, glukonian sodu, kwas p-anyżowy, poligliceryna-10, polilizyna, glukozyd kokosowy, arginina, aromat.",
    usage: "Spryskać bezpośrednio obie strony jamy ustnej zwierzęcia. Produkt do codziennego stosowania, odpowiedni dla psów i kotów w każdym wieku, niezależnie o