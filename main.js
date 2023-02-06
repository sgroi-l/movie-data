/* This code defines an object named "movieData" that contains information about several movies.
Each movie is an object within the "movieData" object, with properties such as "plot", "cast", "runtime", "rating", and "year". */
    
   let movieData = {
      "The Darjeeling Limited": {
        plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
        cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
        runtime: 151,
        rating: 7.2,
        year: 2007,
      },
      "The Royal Tenenbaums": {
        plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
        rating: 7.6,
        year: 2001,
        cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
        runtime: 170,
      },
      "Fantastic Mr. Fox": {
        year: 2009,
        plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
        cast: ["George Clooney", "Meryl Streep", "Bill Murray", "Jason Schwartzman"],
        runtime: 147,
        rating: 7.9,
      },
        "The Grand Budapest Hotel": {
        rating: 8.1,
        runtime: 159,
        year: 2014,
        plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
      },
    };
  
// The function "displayMovies" takes the movie data and displays it on a page by building HTML for each movie and appending it to the "movieList" element.

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
  
    function displayMovies() {
      let movieListEl = document.getElementById("movieList");
      movieListEl.innerHTML = "";
  
      for (let movie in movieData) {
        
        let movieCard = `
          <div class="movie-card">
          
            <h3>${movie}</h3>
            <p><b>Plot:</b> ${movieData[movie].plot}</p>
            <p><b>Cast:</b> ${movieData[movie].cast.join(", ")}</p>
            <p><b>Runtime:</b> ${movieData[movie].runtime} minutes</p>
            <p><b>Rating:</b> ${movieData[movie].rating}/10</p>
            <p><b>Year:</b> ${movieData[movie].year}</p>
          </div>
        `;

         movieListEl.innerHTML += movieCard;
       
        
        
      };  
      const cards = document.querySelectorAll('.movie-card');
      for (let i = 0; i < cards.length; i++) {
      cards[i].style.borderTop = `3px solid ${randomColor()}`; 
      };
 
    }

  

/* The functions "sortYearA", "sortYearD", "sortRatingA", and "sortRatingD" sort the movie data in ascending or descending order based on the year or rating properties, respectively. 
They do this by converting the movie data object into an array of key-value pairs, sorting the array, and then converting it back into an object. 
The "displayMovies" function is called after each sort to update the display with the sorted movie data. */
    
  
    function sortYearA() {
      movieData = Object.entries(movieData).sort((a, b) => a[1].year - b[1].year); 
      movieData = Object.fromEntries(movieData); 
      displayMovies();
    }

    function sortYearD() {
      movieData = Object.entries(movieData).sort((a, b) => b[1].year - a[1].year);
      movieData = Object.fromEntries(movieData);
      displayMovies();
    }

    function sortRatingA() {
      movieData = Object.entries(movieData).sort((a, b) => b[1].rating - a[1].rating);
      movieData = Object.fromEntries(movieData);
      displayMovies();
    }

    function sortRatingD() {
      movieData = Object.entries(movieData).sort((a, b) => a[1].rating - b[1].rating);
      movieData = Object.fromEntries(movieData);
      displayMovies();
    }

// Calling the functions with an event listener on the drop down bar //
    

    document.getElementById("sortSelect").addEventListener("change", (event) => {
      let sortOption = event.target.value;
      if (sortOption === "yearD") {
        sortYearD();
      } else if (sortOption === "yearA") {
        sortYearA();
      } else if (sortOption === "ratingA") {
        sortRatingA();
      } else if (sortOption === "ratingD") {
        sortRatingD();
      }

  
    });

/* This code is for adding new movie data to the movieData object. The user is prompted for the name, year, plot, cast, runtime, and rating of the new movie. 
The information is then used to create a new movie object and add it to the movieData object using the new movie name as the key. */


    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", function () {
        let newMovieName = prompt("Enter the name of the movie");
        let newMovie = {
        year: Number(prompt("Enter the release year")),
        plot: prompt("Enter the plot of the movie"),
        cast: prompt("Enter the cast of the movie (comma separated)").split(","),
        runtime: Number(prompt("Enter the runtime of the movie in minutes")),
        rating: Number(prompt("Enter the rating of the movie (out of 10)")),
        };

    movieData[newMovieName] = newMovie;
    displayMovies();
    
    });

 

    
  
displayMovies();


