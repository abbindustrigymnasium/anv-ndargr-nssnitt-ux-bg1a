var randomSausage = 'hello'

// Define your API key and custom search engine ID
const apiKey = 'AIzaSyBSbQBomCakdYRuE5VMKVtV0XNvxljXE4Y';
const cx = '34e0ae634fc3f4000';
let imageUrls = [  ];
// Function to fetch and display search results

const sausageNames = [
"Classic Bratwurst",
"Spicy Chorizo",
"Italian Salsiccia",
"Smoked Kielbasa",
"Vienna Frankfurter",
"Andouille Delight",
"Cajun Boudin",
"Breakfast Link",
"Maple Bacon Sausage",
"Polish Pierogi Sausage",
"Garlic and Herb Brat",
"Gourmet Chicken Sausage",
"Applewood Smoked Sausage",
"Bavarian Weisswurst",
"Spanish Longaniza",
"Mediterranean Merguez",
"Texas BBQ Sausage",
"Teriyaki Terroir Sausage",
"Jalapeno Cheddar Brat",
"Hawaiian Luau Sausage",
"Cranberry Turkey Sausage",
"Gator and Andouille Sausage",
"Buffalo Wing Sausage",
"Pesto Parmesan Sausage",
"Thai Curry Sausage",
"Moroccan Lamb Sausage",
"Oktoberfest Bockwurst",
"Beer-Infused Sausage",
"Cajun Crawfish Sausage",
"Black Forest Smokie",
"Sriracha Sausage Sensation",
"Irish Breakfast Banger",
"Smoky Chipotle Chorizo",
"Buffalo Blue Cheese Sausage",
"Wild Boar Bratwurst",
"Lemon Pepper Chicken Sausage",
"Mango Habanero Link",
"Tandoori Tikka Sausage",
"Greek Gyro Sausage",
"Wild Mushroom Truffle Sausage",
"All-American Hot Dog",
"Cheddar and Beer Brat",
"Swedish Potato Sausage",
"Vegan Apple Sage Sausage",
"Caribbean Jerk Sausage",
"Spinach and Feta Chicken Sausage",
"Smoked Salmon Sausage",
"Duck and Fig Link"
];

//list of sausage names generated by chat gpt
function searchGoogle() {

    randomSausage = sausageNames[Math.floor(Math.random() * 50)];
    //get random sausage for the search results
    const searchQuery = randomSausage;
    console.log(searchQuery);
    // Construct the API request URL from google serach, but only immages
    const api = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${searchQuery}&searchType=image`;

    const imageUrls = [];
    var count = 0;

    // Make the API request
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data.items);
            if (data.items) {
                data.items.forEach(item => {
                    // loop for setting the n:th array in immage urls to the link of our google search
                    imageUrls[count] = item.link;
                    count++;
                    console.log(item.link);
                });
            } else {
                console.log('No results found.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return imageUrls;
    //returning an array of image urls for our google search api
}
//function for loading images using the google search api
// this function can be a bit slow to the rate limmet, so be pantient and dont click on the random korv button to much

imageUrls = (searchGoogle());
console.log(imageUrls);
  function randomKorv() {

    console.log(imageUrls);
    console.log(imageUrls[1]);
    randomSausage = sausageNames[Math.floor(Math.random() * 50)];
    console.log(randomSausage);
    document.getElementsByClassName('sausage')[0].innerHTML = randomSausage;
    document.getElementsByClassName('dagensKorv')[0].style.backgroundImage = 'url(' + imageUrls[1] + ')'
    imageUrls = (searchGoogle());
    alert("LOADING...");
}
          //function to call a rdnaom sausage name form the sausage name list
  //we searcht for apis that would generate random sausage names but we did not find any easy one to work with
  console.log(Math.floor(Math.random() * 50))