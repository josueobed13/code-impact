<?php 
$titulo = "Nosotros | CodeImpact";
$descripcion = "Gracias por visitarnos, Puedes ver nuestras redes en los siguientes enlaces";

require_once __DIR__ . '/../app/includes/header.php';
?>

<main class="linktree-container">

    <div class="profile">

        <img src="<?= BASE_URL ?>build/img/icons/logo-perfil.jpg" 
            alt="CodeImpact Logo" 
            class="logo">

        <h1 class="brand-title">CodeImpact Perú</h1>

        <span class="tagline">Agencia de Desarrollo Web & Marketing Digital</span>

        <p class="description">
            Gracias por visitarnos, estamos para Servirte.
        </p>

        <div class="social-hint">
            <span>Conéctate con nosotros</span>
        </div>

    </div>

    <div class="links">

        <a href="<?= BASE_URL ?>index.php" class="link-card">
            <div class="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5z"
                        stroke="currentColor" stroke-width="2"/>
                </svg>
            </div>
            <span>Inicio</span>
        </a>

        <a href="https://facebook.com/tuPagina" target="_blank" class="link-card">
            <div class="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                    <path fill-rule="evenodd"
                        d="M15.1742424,5.3203125 L17,5.3203125 L17,2.140625
                        C16.6856061,2.09765625 15.6022727,2 14.3409091,2
                        C11.7083333,2 9.90530303,3.65625 9.90530303,6.69921875
                        L9.90530303,9.5 L7,9.5 L7,13.0546875
                        L9.90530303,13.0546875 L9.90530303,22
                        L13.4659091,22 L13.4659091,13.0546875
                        L16.2537879,13.0546875 L16.6969697,9.5
                        L13.4659091,9.5 L13.4659091,7.05078125
                        C13.4659091,6.0234375 13.7424242,5.3203125
                        15.1742424,5.3203125 Z"/>
                </svg>
            </div>
            <span>Facebook</span>
        </a>

        <a href="https://instagram.com/tuUsuario" target="_blank" class="link-card">
            <div class="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 0 1 4.25 4.25v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.75 1.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5A3.5 3.5 0 1 1 12 15.5 3.5 3.5 0 0 1 12 8.5z"/>
                </svg>
            </div>
            <span>Instagram</span>
        </a>

        <a href="https://tiktok.com/@tuUsuario" target="_blank" class="link-card">
            <div class="icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2
                    h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743
                    2.895 2.895 0 0 1 3.183-4.51v-3.5
                    a6.329 6.329 0 0 0-5.394 10.692
                    6.33 6.33 0 0 0 10.857-4.424V8.687
                    a8.182 8.182 0 0 0 4.773 1.526V6.79
                    a4.831 4.831 0 0 1-1.003-.104z"/>
                </svg>
            </div>
            <span>TikTok</span>
        </a>

    </div>

</main>

<?php require_once __DIR__ . '/../app/includes/footer.php'; ?>