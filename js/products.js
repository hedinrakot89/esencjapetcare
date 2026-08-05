// ===== Esencja Pet Care — katalog produktów =====
const PRODUCTS = [
  {
    "id": "paw-nose-balm",
    "name": "Paw & Nose Natural Balm",
    "namePl": "Naturalny balsam do łap i nosa",
    "category": "pielegnacja",
    "price": 45,
    "volume": "50 ml",
    "badge": "Bestseller",
    "badgeClass": "",
    "img": "assets/img/paw-nose-balm.png",
    "short": "Naturalny balsam do suchych i popękanych opuszek łap oraz nosa. Bezzapachowy, bezpieczny przy zlizywaniu.",
    "long": "Naturalny balsam stworzony, aby pielęgnować suche i popękane opuszki łap oraz nosy. Wykonany w całości z naturalnych składników, zapewnia długotrwałą pielęgnację i odżywienie. Bezzapachowy i bezpieczny przy ewentualnym zlizywaniu — idealny dla wrażliwych zwierząt domowych.",
    "attrs": [
      "100% naturalne składniki",
      "Bezpieczny przy zlizywaniu",
      "Bezzapachowy",
      "Dla psów i kotów"
    ],
    "ingredients": "INCI: Vitis Vinifera Seed Oil, Caprylic/Capric Triglyceride, Olea Europaea Fruit Oil, Glycerin, Helianthus Annuus Seed Oil, Aqua, Propolis Cera Extract, Quillaja Saponaria Wood Extract, Tocopherol, Saponaria Officinalis (Soapwort) Leaf/Root Extract. Składniki: olej z nasion winorośli właściwej, trójglicerydy kaprylowo-kaprynowe, olej z owoców oliwki europejskiej, gliceryna, olej z nasion słonecznika, woda, ekstrakt z propolisu, ekstrakt z mydłodrzewu, tokoferol, ekstrakt z mydlnicy lekarskiej.",
    "usage": "Wetrzeć niewielką ilość w opuszki łap lub nos pupila codziennie, aby utrzymać je miękkie i gładkie. Odpowiedni również do pielęgnacji suchych i szorstkich miejsc, takich jak łokcie psów. Tylko do użytku zewnętrznego. Przechowywać w miejscu niedostępnym dla dzieci.",
    "subEn": "Natural paw & nose balm",
    "shortEn": "Natural balm for dry, cracked paw pads and noses. Fragrance-free and safe if licked.",
    "longEn": "A natural balm made to care for dry and cracked paw pads and noses. Made entirely from natural ingredients, it provides long-lasting care and nourishment. Fragrance-free and safe if licked — ideal for sensitive pets.",
    "attrsEn": [
      "100% natural ingredients",
      "Safe if licked",
      "Fragrance-free",
      "For dogs and cats"
    ],
    "usageEn": "Rub a small amount into your pet's paw pads or nose daily to keep them soft and smooth. Also suitable for dry, rough spots such as dogs' elbows. External use only. Keep out of reach of children.",
    "ingredientsEn": "INCI: Vitis Vinifera Seed Oil, Caprylic/Capric Triglyceride, Olea Europaea Fruit Oil, Glycerin, Helianthus Annuus Seed Oil, Aqua, Propolis Cera Extract, Quillaja Saponaria Wood Extract, Tocopherol, Saponaria Officinalis (Soapwort) Leaf/Root Extract."
  },
  {
    "id": "dental-spray",
    "name": "Dental Spray",
    "namePl": "Spray do higieny jamy ustnej",
    "category": "higiena",
    "price": 41,
    "volume": "100 ml",
    "badge": "Nowość",
    "badgeClass": "blue",
    "img": "assets/img/dental-spray.png",
    "short": "Erytrytol i inulina chronią mikrobiom jamy ustnej, ograniczają osad i dają świeży oddech.",
    "long": "Formuła opracowana wyłącznie z użyciem składników pochodzenia naturalnego. Zawiera erytrytol oraz inulinę, które chronią mikrobiom jamy ustnej i ograniczają powstawanie osadu nazębnego oraz zapewniają świeży oddech zwierzęcia. Bez stresującego szczotkowania.",
    "attrs": [
      "Składniki pochodzenia naturalnego",
      "Produkt wegański",
      "Dla psów i kotów w każdym wieku",
      "Bez szczotkowania"
    ],
    "ingredients": "INCI: Aqua, Fructooligosaccharides, Erythritol, Inulin, Glycerin, Sodium Gluconate, p-Anisic Acid, Polyglycerin-10, Polylysine, Coco-Glucoside, Arginine, Aroma. Składniki: woda, fruktooligosacharydy, erytrytol, inulina, gliceryna, glukonian sodu, kwas p-anyżowy, poligliceryna-10, polilizyna, glukozyd kokosowy, arginina, aromat.",
    "usage": "Spryskać bezpośrednio obie strony jamy ustnej zwierzęcia. Produkt do codziennego stosowania, odpowiedni dla psów i kotów w każdym wieku, niezależnie od rasy i wielkości. Dla uzyskania najlepszych efektów stosować regularnie jako element codziennej pielęgnacji.",
    "subEn": "Oral hygiene spray",
    "shortEn": "Erythritol and inulin protect the oral microbiome, reduce plaque and freshen breath.",
    "longEn": "A formula developed exclusively with ingredients of natural origin. It contains erythritol and inulin, which protect the oral microbiome, limit plaque build-up and keep your pet's breath fresh — no stressful brushing.",
    "attrsEn": [
      "Ingredients of natural origin",
      "Vegan product",
      "For dogs and cats of any age",
      "No brushing needed"
    ],
    "usageEn": "Spray directly onto both sides of your pet's mouth. For daily use, suitable for dogs and cats of any age, breed or size. For best results, use regularly as part of daily care.",
    "ingredientsEn": "INCI: Aqua, Fructooligosaccharides, Erythritol, Inulin, Glycerin, Sodium Gluconate, p-Anisic Acid, Polyglycerin-10, Polylysine, Coco-Glucoside, Arginine, Aroma."
  },
  {
    "id": "anti-odour-shampoo",
    "name": "Anti Odour Pet Shampoo",
    "namePl": "Naturalny szampon neutralizujący zapachy",
    "category": "kapiel",
    "price": 37,
    "volume": "250 ml",
    "badge": "Ulubieniec",
    "badgeClass": "green",
    "img": "assets/img/anti-odour-shampoo.png",
    "short": "Rycynoleinian cynku pochłania nawet najtrudniejsze zapachy. Zrównoważone pH, delikatne mycie.",
    "long": "Naturalny szampon o zrównoważonym pH, przeznaczony do neutralizacji nawet najtrudniejszych zapachów, pozostawiający sierść świeżą i czystą. Formuła oparta na naturalnym rycynoleinianie cynku skutecznie pochłania nieprzyjemne zapachy, a łagodne składniki myjące zapewniają delikatne oczyszczanie bez podrażnień.",
    "attrs": [
      "Zrównoważone pH",
      "Produkt wegański",
      "Kompozycja zapachowa wolna od alergenów",
      "Składniki pochodzenia naturalnego"
    ],
    "ingredients": "INCI: Aqua, Sodium Olivoyl Glutamate, Disodium Cocoyl Glutamate, Lauryl Glucoside, Cellulose Gum, Zinc Ricinoleate, Tetrasodium Glutamate Diacetate, Sodium Gluconate, Propanediol, Caprylyl Glycol, Caprylhydroxamic Acid, Glycerin, Parfum, Ethyl Lauroyl Arginate HCl, Citric Acid. Składniki: woda, oliwoiloglutaminian sodu, kokoiloglutaminian disodowy, glukozyd laurylowy, guma celulozowa, rycynoleinian cynku, dioctan glutaminianu tetrasodowego, glukonian sodu, propanodiol, glikol kaprylowy, kwas kaprylohydroksamowy, gliceryna, kompozycja zapachowa, chlorowodorek estru etylowego lauroiloargininy, kwas cytrynowy.",
    "usage": "Delikatnie wmasować w mokrą sierść. Dokładnie spłukać i w razie potrzeby powtórzyć czynność. Produkt odpowiedni do częstego stosowania.",
    "subEn": "Natural odour-neutralising shampoo",
    "shortEn": "Zinc ricinoleate absorbs even the toughest odours. Balanced pH, gentle cleansing.",
    "longEn": "A natural, pH-balanced shampoo designed to neutralise even the toughest odours, leaving the coat fresh and clean. Built on natural zinc ricinoleate, it effectively absorbs unpleasant smells, while mild cleansing agents ensure gentle cleaning without irritation.",
    "attrsEn": [
      "Balanced pH",
      "Vegan product",
      "Allergen-free fragrance",
      "Ingredients of natural origin"
    ],
    "usageEn": "Gently massage into wet fur. Rinse thoroughly and repeat if needed. Suitable for frequent use.",
    "ingredientsEn": "INCI: Aqua, Sodium Olivoyl Glutamate, Disodium Cocoyl Glutamate, Lauryl Glucoside, Cellulose Gum, Zinc Ricinoleate, Tetrasodium Glutamate Diacetate, Sodium Gluconate, Propanediol, Caprylyl Glycol, Caprylhydroxamic Acid, Glycerin, Parfum, Ethyl Lauroyl Arginate HCl, Citric Acid."
  },
  {
    "id": "puppy-shampoo",
    "name": "Puppy Shampoo Extra Sensitive",
    "namePl": "Szampon dla szczeniąt — bardzo delikatny",
    "category": "kapiel",
    "price": 49,
    "volume": "250 ml",
    "badge": "Dla szczeniąt",
    "badgeClass": "green",
    "img": "assets/img/puppy-shampoo.png",
    "short": "Łagodny szampon o zbalansowanym pH na pierwsze kąpiele. Bezzapachowy, wolny od alergenów.",
    "long": "Łagodny szampon o zbalansowanym pH, stworzony z naturalnych i wegańskich składników, aby delikatnie oczyszczać sierść oraz skórę szczenięcia, dbając o jej naturalną barierę ochronną. Wzbogacony kojącą mieszanką ekstraktów z ziarna owsa i nagietka, które łagodzą podrażnienia. Produkt bezzapachowy, wolny od alergenów zapachowych, zapewniający czystą i bezpieczną pielęgnację.",
    "attrs": [
      "Extra Sensitive",
      "Zrównoważone pH",
      "Produkt wegański",
      "Bezzapachowy"
    ],
    "ingredients": "INCI: Aqua, Disodium cocoyl glutamate, Sodium olivoyl glutamate, Glycerin, Cellulose gum, Lauryl glucoside, Sodium chloride, Sodium gluconate, Caprylyl Glycol, Glyceryl caprylate, Dipropylene glycol, Ethyl Lauroyl Arginate HCl, Calendula officinalis Flower Extract, Avena sativa (Oat) Kernel Extract, Sodium benzoate, Potassium sorbate, Citric acid.",
    "usage": "Delikatnie wmasować w mokrą sierść. Spłukać i w razie potrzeby powtórzyć czynność. Odpowiedni do częstego stosowania.",
    "subEn": "Puppy shampoo — extra gentle",
    "shortEn": "A mild, pH-balanced shampoo for first baths. Fragrance-free and allergen-free.",
    "longEn": "A mild, pH-balanced shampoo made from natural, vegan ingredients to gently cleanse a puppy's coat and skin while protecting its natural barrier. Enriched with a soothing blend of oat kernel and calendula extracts that calm irritation. Fragrance-free, free from fragrance allergens — clean, safe care.",
    "attrsEn": [
      "Extra Sensitive",
      "Balanced pH",
      "Vegan product",
      "Fragrance-free"
    ],
    "usageEn": "Gently massage into wet fur. Rinse and repeat if needed. Suitable for frequent use.",
    "ingredientsEn": "INCI: Aqua, Disodium Cocoyl Glutamate, Sodium Olivoyl Glutamate, Glycerin, Cellulose Gum, Lauryl Glucoside, Sodium Chloride, Sodium Gluconate, Caprylyl Glycol, Glyceryl Caprylate, Dipropylene Glycol, Ethyl Lauroyl Arginate HCl, Calendula Officinalis Flower Extract, Avena Sativa (Oat) Kernel Extract, Sodium Benzoate, Potassium Sorbate, Citric Acid."
  },
  {
    "id": "paw-cleaning-foam",
    "name": "Paw Cleaning Foam",
    "namePl": "Pianka do pielęgnacji łap",
    "category": "pielegnacja",
    "price": 44,
    "volume": "200 ml",
    "badge": "Po spacerze",
    "badgeClass": "",
    "img": "assets/img/paw-cleaning-foam.png",
    "short": "Łagodna pianka do mycia łap bez spłukiwania — z silikonową szczoteczką w zestawie.",
    "long": "Łagodna pianka do mycia łap psa bez spłukiwania, stworzona na bazie składników pochodzenia naturalnego. Puszysta formuła w połączeniu z miękką silikonową szczoteczką pozwala na precyzyjne i skuteczne oczyszczenie trudno dostępnych miejsc, nie naruszając przy tym naturalnej bariery ochronnej i lipidowej łap Twojego psa.",
    "attrs": [
      "Składniki pochodzenia naturalnego",
      "Produkt wegański",
      "Nietestowane na zwierzętach",
      "Bez spłukiwania"
    ],
    "ingredients": "INCI: Aqua, Sodium Olivoyl Glutamate, Disodium Cocoyl Glutamate, Betaine, Sodium Gluconate, Lactobacillus ferment, Citric Acid, Propanediol, Caprylyl Glycol, Caprylhydroxamic Acid.",
    "usage": "Zdejmij nasadkę i naciśnij pompkę, aby nanieść piankę na miękkie silikonowe wypustki załączonej szczoteczki. Delikatnie wmasuj piankę w łapy psa oraz przestrzenie między opuszkami, wykonując okrężne ruchy. Wytrzyj do sucha — produkt nie wymaga spłukiwania. Stosuj po każdym spacerze lub w zależności od potrzeb. Po użyciu zdejmij osłonkę szczoteczki i wypłucz wypustki pod ciepłą wodą.",
    "subEn": "Paw care foam",
    "shortEn": "A gentle no-rinse paw-cleaning foam — silicone brush included.",
    "longEn": "A gentle no-rinse foam for cleaning a dog's paws, made with ingredients of natural origin. The fluffy formula together with the soft silicone brush allows precise, effective cleaning of hard-to-reach spots without disturbing the natural protective and lipid barrier of your dog's paws.",
    "attrsEn": [
      "Ingredients of natural origin",
      "Vegan product",
      "Not tested on animals",
      "No rinsing needed"
    ],
    "usageEn": "Remove the cap and press the pump to apply foam onto the soft silicone tips of the included brush. Gently massage the foam into the paws and between the pads with circular motions. Wipe dry — no rinsing required. Use after every walk or as needed. After use, remove the brush cover and rinse the tips under warm water.",
    "ingredientsEn": "INCI: Aqua, Sodium Olivoyl Glutamate, Disodium Cocoyl Glutamate, Betaine, Sodium Gluconate, Lactobacillus Ferment, Citric Acid, Propanediol, Caprylyl Glycol, Caprylhydroxamic Acid."
  },
  {
    "id": "zestaw-spacerowicz",
    "name": "Zestaw Spacerowicz",
    "namePl": "Pianka do łap + Balsam do łap i nosa",
    "category": "zestawy",
    "price": 83.9,
    "oldPrice": 89,
    "volume": "200 ml + 50 ml",
    "badge": "Zestaw −6%",
    "badgeClass": "",
    "img": "assets/img/zestaw-spacerowicz.png",
    "short": "Duet na każdy spacer: pianka czyści łapy bez kąpieli, balsam regeneruje i chroni opuszki.",
    "long": "Kompletna pielęgnacja łap w jednym zestawie. Po spacerze pianka z silikonową szczoteczką błyskawicznie usuwa błoto, kurz i sól drogową, a naturalny balsam regeneruje i natłuszcza opuszki oraz nos. Idealny duet na jesień i zimę — a przy okazji taniej niż osobno.",
    "attrs": [
      "Paw Cleaning Foam 200 ml",
      "Paw & Nose Balm 50 ml",
      "Oszczędzasz 5,10 zł"
    ],
    "ingredients": "W zestawie: Paw Cleaning Foam (200 ml) oraz Paw & Nose Natural Balm (50 ml). Pełne składy znajdziesz na stronach produktów.",
    "usage": "Po spacerze umyj łapy pianką i wytrzyj do sucha, następnie wmasuj niewielką ilość balsamu w opuszki. Balsam stosuj również na nos w razie potrzeby.",
    "subEn": "Paw foam + Paw & nose balm",
    "shortEn": "A duo for every walk: foam cleans paws without a bath, balm restores and protects the pads.",
    "longEn": "Complete paw care in one set. After a walk, the foam with its silicone brush instantly removes mud, dust and road salt, while the natural balm restores and nourishes the pads and nose. The perfect autumn and winter duo — and cheaper than buying separately.",
    "attrsEn": [
      "Paw Cleaning Foam 200 ml",
      "Paw & Nose Balm 50 ml",
      "You save 5.10 zł"
    ],
    "usageEn": "After a walk, clean the paws with the foam and wipe dry, then massage a small amount of balm into the pads. Apply the balm to the nose as needed too.",
    "ingredientsEn": "Set contains: Paw Cleaning Foam (200 ml) and Paw & Nose Natural Balm (50 ml). Full ingredient lists are on the product pages."
  },
  {
    "id": "zestaw-pierwsze-kapiele",
    "name": "Zestaw Pierwsze Kąpiele",
    "namePl": "Szampon dla szczeniąt + Balsam do łap i nosa",
    "category": "zestawy",
    "price": 88.9,
    "oldPrice": 94,
    "volume": "250 ml + 50 ml",
    "badge": "Dla szczeniąt",
    "badgeClass": "green",
    "img": "assets/img/zestaw-pierwsze-kapiele.png",
    "short": "Wyprawka pielęgnacyjna dla szczeniaka: ekstradelikatny szampon i bezpieczny balsam do łapek.",
    "long": "Wszystko, czego potrzebuje szczeniak na start. Bezzapachowy szampon Extra Sensitive o zbalansowanym pH delikatnie myje wrażliwą skórę malucha, a naturalny balsam dba o miękkie łapki przyzwyczajające się do pierwszych spacerów. Bezpieczny przy zlizywaniu.",
    "attrs": [
      "Puppy Shampoo 250 ml",
      "Paw & Nose Balm 50 ml",
      "Oszczędzasz 5,10 zł"
    ],
    "ingredients": "W zestawie: Puppy Shampoo Extra Sensitive (250 ml) oraz Paw & Nose Natural Balm (50 ml). Pełne składy znajdziesz na stronach produktów.",
    "usage": "Szampon: delikatnie wmasować w mokrą sierść i spłukać. Balsam: wcierać w opuszki łap po spacerach.",
    "subEn": "Puppy shampoo + Paw & nose balm",
    "shortEn": "A care starter kit for a puppy: extra-gentle shampoo and a safe paw balm.",
    "longEn": "Everything a puppy needs to start. The fragrance-free Extra Sensitive shampoo with balanced pH gently washes a puppy's delicate skin, while the natural balm cares for soft little paws getting used to their first walks. Safe if licked.",
    "attrsEn": [
      "Puppy Shampoo 250 ml",
      "Paw & Nose Balm 50 ml",
      "You save 5.10 zł"
    ],
    "usageEn": "Shampoo: gently massage into wet fur and rinse. Balm: rub into the paw pads after walks.",
    "ingredientsEn": "Set contains: Puppy Shampoo Extra Sensitive (250 ml) and Paw & Nose Natural Balm (50 ml). Full ingredient lists are on the product pages."
  },
  {
    "id": "zestaw-swiezosc",
    "name": "Zestaw Świeżość",
    "namePl": "Dental Spray + Szampon Anti Odour",
    "category": "zestawy",
    "price": 73.9,
    "oldPrice": 78,
    "badge": "Zestaw −5%",
    "badgeClass": "blue",
    "volume": "100 ml + 250 ml",
    "img": "assets/img/zestaw-swiezosc.png",
    "short": "Świeży oddech i świeża sierść — duet przeciw wszystkim psim zapachom.",
    "long": "Połączenie, które docenią wszyscy domownicy. Dental Spray z erytrytolem i inuliną dba o świeży oddech i ogranicza osad nazębny, a szampon Anti Odour z rycynoleinianem cynku pochłania nieprzyjemne zapachy sierści zamiast je maskować.",
    "attrs": [
      "Dental Spray 100 ml",
      "Anti Odour Shampoo 250 ml",
      "Oszczędzasz 4,10 zł"
    ],
    "ingredients": "W zestawie: Dental Spray (100 ml) oraz Anti Odour Pet Shampoo (250 ml). Pełne składy znajdziesz na stronach produktów.",
    "usage": "Spray: psikać codziennie na obie strony jamy ustnej. Szampon: stosować podczas kąpieli w razie potrzeby.",
    "subEn": "Dental Spray + Anti Odour shampoo",
    "shortEn": "Fresh breath and a fresh coat — a duo against all doggy smells.",
    "longEn": "A combination the whole household will appreciate. Dental Spray with erythritol and inulin keeps breath fresh and reduces plaque, while the Anti Odour shampoo with zinc ricinoleate absorbs coat odours instead of masking them.",
    "attrsEn": [
      "Dental Spray 100 ml",
      "Anti Odour Shampoo 250 ml",
      "You save 4.10 zł"
    ],
    "usageEn": "Spray: apply daily to both sides of the mouth. Shampoo: use during bathing as needed.",
    "ingredientsEn": "Set contains: Dental Spray (100 ml) and Anti Odour Pet Shampoo (250 ml). Full ingredient lists are on the product pages."
  },
  {
    "id": "zestaw-czysty-pies",
    "name": "Zestaw Czysty Pies",
    "namePl": "Pianka do łap + Szampon Anti Odour",
    "category": "zestawy",
    "price": 75.9,
    "oldPrice": 81,
    "volume": "200 ml + 250 ml",
    "badge": "Zestaw −6%",
    "badgeClass": "green",
    "img": "assets/img/zestaw-czysty-pies.png",
    "short": "Czystość na co dzień: łapy po każdym spacerze, pełna kąpiel gdy trzeba.",
    "long": "Praktyczny zestaw do utrzymania czystości na co dzień. Pianka do łap załatwia szybkie czyszczenie po spacerze bez kąpieli, a gdy przychodzi czas na pełne mycie — szampon Anti Odour neutralizuje zapachy i pozostawia sierść świeżą i czystą.",
    "attrs": [
      "Paw Cleaning Foam 200 ml",
      "Anti Odour Shampoo 250 ml",
      "Oszczędzasz 5,10 zł"
    ],
    "ingredients": "W zestawie: Paw Cleaning Foam (200 ml) oraz Anti Odour Pet Shampoo (250 ml). Pełne składy znajdziesz na stronach produktów.",
    "usage": "Pianka: po każdym spacerze, bez spłukiwania. Szampon: podczas kąpieli, dokładnie spłukać.",
    "subEn": "Paw foam + Anti Odour shampoo",
    "shortEn": "Everyday cleanliness: paws after every walk, a full bath when needed.",
    "longEn": "A practical set for keeping clean day to day. The paw foam handles quick post-walk cleaning without a bath, and when it's time for a full wash, the Anti Odour shampoo neutralises odours and leaves the coat fresh and clean.",
    "attrsEn": [
      "Paw Cleaning Foam 200 ml",
      "Anti Odour Shampoo 250 ml",
      "You save 5.10 zł"
    ],
    "usageEn": "Foam: after every walk, no rinsing. Shampoo: during bathing, rinse thoroughly.",
    "ingredientsEn": "Set contains: Paw Cleaning Foam (200 ml) and Anti Odour Pet Shampoo (250 ml). Full ingredient lists are on the product pages."
  },
  {
    "id": "zestaw-pelna-esencja",
    "name": "Zestaw Pełna Esencja",
    "namePl": "Wszystkie 5 produktów — kompletna pielęgnacja",
    "category": "zestawy",
    "price": 194.9,
    "oldPrice": 216,
    "volume": "5 produktów",
    "badge": "Mega zestaw −10%",
    "badgeClass": "",
    "img": "assets/img/zestaw-pelna-esencja.png",
    "short": "Cała linia Esencja Pet Care w jednym pudełku — od łap po świeży oddech. Oszczędzasz ponad 21 zł.",
    "long": "Kompletna pielęgnacja od nosa po ogon: balsam do łap i nosa, pianka do czyszczenia łap z silikonową szczoteczką, szampon Anti Odour, ekstradelikatny szampon dla szczeniąt oraz Dental Spray. Idealny na start, na prezent dla psiego rodzica — albo po prostu dlatego, że Twój pies zasługuje na wszystko.",
    "attrs": [
      "Paw & Nose Balm 50 ml",
      "Paw Cleaning Foam 200 ml",
      "Anti Odour Shampoo 250 ml",
      "Puppy Shampoo 250 ml",
      "Dental Spray 100 ml",
      "Oszczędzasz 21,10 zł"
    ],
    "ingredients": "W zestawie wszystkie 5 produktów Esencja Pet Care. Pełne składy znajdziesz na stronach poszczególnych produktów.",
    "usage": "Każdy produkt stosuj zgodnie z instrukcją na opakowaniu. Zestaw przyjeżdża w jednym pudełku — gotowy również na prezent.",
    "subEn": "All 5 products — complete care",
    "shortEn": "The whole Esencja Pet Care line in one box — from paws to fresh breath. You save over 21 zł.",
    "longEn": "Complete care from nose to tail: paw & nose balm, paw-cleaning foam with silicone brush, Anti Odour shampoo, extra-gentle puppy shampoo and Dental Spray. Perfect as a starter kit, a gift for a dog parent — or simply because your dog deserves everything.",
    "attrsEn": [
      "Paw & Nose Balm 50 ml",
      "Paw Cleaning Foam 200 ml",
      "Anti Odour Shampoo 250 ml",
      "Puppy Shampoo 250 ml",
      "Dental Spray 100 ml",
      "You save 21.10 zł"
    ],
    "usageEn": "Use each product according to the instructions on its packaging. The set arrives in a single box — gift-ready too.",
    "ingredientsEn": "All 5 Esencja Pet Care products. Full ingredient lists are on the individual product pages."
  }
];

const FREE_SHIPPING_FROM = 149; // zł
const SHIPPING_COST = 14.99;    // zł
