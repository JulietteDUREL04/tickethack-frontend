// retrieve cart content
const container = document.querySelector('.contentcart')

fetch('http://localhost:3000/bookings/cart')
.then(response => response.json())
.then(data => {
    if(data.result) {
        console.log(data.bookings)
       for (const booking of data.bookings) {
        const arrival = booking.trip.arrival
        const date = new Date(booking.trip.date)
        const departure = booking.trip.departure
        const price = booking.trip.price
        container.innerHTML += `
        <div class = 'cart-item'> 
            <p>${arrival}>${departure}</p>
            <p>${date.getHours()}:${date.getMinutes()}</p>
            <p>${price}€</p>
            <button class='delete'>X</button>
            </div>     
            `
    }

    //ajouter footer et bouton purchase
}
})