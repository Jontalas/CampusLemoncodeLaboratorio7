// Constantes
const ibanList = [
    "ES6600190020961234567890",
    "ES66 0019 0020 9612 3456 7890"
];
const matriculasList = [
    "2021 GMD",
    "2345-GMD",
    "4532BDB",
    "0320-AAA"
];
const htmlList = {
    htmlOneLine: '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />',
    htmlLarge: '<html>\n<body>\n<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg" />\n<h1>ejemplo</h1>\n<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />\n</body>\n</html>'
};
const tarjetasList = [
    "5299 6400 0000 0000",
    "5299-6400-0000-0000",
    "5299640000000000"
];
const passwordList = [
    "1234",
    "aA0*",
    "e4R5th13GThy",
    "e4R5_th13GThy*"
];
const urlList = [
    "https://www.lemoncode.net",
    "www.lemoncode.net",
    "lemoncode.net",
    "http://www.google-com.123.com",
    "http://www.google-com.123",
    "https://www.google-com.com",
    "http://google-com.com",
    "http://google.com",
    "google.com",
    "http://www.gfh.",
    "http://www.gfh.c",
    "http://www.gfh:800000",
    "www.google.com ",
    "http://google",
    "//cdnblabla.cloudfront.net/css/app.css"
];
const hexaColorList = [
    "1234",
    "#fff443",
    "#999999"
];

var bool2Text = (valor) => {
    return valor ? "Valor válido" : "Valor NO válido";
}

var validateIBAN = (iban) => {
    const pattern = /^([A-Z]{2})(\d{2})( ?\d{4}){5}$/;
    const resultado = pattern.test(iban);
    console.log(iban + " --> " + bool2Text(resultado));
    if (resultado) {
        const desglose = iban.match(pattern);
        console.log("- Código de pais: " + desglose[1]);
        console.log("- Dígito de control: " + desglose[2]);
    }
}

var validateMatricula = (matricula) => {
    const pattern = /^(\d{4})[ -]?([A-Z]{3})$/;
    const resultado = pattern.test(matricula);
    console.log(matricula + " --> " + bool2Text(resultado));
    if (resultado) {
        const desglose = matricula.match(pattern);
        console.log("- Números: " + desglose[1]);
        console.log("- Letras: " + desglose[2]);
    }
}

var getOneImgFromHtml = (fuente) => {
    const pattern = /^.*<img\s+src="(.*)"\s+\/>.*$/;
    const resultado = pattern.test(fuente);
    console.log(fuente + " --> " + bool2Text(resultado));
    if (resultado) {
        const desglose = fuente.match(pattern);
        console.log("- Imagen: " + desglose[1]);
    }
}

var getAllImgFromHtml = (fuente) => {
    const pattern = /^.*<img\s+src=".*"\s+\/>.*$/gm;
    const resultado = pattern.test(fuente);
    console.log(fuente + " --> " + bool2Text(resultado));
    if (resultado) {
        const desglose = fuente.match(pattern);
        for (var iterator of desglose) {
            getOneImgFromHtml(iterator);
        }
    }
}

var validateTarjeta = (tarjeta) => {
    const pattern = /^(5[0-5]\d\d)[ -]?(\d\d\d\d)[ -]?(\d\d\d\d)[ -]?(\d\d\d\d)$/;
    const resultado = pattern.test(tarjeta);
    console.log(tarjeta + " --> " + bool2Text(resultado));
    if (resultado) {
        const desglose = tarjeta.match(pattern);
        for (var index = 1; index < desglose.length; index++) {
            console.log("- grupo " + index + ": " + desglose[index]);
        }
    }
}

var validatePassword = (password) => {
    // patterns para las validaciones encontrados en: https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    // (Se han modificado ligeramente para ajustarse a las especificaciones de la practica)
    const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    const mediumPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    const strongResultado = strongPattern.test(password);
    const mediumResultado = mediumPattern.test(password);
    console.log("Contraseña: " + password);
    console.log("- Tipo complejo: " + bool2Text(strongResultado));
    console.log("- Tipo moderado: " + bool2Text(mediumResultado));
}

var validateUrl = (url) => {
    // pattern para la validación encontrado en: https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/
    const pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const resultado = pattern.test(url);
    console.log(url + " --> " + bool2Text(resultado));
}

var validateHexaColor = (hexaColor) => {
    // pattern para la validación encontrado en: http://es.uwenku.com/question/p-glkqcnfn-v.html
    const pattern = /^#[a-f0-9]{6}$/i;
    const resultado = pattern.test(hexaColor);
    console.log(hexaColor + " --> " + bool2Text(resultado));
}

// MAIN
console.log("<---------- Validación de códigos IBAN ---------->");
for (var iterator of ibanList) {
    validateIBAN(iterator);
}
console.log("\n<---------- Validación de matrículas de coche modernas ---------->");
for (var iterator of matriculasList) {
    validateMatricula(iterator);
}
console.log("\n<---------- Extracción de tags img desde un HTML (una línea) ---------->");
getOneImgFromHtml(htmlList.htmlOneLine);
console.log("\n<---------- Extracción de tags img desde un HTML (varias extracciones) ---------->");
getAllImgFromHtml(htmlList.htmlLarge);
console.log("\n<---------- Validación de tarjetas de crédito ---------->");
for (var iterator of tarjetasList) {
    validateTarjeta(iterator);
}
console.log("\n<---------- Verificación de calidad de contraseñas ---------->");
console.log("Tipo complejo: al menos una minuscula, una mayuscula, un numero y un caracter especial.");
console.log("Tipo moderado: al menos una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.");
for (var iterator of passwordList) {
    validatePassword(iterator);
}
console.log("\n<---------- Validación de URLs ---------->");
for (var iterator of urlList) {
    validateUrl(iterator);
}
console.log("\n<---------- Validación de colores en formato hexadecimal ---------->");
for (var iterator of hexaColorList) {
    validateHexaColor(iterator);
}