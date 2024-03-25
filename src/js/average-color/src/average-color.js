/**
 * Color promedio para el fondo de las imágenes en noticias.
 * 
 * @summary Permite pintar el div contenedor de la imagen principal para las 
 * noticias en www.argentina.gob.ar.
 * 
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 * 
 * @example
 * document.addEventListener("DOMContentLoaded", (new AverageColor).render());
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rightsto use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class AverageColor {
    constructor(selector=".jumboarticle"){
        this.selector = selector;
    }

    /**
     * Obtiene el valor de color promediado
     * @param {string} imgEl URI de la imagen en una etiqueta `</img>`
     * @returns {object}
     */
    getAverageRGB = imgEl => {
        const blockSize = 5; // Visit every 5th pixel (20 / 4)
        const defaultRGB = { r: 238, g: 238, b: 238 };
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
    
        if (!context) return defaultRGB;
    
        const height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        const width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    
        context.drawImage(imgEl, 0, 0);
    
        try {
            const data = context.getImageData(0, 0, width, height).data;
            let rgb = { r: 0, g: 0, b: 0 };
            let count = 0;
    
            for (let i = 0; i < data.length; i += blockSize * 4) {
                rgb.r += data[i];
                rgb.g += data[i + 1];
                rgb.b += data[i + 2];
                count++;
            }
    
            rgb.r = Math.floor(rgb.r / count); // Use Math.floor for averaging
            rgb.g = Math.floor(rgb.g / count);
            rgb.b = Math.floor(rgb.b / count);
    
            if ((rgb.r + rgb.g + rgb.b) == 0) {
                return defaultRGB;
            }
    
            return rgb;
        } catch (e) {
            return defaultRGB;
        }
    }
    
    /**
     * Crea una imagen temporal dentro del body
     * 
     * @param {string} imageSrc URI de la imagen
     * @returns {undefined}
     */
    tempImage = imageSrc => {
        const image = document.querySelector("#id-average-color");
        if (image) {
            return image.src;
        }
        const img = document.createElement("img");
        img.src = imageSrc;
        img.style.height = "1px";
        img.style.width = "1px";
        img.style.position = "absolute";
        img.style.display = "none";
        img.id = "id-average-color";
    
        const body = document.querySelector("body");
        body.appendChild(img);
    }
    
    /**
     * Imprime el color como background-color.
     * @param {string} color Color en formato RGB() 
     */
    applyColor = color => {
        const element = document.querySelectorAll(this.selector);
        element.forEach(e => e.style.backgroundColor = color);
    }
    
    /**
     * Borra la imagen temporal
     * @deprecated
     * @returns {undefined}
     */
    removeImage = () => {
        const element = document.querySelectorAll("#id-average-color");
        element.forEach(e => e.remove());
    }
    
    /**
     * Color en formato RGB
     * @returns {string}
     */
    obtainColor = () => {
        const color = this.getAverageRGB(
            document.getElementById('id-average-color'));
        return `rgb(${color.r},${color.g},${color.b})`;
    }
    
    /**
     * Obtiene la uri de la imagen.
     * @param {string} imgSrcSelector Selector para obtener el url del 
     * background-image;
     * @example
     * // ./imagen.png
     * imageSrc(".jumboarticle");
     * @returns {string}
     */
    imageSrc = (imgSrcSelector = this.selector) => {
        const element = document.querySelector(imgSrcSelector);
    
        let regex = /(?:url\(("|'|`)(.*?)\1\))/;
    
        let m = regex.exec(element.style.backgroundImage);
        const [, , url] = m;
        return url;
    };
    
    /**
     * Procesa los scripts e imprime el colro de fondo
     * @returns {undefined}
     */
    render = () => {
        const _this = this;
        
        try {
            this.tempImage(this.imageSrc());
            let counter = 0;
    
            setTimeout(function () {
    
                let looper = setInterval(function () {
                    _this.tempImage(_this.imageSrc());
                    _this.applyColor(_this.obtainColor());
    
                    if (counter >= 10) {
                        clearInterval(looper);
                    }
                    counter++;
                }, 1000);
                _this.applyColor(_this.obtainColor());
    
            }, 300);
    
        } catch (error) {
            console.error("No se puede pintar el fondo")
        }
    };


}

document.addEventListener("DOMContentLoaded", (new AverageColor).render());