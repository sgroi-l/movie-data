# ReadmeFile: Movie Data

## Overview

In this project I create a user interface using HTML, CSS, and JavaScript. The page is populated with movie data which is displayed and able to be manipulated and sorted by the User. The purpose of this project is to show an understanding of manipulating objects and arrays in JavaScript.

## Planning

Before starting the project, I decided what I wanted to include on the page. 

- Heading: A large heading.
- Card Content: The movie data to display on cards which can be interacted with.
- Background: A movie style background image.
- Sort system: Sort the movies in a list by their rating and release year.
- Input: Let users input their own data onto the page and display this as a card too. 

## Building

The HTML for this page is very simple as most of the content comes from the JavaScript file. We start with an `h1`, a `select` menu, a `button` and an empty `div`.

We are provided with a `movieData` object that contains information about several movies. Each movie is represented by a key-value pair, where the key is the movie title and the value is an object that contains information about the movie such as the plot, cast, runtime, rating, and year.

The `displayMovies` function first gets the `movieList` element by its ID and sets its `innerHTML` property to an empty string. It then iterates over the `movieData` object using a `for...in` loop and creates an HTML string for each movie using template literals. The HTML string is then appended to the `movieList` element using the `innerHTML` property.

The `querySelectorAll` method is used to select all elements with the class `movie-card`, and the `forEach` method is used to add an event listener to each element. When a movie card is clicked, the `highlight` class is toggled on the element.

The `randomColor` function generates a random RGB colour value that is used to style the movie cards.

I then needed to build functions which sort the movie data. Arrays have a built in `sort` method, so in this case our data will be easier to work with if we convert from object to array. We use the `Object.entries` method to convert the object into an array of key-value pairs, and the `sort` method to sort the array based on the year or rating of each movie. The `Object.fromEntries` method is then used to convert the sorted array back into an object.

I then add an event listener that listens for a change in the value of the `sortSelect` element. When the value changes, it checks the value of the `sortOption` variable and calls the appropriate function based on the value.

The final part of the code is for adding new movie data to the `movieData` object. When the user clicks the `addBtn` button, a prompt is displayed asking for the name, year, plot, cast, runtime, and rating of the new movie. The information is then used to create a new movie object and add it to the `movieData` object using the new movie name as the key.

## Debugging

After building it's essential to test and debug the page to ensure it functions correctly. Here are some steps I followed when debugging the movie data page:

   - Validate the HTML and CSS code using a validator tool.
   - Check for errors in the JavaScript code using the console log.
   - Test the page on different browsers and devices to ensure it is responsive and works correctly.
   - Get feedback from others to identify any issues with the page.

I used the W3C validator and other validators to check that the page had valid HTML, CSS and conformed to WCAG 2.1 requirements. 


I  noticed that the click event which added classes to the card when they were selected wasn't always working when I clicked on a card. I added borders around every element on the card and also added `console.log` messages throughout my JavaScript in order to figure out where my code was becoming unresponsive. I realised that when I clicked on an area of the card which contained text the 'click' event wasn't being 'heard'. 

I changed my code and used `forEach` in order to add an event listener to each card on the page and the event now propagates as expected.









