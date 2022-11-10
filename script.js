// branchement route search

const searchButton = document.getElementById('search-button')
const searchDeparture = document.getElementById('search-departure')
const searchArrival = document.getElementById('search-arrival')
const searchDate = document.getElementById('search-date')

searchButton.addEventListener('click', () => {
    const departure = searchDeparture.value
    const arrival = searchArrival.value
    const date = searchDate.value
<<<<<<< HEAD
    //note : date format 2022-11-22

    const searchResult = fetch(`http://localhost:3000/trips/${departure}&${arrival}&${date}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.trips);
            for (const trip of data.trips) {
                const arrival = trip.arrival
                const date = new Date(trip.date)
                const departure = trip.departure
                const price = trip.price
                document.getElementById('search-result').innerHTML += `
                <div class = 'trip'> 
                    <p>${arrival}>${departure}</p>
                    <p>${date.getHours()}:${date.getMinutes()}</p>
                    <p>${price}€</p>
                    <button class='book'>Book</button>
                </div>       
       `
            }
        });


})
=======

    console.log(departure,arrival,date)

    if (departure && arrival && date) {
        const searchResult = fetch(`http://localhost:3000/trips/${departure}&${arrival}&${date}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (!data.result) {    
                    document.getElementById('search-result').innerHTML = `
                        <p>No trips found.</p>
                `}
                else {
                    document.getElementById('search-result').innerHTML = ''
                    for (const trip of data.trips) {
                        const arrival = trip.arrival
                        const date = new Date(trip.date)
                        const departure = trip.departure
                        const price = trip.price

                        document.getElementById('search-result').innerHTML += `
                        <div class = 'trip'> 
                        <p>${arrival}>${departure}</p>
                        <p>${date.getHours()}:${date.getMinutes()}</p>
                        <p>${price}€</p>
                        <button class='book'>Book</button>
                        </div>       
                        `
                    }
                }
            });
    }
})


>>>>>>> 265abfed46c453daa02767bbc7fc056bcb34a009
