
const container = document.getElementById('gallery');

        var randomSausage = 'hello'

        // Define your API key and custom search engine ID
        const apiKey = 'AIzaSyBSbQBomCakdYRuE5VMKVtV0XNvxljXE4Y';
        const cx = '34e0ae634fc3f4000';
        let imageUrls = [  ];
        // Function to fetch and display search results

        function searchGoogle() {

            //get random sausage for the search results
            const searchQuery = 'sausage';
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
                            let korv = document.createElement('div');

                         // Set the background image for the <div>
                            korv.style.backgroundImage = `url(${item.link})`;
                            
                            korv.classList.add('galleryimg');
                            
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

        imageUrls = (searchGoogle());
        console.log(imageUrls);