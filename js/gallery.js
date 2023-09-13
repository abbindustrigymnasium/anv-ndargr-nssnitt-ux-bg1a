
const container = document.getElementById('gallery');

        var randomSausage = 'hello'

        // Define your API key and custom search engine ID
        const apiKey = 'AIzaSyBSbQBomCakdYRuE5VMKVtV0XNvxljXE4Y';
        const cx = '34e0ae634fc3f4000';
        let imageUrls = [  ];
        // Function to fetch and display search results

        const search = document.getElementById('searchBtn')
        search.addEventListener('click', function() {
            let imgSearch = document.getElementById('imgSearch').value

            searchGoogle(imgSearch + 'korv');
            imageUrls = (searchGoogle('sausage'));
            searchGoogle('fine hottdog')
        });

        function searchGoogle(searchQuery) {

            //get random sausage for the search results
            console.log(searchQuery);

            // Construct the API request URL
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
                            imageUrls[count] = item.link;
                            count++;
                            console.log(item.link);
                            // creat a div
                            let korv = document.createElement('div');
                         // Set the background image for the <div> to an immage for google search api results
                            korv.style.backgroundImage = `url(${item.link})`;
                            korv.classList.add('galleryimg');
                            //append child to the gallery
                            document.getElementById("gallery").appendChild(korv);
                        });
                    } else {
                        console.log('No results found.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            return imageUrls;

        }

        //function for loading images using the google search api
        // this function can be a bit slow to the rate limmet, so be pantient and dont click on the random korv button to much


        console.log(imageUrls);