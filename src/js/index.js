// api : 4621c10b237f790604135be575f6bae6
// url :https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false


import Search from "./models/Search";
import { elements } from "./base";
import * as searchView from "./views/searchView";
import * as movieView from "./views/movieView";
import Movie from "./models/Movie";


const state = {};

const searchController = async () => {
    const keyword = elements.searchInput.value;

    if (keyword) {
        state.search = new Search(keyword);

        await state.search.getResults();

        searchView.displayResults(keyword,state.search.data);

    } else {
        alert("You have to enter keyword.")
    }

};

elements.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchView.clearResults();
    searchController();
    searchView.clearInput();
    console.log("form submitted");
});

const movieController = async ()=>{
    const id = window.location.hash.replace("#","");
    if(id){
        state.movie = new Movie(id);
        await state.movie.getMovie();
        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
    }
};

window.addEventListener("hashchange",movieController);
elements.movieDetailsClose.addEventListener("click",movieView.closeDetails);
