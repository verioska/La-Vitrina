
document.addEventListener('DOMContentLoaded', function(){
    window.M.AutoInit(); 
});

window.onload =() =>{
    
    function showCards(data) {

        document.getElementById('root').innerHTML = ''; 
        
        document.getElementById('movies-list').innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                document.getElementById('movies-list').innerHTML += `
                    <div class="col s6 m3" >
                        <div class="card">
                            <img class="imagen-lol responsive-img" src="" >
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-2"><h6>Titulo</h6><i class="material-icons right">more_vert</i></span>
                                <p style=" color: grey"> Año:</p>
                                <p style=" color: grey"> Genero:</p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
                                <p> Año: </p>
                                <p> Genero:</p>
                                <span class="link" data=''></span>
                            </div>
                        </div>
                        </div>`

}
return showCards;
}

document.getElementById('movies').addEventListener('click',
(event) => {
event.preventDefault();
fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019&page=1")
    .then(data=>data.json())
    .then(data=>{
      let characters= data.results;
 
      for (let i = 0; i <characters.length; i++){
        let title= characters[i].title
         fetch ("http://www.omdbapi.com/?t="+title+"&page=1&apikey=7f7da682&y=2019")
           .then (data=>data.json())
           .then (data =>{
            console.log(data)
            document.getElementById('movies-list').innerHTML +=  `
            <div class="container">   
             <div id="history" class="col s12 m3" >
              <div class="card">
               <img class="imagen-lol responsive-img" src="${data.Poster}" >
                 <div class="card-content">
                   <span class="card-title activator grey-text text-darken-2"><h6>${data.Title}</h6></span>
                   <span class="link linkfinfo" data-champion='${data.Title}'>Informacion</span>      
                   </div>
                  </div>  
                </div> 
              </div>
            </div>
            `
          })
          
        }

document.getElementById('page1').style.display='none';
document.getElementById('page2').style.display='block';
});  
});  



  document.getElementById("start").addEventListener("click",
  (event) => {
  event.preventDefault();
  document.getElementById("page1").style.display="block";
  document.getElementById("page2").style.display="none";
});

document.getElementById("select-filter").addEventListener("change", (event)=>{
  event.preventDefault();
 alert("hola")
  // document.getElementById('root').innerHTML="";
  // let genero = document.getElementById("generos").value;
 
  // fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&with_genres="+genero)
  // .then(data=>data.json())
  // .then(data=>{
  //   let gen= data.results
  //   console.log(gen)
  //   for (let i = 0; i <gen.length; i++){
  //         document.getElementById('root').innerHTML += `<img src=https://image.tmdb.org/t/p/w500/${gen[i].poster_path}>
 
  //     `
  //   }
  //   });
 
  })



      
}
































// window.onload =() =>{
// window.onload= showCards 
  
//   function showCards () {
 
//     fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2018&page=1")
//     .then(data=>data.json())
//     .then(data=>{
//       let characters= data.results;
 
//       for (let i = 0; i <characters.length; i++){
//         let title= characters[i].title
//          fetch ("http://www.omdbapi.com/?t="+title+"&page=1&apikey=7f7da682&y=2018")
//            .then (data=>data.json())
//            .then (data =>{
//             console.log(data)
//             document.getElementById('root').innerHTML +=  `
//             <div class="container">   
//              <div id="history" class="col s12 m3" >
//               <div class="card">
//                <img class="imagen-lol responsive-img" src="${data.Poster}" >
//                  <div class="card-content">
//                    <span class="card-title activator grey-text text-darken-2"><h6>${data.Title}</h6></span>
//                    <span class="link linfinfo" data-champion='${data.Title}'>Informacion</span>      
//                    </div>
//                   </div>  
//                 </div> 
//               </div>
//             </div>
//             `
//           })
          
//         }
//         const links = document.getElementsByClassName('link');
//         Console.log(links)
//         for (let i = 0; i < links.length; i++) {
//           links[i].addEventListener('click', (event) => {
//             event.preventDefault();
           
           
        
            
//           })
//         };
        
//       })
// }
  
// document.getElementById('search').addEventListener("keydown", (e) => {
//      if(e.keyCode === 13){
       
//      }
// })

// document.getElementById('select-filter').addEventListener("change", () => {
//   let condition = document.getElementById('select-filter').value;
//   if(condition==="2017"){
//     alert("soy 2017")
//   }
// });

// document.getElementById('search').addEventListener("keyup", (e) => {
//     if(e.keyCode === 13){
//     }
//     let tittle= document.getElementById('search').value

//     fetch("http://www.omdbapi.com/?s="+tittle+"&apikey=7f7da682")
//     .then(data=>data.json())
//     .then(data=>{
//       let datajson=Object.values(data.Search);
//       console.log(datajson)
        
//       for (let i = 0; i <datajson.length; i++){ 
//         if(datajson[i].Year==="2018"   ){ 
          
//         document.getElementById('root').innerHTML += `
//         <div class="container">
        
//         <div id="history" class="col s12 m3" >
//         <div class="card">
//           <img class="imagen-lol responsive-img" src="${datajson[i].Poster}" >
//             <div class="card-content">
//               <span class="card-title activator grey-text text-darken-2"><h6>${datajson[i].Title}</h6></span>
//               <span class="link linkHistory" data-champion='${datajson[i].Title}'>Historia</span>
//               </div>
//             </div>  
//           </div> 
          
//         </div>
//       </div>
//         ` 
//       }
//      }
//     })
//   })

 //}

 


  