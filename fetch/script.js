// https://dummyjson.com/products


async function fetchapi(url){
    let response = await fetch(url, {method: 'GET'
})
let datas = await response.json();
datas = datas.products
console.log(datas);
datas.map((data) =>{
    //container of card
    const container = document.getElementById('container');
    container.style.textAlign = 'center';

    //card wrapper
    const card = document.createElement('div');
    card.classList.add = 'card';
    
    //image
    const cardImage = document.createElement('img');
    cardImage.classList.add = 'card-image';
    cardImage.src = data.thumbnail;

    //cardBody
    let cardBody = document.createElement('div');
    cardBody.classList.add = 'card-body';

    //cardTitle;
    let cardTitle = document.createElement('h3');
    cardTitle.classList.add = 'card-title';
    cardTitle.innerHTML = data.title;

    //cardContent
    let cardContent = document.createElement('div');
    cardContent.classList.add = 'card-content';
    cardContent.innerHTML = data.description;

    //finalizing cards
    cardBody.append(cardTitle);
    cardBody.append(cardContent);
    card.append(cardImage);
    card.append(cardBody);
    container.append(card);
})

}

fetchapi("https://dummyjson.com/products");


