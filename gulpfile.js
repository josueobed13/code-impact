import path from 'path'
import fs from 'fs'
import { glob } from 'glob'
import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import concat from 'gulp-concat'
import terser from 'gulp-terser'
import sharp from 'sharp'
import rename from 'gulp-rename'

const sass = gulpSass(dartSass)

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*',
    video: 'src/video/**/*',

    // 🔥 NUEVO (animaciones)
    animations: 'src/animations/**/*.json'
}

// ==========================
// CSS
// ==========================
export function css() {
    return src(paths.scss, { sourcemaps: true })
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(dest('./public/build/css', { sourcemaps: '.' }))
}


// ==========================
// fonts
// ==========================
export function fonts() {
    return src('src/fonts/*.{woff,woff2,ttf,otf}')
        .pipe(dest('./public/build/fonts'))
}



// ==========================
// JS CORE
// ==========================
export function jsCore() {
    return src('src/js/core/**/*.js')
        .pipe(concat('core.min.js'))
        .pipe(terser())
        .pipe(dest('./public/build/js'))
}

// ==========================
// JS UI
// ==========================
export function jsUI() {
    return src('src/js/ui/**/*.js')
        .pipe(concat('ui.min.js'))
        .pipe(terser())
        .pipe(dest('./public/build/js'))
}

// ==========================
// JS HOME
// ==========================
export function jsHome() {
    return src('src/js/home/**/*.js')
        .pipe(concat('home.min.js'))
        .pipe(terser())
        .pipe(dest('./public/build/js'))
}

// ==========================
// IMÁGENES
// ==========================
export async function imagenes() {
    const srcDir = './src/img'
    const buildDir = './public/build/img'
    const images = await glob(paths.img)

    images.forEach(file => {
        const relativePath = path.relative(srcDir, path.dirname(file))
        const outputSubDir = path.join(buildDir, relativePath)

        procesarImagen(file, outputSubDir)
    })
}

function procesarImagen(file, outputSubDir) {

    if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true })
    }

    const baseName = path.basename(file, path.extname(file))
    const extName = path.extname(file).toLowerCase()
    const outputBase = path.join(outputSubDir, baseName)

    // SVG
    if (extName === '.svg') {
        fs.copyFileSync(file, `${outputBase}.svg`)
        return
    }

    // PNG
    if (extName === '.png') {
        sharp(file)
            .png({ compressionLevel: 9 })
            .toFile(`${outputBase}.png`)

        sharp(file)
            .webp({ quality: 80 })
            .toFile(`${outputBase}.webp`)

        sharp(file)
            .avif({ quality: 50 })
            .toFile(`${outputBase}.avif`)

        return
    }

    // JPG / JPEG
    if (extName === '.jpg' || extName === '.jpeg') {

        sharp(file)
            .jpeg({ quality: 85 })
            .toFile(`${outputBase}.jpg`)

        sharp(file)
            .webp({ quality: 80 })
            .toFile(`${outputBase}.webp`)

        sharp(file)
            .avif({ quality: 50 })
            .toFile(`${outputBase}.avif`)
    }
}

// ==========================
// 🔥 ANIMACIONES (LOTTIE JSON)
// ==========================
export function animations() {
    return src(paths.animations)
        .pipe(dest('./public/build/animations'))
}

// ==========================
// VIDEO
// ==========================
export function videos() {
    return src(paths.video, { encoding: false })
        .pipe(dest('./public/build/video'))
}

// ==========================
// WATCH
// ==========================
export function dev() {
    watch(paths.scss, { usePolling: true }, css)

    watch(paths.js, { usePolling: true }, series(jsCore, jsUI, jsHome))

    watch(paths.img, { usePolling: true }, imagenes)
    watch(paths.video, { usePolling: true }, videos)
    watch(paths.animations, { usePolling: true }, animations)
}

// ==========================
// DEFAULT
// ==========================
export default series(
    jsCore,
    jsUI,
    jsHome,
    fonts,
    css,
    imagenes,
    animations,
    videos,
    dev
)