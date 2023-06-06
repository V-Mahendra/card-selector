// const imageCards = document.querySelectorAll(".img");

// imageCards.forEach((card) => {
//     card.addEventListener('click', () => {
//         imageCards.forEach((item) => {
//             item.removeAttribute("class", "addtick")
//         })
//         card.setAttribute("class", "addtick")
//     })
// })
// card.class = "img selected"
// card.classList.add("selected")



let imgdiv = document.querySelectorAll(".img")

imgdiv.forEach((item) => {
    item.addEventListener('click', () => {

        imgdiv.forEach((tick) => {
            tick.removeAttribute("class", "addtick")
        })
        item.setAttribute('class', "addtick")
    })
})




let images = [
    {
        id: 1,
        url: "images/Group 153423-1.png",
        type: "sports"
    },
    {
        id: 2,
        url: "images/Group 153428-2.png",
        type: "art"
    },
    {
        id: 3,
        url: "images/Group 153423.png",
        type: "people"
    },
    {
        id: 4,
        url: "images/Group 153423-1.png",
        type: "travel"
    },
    {
        id: 5,
        url: "images/Group 153429.png",
        type: "architecture"
    },

    {
        id: 6,
        url: "images/Group 153423-2.png",
        type: "abstract"
    },
    {
        id: 7,
        url: "images/Group 153423.png",
        type: "people"
    },
    {
        id: 8,
        url: "images/Group 153423-1.png",
        type: "travel"
    },
    {
        id: 9,
        url: "images/Group 153423.png",
        type: "art"
    },

]



images.map((item) => {

    let getdata = () => {
        var img = document.createElement('img')
        img.setAttribute('src', `${item.url}`)
        img.setAttribute('class', "img")
        img.setAttribute('id', "imgid")
        document.getElementById("cardId").appendChild(img)
    }    
    getdata() 

    // let nulldata =()=>{
    //     document.getElementById('cardId').innerHTML = null
    // }
     
    let art = document.getElementById('art')
    art.addEventListener('click', () => {
        document.getElementById('cardId').innerHTML = null
        if (item.type == "art") {
            getdata()
        }
    })

    let abstract = document.getElementById('abstract')
    abstract.addEventListener('click', () => {
        if (item.type == "abstract") {
            getdata()
        }
    })

    let architecture = document.getElementById('architecture')
    architecture.addEventListener('click', () => {
        if (item.type == "architecture") {
            getdata()
        }
    })

    let people = document.getElementById('people')
    people.addEventListener('click', () => {
        if (item.type == "people") {
            getdata()
        }
    })

    let sports = document.getElementById('sports')
    sports.addEventListener('click', () => {
        if (item.type == "sports") {
            getdata()
        }
    })

    let travel = document.getElementById('travel')
    travel.addEventListener('click', () => {
        if (item.type == "travel") {
            getdata()
        }
    })

})





// for Static -----------------------------------------------

// let btn = document.querySelectorAll(".btn");
// let imgdiv = document.querySelectorAll('.img-div')


// for (let i = 0; i < btn.length; i++) {

//     btn[i].addEventListener('click', function () {
//         for (let j = 0; j < btn.length; j++) {
//             btn[j].classList.remove('active')
//         }

//         this.classList.add('active')

//         let dataFilter = this.getAttribute('data-filter')

//         for (let k = 0; k < imgdiv.length; k++) {

//             imgdiv[k].classList.remove('active')
//             imgdiv[k].classList.add('hide')

//             if (imgdiv[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
//                 imgdiv[k].classList.remove('hide')
//             }
//         }
//     })

// }




// ------------------------------------------------------------

// cardList.forEach((item) => {
//     const newCard = document.createElement("div");
//     newCard.style.height = "200px";
//     newCard.style.width = "200px";
//     newCard.style.background = "green";
//     newCard.style.color = "white";

//     newCard.innerHTML = `<h2>${item}</h2>
//     <p>card type</p>`;

//     document.body.append(newCard);
// })






