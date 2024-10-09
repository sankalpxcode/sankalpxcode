// Sample hotel data
const hotels = [
    {
        id: 1,
        name: "Taj Mahal Palace",
        city: "Mumbai",
        price: 20000,
        image: "assets/images/tajhotel.png",
        accommodation: "5-star hotel with free breakfast included."
    },
    {
        id: 2,
        name: "Trident Nariman Point",
        city: "Mumbai",
        price: 14000,
        image: "assets/images/trident.png",
        accommodation: "Luxury stay with ocean view."
    },
    {
        id: 3,
        name: "JW Marriott",
        city: "Delhi",
        price: 16000,
        image: "assets/images/delhi.png",
        accommodation: "Elegant rooms with spa services available."
    },
    {
        id: 4,
        name: "The Oberoi",
        city: "Delhi",
        price: 15000,
        image: "assets/images/delhi.png",
        accommodation: "Luxury accommodation with top-notch services."
    },
];

// Sample transportation data
const transportationOptions = [
    {
        type: "Local Train",
        price: "₹50 - ₹200",
        description: "Fastest way to travel across the city.",
        mapLink: "https://example.com/mumbai-local-train-map" // Example map link
    },
    {
        type: "Taxi",
        price: "₹300 - ₹800",
        description: "Convenient for short distances.",
        mapLink: "https://example.com/mumbai-taxi-map" // Example map link
    },
    {
        type: "Bus",
        price: "₹20 - ₹50",
        description: "Economical but may take longer.",
        mapLink: "https://example.com/mumbai-bus-map" // Example map link
    },
];

// Sample attractions data
const attractions = [
    {
        name: "Gateway of India",
        price: "Free",
        description: "Iconic landmark with stunning views.",
        city: "Mumbai"
    },
    {
        name: "Marine Drive",
        price: "Free",
        description: "Famous boulevard for leisurely walks.",
        city: "Mumbai"
    },
    {
        name: "Chhatrapati Shivaji Maharaj Terminus",
        price: "₹100",
        description: "Historic railway station.",
        city: "Mumbai"
    },
];

// Function to display hotels based on the selected city
function displayHotels() {
    const searchCity = localStorage.getItem('searchCity');
    const hotelsContainer = document.getElementById('hotelsContainer');
    hotelsContainer.innerHTML = '';

    const filteredHotels = hotels.filter(hotel => hotel.city.toLowerCase() === searchCity.toLowerCase());

    if (filteredHotels.length === 0) {
        document.getElementById('noResultsMessage').style.display = 'block';
        return;
    } else {
        document.getElementById('noResultsMessage').style.display = 'none';
    }

    filteredHotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.classList.add('card');
        hotelCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <h3>${hotel.name}</h3>
            <p>Accommodation: ${hotel.accommodation}</p>
            <p>Price: ₹${hotel.price}</p>
        `;
        hotelsContainer.appendChild(hotelCard);
    });
}

// Function to display transportation options
function displayTransportation() {
    const transportationContainer = document.getElementById('transportationContainer');
    transportationContainer.innerHTML = '';

    transportationOptions.forEach(option => {
        const optionCard = document.createElement('div');
        optionCard.classList.add('card');
        optionCard.innerHTML = `
            <h3>${option.type}</h3>
            <p>Price: ${option.price}</p>
            <p>${option.description}</p>
            <a href="${option.mapLink}" target="_blank">View Map</a> <!-- Link to map -->
        `;
        transportationContainer.appendChild(optionCard);
    });
}

// Function to display attractions
function displayAttractions() {
    const attractionsContainer = document.getElementById('attractionsContainer');
    attractionsContainer.innerHTML = '';

    attractions.forEach(attraction => {
        const attractionCard = document.createElement('div');
        attractionCard.classList.add('card');
        attractionCard.innerHTML = `
            <h3>${attraction.name}</h3>
            <p>Price: ${attraction.price}</p>
            <p>${attraction.description}</p>
        `;
        attractionsContainer.appendChild(attractionCard);
    });
}

// Function to display cities
function displayCities() {
    const citiesContainer = document.getElementById('citiesContainer');
    citiesContainer.innerHTML = '';

    cities.forEach(city => {
        const cityCard = document.createElement('div');
        cityCard.classList.add('card');
        cityCard.innerHTML = `
            <img src="${city.image}" alt="${city.name}">
            <h3>${city.name}</h3>
            <p>Transportation: ${city.transportation}</p>
        `;
        citiesContainer.appendChild(cityCard);
    });
}

// Call the functions to display hotels, transportation, attractions, and cities on page load
window.onload = () => {
    displayHotels();
    displayTransportation();
    displayAttractions();
    displayCities();
};
