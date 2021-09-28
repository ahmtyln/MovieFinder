import {elements} from "../base";

export const backToTop = ()=>{
    window.scrollTo({top:0, behavior:"smooth"});
}

export const closeDetails = ()=>{
    elements.movieDetailsContainer.classList.replace("d-block","d-none");
}

export const displayMovie = movie =>{

    var genres="";
    movie.genres.forEach(genre =>{
        genres+=`<span class="badge bg-primary mx-1">${genre.name}</span>`
    })

    var html = `<div class="row">
    
        <div class="col-md-4">
            <img  src="https://www.themoviedb.org/t/p/w500/${movie.poster_path}"
            onerror="this.src='https://via.placeholder.com/92x138'" class="img-fluid" alt="${movie.title}">
        </div>
        <div class="col-md-8">
            <div class="media-body mx-3">
                <h5>
                   ${movie.original_title}
                 </h5>
                <p>${movie.overview}</p>
                <p><small class="badge bg-primary"> ${movie.vote_average}</small></p>
                <hr>
                ${genres}
             </div>
        </div>
    
    </div>
    `;
    elements.movieDetailsContainer.classList.replace("d-none","d-block");
    elements.movieDetails.innerHTML=html;

}