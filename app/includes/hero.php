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
                <a href="<?= BASE_URL ?>servicios/servicios.php" class="btn btn--primary">Ver servicios</a>
                <a href="https://wa.me/51970503691?text=Hola%20CodeImpact%20Perú,%20quiero%20hacer%20una%20consulta" class="btn btn--primary">Solicitar asesoría</a>
            </div>
        </div>


        <!-- video hero -->
        <div class="hero__media">

            <video
                class="hero__video"
                autoplay
                muted
                loop
                playsinline
                preload="none"
                poster="<?= BASE_URL ?>build/img/hero/hero.webp"
            >

                <!-- MOBILE -->
                <source
                    media="(max-width: 768px)"
                    src="<?= BASE_URL ?>build/video/hero-mobile.mp4"
                    type="video/mp4"
                >

                <!-- DESKTOP -->
                <source
                    src="<?= BASE_URL ?>build/video/hero-desktop.mp4"
                    type="video/mp4"
                >

            </video>

        </div>
    </div>
</section>