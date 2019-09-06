// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    console.log(response);

    const articleData = Object.values(response.data.articles);

    console.log(articleData);
    articleData.forEach(item => {
        const newCard = CreateCard(item);
        const entryPoint = document.querySelector('.cards-container')
        entryPoint.appendChild(newCard);
    });

})
    .catch(error => {
        console.log("The data was not returned", error);
    });

function CreateCard(arr) {

    //Elements
    const mainCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const articleImage = document.createElement('img');
    const byLine = document.createElement('span');

    //Structure
    mainCard.appendChild(headline)
    mainCard.appendChild(author)
    mainCard.appendChild(imgContainer)
    imgContainer.appendChild(articleImage)
    mainCard.appendChild(byLine)


    //Styling
    mainCard.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    articleImage.src = arr.authorPhoto

    // headline.textContent = arr.headline
   
    // byLine.textContent = `By ${arr.authorName}`

    return mainCard

}