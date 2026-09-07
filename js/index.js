// HERO

const heroSection = document.querySelector(".hero");

heroSection.innerHTML = `
    <img class="hero__image" src="${hero.image}" alt="EasyCamper">

    <div class="hero__card">
<h1>${hero.headline.replace(
    "save your time",
    '<span class="orange">save your time</span>'
)}</h1>        
<p>${hero.copy}</p>

        <button class="btn">
            <img src="${hero.icon}" alt="">
            Explore
        </button>
    </div>
`;


// SERVICES

const servicesSection = document.querySelector(".services");

servicesSection.innerHTML = services.map(service => `
    <article class="service-card">
  <img
            class="service-card__image"
            src="${service.illustration}"
            alt="${service.headline}"
        >

        <h2>${service.headline}</h2>

        <p>
            ${service.text}
        </p>

        <a href="#">
            ${service.linktext}
        </a>
        
     </article>
`).join("");


// FACILITIES

const facilitiesSection = document.querySelector(".facilities");

const facilitiesTitle = document.createElement("h2");
facilitiesTitle.classList.add("section-title");
facilitiesTitle.textContent = facilities.headline;

facilitiesSection.appendChild(facilitiesTitle);

const facilitiesGrid = document.createElement("div");
facilitiesGrid.classList.add("facilities__grid");

facilities.options.forEach(option => {
    const article = document.createElement("article");
    article.classList.add("facility-card");

    article.innerHTML = `
        <img src="${option.icon}" alt="">
        <h3>${option.headline}</h3>
        <p>${option.text}</p>
        <a href="#">Show me more</a>
    `;

    facilitiesGrid.appendChild(article);
});

facilitiesSection.appendChild(facilitiesGrid);


// SITES

const sitesSection = document.querySelector(".sites");

const sitesIntro = document.createElement("div");
sitesIntro.classList.add("sites__intro");

sitesIntro.innerHTML = `
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>

    <button class="btn">
        <span>Start</span>
        <img src="${sites.btnicon}" alt="">
    </button>
`;

sitesSection.appendChild(sitesIntro);

const sitesGrid = document.createElement("div");
sitesGrid.classList.add("sites__grid");

sites.places.forEach(place => {
    const article = document.createElement("article");
    article.classList.add("site-card");

    article.innerHTML = `
        <img
            class="site-card__image"
            src="${place.img}"
            alt="${place.name}"
        >

        <h3>${place.name}</h3>

        <p>${place.city}</p>

        <a href="#">View the site</a>
    `;

    sitesGrid.appendChild(article);
});

sitesSection.appendChild(sitesGrid);


// ADVANTAGES

const advantagesSection = document.querySelector(".advantages");

const advantagesTitle = document.createElement("h2");
advantagesTitle.classList.add("section-title");
advantagesTitle.textContent = "Our Advantages";

advantagesSection.appendChild(advantagesTitle);

const advantagesGrid = document.createElement("div");
advantagesGrid.classList.add("advantages__grid");

advantages.forEach(advantage => {
    const article = document.createElement("article");
    article.classList.add("advantage-card");

    article.innerHTML = `
        <img src="${advantage.icon}" alt="">
        <h3>${advantage.headline}</h3>
        <p>${advantage.text}</p>
    `;

    advantagesGrid.appendChild(article);
});

advantagesSection.appendChild(advantagesGrid);


// FOOTER

const footer = document.querySelector(".footer");

const footerTop = document.createElement("div");
footerTop.classList.add("footer__top");

const footerBrand = document.createElement("div");
footerBrand.classList.add("footer__brand");

footerBrand.innerHTML = `
    <span>${footerData.brand.smallTitle}</span>
    <h2>${footerData.brand.title}</h2>
`;

footerTop.appendChild(footerBrand);

footerData.columns.forEach(column => {
    const footerColumn = document.createElement("div");
    footerColumn.classList.add("footer__column");

    const links = column.links
        .map(link => `<li><a href="#">${link}</a></li>`)
        .join("");

    footerColumn.innerHTML = `
        <h3>${column.headline}</h3>
        <ul>
            ${links}
        </ul>
    `;

    footerTop.appendChild(footerColumn);
});

footer.appendChild(footerTop);


// Footer bottom

const footerBottom = document.createElement("div");
footerBottom.classList.add("footer__bottom");

const bottomLinks = footerData.bottomLinks
    .map(link => `<a href="#">${link}</a>`)
    .join("");

footerBottom.innerHTML = `
    <p>${footerData.brand.copyright}</p>

    <nav>
        ${bottomLinks}
    </nav>
`;

footer.appendChild(footerBottom);