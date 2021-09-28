import {elements} from "../base";

export const clearInput = ()=>{
    elements.searchInput.value ="";
};
export const clearResults = ()=>{
    elements.movieList.innerHTML ="";
};

export const displayResults = (keyword,data) => {
    data.results.forEach(movie => {
        const html =`
        <li class="media mb-3 d-flex">
          <img  src="https://www.themoviedb.org/t/p/w92/${movie.poster_path}"
            onerror="this.src='https://via.placeholder.com/92x138'" alt="${movie.title}">
          <div class="media-body mx-3">
            <h5 class="mt-0 mb-1">
                <span class="badge bg-primary">${movie.vote_average}</span> 
                <a href="#${movie.id}">${movie.title}</a>
            </h5>
            <p>${movie.overview}</p>
          </div>
        </li>
        `;
        elements.movieListHeader.innerHTML=`${keyword} aramasında ${data.total_results} sonuç bulundu.`;
        elements.movieListContainer.classList.replace("d-none","d-block");
        elements.movieList.insertAdjacentHTML("beforeend",html);
    });
    
}