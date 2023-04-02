import { fetchMovieList, fetchMovieAvailability } from "./api.js"
const movieListHolder = document.querySelector("#movieholder");

let movieList = [];
function init() {
    movieListHolder.classList.add('hide');
    getMovieList();
}

async function getMovieList() {
    movieList = await fetchMovieList();
    movieList.forEach((movie) => {
        const movieName = document.createElement('h4')
        movieName.innerText = movie.name;

        const movieImage = document.createElement('img')
        movieImage.src = movie.imgUrl;
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('movie-img-wrapper');
        imgWrapper.appendChild(movieImage);

        const movieWrapper = document.createElement('div');
        movieWrapper.classList.add('movie');
        movieWrapper.setAttribute("data-d", "moviename");
        movieWrapper.append(imgWrapper, movieName)
        const movieLink = document.createElement('a');
        movieLink.classList.add('movie-link');
        movieLink.href = "/" + movie.name;
        movieLink.appendChild(movieWrapper);
        movieListHolder.appendChild(movieLink);
    })
    movieListHolder.classList.remove('hide');
    const loading = document.querySelector("#loader");
    loading.remove();
    console.log(movieList);
}


init();







// Hide the main component initially
// const mainComponent = document.querySelector('.main');
// mainComponent.style.display = 'none';

// When the page loads, fetch the movie list and display it
// window.addEventListener('load', async () => {
//   // Show the loader while we fetch the movie list
//   loader.style.display = 'block';

//   try {
//     // Fetch the movie list using the API function
//     const movieList = await fetchMovieList();

//     // Once the movie list has been fetched, hide the loader
//     loader.style.display = 'none';

//     // Show the main component
//     mainComponent.style.display = 'block';
// console.log(movieList);
//     // Display the movie list in the UI
//     // This will be done in the next step
//   } catch (error) {
//     // If there was an error while fetching the movie list, display an error message
//     console.error(error);
//     alert('An error occurred while fetching the movie list');
//   }
// });
