# The Sausage Enjoyers - a website all about sausages

Welcome to our website, your one-stop destination for all things sausage-related. Here you can find sausage immages, receipis, sausage reviews and the sausage resturants near you
 This website project was created by **Sebastian** and **Malte** as a school project. The primary goal of the school project was to create a food website, that is user friendly that adheres to the guidelines of **WCAG 2.1**; as well as using some sort of **API**. Here on our webiste, you can explore various sausage-related features and satisfy your cravings for these delectable delights.

## Table of Contents

- [The Sausage Enjoyers - a website all about sausages](#the-sausage-enjoyers---a-website-all-about-sausages)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Features](#features)
    - [Home Page](#home-page)
    - [Sausage Review](#sausage-review)
    - [Sausage Near You](#sausage-near-you)
    - [Sausage of the Day](#sausage-of-the-day)
    - [About Us](#about-us)
    - [History of the Sausage](#history-of-the-sausage)
    - [Gallery](#gallery)
    - [Navbar](#navbar)
    - [Footer](#footer)
  - [Design](#design)
    - [Website design](#website-design)
    - [Code Readability](#code-readability)
    - [Accessibility Testing](#accessibility-testing)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
      - [Support Us](#support-us)

## Getting Started

To experience the wonderful world of sausages on our website, follow these simple steps:

### Prerequisites

You'll need a modern web browser to access No additional software or plugins are required.

### Installation

Our project is a web-based project. Just clone our repo at and start exploring the sausage goodness!

```bash
# Clone the repository
git clone https://github.com/abbindustrigymnasium/anv-ndargr-nssnitt-ux-bg1a.git

# Navigate to the project directory
cd anv-ndargr-nssnitt-ux-bg1a

# Install dependencies
npm install
```

## Features

### Home Page

Our homepage welcomes you to the savory universe of sausages.
First you will find a large heading with, a short description of, and a shortened version of our about us page. Lastly you will find a a gallery of mouthwatering sausages.

### Sausage Review

Explore our sausage adventures! Our Sausage Review section features honest reviews and ratings of sausage restaurants we've visited. We share our experiences and recommend the best sausages in town. Dive into the world of sausages and discover new flavors with us.


### Sausage Near You

Craving a delicious sausage? Use our "Sausage Near You" feature powered by **Google Maps** to find the nearest sausage restaurants in your area, by using your device ip adress. the google maps window is integrated into the website, so you can easly move around an fin out info about your nearest sausage.

### Sausage of the Day

Discover a new sausage every day! Our "Sausage of the Day" feature provides you with a random sausage selection along with detailed descriptions on how to prepare it. Plus, we add a touch of surprise with a random sausage image from the **Google Search API**. Every time you click the "dagens korv" button a random sausge will generate

### About Us

Get to know the masterminds behind the sausage enjoyers Visit our "About Us" page to learn more about Sebastian and Malte and their passion for sausages.

### History of the Sausage

Delve into the rich history of sausages with our informative "History of the Sausage" page. Learn about the origins and evolution of these tasty treats.

### Gallery

If you're a visual sausage enthusiast, our "Gallery" is the place for you. Search for images of different sausages and feast your eyes on their delectable forms. This page uses the same **API** as the sausge of the day site where you can search for immages using the google image search.

### Navbar

Our website features an easy-to-use navbar that allows seamless navigation to all sections. By clicking the dropdown icon, users can access the settings menu to personalize fonts, font size, themes **(dark, light, normal)**, and font thickness to enhance their sausage-loving experience.

### Footer

Our website also includes a footer where you can support our sausage journey. by sendeing un **500kr** via swish, and subscribe to our newletter via emial **(not a real number)**

## Design

### Website design

Our website's design has been designed with user-friendliness and accessibility in mind, as per the requierments to adhere to the **WCAG 2.1 (AA)** guidlines, for the school project. We have incorporated several key design elements to ensure that our webiste is an inclusive and user-friendly platform for everyone:


- **High Contrast Backgrounds:** We utilize high contrast backgrounds to effectively separate text from the background, enhancing readability and making content more accessible. we also use only one background color, but with different light levels to avoid the risk of a bad color selaction on the website. that also helps for implementing dark an lite mode.

- **Readable Text:** We have chosen relatively large text sizes and generous line spacing to improve text readability. These design choices are especially beneficial for individuals with dyslexia and ensure that our content is easily digestible.

- **Keyboard Navigation:** Our website is designed with keyboard navigation in mind. Users can easily navigate through the site and access all features without relying on a mouse. This feature is essential for individuals who rely on assistive technologies or prefer keyboard-based navigation.

- **Alternative Texts:** We provide alternative texts **(alt text)** for all non-text elements, such as images and icons. This ensures that users with visual impairments or those using screen readers can understand the context and content of these elements.

- **Responsive Design:** Our webiste is responsive, meaning it can be comfortably viewed on screens of various sizes, from smartphones to large TV screens. This responsive design ensures a consistent and user-friendly experience across all devices.

By implementing these design principles, we adhere to the guidelines of **WCAG 2.1 (AA)**, which prioritize creating accessible and user-friendly interfaces on the web. Our commitment to accessibility ensures that our webiste is a welcoming and inclusive platform for all users.

### Code Readability

We prioritize code readability to enhance understanding and maintainability. Here's how we achieve this:

- **Meaningful Variables:** We use descriptive variable names.
- **Comments:** Our code is well-commented to explain logic (mostly in JavaScript)
- **Semantic HTML:** We employ semantic class names and IDs.
- **Organized Structure:** Our project follows a clear folder structure: Pages, Layouts, JS, CSS, and Assets.
- **Consistency:** We maintain a consistent coding style for clarity.

These practices make our code more accessible and collaborative, supporting our project's growth and maintenance.

### Accessibility Testing

- **Alt Text Verification:** We confirmed the functionality of alt texts using a text-to-speech tool.
- **Color Accessibility:** We assessed color contrast for color blindness and grayscale using [Adobe Contrast Wheel](https://color.adobe.com/sv/create/color-contrast-analyzer), AA contrast, and AAA standards.
- **Dyslexia Readability:** To ensure readability, we tested our code with a dyslexia simulator, considering team member Sebastian's dyslexia.
- **Functional Variation Simulation:** We used the Funkify Chrome extension to simulate various disabilities and functional variations.
  - [Funkify Extension](https://chrome.google.com/webstore/detail/funkify-%E2%80%93-disability-simu/ojcijjdchelkddboickefhnbdpeajdjg)
- **Automated Evaluation:** Our website underwent automated evaluation using the Wave Evaluation Tool, checking for alt text and usability errors.
  - [Wave Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

Through these tests and tools, we prioritize making our website inclusive and user-friendly for all visitors.
## Contributing

This project will no longer be maindtained when this repository goas public; due to the fact that we have already pressented our project for our school. But if you have ideas for new sausage features, interesting sausage facts, or delicious sausage recipes to share, please feel free to contribute. **Follow these steps:**

1. Fork the repository at [Användar Gränssnitt ux](https://github.com/abbindustrigymnasium/anv-ndargr-nssnitt-ux-bg1a)
2. Create a new branch for your sausage-inspired work.
3. Make your changes and commit them with clear commit messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please ensure your contributions adhere to our standards and are well-documented.

## License

This website and its code are released under an open-source license, granting everyone the freedom to use, modify, and share the content and code freely. Our goal is to spread the love for sausages far and wide!

Enjoy your flavorful journey through the world of sausages at SausageLovers.com. Thank you for visiting!

🌭🍽️🎉

## Contact

If you have any questions, suggestions, or just want to connect with us, feel free to reach out through our social media channels:

- **Twitter:** [Twitter Profile](https://twitter.com/YourTwitterHandle)
- **Facebook:** [Facebook Page](https://www.facebook.com/YourPage)
- **Instagram:** [Instagram Profile](https://www.instagram.com/YourInstagramHandle)
- **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/YourProfile)


#### Support Us

If you enjoy our sausage journey and would like to support us, you can contribute to our sausage fund via Swish. 

 **(+46) 72 532 60 31**


We appreciate your support and look forward to staying in touch with you! 🌭🍽️🎉