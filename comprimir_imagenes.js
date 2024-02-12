const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const comprimirImagen = async (rutaImagen, rutaDestino) => {
    try {
        await sharp(rutaImagen)
            .webp({ quality: 80 }) // Ajusta la calidad de compresión según tus necesidades
            .toFile(rutaDestino);
        console.log(`Imagen comprimida guardada en: ${rutaDestino}`);
    } catch (error) {
        console.error('Error al comprimir la imagen:', error);
    }
};

const comprimirCarpeta = async (carpetaOrigen, carpetaDestino) => {
    // Crea la carpeta destino si no existe
    if (!fs.existsSync(carpetaDestino)) {
        fs.mkdirSync(carpetaDestino, { recursive: true });
    }

    // Recorre las imágenes en la carpeta de origen y sus subcarpetas
    fs.readdirSync(carpetaOrigen, { withFileTypes: true }).forEach(async (entrada) => {
        const rutaOrigenAbsoluta = path.join(carpetaOrigen, entrada.name);
        const rutaDestinoAbsoluta = path.join(carpetaDestino, entrada.name);

        if (entrada.isDirectory()) {
            // Si es una carpeta, llama recursivamente a la función
            comprimirCarpeta(rutaOrigenAbsoluta, rutaDestinoAbsoluta);
        } else {
            // Asegúrate de ajustar esto para filtrar solo archivos de imagen según sea necesario
            if (rutaOrigenAbsoluta.endsWith('.jpg') || rutaOrigenAbsoluta.endsWith('.png')) {
                await comprimirImagen(rutaOrigenAbsoluta, rutaDestinoAbsoluta.replace(/\.(jpg|png)$/, '.webp'));
            }
        }
    });
};

// Ruta de la carpeta principal que contiene las imágenes
const rutaCarpetaOrigen = 'estilos2023';

// Ruta de la carpeta destino para guardar las imágenes comprimidas en formato WebP
const rutaCarpetaDestino = 'estilos2023c';

// Comprime las imágenes de la carpeta y guarda en la carpeta destino
comprimirCarpeta(rutaCarpetaOrigen, rutaCarpetaDestino);
