// Sample data for Indian cities and hotels
const cities = [
  { id: 1, name: "Mumbai", image: "https://via.placeholder.com/300x200?text=Mumbai" },
  { id: 2, name: "Delhi", image: "https://via.placeholder.com/300x200?text=Delhi" },
  { id: 3, name: "Bangalore", image: "https://via.placeholder.com/300x200?text=Bangalore" },
  { id: 4, name: "Kolkata", image: "https://via.placeholder.com/300x200?text=Kolkata" },
  { id: 5, name: "Chennai", image: "https://via.placeholder.com/300x200?text=Chennai" },
  { id: 6, name: "Jaipur", image: "https://via.placeholder.com/300x200?text=Jaipur" },
  { id: 7, name: "Hyderabad", image: "https://via.placeholder.com/300x200?text=Hyderabad" },
  { id: 8, name: "Ahmedabad", image: "https://via.placeholder.com/300x200?text=Ahmedabad" },
  { id: 9, name: "Pune", image: "https://via.placeholder.com/300x200?text=Pune" },
  { id: 10, name: "Goa", image: "https://via.placeholder.com/300x200?text=Goa" },
];

const hotels = [
  { id: 1, name: "Taj Mahal Palace", city: "Mumbai", price: 20000, image: "https://via.placeholder.com/300x200?text=Taj+Mahal+Palace" },
  { id: 2, name: "Trident Nariman Point", city: "Mumbai", price: 14000, image: "https://via.placeholder.com/300x200?text=Trident+Nariman+Point" },
  { id: 3, name: "Grand Hyatt", city: "Mumbai", price: 16000, image: "https://via.placeholder.com/300x200?text=Grand+Hyatt" },
  { id: 4, name: "The Oberoi", city: "Mumbai", price: 15000, image: "https://via.placeholder.com/300x200?text=The+Oberoi" },

  { id: 5, name: "The Oberoi", city: "Delhi", price: 15000, image: "https://via.placeholder.com/300x200?text=The+Oberoi+Delhi" },
  { id: 6, name: "ITC Maurya", city: "Delhi", price: 13000, image: "https://via.placeholder.com/300x200?text=ITC+Maurya" },
  { id: 7, name: "Taj Palace", city: "Delhi", price: 14000, image: "https://via.placeholder.com/300x200?text=Taj+Palace" },
  { id: 8, name: "Leela Palace", city: "Delhi", price: 18000, image: "https://via.placeholder.com/300x200?text=Leela+Palace" },

  { id: 9, name: "The Leela Palace", city: "Bangalore", price: 18000, image: "https://via.placeholder.com/300x200?text=The+Leela+Palace" },
  { id: 10, name: "ITC Gardenia", city: "Bangalore", price: 15000, image: "https://via.placeholder.com/300x200?text=ITC+Gardenia" },
  { id: 11, name: "JW Marriott", city: "Bangalore", price: 16000, image: "https://via.placeholder.com/300x200?text=JW+Marriott" },
  { id: 12, name: "The Ritz-Carlton", city: "Bangalore", price: 20000, image: "https://via.placeholder.com/300x200?text=The+Ritz-Carlton" },

  { id: 13, name: "ITC Royal Bengal", city: "Kolkata", price: 12000, image: "https://via.placeholder.com/300x200?text=ITC+Royal+Bengal" },
  { id: 14, name: "Taj Bengal", city: "Kolkata", price: 15000, image: "https://via.placeholder.com/300x200?text=Taj+Bengal" },
  { id: 15, name: "The Oberoi Grand", city: "Kolkata", price: 14000, image: "https://via.placeholder.com/300x200?text=The+Oberoi+Grand" },
  { id: 16, name: "Hyatt Regency", city: "Kolkata", price: 13000, image: "https://via.placeholder.com/300x200?text=Hyatt+Regency" },

  { id: 17, name: "Taj Coromandel", city: "Chennai", price: 15000, image: "https://via.placeholder.com/300x200?text=Taj+Coromandel" },
  { id: 18, name: "The Leela Palace", city: "Chennai", price: 17000, image: "https://via.placeholder.com/300x200?text=The+Leela+Palace" },
  { id: 19, name: "ITC Grand Chola", city: "Chennai", price: 16000, image: "https://via.placeholder.com/300x200?text=ITC+Grand+Chola" },
  { id: 20, name: "Park Hyatt", city: "Chennai", price: 14000, image: "https://via.placeholder.com/300x200?text=Park+Hyatt" },

  { id: 21, name: "Rambagh Palace", city: "Jaipur", price: 25000, image: "https://via.placeholder.com/300x200?text=Rambagh+Palace" },
  { id: 22, name: "ITC Rajputana", city: "Jaipur", price: 14000, image: "https://via.placeholder.com/300x200?text=ITC+Rajputana" },
  { id: 23, name: "The Oberoi Rajvilas", city: "Jaipur", price: 22000, image: "https://via.placeholder.com/300x200?text=The+Oberoi+Rajvilas" },
  { id: 24, name: "Hilton Jaipur", city: "Jaipur", price: 10000, image: "https://via.placeholder.com/300x200?text=Hilton+Jaipur" },

  { id: 25, name: "Taj Falaknuma Palace", city: "Hyderabad", price: 25000, image: "https://via.placeholder.com/300x200?text=Taj+Falaknuma+Palace" },
  { id: 26, name: "Park Hyatt", city: "Hyderabad", price: 14000, image: "https://via.placeholder.com/300x200?text=Park+Hyatt" },
  { id: 27, name: "ITC Kakatiya", city: "Hyderabad", price: 13000, image: "https://via.placeholder.com/300x200?text=ITC+Kakatiya" },
  { id: 28, name: "The Westin", city: "Hyderabad", price: 12000, image: "https://via.placeholder.com/300x200?text=The+Westin" },

  { id: 29, name: "Hyatt Regency", city: "Ahmedabad", price: 10000, image: "https://via.placeholder.com/300x200?text=Hyatt+Regency" },
  { id: 30, name: "Courtyard by Marriott", city: "Ahmedabad", price: 8000, image: "https://via.placeholder.com/300x200?text=Courtyard+by+Marriott" },
  { id: 31, name: "Novotel", city: "Ahmedabad", price: 7000, image: "https://via.placeholder.com/300x200?text=Novotel" },
  { id: 32, name: "The Fern", city: "Ahmedabad", price: 6000, image: "https://via.placeholder.com/300x200?text=The+Fern" },

  { id: 33, name: "JW Marriott", city: "Pune", price: 16000, image: "https://via.placeholder.com/300x200?text=JW+Marriott" },
  { id: 34, name: "Hyatt Regency", city: "Pune", price: 12000, image: "https://via.placeholder.com/300x200?text=Hyatt+Regency" },
  { id: 35, name: "Conrad", city: "Pune", price: 15000, image: "https://via.placeholder.com/300x200?text=Conrad" },
  { id: 36, name: "Sheraton Grand", city: "Pune", price: 14000, image: "https://via.placeholder.com/300x200?text=Sheraton+Grand" },

  { id: 37, name: "Taj Exotica", city: "Goa", price: 20000, image: "https://via.placeholder.com/300x200?text=Taj+Exotica" },
  { id: 38, name: "The Leela", city: "Goa", price: 18000, image: "https://via.placeholder.com/300x200?text=The+Leela" },
  { id: 39, name: "Park Hyatt", city: "Goa", price: 16000, image: "https://via.placeholder.com/300x200?text=Park+Hyatt" },
  { id: 40, name: "Marriott Resort & Spa", city: "Goa", price: 15000, image: "https://via.placeholder.com/300x200?text=Marriott+Resort+&+Spa" },
];
const Transportation cost=[
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

]
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





// Display cities on the main page
function displayCities() {
  const citiesContainer = document.getElementById('citiesContainer');
  citiesContainer.innerHTML = '';
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

// Function to handle search and redirect to results page
function searchHotels() {
  const cityInput = document.getElementById('cityInput').value.toLowerCase();
  const checkInDate = document.getElementById('checkInDate').value;
  const checkOutDate = document.getElementById('checkOutDate').value;
  const guests = document.getElementById('guests').value;

  if (!cityInput || !checkInDate || !checkOutDate || !guests) {
      alert('Please fill all search fields.');
      return;
  }

  // Store search criteria in localStorage to pass data to results page
  localStorage.setItem('searchCity', cityInput);
  localStorage.setItem('checkInDate', checkInDate);
  localStorage.setItem('checkOutDate', checkOutDate);
  localStorage.setItem('guests', guests);

  // Redirect to results page
  window.location.href = 'results.html';
}

// Display hotels on the results page
function displayHotels() {
  const searchCity = localStorage.getItem('searchCity');
  const hotelsContainer = document.getElementById('hotelsContainer');
  hotelsContainer.innerHTML = '';

  const filteredHotels = hotels.filter(hotel => hotel.city.toLowerCase() === searchCity);
  if (filteredHotels.length === 0) {
      hotelsContainer.innerHTML = '<p>No hotels found for the selected city.</p>';
      return;
  }

  filteredHotels.forEach(hotel => {
      const hotelCard = document.createElement('div');
      hotelCard.classList.add('card');
      hotelCard.innerHTML = `
          <img src="${hotel.image}" alt="${hotel.name}">
          <h3>${hotel.name}</h3>
          <p>Price: ₹${hotel.price}</p>
      `;
      hotelsContainer.appendChild(hotelCard);
  });
}

// Call functions based on the current page
if (document.getElementById('citiesContainer')) {
  displayCities();
}

if (document.getElementById('hotelsContainer')) {
  displayHotels();
}

if (document.getElementById('Transportationcostcontainer'))
{
    displayTransportationcost();
}

