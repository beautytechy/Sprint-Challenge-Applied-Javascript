// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const newHeader = document.createElement('div');
    const pubDate = document.createElement('p');
    const mainTitle = document.createElement('h1');
    const currentTemp = document.createElement('span');

    newHeader.appendChild(pubDate);
    newHeader.appendChild(mainTitle);
    newHeader.appendChild(currentTemp);
    
    newHeader.classList.add("header")
    pubDate.classList.add("date")
    currentTemp.classList.add("temp")

    mainTitle.textContent = "Lambda Times"
    pubDate.textContent = "SMARCH 28, 2019"
    currentTemp.textContent = "98°"

    return newHeader;

}


const headerContainer = document.querySelector('.header-container')

const myHeader = Header();


console.log(Header());

headerContainer.appendChild(myHeader);
