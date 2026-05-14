<style>

/* =========================================
   HERO CRITICAL CSS
========================================= */

.hero {
    background-color: #010618;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 6rem 0;
}

/* =========================
   HERO GRID
========================= */

.hero__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
    position: relative;
    z-index: 2;
}

/* =========================
   HERO CONTENT
========================= */

.hero__title {
    font-size: 5rem;
    line-height: 1.1;
    margin-bottom: 2rem;
    font-weight: 700;
}

.hero__text {
    font-size: 1.6rem;
    color: #b0b7c3;
    margin-bottom: 3rem;
}

.hero__buttons {
    display: grid;
    grid-auto-flow: column;
    text-align: center;
    gap: 1rem;
}

/* =========================
   HERO MEDIA
========================= */

.hero__media {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    contain: layout paint;
}

/* SLIDER */

.hero__slider {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    background-color: #000;
}

/* TRACK */

.hero__slides {
    display: flex;
    width: 100%;
    height: 100%;
    will-change: transform;
}

.hero__slides.is-ready {
    transition: transform .45s ease;
}

/* SLIDES */

.hero__slides picture {
    flex: 0 0 100%;
    height: 100%;
    display: block;
}

.hero__slides img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1127px) {

    .hero__title {
        font-size: 3.5rem;
    }
}

@media (max-width: 900px) {

    .hero__grid {
        grid-template-columns: 1fr;
        gap: 3rem;
        justify-items: center;
    }

    .hero__media {
        order: -1;
        width: 86%;
    }

    .hero__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 692px;
        text-align: center;
    }

    .hero__title {
        font-size: 3.4rem;
        text-align: center;
    }

    .hero__buttons {
        display: flex;
        gap: 3rem;
    }
}

@media (max-width: 768px) {

    .hero {
        padding: 0rem 0rem 6rem 0rem;
    }

    .hero__media {
        width: 100%;
    }

    .hero__content {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0rem 2rem;
    }

    .hero__title {
        font-size: 3rem;
    }

    .hero__buttons {
        justify-content: center;
    }

    .hero__grid {
        width: 100%;
        margin: 0;
        gap: 2rem;
    }

    .hero__slider {
        border-radius: 0px;
    }
}

@media (max-width: 505px) {

    .hero__content {
        padding: 1rem;
    }

    .hero__buttons {
        display: grid;
        grid-auto-flow: row;
        justify-content: stretch;
        width: 77%;
        gap: 1.5rem;
    }
}

@media (max-width: 435px) {

    .hero__grid {
        gap: 1rem;
    }

    .hero__title {
        font-size: 2.5rem;
    }
}

</style>

<section class="hero">
    <div class="container hero__grid">

        <div class="hero__content">
            <h1 class="hero__title">
                Soluciones digitales que hacen crecer negocios
            </h1>

            <p class="hero__text">
                Desarrollo web, marketing y contenido enfocado en resultados reales.
            </p>

            <div class="hero__buttons">
                <a href="<?= BASE_URL ?>servicios/servicios.php" class="btn btn--primary">
                    Ver servicios
                </a>

                <a href="https://wa.me/51970503691?text=Hola%20CodeImpact%20Perú,%20quiero%20hacer%20una%20consulta" class="btn btn--primary">
                    Solicitar asesoría
                </a>
            </div>
        </div>

        <!-- slider hero -->
       <div class="hero__media">

            <div class="hero__slider">

                <div class="hero__slides">
                     <picture>
                        <source srcset="<?= BASE_URL ?>build/img/header/desarollo-web.avif" type="image/avif">
                        <source srcset="<?= BASE_URL ?>build/img/header/desarollo-web.webp" type="image/webp">
                        <img src="<?= BASE_URL ?>build/img/header/desarollo-web.jpg" width="1920" height="1080" fetchpriority="high" decoding="async" alt="Desarrollo web">
                    </picture>

                    <picture>
                        <source srcset="<?= BASE_URL ?>build/img/header/produccion-marketing.avif" type="image/avif">
                        <source srcset="<?= BASE_URL ?>build/img/header/produccion-marketing.webp" type="image/webp">
                        <img src="<?= BASE_URL ?>build/img/header/produccion-marketing.jpg" width="1920" height="1080" decoding="async" loading="lazy" alt="Marketing">
                    </picture>

                    <picture>
                        <source srcset="<?= BASE_URL ?>build/img/header/codeimpact-web.avif" type="image/avif">
                        <source srcset="<?= BASE_URL ?>build/img/header/codeimpact-web.webp" type="image/webp">
                        <img src="<?= BASE_URL ?>build/img/header/codeimpact-web.jpg" width="1920" height="1080" decoding="async" loading="lazy" alt="CodeImpact">
                    </picture>
                </div>



            </div>

        </div>




    </div>
</section>