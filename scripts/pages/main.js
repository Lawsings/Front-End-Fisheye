// Récupère le fichier JSON grâce à un lien
let photographersSection = document.getElementById("photographers");

const fetchData = async () => {
   return await fetch("https://raw.githubusercontent.com/Mimi1706/HanNguyen_6_021121/main/javascript/fisheye.json")
   .then(function(response){
      return response.json();
   })

   // Génère les profils des photographes avec un template
   .then (function(dataJson){
      let allPhotographers = dataJson.photographers;

      for(let i in allPhotographers){

         photographersSection.innerHTML +=

         `
         <article class="${allPhotographers[i].tags.join(" ")} photographer" aria-label="${allPhotographers[i].name} profile">
            <a href="photographers.html?id=${allPhotographers[i].id}">
            <img src="content/portraits/${allPhotographers[i].portrait}" alt="portrait of ${allPhotographers[i].name}"></img>
            </br><h2>${allPhotographers[i].name}</h2></a>
            <p class="location">${allPhotographers[i].city}, ${allPhotographers[i].country}</p>
            <p class="tagline">${allPhotographers[i].tagline}</p>
            <p class="price">${allPhotographers[i].price}€/jour</p>
            <ul class="filter">${allPhotographers[i].tags.map(tag => `<li data-filter="${tag}">#${tag}</li>`).join(" ")}</ul>
         </article>

         `;
      }
      return photographersSection;
   })

   // Message d'erreur s'il y a un problème fetch
   .catch (function(){
      console.log("Erreur fetch !");
   })
}

fetchData();

// Ajoute leur classe respective aux filtres de navigation
let listOfFilters = document.querySelectorAll('nav button');

function addClassToFilters(){
   for(let i=0; listOfFilters[i]; i++){
      let filterName = listOfFilters[i].innerHTML.substring(1);
      let filterNameSmall = filterName.toLowerCase();
      listOfFilters[i].classList.add(filterNameSmall);
   }
}

addClassToFilters();

// Actionne les filtres
let listOfPhFilters = document.getElementsByClassName('photographer');

listOfFilters.forEach(filterButton => filterButton.addEventListener('click',
function() {

   // Désactive visuellement le filtre s'il est déjà activé
   if (this.classList[1]=='active'){
      this.classList.remove('active');

      // Affiche tous les profils à chaque fois qu'on désactive un filtre
      for(let i = 0; i<listOfPhFilters.length; i++ ){
         listOfPhFilters[i].classList.remove('hidden');
      }

   // Active visuellement le filtre
   } else {
      this.classList.add('active');
   }

   // Cache les profils qui ne correspondent pas avec les filtres
   let activeFilters = document.getElementsByClassName('active');

   for(let activeFilter of activeFilters){

      for(let i = 0; i<listOfPhFilters.length; i++ ){

         if(!listOfPhFilters[i].className.includes(activeFilter.classList[0])){
            listOfPhFilters[i].classList.add('hidden');
         }
      }
   }
}));
