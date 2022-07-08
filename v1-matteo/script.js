const products = {
    "1": {
        "type": "claquette",
        "name": "La Classique",
        "price": 135,
        "colors": ["#000", "#FF0000", "#1F9902", "#020999"],
        "sizes": [40, 41, 42, 43]
    },
    "2": {
        "type": "chaussette",
        "name": "La Basique",
        "price": 55
    },
    "3": {
        "type": "chaussette",
        "name": "La Week End",
        "price": 55
    },
    "4": {
        "type": "chaussette",
        "name": "La Pair Simple",
        "price": 55,
        "colors": ["#020999", "#FF0000", "#898989"],
        "sizes": [40, 41, 42, 43]
    },
    "5": {
        "type": "claquette",
        "name": "La Touriste",
        "price": 135,
        "colors": ["#020999", "#FF0000", "#898989"],
        "sizes": [40, 41, 42, 43]
    },
    "6": {
        "type": "claquette",
        "name": "La Sportive",
        "price": 135,
        "colors": ["#020999", "#FF0000", "#898989"],
        "sizes": [40, 41, 42, 43]
    },
    "7": {
        "type": "claquette",
        "name": "La Chomeuse",
        "price": 135,
        "colors": ["#020999", "#FF0000", "#898989"],
        "sizes": [40, 41, 42, 43]
    },
    "8": {
        "type": "claquette",
        "name": "La Nouvelle",
        "price": 135,
        "colors": ["#020999", "#FF0000", "#898989"],
        "sizes": [40, 41, 42, 43]
    },
    "9": {
        "type": "chaussette",
        "name": "La Carrelée",
        "price": 55
    },
    "10": {
        "type": "chaussette",
        "name": "La Lionel Messi",
        "price": 55
    },
    "11": {
        "type": "chaussette",
        "name": "La Mémère",
        "price": 55
    },
    "12": {
        "type": "chaussette",
        "name": "La Moche",
        "price": 55
    }
};

var cartBtn = document.getElementById('cartToggle');
var cartBtnClose = document.getElementById('cartToggleClose');
var cart = document.getElementById('cart');

cartBtn.addEventListener('click', () => {
    cart.classList.toggle('active');
});
cartBtnClose.addEventListener('click', () => {
    cart.classList.toggle('active');
});

var claquetteLink = document.getElementById('claquetteToggle');
var chaussetteLink = document.getElementById('chaussetteToggle');
var headerDiv = document.getElementById('logoNav');

headerDiv.addEventListener('click', () => {
    var pageNb;
    if (document.getElementsByTagName('h1')[0].classList.contains('claquetteActive')) {
        console.log("chaussette");
        document.getElementsByTagName('h1')[0].classList.add('chaussetteActive');
        document.getElementsByTagName('h1')[0].classList.remove('claquetteActive');
        pageNb = 1;
    }
    else {
        console.log("claquette");
        document.getElementsByTagName('h1')[0].classList.add('claquetteActive');
        document.getElementsByTagName('h1')[0].classList.remove('chaussetteActive');
        pageNb = 0;
    }
    var main = document.getElementsByTagName('main')[0];
    main.style.left = "-" + pageNb + "00%";
});

// etoile filantes
document.querySelector('.etoile-filante:nth-child(1)').style.setProperty('--w', '230px');
document.querySelector('.etoile-filante:nth-child(2)').style.setProperty('--w', '320px');
document.querySelector('.etoile-filante:nth-child(3)').style.setProperty('--w', '150px');

var btnFooter = document.getElementById('footer');

btnFooter.onclick = () => { btnFooter.classList.toggle('active') }

// change product diplaying
var othersClaquette = document.querySelectorAll('#othersProducts figure');

othersClaquette.forEach((product) => {
    product.onclick = (e) => {
        var activeImg = document.querySelector('#firstImgProduct img');
        var othersImg = document.querySelectorAll('#othersImg img');
        var newProductLink = e.target.src.split("/");
        var oldProductLink = activeImg.src.split("/");
        var iN = newProductLink.length;
        var oN = oldProductLink.length;
        var newPathArray = [newProductLink[iN - 1], newProductLink[iN - 2], newProductLink[iN - 3]];
        var oldPathArray = [oldProductLink[oN - 1], oldProductLink[oN - 2], oldProductLink[oN - 3]];
        var newLink = newPathArray.reverse().join("/");
        var oldLink = oldPathArray.reverse().join("/");

        activeImg.src = newLink;
        e.target.src = oldLink;
        othersImg.forEach((img) => {
            img.src = newLink;
        })

        document.getElementById('product').setAttribute('product', getIndex(newProductLink[iN - 1].replace(".png", "")));
    };
});

var othersChaussette = document.querySelectorAll('.othersChaussettes');
othersChaussette.forEach((chaussette) => {
    chaussette.onclick = (e) => {
        var activeImg = document.querySelector('#imgChaussette img');
        var newProductLink = e.target.src.split("/");
        var oldProductLink = activeImg.src.split("/");
        var iN = newProductLink.length;
        var oN = oldProductLink.length;
        var newPathArray = [newProductLink[iN - 1], newProductLink[iN - 2], newProductLink[iN - 3]];
        var oldPathArray = [oldProductLink[oN - 1], oldProductLink[oN - 2], oldProductLink[oN - 3]];
        var newLink = newPathArray.reverse().join("/");
        var oldLink = oldPathArray.reverse().join("/");

        activeImg.src = newLink;
        e.target.src = oldLink;
        document.getElementById('imgChaussette').setAttribute('product', getIndex(newProductLink[iN - 1].replace(".png", "")));
    };
})


function getIndex(name) {
    for (var i in products) {
        console.log(products[i].name.toLowerCase().replaceAll(" ", "-").replace("é", "e").replace("è", "e"));
        if (products[i].name.toLowerCase().replaceAll(" ", "-").replace("é", "e").replace("è", "e") == name) {
            console.log(i);
            return i;
        }
    }
    return "1";
}

var addChaussetteToCard = document.getElementById('addChaussetteToCart');
var addClaquetteToCard = document.getElementById('addClaquetteToCart');
var emptyCardBtn = document.getElementById("emptyCard");

emptyCardBtn.onclick = () => {
setCookie('card', "{}");
}

addClaquetteToCard.onclick = () => {
    var id = document.getElementById('product').getAttribute('product');
    addToCard(id);
};
addChaussetteToCard.onclick = () => {
    var id = document.getElementById('imgChaussette').getAttribute('product');
    addToCard(id);
};

function setCard() {
    var cookieCard = getCookie('card');
    console.log(typeof(cookieCard));
    if (cookieCard != undefined && cookieCard != "{}") {
        var o = JSON.parse(cookieCard);
        var products = o.products;
        var nbArticle = products.length;
        document.getElementById('nbArticle').innerHTML = nbArticle;
        var price = 0;
        for (var i = 0; i < nbArticle; i++) {
            price += products[i].price;

            var newArticle = document.createElement('div');
            newArticle.classList.add('article');

            var figure = document.createElement('figure');
            var img = document.createElement('img');
            img.src = "file/products/" + products[i].name.toLowerCase().replaceAll(" ", "-").replaceAll("é", "e").replaceAll("è", "e") + ".png";
            var caption = document.createElement('figcaption');
            caption.innerHTML = products[i].name;

            figure.appendChild(img);
            figure.appendChild(caption);
            newArticle.appendChild(figure);

            var hyphen1 = document.createElement('div');
            hyphen1.classList.add('hyphen')
            hyphen1.innerHTML = "-";

            newArticle.appendChild(hyphen1);

            var details = document.createElement('div');
            details.classList.add('details');
            var listDetails = document.createElement('ul');
            var size = document.createElement('li');
            var color = document.createElement('li');
            if (products["type"] == "chaussette") {
                size.innerHTML = "Size : TU";
                color.innerHTML = "Color : CU";
            } else {
                size.innerHTML = "Size : 42";
                color.innerHTML = "Color :";
                var colorBlock = document.createElement('div');
                colorBlock.classList.add('colorProduct');
                color.appendChild(colorBlock);
            }

            listDetails.appendChild(size);
            listDetails.appendChild(color);
            details.appendChild(listDetails);
            newArticle.appendChild(details);
            

            var hyphen2 = document.createElement('div');
            hyphen2.classList.add('hyphen')
            hyphen2.innerHTML = "-";

            newArticle.appendChild(hyphen2);

            var blocPrice = document.createElement('div');
            blocPrice.classList.add('price')
            var pPrice = document.createElement('p');
            pPrice.innerHTML = products[i].price + " €";

            blocPrice.appendChild(pPrice);
            newArticle.appendChild(blocPrice);

            document.getElementById('articles').appendChild(newArticle);
        }
        document.getElementById('priceCard').innerHTML = price;
    }
}

function addToCard(id) {
    var cookieCard = getCookie('card');
    console.log(cookieCard);
    var list = [];
    var card = {};
    if (cookieCard !== undefined && cookieCard != "{}") {
        card = JSON.parse(cookieCard);
        card.products.push(products[id])
        console.log(cookieCard);
    }
    else {
        list.push(products[id]);
        card['products'] = list;
    }
    setCookie('card', JSON.stringify(card));
}

function getCookie(name) {
    let cookie = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
            "=([^;]*)"
        )
    );
    return cookie ? decodeURIComponent(cookie[1]) : undefined;
}

function setCookie(name, value, options = {}) {
    // Options par défaut
    options = {
        // path: '/',
        // domain: '127.0.0.1',
        // date d'expiration 30 jour
        expires: new Date(Date.now() + 86400e3 * 30).toUTCString(),
        // secure: true,
        // samesite: "strict",
        ...options,
    };
    // On met la date au bon format
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURI(name) + "=" + encodeURI(value);
    // On itere sur les options en ajoutant la valeur a updateCookie
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
    location.reload();
}

setCard();


// var logoNav = document.getElementById('logoNav');
// var gifPlay = false;

// logoNav.addEventListener('mouseover', () => {
//     gifPlay = true;
//     function gifActive() {
//         if (gifPlay) {
//             let imgGif = document.getElementById('signe-j');
//             let imgSrc = imgGif.src;
//             let srcPart = imgSrc.split("-");
//             let srcElImgPart = srcPart[srcPart.length - 1].split(".")[0];
//             let indexNb = imgSrc.indexOf(srcElImgPart + ".png");
//             let srcImgPart = parseInt(srcElImgPart);
//             let nextImg;
//             if (srcImgPart == 14) {
//                 nextImg = 0;
//             } else {
//                 nextImg = srcImgPart + 1;
//             }
//             let newSrc = imgSrc.substring(0, indexNb) + nextImg + ".png";
//             imgGif.src = newSrc;
//             setTimeout(gifActive, 150);
//         }
//     }
//     gifActive();
// });

// logoNav.addEventListener('mouseleave', () => {
//     gifPlay = false;
// });