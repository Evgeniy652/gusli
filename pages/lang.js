const textGusliVnal = document.querySelector(".text-gusli-vnal");
const textLiraVnal = document.querySelector(".text-lira-vnal");
const spanActiveLang = document.querySelector(".span-active-lang");
const langPage = spanActiveLang.innerHTML;
let nameImage = "";
let nameGusli = "";
let nameStrings = "";
let namePrice = "";
let nameShipping = "";
let nameLyre = "";

if (langPage == "en") {
  nameImage = "image";
  nameGusli = "Psaltery";
  nameStrings = "strings";
  namePrice = "price: $";
  nameShipping = "shipping";
  nameLyre = "Kravik Lyre";
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
              ${nameGusli} № 1, 12 ${nameStrings},<br />${namePrice}150 + ${nameShipping}
              </h2>
            </li>
            <div class="hidden-photos">
              <img src="../../images/product/1/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            </div>
          </ul>

        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/2/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 2, 12 ${nameStrings},<br />${namePrice}150 + ${nameShipping}
            </h2>
          </li>
          <div class="hidden-photos">
            <img src="../../images/product/2/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/2/3.jpg" alt="${nameGusli}-${nameImage}-3" />
          </div>
        </ul>

        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/3/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 3, 11 ${nameStrings},<br />${namePrice}150 + ${nameShipping}
            </h2>
          </li>
          <div class="hidden-photos">
            <img src="../../images/product/3/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/3/3.jpg" alt="${nameGusli}-${nameImage}-3" />
          </div>
        </ul>

        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/4/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 4, 12 ${nameStrings},<br />${namePrice}150 + ${nameShipping}
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
            ${nameGusli} № 5, 11 ${nameStrings},<br />${namePrice}150 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/5/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/5/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/5/4.jpg" alt="${nameGusli}-${nameImage}-4" />
          </div>
        </ul>

        <ul class="images images1">
          <li class="visible">
            <img src="../../images/product/6/1.jpg" alt="${nameGusli}-${nameImage}-1" />
          </li>

          <li>
            <h2 class="textproduct">
            ${nameGusli} № 6, 11 ${nameStrings},<br />${namePrice}150 + ${nameShipping}
            </h2>
          </li>

          <div class="hidden-photos">
            <img src="../../images/product/6/2.jpg" alt="${nameGusli}-${nameImage}-2" />
            <img src="../../images/product/6/3.jpg" alt="${nameGusli}-${nameImage}-3" />
            <img src="../../images/product/6/4.jpg" alt="${nameGusli}-${nameImage}-4" />
            <img src="../../images/product/6/5.jpg" alt="${nameGusli}-${nameImage}-5" />
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
        ${nameLyre} №1, 7 ${nameStrings},<br />${namePrice}200 + ${nameShipping}
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
    ${nameLyre} №2, 7 ${nameStrings},<br />${namePrice}200 + ${nameShipping}
    </h2>
  </li>
  <div class="hidden-photos">
    <img src="../../images/lira/2/2.jpg" alt="${nameLyre}-${nameImage}-2" />
    <img src="../../images/lira/2/3.jpg" alt="${nameLyre}-${nameImage}-3" />
    <img src="../../images/lira/2/4.jpg" alt="${nameLyre}-${nameImage}-4" />
  </div>
</ul>
</div>
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
