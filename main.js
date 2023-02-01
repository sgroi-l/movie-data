
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
      }
    }

    
    
  
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


