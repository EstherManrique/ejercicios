
 
 function loadMovie(){
   fetch('./movies.json')
     .then(respuesta => respuesta.json())//Indica el formato en que se desea obtener la información
     .then(movies => {  //Se muestra la información
       movies.forEach(createCard);
      })
}
loadMovie(); 

function createCard(movie){
  let card='';
  card += `
           <div class='content-card'>
             <h2> ${movie.title} </h2>
             <p> <span style="color: red;"> Año: </span>${movie.year}</p>
             <p> <span style="color: red;"> Director: </span> ${movie.director}</p>
             <p><span style="color: red;">  Genero:</span> ${movie.genre}</p>
            </div>
         `;
    document.getElementById('container').innerHTML += card;
}

document.getElementById('year').addEventListener('click', (event) =>{
  const year = event.currentTarget.year;
  (movies.find(movie=>movie.title==="Pulp Fiction"))
})
