// branchement route search

const searchButton = document.getElementById('search-button')
const searchDeparture = document.getElementById('search-departure')
const searchArrival = document.getElementById('search-arrival')
const searchDate = document.getElementById('search-date')

searchButton.addEventListener('click', () => {
const departure = searchDeparture.value
const arrival = searchArrival.value
const date = searchDate.value
//note : date format 2022-11-22

const searchResult = fetch(`http://localhost:3000/trips/${departure}&${arrival}&${date}`)
 .then(response => response.json())
 .then(trips => {
   console.log(trips);
   return trips;
 });



    //quand ce sera OK, les ajouter avec innerHTML +=
    //remettre le addevent listener ?
})