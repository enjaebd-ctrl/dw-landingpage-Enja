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

footer.innerHTML = `
    <div class="footer__top">

        <div class="footer__brand">

            <span>
                ${footerData.brand.smallTitle}
            </span>

            <h2>
                ${footerData.brand.title}
            </h2>

        </div>


        ${footerData.columns.map(column => `
            <div class="footer__column">

                <h3>
                    ${column.headline}
                </h3>

                <ul>

                    ${column.links.map(link => `
                        <li>
                            <a href="#">
                                ${link}
                            </a>
                        </li>
                    `).join("")}

                </ul>

            </div>
        `).join("")}

    </div>


    <div class="footer__bottom">

        <p>
            ${footerData.brand.copyright}
        </p>

        <nav>

            ${footerData.bottomLinks.map(link => `
                <a href="#">
                    ${link}
                </a>
            `).join("")}

        </nav>

    </div>
`;