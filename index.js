const cards = document.querySelector(".cards");

const animalsToAdopt = [
  {
    name: "Lucky",
    picture: "https://placekitten.com/200/287"
  },
  {
    name: "Symba",
    picture: "https://placekitten.com/200/139"
  },
  {
    name: "Léo",
    picture: "https://placekitten.com/200/90"
  },
  {
    name: "Milo",
    picture: "https://placekitten.com/200/194"
  },
  {
    name: "Charly",
    picture: "https://placekitten.com/200/179"
  }
];





function createCard(title, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  card.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("H2");
  cardTitle.innerHTML= `${title}`;
  cardTitle.classList.add("card-title");
  cardBody.appendChild(cardTitle);

  const cardButton = document.createElement("button");
  cardButton.innerHTML= "Adopt Now";
  cardButton.classList.add("card-button");
  cardBody.appendChild(cardButton);




  // Step1: Create the cardBody div, add the class card-body and add it to the card

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody
}
for (let i = 0;i <animalsToAdopt.length;i++)
{
  createCard(animalsToAdopt[i].name , animalsToAdopt[i].picture);  
}
// for(animal in animalsToAdopt){
//   console.log(`${animal} : ${animalsToAdopt[animal]}`);
// }


/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */