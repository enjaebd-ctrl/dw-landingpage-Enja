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

facilitiesSection.innerHTML =`
 <h2 class="section-title">
        ${facilities.headline}
    </h2>
    
    <div class="facilities__grid">

        ${facilities.options.map(option => `
            <article class="facility-card">

                <img src="${option.icon}" alt="">

                <h3>${option.headline}</h3>

                <p>${option.text}</p>

                <a href="#">
                    Show me more
                </a>

            </article>
        `).join("")}

    </div>
`;


// SITES

const sitesSection = document.querySelector(".sites");

sitesSection.innerHTML = `
    <div class="sites__intro">

        <h2>${sites.headline}</h2>

        <p>${sites.text}</p>

        <button class="btn">
            Start
            <img src="${sites.btnicon}" alt="">
        </button>

    </div>

    <div class="sites__grid">

        ${sites.places.map(place => `
            <article class="site-card">

                <img
                    class="site-card__image"
                    src="${place.img}"
                    alt="${place.name}"
                >

                <h3>${place.name}</h3>

                <p>${place.city}</p>

                <a href="#">
                    View the site
                </a>

            </article>
        `).join("")}

    </div>
`;

// ADVANTAGES

const advantagesSection = document.querySelector(".advantages");

advantagesSection.innerHTML = `
    <h2 class="section-title">
        Our Advantages
    </h2>

    <div class="advantages__grid">

        ${advantages.map(advantage => `
            <article class="advantage-card">

                <img src="${advantage.icon}" alt="">

                <h3>${advantage.headline}</h3>

                <p>${advantage.text}</p>

            </article>
        `).join("")}

    </div>
`;


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