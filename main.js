const cardList = [
    {
        id: 1,
        url: "images/Group 153423-1.png",
        type: "sports",
    },
    {
        id: 2,
        url: "images/Group 153428-2.png",
        type: "art",
    },
    {
        id: 3,
        url: "images/Group 153423.png",
        type: "people",
    },
    {
        id: 4,
        url: "images/Group 153423-1.png",
        type: "travel",
    },
    {
        id: 5,
        url: "images/Group 153429.png",
        type: "architecture",
    },

    {
        id: 6,
        url: "images/Group 153423-2.png",
        type: "abstract",
    },
    {
        id: 7,
        url: "images/Group 153423.png",
        type: "people",
    },
    {
        id: 8,
        url: "images/Group 153423-1.png",
        type: "travel",
    },
    {
        id: 9,
        url: "images/Group 153423.png",
        type: "art",
    },
];




let tickImage = "images/Group 147609.jpg"

let cardContainer = document.querySelector(".all-card");
let btn = document.querySelectorAll(".btn");

function cardItem(url, type) {

    const newCard = document.createElement("div");
    newCard.setAttribute("type", `${type}`);
    newCard.innerHTML = `<img src="${url}">`;
    newCard.classList.add = "img-div";
    cardContainer.append(newCard);

}


let data = cardList.forEach((item) => {
    cardItem(item.url, item.type)
})



function setCard() { }

function filterCard() {


    // ---- add active effect on buton --------------------

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            for (let j = 0; j < btn.length; j++) {
                btn[j].classList.remove('active')
            }
            this.classList.add('active')
        })
    }

    // ----  Filter Card according their type -------------

    btn.forEach((item) => {
        let dataFilter = item.getAttribute("data-filter");
        item.addEventListener("click", function (e) {
            cardContainer.innerHTML = '';
            cardList.forEach((item) => {
                if (item.type == dataFilter) {
                    setCard(cardItem(item.url, item.type))
                } else if (dataFilter == "all") {
                    setCard(cardItem(item.url, item.type))
                    tick()
                }
                else (
                    setCard(data)
                )
            });
        });
    });

}

// ---- add blue tick on image  -------------------------


filterCard()

let cards = document.getElementById('cardId').children

let show;

function showimagedata() {
    show ? alert(show) : null
}

function tick() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {
            for (let j = 0; j < cards.length; j++) {
                cards[j].removeAttribute('class', 'tick')
            }
            cards[i].setAttribute('class', 'tick')
            show = cards[i].getAttribute('type')
        })
    }
}

tick()
