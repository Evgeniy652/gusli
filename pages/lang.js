document.head.insertAdjacentHTML("beforeend",
`
<meta name="msvalidate.01" content="8B7B49C8CDE151A36797D8B736992F10" />
<meta name="yandex-verification" content="0917a70fd744a783" />

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(94134743, "init", {
   clickmap:true,
   trackLinks:true,
   accurateTrackBounce:true,
   webvisor:true,
   ecommerce:"dataLayer"
});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/94134743" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9NQ47NKGZP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9NQ47NKGZP');
</script>
`);
document.head.insertAdjacentHTML("beforeend",
`
<link rel="alternate" hreflang="en" href="https://egusli.by/pages/en/en.html"/>
<link rel="alternate" hreflang="fr" href="https://egusli.by/pages/fr/fr.html"/>
<link rel="alternate" hreflang="es" href="https://egusli.by/pages/es/es.html"/>
<link rel="alternate" hreflang="de" href="https://egusli.by/pages/de/de.html"/>
<link rel="alternate" hreflang="pl" href="https://egusli.by/pages/pl/pl.html"/>
<link rel="alternate" hreflang="fi" href="https://egusli.by/pages/fi/fi.html"/>
<link rel="alternate" hreflang="sv" href="https://egusli.by/pages/sv/sv.html"/>
<link rel="alternate" hreflang="et" href="https://egusli.by/pages/et/et.html"/>
<link rel="alternate" hreflang="no" href="https://egusli.by/pages/no/no.html"/>
<link rel="alternate" hreflang="da" href="https://egusli.by/pages/da/da.html"/>
<link rel="alternate" hreflang="lv" href="https://egusli.by/pages/lv/lv.html"/>
<link rel="alternate" hreflang="lt" href="https://egusli.by/pages/lt/lt.html"/>
<link rel="alternate" hreflang="cs" href="https://egusli.by/pages/cs/cs.html"/>
<link rel="alternate" hreflang="ro" href="https://egusli.by/pages/ro/ro.html"/>
<link rel="alternate" hreflang="hu" href="https://egusli.by/pages/hu/hu.html"/>
<link rel="alternate" hreflang="bg" href="https://egusli.by/pages/bg/bg.html"/>
<link rel="alternate" hreflang="it" href="https://egusli.by/pages/it/it.html"/>
<link rel="alternate" hreflang="sr" href="https://egusli.by/pages/sr/sr.html"/>
<link rel="alternate" hreflang="sl" href="https://egusli.by/pages/sl/sl.html"/>
<link rel="alternate" hreflang="hr" href="https://egusli.by/pages/hr/hr.html"/>
<link rel="alternate" hreflang="zh" href="https://egusli.by/pages/zh/zh.html"/>
<link rel="alternate" hreflang="pt" href="https://egusli.by/pages/pt/pt.html"/>
<link rel="alternate" hreflang="nl" href="https://egusli.by/pages/nl/nl.html"/>
`);
const textGusliVnal = document.querySelector(".text-gusli-vnal");
const textLiraVnal = document.querySelector(".text-lira-vnal");
const divGusli = document.querySelector(".div-gusli");
const videoBlockGusli = document.querySelector(".video-block");
const footer = document.getElementById("footer");
const langPage = document.getElementsByTagName("html")[0].getAttribute("lang");
let arrLang = [
  "en",
  "fr",
  "es",
  "de",
  "pl",
  "fi",
  "sv",
  "et",
  "no",
  "da",
  "lv",
  "lt",
  "cs",
  "ro",
  "hu",
  "bg",
  "it",
  "sr",
  "sl",
  "hr",
  "zh",
  "pt",
  "nl",
];
let newArrLang = arrLang.filter((el) => {
  return el != langPage;
});
let nameImage = "";
let nameGusli = "";
let nameStrings = "";
let namePrice = "";
let nameShipping = "";
let nameLyre = "";
let nameContacts = "";
let language = "";

if (langPage == "en") {
  nameImage = "image";
  nameGusli = "Psaltery";
  nameStrings = "strings";
  namePrice = "price: €($)";
  nameShipping = "shipping";
  nameLyre = "Kravik Lyre";
  nameContacts = "Contacts";
  language = "Language";
}
if (langPage == "fr") {
  nameImage = "image";
  nameGusli = "Psaltérion";
  nameStrings = "cordes";
  namePrice = "prix: €($)";
  nameShipping = "expéditeur";
  nameLyre = "Kravik Lyre";
  nameContacts = "Contacts";
  language = "Langue";
}
if (langPage == "es") {
  nameImage = "imagen";
  nameGusli = "Salterio";
  nameStrings = "cuerdas";
  namePrice = "precio: €($)";
  nameShipping = "reenvío";
  nameLyre = "Lira Kravik";
  nameContacts = "Contactos";
  language = "Idioma";
}
if (langPage == "de") {
  nameImage = "Bild";
  nameGusli = "Psalterium";
  nameStrings = "zeichenketten";
  namePrice = "Preis: €($)";
  nameShipping = "versand";
  nameLyre = "Kravik Leier";
  nameContacts = "Kontakte";
  language = "Sprache";
}
if (langPage == "pl") {
  nameImage = "zdjęcie";
  nameGusli = "Psałterz";
  nameStrings = "ciągi";
  namePrice = "cena: €($)";
  nameShipping = "wysyłka";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakty";
  language = "Język";
}
if (langPage == "fi") {
  nameImage = "kuva";
  nameGusli = "Psalttari";
  nameStrings = "jouset";
  namePrice = "hinta: €($)";
  nameShipping = "merenkulku";
  nameLyre = "kravik-lyyra";
  nameContacts = "Yhteystiedot";
  language = "Kieli";
}
if (langPage == "sv") {
  nameImage = "bild";
  nameGusli = "Psaltery";
  nameStrings = "strängar";
  namePrice = "pris: €($)";
  nameShipping = "frakt";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakter";
  language = "Språk";
}
if (langPage == "et") {
  nameImage = "pilt";
  nameGusli = "KANNEL(Psalteri)";
  nameStrings = "stringid";
  namePrice = "hind: €($)";
  nameShipping = "postitus";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontaktid";
  language = "Keel";
}
if (langPage == "no") {
  nameImage = "bilde";
  nameGusli = "Psaltery(kantele)";
  nameStrings = "strenger";
  namePrice = "pris: €($)";
  nameShipping = "skipsfart";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakter";
  language = "Språk";
}
if (langPage == "da") {
  nameImage = "billede";
  nameGusli = "Psaltery";
  nameStrings = "strenge";
  namePrice = "pris: €($)";
  nameShipping = "levering";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakter";
  language = "Sprog";
}
if (langPage == "lv") {
  nameImage = "attēls";
  nameGusli = "Psalterija";
  nameStrings = "virknes";
  namePrice = "cena: €($)";
  nameShipping = "piegāde";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakti";
  language = "Valoda";
}
if (langPage == "lt") {
  nameImage = "vaizdas";
  nameGusli = "Kanklės(Psalterija)";
  nameStrings = "stygos";
  namePrice = "kaina: €($)";
  nameShipping = "pristatymas";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontaktai";
  language = "Kalba";
}
if (langPage == "cs") {
  nameImage = "obrázek";
  nameGusli = "Psalterium";
  nameStrings = "struny";
  namePrice = "cena: €($)";
  nameShipping = "poštovné";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakty";
  language = "Jazyk";
}
if (langPage == "ro") {
  nameImage = "imagine";
  nameGusli = "Psaltirea";
  nameStrings = "șiruri";
  namePrice = "preț: €($)";
  nameShipping = "expediere";
  nameLyre = "Kravik Lyre";
  nameContacts = "Contacte";
  language = "Limba";
}
if (langPage == "hu") {
  nameImage = "kép";
  nameGusli = "Zsoltár(Psaltery)";
  nameStrings = "húrok";
  namePrice = "ár: €($)";
  nameShipping = "továbbítás";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kapcsolat";
  language = "Nyelv";
}
if (langPage == "bg") {
  nameImage = "изображение";
  nameGusli = "Гусли";
  nameStrings = "струни";
  namePrice = "цена: €($)";
  nameShipping = "доставка";
  nameLyre = "Кравик Лира";
  nameContacts = "За контакти";
  language = "Език";
}
if (langPage == "it") {
  nameImage = "immagine";
  nameGusli = "Salterio";
  nameStrings = "corde";
  namePrice = "prezzo: €($)";
  nameShipping = "inoltro";
  nameLyre = "Kravik Lyre";
  nameContacts = "Contatto";
  language = "Lingua";
}
if (langPage == "sr") {
  nameImage = "slika";
  nameGusli = "Gusli";
  nameStrings = "strune";
  namePrice = "cena: €($)";
  nameShipping = "dostava";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakti";
  language = "Jezik";
}
if (langPage == "sl") {
  nameImage = "slika";
  nameGusli = "Psalterij";
  nameStrings = "strune";
  namePrice = "cena: €($)";
  nameShipping = "dostava";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakt";
  language = "Jezik";
}
if (langPage == "hr") {
  nameImage = "slika";
  nameGusli = "Gusli";
  nameStrings = "strune";
  namePrice = "cijena: €($)";
  nameShipping = "dostava";
  nameLyre = "Kravik Lyre";
  nameContacts = "Kontakti";
  language = "Jezik";
}
if (langPage == "zh") {
  nameImage = "图像";
  nameGusli = "诗篇";
  nameStrings = "弦乐器";
  namePrice = "价格；价格: €($)";
  nameShipping = "船舶运输";
  nameLyre = "克拉维克七弦琴";
  nameContacts = "联络人";
  language = "语言";
}
if (langPage == "pt") {
  nameImage = "imagem";
  nameGusli = "Saltério";
  nameStrings = "cordas";
  namePrice = "preço: €($)";
  nameShipping = "encaminhamento";
  nameLyre = "Kravik Lyre";
  nameContacts = "Contatos";
  language = "Língua";
}
if (langPage == "nl") {
  nameImage = "afbeelding";
  nameGusli = "Psalterij";
  nameStrings = "string";
  namePrice = "prijs: €($)";
  nameShipping = "levering";
  nameLyre = "Kravik Lyre";
  nameContacts = "Contact";
  language = "Taal";
}

textGusliVnal.insertAdjacentHTML(
  "afterend",
  `
<div id="available-gusli">


        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/1/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 1, 11 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>
          <div class="hidden-photos">
            <img src="../../images/product/1/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/1/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/1/4.jpg" alt="${nameGusli}-${nameImage}-4" />
            <img src="../../images/product/1/5.jpg" alt="${nameGusli}-${nameImage}-5" />
          </div>
        </ul>

        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/2/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 2, 11 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>
          <div class="hidden-photos">
            <img src="../../images/product/2/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/2/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/2/4.jpg" alt="${nameGusli}-${nameImage}-4" />
          </div>
        </ul>

        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/6/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli}/Kantele № 6, 11 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>
          <div class="hidden-photos">
            <img src="../../images/product/6/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/6/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/6/4.jpg" alt="${nameGusli}-${nameImage}-4" />
          </div>
        </ul>

         <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/7/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli}/Gesle № 7, 5 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>
          <div class="hidden-photos">
            <img src="../../images/product/7/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/7/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/7/4.jpg" alt="${nameGusli}-${nameImage}-4" />
          </div>
        </ul>


      <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/3/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 3, 12 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/3/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/3/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/3/4.jpg" alt="${nameGusli}-${nameImage}-3" />
          </div>
        </ul>


        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/4/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 4, 12 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/4/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/4/3.jpg" alt="${nameGusli}-${nameImage}-3" />
          </div>
        </ul>
        
        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/5/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 5, 12 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/5/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/5/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/5/4.jpg" alt="${nameGusli}-${nameImage}-3" />
          </div>
        </ul>


        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/8/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 8, 12 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/8/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/8/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/8/4.jpg" alt="${nameGusli}-${nameImage}-4" />
            <img src="../../images/product/8/5.jpg" alt="${nameGusli}-${nameImage}-5" />
          </div>
        </ul>


        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/9/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 9, 11 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/9/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/9/3.jpg" alt="${nameGusli}-${nameImage}-3" />
          </div>
        </ul>

        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/10/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 10, 12 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/10/2.jpg" alt="${nameGusli}-${nameImage}-2" />
          </div>
        </ul>

        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/12/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 12, 12 ${nameStrings},<br />${namePrice}180 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/12/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/12/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/12/4.jpg" alt="${nameGusli}-${nameImage}-4" />
          </div>
        </ul>


      </div>
`
);

textLiraVnal.insertAdjacentHTML(
  "afterend",
  `
<div id="available-lira">

  <ul class="images images1">
    <li class="visible">
      <img src="../../images/lira/1/1.jpg" alt="${nameLyre}-${nameImage}-1" />
    </li>
    <li>
      <h2 class="textproduct">
        ${nameLyre} №1, 7 ${nameStrings},<br />not available
      </h2>
    </li>
    <div class="hidden-photos">
      <img src="../../images/lira/1/2.jpg" alt="${nameLyre}-${nameImage}-2" />
      <img src="../../images/lira/1/3.jpg" alt="${nameLyre}-${nameImage}-3" />
      <img src="../../images/lira/1/4.jpg" alt="${nameLyre}-${nameImage}-4" />
    </div>
  </ul>

<ul class="images images1">
  <li class="visible">
    <img src="../../images/lira/2/1.jpg" alt="${nameLyre}-${nameImage}-1" />
  </li>

  <li>
    <h2 class="textproduct">
    ${nameLyre} №2, 7 ${nameStrings},<br />not available
    </h2>
  </li>
  <div class="hidden-photos">
    <img src="../../images/lira/2/2.jpg" alt="${nameLyre}-${nameImage}-2" />
    <img src="../../images/lira/2/3.jpg" alt="${nameLyre}-${nameImage}-3" />
    <img src="../../images/lira/2/4.jpg" alt="${nameLyre}-${nameImage}-4" />
  </div>
</ul>

<ul class="images images1">
  <li class="visible">
    <img src="../../images/lira/3/1.jpg" alt="${nameLyre}-${nameImage}-1" />
  </li>

  <li>
    <h2 class="textproduct">
    ${nameLyre} №3, 7 ${nameStrings},<br /> not available 
    </h2>
  </li>
  <div class="hidden-photos">
    <img src="../../images/lira/3/2.jpg" alt="${nameLyre}-${nameImage}-2" />
    <img src="../../images/lira/3/3.jpg" alt="${nameLyre}-${nameImage}-3" />
  </div>
</ul>

<ul class="images images1">
  <li class="visible">
    <img src="../../images/lira/4/1.jpg" alt="${nameLyre}-${nameImage}-1" />
  </li>

  <li>
    <h2 class="textproduct">
    ${nameLyre} №4, 7 ${nameStrings},<br /> ${namePrice}280 + ${nameShipping} 
    </h2>
  </li>
  <div class="hidden-photos">
    <img src="../../images/lira/4/2.jpg" alt="${nameLyre}-${nameImage}-2" />
    <img src="../../images/lira/4/3.jpg" alt="${nameLyre}-${nameImage}-3" />
    <img src="../../images/lira/4/4.jpg" alt="${nameLyre}-${nameImage}-3" />
  </div>
</ul>

</div>
`
);
 /*${namePrice}300 + ${nameShipping} использовал для указания цены лиры*/

divGusli.insertAdjacentHTML(
  "afterbegin",
  `
<img class="gusli-img" src="../../images/myslides/20.jpg" alt="${nameGusli}-${nameImage}" />
`
);

videoBlockGusli.insertAdjacentHTML(
  "beforeend",
  `
  <iframe
  class="video"
  src="https://www.youtube.com/embed/7R_rCmHMXrE"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
`
);

footer.insertAdjacentHTML(
  "afterbegin",
  `
<div class="footer-block1">
<div id="contacts">
  <h2 id="contactsjump">${nameContacts}:</h2>

  <h3>
    <a class="center" href="mailto:evgen256w@gmail.com">
      <img
        class="contacts-icon-img"
        src="../../images/email1.png"
        alt="email"
      />
      &nbsp; evgen256w@gmail.com
    </a>
  </h3>

  <h3>
    <a
      class="center"
      href="https://t.me/evgeni652"
      target="_blank"
    >
      <img
        class="contacts-icon-img"
        src="../../images/telegram.png"
        alt="telegram"
      />
      &nbsp; Telegram
    </a>
  </h3>

  <h3>
    <a
      class="center"
      href="https://www.instagram.com/evgenii_gusli/"
      target="_blank"
    >
      <img
        class="contacts-icon-img"
        src="../../images/Instagram.png"
        alt="Instagram"
      />
      &nbsp; Instagram
    </a>
  </h3>

  <h3>
   <img
    class="contacts-icon-img"
    src="../../images/telegram.png"
    alt="telegram"
    title="Telegram"
   />&nbsp;
   <img
    class="contacts-icon-img"
    src="../../images/viber.png"
    alt="viber"
    title="Viber"
   />&nbsp;
   <img
    class="contacts-icon-img"
    src="../../images/whatsapp.png"
    alt="whatsapp"
    title="WhatsApp"
   />&nbsp;
  +375 29 777-14-53
  </h3>
  
</div>
</div>
`
);

footer.insertAdjacentHTML(
  "beforeend",
  `
<div class="div-language">
${language}: <span class="span-active-lang">${langPage}</span>
<a href="/">ru</a>
<a href="../${newArrLang[0]}/${newArrLang[0]}.html">${newArrLang[0]}</a>
<a href="../${newArrLang[1]}/${newArrLang[1]}.html">${newArrLang[1]}</a>
<a href="../${newArrLang[2]}/${newArrLang[2]}.html">${newArrLang[2]}</a>
<a href="../${newArrLang[3]}/${newArrLang[3]}.html">${newArrLang[3]}</a>
<a href="../${newArrLang[4]}/${newArrLang[4]}.html">${newArrLang[4]}</a>
<a href="../${newArrLang[5]}/${newArrLang[5]}.html">${newArrLang[5]}</a>
<a href="../${newArrLang[6]}/${newArrLang[6]}.html">${newArrLang[6]}</a>
<a href="../${newArrLang[7]}/${newArrLang[7]}.html">${newArrLang[7]}</a>
<a href="../${newArrLang[8]}/${newArrLang[8]}.html">${newArrLang[8]}</a>
<a href="../${newArrLang[9]}/${newArrLang[9]}.html">${newArrLang[9]}</a>
<a href="../${newArrLang[10]}/${newArrLang[10]}.html">${newArrLang[10]}</a>
<a href="../${newArrLang[11]}/${newArrLang[11]}.html">${newArrLang[11]}</a>
<a href="../${newArrLang[12]}/${newArrLang[12]}.html">${newArrLang[12]}</a>
<a href="../${newArrLang[13]}/${newArrLang[13]}.html">${newArrLang[13]}</a>
<a href="../${newArrLang[14]}/${newArrLang[14]}.html">${newArrLang[14]}</a>
<a href="../${newArrLang[15]}/${newArrLang[15]}.html">${newArrLang[15]}</a>
<a href="../${newArrLang[16]}/${newArrLang[16]}.html">${newArrLang[16]}</a>
<a href="../${newArrLang[17]}/${newArrLang[17]}.html">${newArrLang[17]}</a>
<a href="../${newArrLang[18]}/${newArrLang[18]}.html">${newArrLang[18]}</a>
<a href="../${newArrLang[19]}/${newArrLang[19]}.html">${newArrLang[19]}</a>
<a href="../${newArrLang[20]}/${newArrLang[20]}.html">${newArrLang[20]}</a>
<a href="../${newArrLang[21]}/${newArrLang[21]}.html">${newArrLang[21]}</a>
</div>

<div class="footer-date">Copyright © 2024</div>
`
);

const globalConfig = {
  movable: true,
};

function getGalleries() {
  const listOfGalleries = document.querySelectorAll(".images");

  [...listOfGalleries].forEach((ul) => {
    new Viewer(ul, globalConfig);
  });
}

window.onload = () => {
  getGalleries();
};
