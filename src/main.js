document.addEventListener('DOMContentLoaded', function(){
    window.M.AutoInit(); 
});

window.onload =() =>{
    let movies = null;
//Click de la imagen Bird Box
fetch("http://www.omdbapi.com/?t=bird+box&plot=full&apikey=7f7da682")
.then(data=>data.json())
.then(data=>{
  document.getElementById("popular").innerHTML += `
      <img class="responsive-img"  id="movie1"  movie="${data.title}" src="${data.Poster}">`
});
  

$(document).on('click', '#movie1', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page7').style.display='none';
  document.getElementById('page6').style.display='block';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t=bird+box&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    let id=data.imdbID
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    <div id="trailer" class="col s12 m6">
    `
    fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
  .then(data=>data.json())
    .then(data=>{
      let video=data.results
      console.log(video)
      document.getElementById("trailer").innerHTML =  `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      `
  })  
  });
})

//Click de la imagen Aquaman
fetch("http://www.omdbapi.com/?t=aquaman&plot=full&apikey=7f7da682")
.then(data=>data.json())
.then(data=>{
  document.getElementById("popular").innerHTML += `
      <img class="responsive-img"  id="movie2"  movie="${data.title}" src="${data.Poster}">`
});
$(document).on('click', '#movie2', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  document.getElementById('page7').style.display='none';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t=aquaman&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    let id=data.imdbID
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    <div id="trailer" class="col s12 m6">
    `
    fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
    .then(data=>data.json())
      .then(data=>{
        let video=data.results
        console.log(video)
        document.getElementById("trailer").innerHTML =  `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        `
    })  
  });

})

//Click de la imagen Glass
fetch("http://www.omdbapi.com/?t=glass&plot=full&apikey=7f7da682")
.then(data=>data.json())
.then(data=>{
  document.getElementById("popular").innerHTML += `
     <img class="responsive-img"  id="movie3"  movie="${data.title}" src="${data.Poster}">`
});

$(document).on('click', '#movie3', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  document.getElementById('page7').style.display='none';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t=glass&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    let id=data.imdbID
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    <div id="trailer" class="col s12 m6">
    `
    fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
    .then(data=>data.json())
      .then(data=>{
        let video=data.results
        console.log(video)
        document.getElementById("trailer").innerHTML =  `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        `
    })
  });
})

//Click de la imagen Venem

fetch("http://www.omdbapi.com/?t=venom&plot=full&apikey=7f7da682")
.then(data=>data.json())
.then(data=>{
  document.getElementById("popular").innerHTML += `
  <img class="responsive-img"  id="movie4"  movie="${data.title}" src="${data.Poster}">`
});
$(document).on('click', '#movie4', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  document.getElementById('page7').style.display='none';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t=venom&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    let id=data.imdbID
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    <div id="trailer" class="col s12 m6">
    `
    fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
    .then(data=>data.json())
      .then(data=>{
        let video=data.results
        console.log(video)
        document.getElementById("trailer").innerHTML =  `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        `
    })
  });

})
// Click al boton peliculas
let characters=""
document.getElementById('movies').addEventListener('click',
(event) => {
event.preventDefault();

fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019&page=1")
    .then(data=>data.json())
    .then(data=>{
      characters= data.results;
      console.log('data buena', data);
      for (let i = 0; i <characters.length; i++){
        let title= characters[i].title
        document.getElementById('movies-list').innerHTML +=  `
            <div class="container">
              <div id="card-movie" class="col s6 m3" >
              <div class="card" >
               <img class="imagen-movies responsive-img"  movie="${characters[i].title}" src="https://image.tmdb.org/t/p/w500${characters[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
                <div class="card-content">
                 <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${characters[i].title}</p></span>
               </div>
              </div>  
             </div> 
           </div>
        </div>
            `
            
          }        

document.getElementById('page1').style.display='none';
document.getElementById('page2').style.display='block';
document.getElementById('page3').style.display='block';
document.getElementById('page7').style.display='none';
});  
}); 

//dandole click a la pantalla 2

$(document).on('click', '#card-movie', (event) => {
  event.preventDefault();
  
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  document.getElementById('page7').style.display='none';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t="+title+"&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    let holi=data.imdbID
    console.log(data, 'este es el detalle de la peli');
    console.log(holi)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    <div id="trailer" class="col s12 m6">
    </div>
    `
console.log(holi)     
fetch("https://api.themoviedb.org/3/movie/"+holi+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
  .then(data=>data.json())
    .then(data=>{
      let video=data.results
      console.log(video)
      document.getElementById("trailer").innerHTML =  `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      `
  })    
  })  
})

//Pagina 1
  document.getElementById("start").addEventListener("click",
  (event) => {
  event.preventDefault();
  document.getElementById("page1").style.display="block";
  document.getElementById("page2").style.display="none";
  document.getElementById("page4").style.display="none";
  document.getElementById("page3").style.display="none";
  document.getElementById("page5").style.display="none";
  document.getElementById('page6').style.display='none';
  document.getElementById('page7').style.display='none';
 
});

//select de filtrar por categoria page 4
document.getElementById("filter").addEventListener("change", (event)=>{
  event.preventDefault();
  document.getElementById("page3").style.display="none";
  document.getElementById('page6').style.display='none';
  document.getElementById('page5').style.display='block';
  document.getElementById('page7').style.display='none';
  
  document.getElementById("filter-year").innerHTML="";
  let genero = document.getElementById("filter").value;
  console.log(genero)
  let year= document.getElementById("filter_year").value;

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&page=1&primary_release_year="+year+"&with_genres="+genero)
  .then(data=>data.json())
  .then(data=>{
    let gen= data.results
    for (let i = 0; i <gen.length; i++){
          document.getElementById("filter-year").innerHTML += `
          <div class="container">
          <div id="movies-filter" class="col s6 m3" >
          <div class="card" >
           <img class="imagen-movies responsive-img"  movie="${gen[i].title}" src="https://image.tmdb.org/t/p/w500${gen[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
            <div class="card-content">
             <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${gen[i].title}</p></span>
           </div>
          </div>  
         </div> 
       </div>
    </div> `   
    }
   });
  })

//dandole click al filtro de categorias

$(document).on('click', '#movies-filter', (event) => {
  event.preventDefault();
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page4').style.display='none';
  document.getElementById('page5').style.display='none';
  document.getElementById('page6').style.display='block';
  document.getElementById('page7').style.display='none';
  document.getElementById("filter-year").style.display='block';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t="+title+"&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    let id=data.imdbID
    console.log(data)
    console.log(data, 'este es el detalle de la peli');
    console.log(data.title)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    <div id="trailer" class="col s12 m6">
    `
    fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
    .then(data=>data.json())
    .then(data=>{
      let video=data.results
      console.log(video)
      document.getElementById("trailer").innerHTML =  `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      `
  }) 
  });
})

 //Select de filtar por año page 5
  document.getElementById("filter_year").addEventListener("change", (event)=>{
    event.preventDefault();
    document.getElementById("page3").style.display="none";
    document.getElementById('page6').style.display='none';
    document.getElementById('page7').style.display='none';
    document.getElementById("filter-year").style.display='block';
    
     document.getElementById("filter-year").innerHTML="";
     let year= document.getElementById("filter_year").value;
     console.log(year)
     let genero = document.getElementById("filter").value;
     fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&page=1&primary_release_year="+year+"&with_genres="+genero)
     .then(data=>data.json())
     .then(data=>{
       let gen= data.results
       for (let i = 0; i <gen.length; i++){
             document.getElementById("filter-year").innerHTML += `
             <div class="container">
             <div id="movies-filter" class="col s6 m3" >
             <div class="card" >
              <img class="imagen-movies responsive-img"  movie="${gen[i].title}" src="https://image.tmdb.org/t/p/w500${gen[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
               <div class="card-content">
                <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${gen[i].title}</p></span>
              </div>
             </div>  
            </div> 
          </div>
       </div> 
         `
       }
     });
   })

   //Boton de busqueda
 document.getElementById('myInput').addEventListener("keydown", (e) => {
   if(e.keyCode === 13){
    document.getElementById('page1').style.display='none';
    document.getElementById('page2').style.display='none';
    document.getElementById('page3').style.display='none';
    document.getElementById('page4').style.display='none';
    document.getElementById('page5').style.display='none';
    document.getElementById('page6').style.display='none';
    document.getElementById('page7').style.display='block';
    let tittle= document.getElementById('myInput').value
    console.log(tittle,"es el titulo")
    document.getElementById('page7').innerHTML="";
    fetch("http://www.omdbapi.com/?t="+tittle+"&apikey=7f7da682&y=2019")
    .then(data=>data.json())
    .then(data=>{
       console.log(data)  
       document.getElementById('page7').innerHTML += `
       <div class="container">
         <div id="card-movie" class="col s12 m12">
           <div class="card" id="card-search" >
              <img class="imagen-movies responsive-img" id="image-search"  src="${data.Poster}" >
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-2"><p class="tittle-search">${data.Title}</p></span>
              </div>
           </div>  
        </div> 
      </div>
    </div>` 
   })
  }
})    



// //Menu responsive

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems);

  });


document.getElementById("start-1").addEventListener("click",
  (event) => {
  event.preventDefault();
  document.getElementById("page1").style.display="block";
  document.getElementById("page2").style.display="none";
  document.getElementById("page4").style.display="none";
  document.getElementById("page3").style.display="none";
  document.getElementById("page5").style.display="none";
  document.getElementById('page6').style.display='none';
  document.getElementById('page7').style.display='none';
 
});

document.getElementById("movies-1").addEventListener("click",
  (event) => {
  event.preventDefault();
//   document.getElementById("page1").style.display="none";
//   document.getElementById("page2").style.display="block";
//   document.getElementById("page3").style.display="block";
//   document.getElementById("page4").style.display="none";
//   document.getElementById("page5").style.display="none";
//   document.getElementById('page6').style.display='none';
//   document.getElementById('page7').style.display='none';
 


let characters=""
document.getElementById('movies-1').addEventListener('click',
(event) => {
event.preventDefault();

fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019&page=1")
    .then(data=>data.json())
    .then(data=>{
      characters= data.results;
      console.log('data buena', data);
      for (let i = 0; i <characters.length; i++){
        let title= characters[i].title
        document.getElementById('movies-list').innerHTML +=  `
            <div class="container">
              <div id="card-movie" class="col s6 m3" >
              <div class="card" >
               <img class="imagen-movies responsive-img"  movie="${characters[i].title}" src="https://image.tmdb.org/t/p/w500${characters[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
                <div class="card-content">
                 <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${characters[i].title}</p></span>
               </div>
              </div>  
             </div> 
           </div>
        </div>
            `
            
          }        

document.getElementById('page1').style.display='none';
document.getElementById('page2').style.display='block';
document.getElementById('page3').style.display='block';
document.getElementById('page7').style.display='none';
});  
}); 

//dandole click a la pantalla 2

$(document).on('click', '#card-movie', (event) => {
  event.preventDefault();
  
  document.getElementById('page1').style.display='none';
  document.getElementById('page2').style.display='none';
  document.getElementById('page3').style.display='none';
  document.getElementById('page6').style.display='block';
  document.getElementById('page7').style.display='none';
  const title = event.target.attributes[1].value;
  console.log(title,"es el titulo")
  fetch("http://www.omdbapi.com/?t="+title+"&plot=full&apikey=7f7da682")
  .then(data=>data.json())
  .then(data=>{
    let holi=data.imdbID
    console.log(data, 'este es el detalle de la peli');
    console.log(holi)
    document.getElementById("infopage6").innerHTML =  `
    <p> Título: ${ data.Title}</p>
    <p> Duración: ${ data.Runtime}</p>
    <p> Director: ${ data.Director}</p>
    <p> Género: ${ data.Genre}</p>
    <p> Actores: ${ data.Actors}</p>
    <div id="trailer" class="col s12 m6">
    </div>
    `
console.log(holi)     
fetch("https://api.themoviedb.org/3/movie/"+holi+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
  .then(data=>data.json())
    .then(data=>{
      let video=data.results
      console.log(video)
      document.getElementById("trailer").innerHTML =  `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      `
  })    
  })  
})

//select de filtrar por categoria page 4
document.getElementById("filter").addEventListener("change", (event)=>{
    event.preventDefault();
    document.getElementById("page3").style.display="none";
    document.getElementById('page6').style.display='none';
    document.getElementById('page5').style.display='block';
    document.getElementById('page7').style.display='none';
    
    document.getElementById("filter-year").innerHTML="";
    let genero = document.getElementById("filter").value;
    console.log(genero)
    let year= document.getElementById("filter_year").value;
  
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&page=1&primary_release_year="+year+"&with_genres="+genero)
    .then(data=>data.json())
    .then(data=>{
      let gen= data.results
      for (let i = 0; i <gen.length; i++){
            document.getElementById("filter-year").innerHTML += `
            <div class="container">
            <div id="movies-filter" class="col s6 m3" >
            <div class="card" >
             <img class="imagen-movies responsive-img"  movie="${gen[i].title}" src="https://image.tmdb.org/t/p/w500${gen[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
              <div class="card-content">
               <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${gen[i].title}</p></span>
             </div>
            </div>  
           </div> 
         </div>
      </div> `   
      }
     });
    })
  
  //dandole click al filtro de categorias
  
  $(document).on('click', '#movies-filter', (event) => {
    event.preventDefault();
    document.getElementById('page1').style.display='none';
    document.getElementById('page2').style.display='none';
    document.getElementById('page3').style.display='none';
    document.getElementById('page4').style.display='none';
    document.getElementById('page5').style.display='none';
    document.getElementById('page6').style.display='block';
    document.getElementById('page7').style.display='none';
    document.getElementById("filter-year").style.display='block';
    const title = event.target.attributes[1].value;
    console.log(title,"es el titulo")
    fetch("http://www.omdbapi.com/?t="+title+"&plot=full&apikey=7f7da682")
    .then(data=>data.json())
    .then(data=>{
      let id=data.imdbID
      console.log(data)
      console.log(data, 'este es el detalle de la peli');
      console.log(data.title)
      document.getElementById("infopage6").innerHTML =  `
      <p> Título: ${ data.Title}</p>
      <p> Duración: ${ data.Runtime}</p>
      <p> Director: ${ data.Director}</p>
      <p> Género: ${ data.Genre}</p>
      <p> Actores: ${ data.Actors}</p>
      <div id="trailer" class="col s12 m6">
      `
      fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
      .then(data=>data.json())
      .then(data=>{
        let video=data.results
        console.log(video)
        document.getElementById("trailer").innerHTML =  `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${video[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        `
    }) 
    });
  })
  
   //Select de filtar por año page 5
    document.getElementById("filter_year").addEventListener("change", (event)=>{
      event.preventDefault();
      document.getElementById("page3").style.display="none";
      document.getElementById('page6').style.display='none';
      document.getElementById('page7').style.display='none';
      document.getElementById("filter-year").style.display='block';
      
       document.getElementById("filter-year").innerHTML="";
       let year= document.getElementById("filter_year").value;
       console.log(year)
       let genero = document.getElementById("filter").value;
       fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&page=1&primary_release_year="+year+"&with_genres="+genero)
       .then(data=>data.json())
       .then(data=>{
         let gen= data.results
         for (let i = 0; i <gen.length; i++){
               document.getElementById("filter-year").innerHTML += `
               <div class="container">
               <div id="movies-filter" class="col s6 m3" >
               <div class="card" >
                <img class="imagen-movies responsive-img"  movie="${gen[i].title}" src="https://image.tmdb.org/t/p/w500${gen[i].poster_path}?api_key=48819a4f88e3d597df63bebab6723d0f" >
                 <div class="card-content">
                  <span class="card-title activator grey-text text-darken-2"><p class="tittle-movies">${gen[i].title}</p></span>
                </div>
               </div>  
              </div> 
            </div>
         </div> 
           `
         }
       });
     })
  
    });







}





























