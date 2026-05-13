<section class="catalog-blog">

    <div class="container">

        <!-- INTRO -->
        <div class="catalog-blog__intro">
            <h3>Tus Ideas Tienen El Poder</h3>

            <p>
                No se trata solo de tener presencia digital, sino de usarla estratégicamente.
                Cada decisión que tomas en tu negocio puede potenciarse con tecnología,
                marketing y una buena estructura digital.
            </p>
        </div>

        <!-- GRID -->
        <div class="blog-grid">

            <?php 
            $posts = [
                [
                    "img" => "desarrollo-web.jpg",
                    "tag" => "DESARROLLO WEB",
                    "title" => "Una web profesional no es un gasto, es una inversión",
                    "text" => "Un sitio web bien diseñado transmite confianza desde el primer segundo. Es tu carta de presentación digital y el punto clave donde los clientes deciden si confiar en tu marca o buscar otra opción.",
                    "cta" => "Tu negocio también puede destacar en internet"
                ],
                [
                    "img" => "ecommerce-tienda-virtual.jpg",
                    "tag" => "E-COMMERCE",
                    "title" => "Vender online te permite crecer sin límites",
                    "text" => "Una tienda virtual trabaja por ti las 24 horas del día. Puedes llegar a más personas, automatizar procesos y generar ingresos incluso mientras no estás conectado.",
                    "cta" => "Imagina tu negocio vendiendo todos los días"
                ],
                [
                    "img" => "seo-web.jpg",
                    "tag" => "SEO & MARKETING",
                    "title" => "Aparecer en Google cambia completamente tu negocio",
                    "text" => "Cuando tus clientes te encuentran en buscadores, el crecimiento se vuelve constante. El SEO permite atraer tráfico de calidad sin depender siempre de publicidad pagada.",
                    "cta" => "Puedes atraer clientes sin buscarlos"
                ],
                [
                    "img" => "velocidad-pagina-web.jpg",
                    "tag" => "UX & PERFORMANCE",
                    "title" => "La velocidad de tu web define si vendes o pierdes clientes",
                    "text" => "Un sitio lento hace que los usuarios se vayan antes de ver tu oferta. Mejorar la velocidad y la experiencia de usuario aumenta conversiones y confianza.",
                    "cta" => "Cada segundo cuenta… literalmente"
                ]
            ];

            foreach($posts as $post): 
                $imgName = pathinfo($post['img'], PATHINFO_FILENAME);
            ?>
                
                <article class="blog-card">

                    <picture>
                        <source 
                            srcset="<?= BASE_URL; ?>build/img/blog/<?= $imgName; ?>.avif" 
                            type="image/avif">

                        <source 
                            srcset="<?= BASE_URL; ?>build/img/blog/<?= $imgName; ?>.webp" 
                            type="image/webp">

                        <img 
                            loading="lazy"
                            decoding="async"
                            src="<?= BASE_URL; ?>build/img/blog/<?= $post['img']; ?>" 
                            alt="<?= $post['title']; ?>">
                    </picture>

                    <div class="blog-content">

                        <span class="blog-tag"><?= $post['tag']; ?></span>

                        <h4><?= $post['title']; ?></h4>

                        <p><?= $post['text']; ?></p>

                        <span class="blog-cta">
                            <?= $post['cta']; ?>
                        </span>

                    </div>

                </article>

            <?php endforeach; ?>

        </div>

    </div>

</section>

<script src="<?= BASE_URL; ?>build/js/ui.min.js?v=<?= filemtime(__DIR__ . '/../../public/build/js/ui.min.js'); ?>" defer></script>