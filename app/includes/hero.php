
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