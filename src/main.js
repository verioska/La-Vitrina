document.addEventListener('DOMContentLoaded', function(){
    window.M.AutoInit(); 
});

window.onload =() =>{
    
//     function showCards(data) {

//         document.getElementById('root').innerHTML = ''; 
        
//         document.getElementById('movies-list').innerHTML = '';
//             for (let i = 0; i < data.length; i++) {
//                 document.getElementById('movies-list').innerHTML += `
//                     <div class="col s6 m3" >
//                         <div class="card">
//                             <img class="imagen-lol responsive-img" src="" >
//                             <div class="card-content">
//                                 <span class="card-title activator grey-text text-darken-2"><h6>Titulo</h6><i class="material-icons right">more_vert</i></span>
//                                 <p style=" color: grey"> Año:</p>
//                                 <p style=" color: grey"> Genero:</p>
//                             </div>
//                             <div class="card-reveal">
//                                 <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
//                                 <p> Año: </p>
//                                 <p> Genero:</p>
//                                 <span class="link-info" data=''></span>
//                             </div>
//                         </div>
//                         </div>`

// }
// return showCards;
// }



document.getElementById('movies').addEventListener('click',
(event) => {
event.preventDefault();
document.getElementById('page1').style.display='none';
document.getElementById('page2').style.display='block';
});    

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  document.getElementById("start").addEventListener("click",
  (event) => {
  event.preventDefault();
  document.getElementById("page1").style.display="block";
  document.getElementById("page2").style.display="none";
});

// document.getElementsByClassName("link-info").addEventListener("click",
//   (event) => {
//   event.preventDefault();
//   document.getElementById("page1").style.display="none";
//   document.getElementById("page2").style.display="none";
//   ocument.getElementById("page3").style.display="block";
// });

      
}