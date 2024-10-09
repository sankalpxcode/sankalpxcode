// Sample data for cities and hotels
const cities = [
    { id: 1, name: "Mumbai", image: "assets/images/mumbai.png" },
    { id: 2, name: "Delhi", image: "assets/images/delhi.png" },
    { id: 3, name: "Bangalore", image: "assets/images/Bangalore.png" },
    { id: 4, name: "Kolkata", image: "assets/images/kolkata.png" },
    { id: 5, name: "Chennai", image: "assets/images/chennai.png" }
];

function displayCities() {
    const citiesContainer = document.getElementById('citiesContainer');
    cities.forEach(city => {
        const cityCard = document.createElement('div');
        cityCard.classList.add('card');
        cityCard.innerHTML = `
            <img src="${city.image}" alt="${city.name}">
            <h3>${city.name}</h3>
        `;
        citiesContainer.appendChild(cityCard);
    });
}

function searchHotels() {
    const cityInput = document.getElementById('cityInput').value.toLowerCase();
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const guests = document.getElementById('guests').value;

    let errorMessage = '';
    if (!cityInput) errorMessage += 'City is required. ';
    if (!checkInDate) errorMessage += 'Check-in date is required. ';
    if (!checkOutDate) errorMessage += 'Check-out date is required. ';
    if (!guests) errorMessage += 'Please enter the number of guests. ';
    
    if (errorMessage) {
        const errorDiv = document.getElementById('searchError');
        errorDiv.innerHTML = errorMessage;
        errorDiv.style.display = 'block';
        return;
    }

    // Store search criteria in localStorage
    localStorage.setItem('searchCity', cityInput);
    localStorage.setItem('checkInDate', checkInDate);
    localStorage.setItem('checkOutDate', checkOutDate);
    localStorage.setItem('guests', guests);

    // Redirect to results page (you'll need to create this page)
    window.location.href = 'results.html';
}


// Call functions based on the current page
if (document.getElementById('citiesContainer')) {
    displayCities();
}

