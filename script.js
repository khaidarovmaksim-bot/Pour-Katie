const texts = {
    fr: {
        title: "Bonne année, ma chère Katie🤍",
        card1: "Je te souhaite plein d`amour et de bonheur",
        card2: "Sois heureuse et sois forte, je t`adore vachement❤️"
    },
    es: {
        title: "Buenos días, mi querida Katya",
        card1: "Mucho gusto nuestras relaciones cálidas y tu vibra mágica",
        card2: "Gracias por ti y ser feliz❤️"
    },
    pt: {
        title: "Feliz ano novo, querida Katya",
        card1: "Eu te adoro e estou muito feliz que você exista",
        card2: "Seja feliz e saudável, nos veremos em breve",
    }
};

function setLang(lang) {
    document.getElementById("title").textContent = texts[lang].title;
    document.getElementById("card1").textContent = texts[lang].card1;
    document.getElementById("card2").textContent = texts[lang].card2;
}

setLang("fr");