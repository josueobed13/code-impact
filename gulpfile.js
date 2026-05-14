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
import sourcemaps from 'gulp-sourcemaps'

const sass = gulpSass(dartSass)

// ==========================
// PATHS (SOLO UNO)
// ==========================
const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*',
    video: 'src/video/**/*',
    animations: 'src/animations/**/*.json',
    favicon: 'src/img/favicon/**/*'
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
// JS loties logo
// ==========================
//export function jsinitial() {
   // return src('src/js/initial/**/*.js')
      //  .pipe(sourcemaps.init())
     //   .pipe(concat('initial.min.js'))
     //   .pipe(terser())
     //   .pipe(sourcemaps.write('.'))
     //   .pipe(dest('./public/build/js'))
//}

// ==========================
// JS loties animacion
// ==========================
export function jsanima() {
    return src('src/js/animacion/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('jsanima.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./public/build/js'))
}

// ==========================
// JS contador portafolio
// ==========================
export function jscontador() {
    return src('src/js/contador/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('contador.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./public/build/js'))
}



// ==========================
// JS CORE
// ==========================
export function jsCore() {
    return src('src/js/core/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('core.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./public/build/js'))
}

// ==========================
// JS UI
// ==========================
export function jsUI() {
    return src('src/js/ui/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('ui.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./public/build/js'))
}

// ==========================
// JS HOME
// ==========================
export function jsHome() {
    return src('src/js/home/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('home.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
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

    if (extName === '.svg') {
        fs.copyFileSync(file, `${outputBase}.svg`)
        return
    }

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
// FAVICON (COPY SIMPLE)
// ==========================
export function favicon() {
    return src(paths.favicon)
        .pipe(dest('./public/build/img/favicon'))
}

// ==========================
// ANIMACIONES (LOTTIE)
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
    watch(paths.js, { usePolling: true }, series(jsanima, jscontador, jsCore, jsUI, jsHome))
    watch(paths.img, { usePolling: true }, imagenes)
    watch(paths.video, { usePolling: true }, videos)
    watch(paths.animations, { usePolling: true }, animations)
}

// ==========================
// DEFAULT
// ==========================
export default series(
    jscontador,
    jsanima,
    jsCore,
    jsUI,
    jsHome,
    css,
    imagenes,
    animations,
    videos,
    favicon,
    dev
)