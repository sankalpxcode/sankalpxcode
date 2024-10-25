// Sample hotel data
const hotels = [
    { id: 1, name: "Taj Mahal Palace", city: "Mumbai", price: 20000, image: "https://tse3.mm.bing.net/th?id=OIP.2RPwjSn6hr5Q5aCaoGZb6gHaEK&pid=Api&P=0&h=180" },
    { id: 2, name: "Trident Nariman Point", city: "Mumbai", price: 14000, image: "https://im.whatshot.in/img/2019/Nov/trident-1574950057.jpg" },
    { id: 3, name: "Grand Hyatt", city: "Mumbai", price: 16000, image: "https://global-uploads.webflow.com/5cf16f74881a650c03c2f354/5e95ac45c743c802a21bfde6_Hyatt-Regency-Mumbai-P244-Facade.16x9.jpg" },
    { id: 4, name: "The Oberoi", city: "Mumbai", price: 15000, image: "https://www.indianholiday.com/pictures/hotel/hotelgalleryn/the-oberoi-mumbai-404-2.jpg"},

    { id: 5, name: "The Oberoi", city: "Delhi", price: 15000, image: "https://tse2.mm.bing.net/th?id=OIP.RpyY_t9wPbzOFacUdLvmewHaEK&pid=Api&P=0&h=180" },
    { id: 6, name: "ITC Maurya", city: "Delhi", price: 13000, image: "https://www.romanticbug.com/wp-content/themes/rbug/thumbimg.php?src=wp-content/uploads/2015/10/ITC-Maurya.jpg&w=800&h=500" },
    { id: 7, name: "Taj Palace", city: "Delhi", price: 14000, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/86/6e/77/exterior.jpg?w=900&h=-1&s=1" },
    { id: 8, name: "Leela Palace", city: "Delhi", price: 18000, image: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/713529d0_z.jpg" },

    { id: 9, name: "The Leela Palace", city: "Bangalore", price: 18000, image: "https://tse3.mm.bing.net/th?id=OIP.lPDTtj3x1jHVeiIEIkfwmQHaEK&pid=Api&P=0&h=180"},
    { id: 10, name: "ITC Gardenia", city: "Bangalore", price: 15000, image: "https://tse2.mm.bing.net/th?id=OIP.LPwHMWdr07H48OIdxnD0mQHaC9&pid=Api&P=0&h=180" },
    { id: 11, name: "JW Marriott", city: "Bangalore", price: 16000, image: "https://www.cfmedia.vfmleonardo.com/imageRepo/6/0/96/134/608/mspjw-exterior-0023-hor-clsc_O.jpg" },
    { id: 12, name: "The Ritz-Carlton", city: "Bangalore", price: 20000, image: "https://www.cfmedia.vfmleonardo.com/imageRepo/4/0/59/636/269/new_RCBANGA_00013_S.jpg" },

    { id: 13, name: "ITC Royal Bengal", city: "Kolkata", price: 12000, image: "https://tse2.mm.bing.net/th?id=OIP.dSOjzMdgc7rt29cr2QUllQHaHa&pid=Api&P=0&h=180" },
    { id: 14, name: "Taj Bengal", city: "Kolkata", price: 15000, image: "https://tse3.mm.bing.net/th?id=OIP.VcPYqA3AeL6u5A_g3GsKfgHaE7&pid=Api&P=0&h=180" },
    { id: 15, name: "The Oberoi Grand", city: "Kolkata", price: 14000, image: "https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2009/10251/298_0_oberoigrand_fsa-xl.jpg" },
    { id: 16, name: "Hyatt Regency", city: "Kolkata", price: 13000, image: "https://tse2.mm.bing.net/th?id=OIP.hhygDQlfV_3_dAnahc0VnwHaEK&pid=Api&P=0&h=180" },

    { id: 17, name: "Taj Coromandel", city: "Chennai", price: 15000, image: "https://tse4.mm.bing.net/th?id=OIP.2Vn4E5bbG7-nzkTMlmL7GgHaEz&pid=Api&P=0&h=180" },
    { id: 18, name: "The Leela Palace", city: "Chennai", price: 17000, image: "https://www.destinasian.com/travel/wp-content/uploads/The-Leela-Palace-Chennai.jpg" },
    { id: 19, name: "ITC Grand Chola", city: "Chennai", price: 16000, image: "https://tse2.mm.bing.net/th?id=OIP.Y4_-B7Ls6Th4m5ZDotqk-AHaC9&pid=Api&P=0&h=180" },
    { id: 20, name: "Park Hyatt", city: "Chennai", price: 14000, image: "https://tse4.mm.bing.net/th?id=OIP.-NpTCmNRn4buOverUSnxxAHaFK&pid=Api&P=0&h=180" },

    { id: 21, name: "Rambagh Palace", city: "Jaipur", price: 25000, image: "https://www.micato.com/wp-content/uploads/2018/09/rambagh-palace.jpg" },
    { id: 22, name: "ITC Rajputana", city: "Jaipur", price: 14000, image: "https://tse4.mm.bing.net/th?id=OIP.hgycpN-LLwyEGZuSYX_ufAHaEK&pid=Api&P=0&h=180" },
    { id: 23, name: "The Oberoi Rajvilas", city: "Jaipur", price: 22000, image: "https://tse2.mm.bing.net/th?id=OIP.P0TMl5c32Qc8bxk9AiYQvgHaDK&pid=Api&P=0&h=180" },
    { id: 24, name: "Hilton Jaipur", city: "Jaipur", price: 10000, image: "https://tse3.mm.bing.net/th?id=OIP.t9kDvqZa_bZdfQ14N9nlDgHaE7&pid=Api&P=0&h=180" },

    { id: 25, name: "Taj Falaknuma Palace", city: "Hyderabad", price: 25000, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/17181467.jpg?k=73b25a9cb3b5e18877cf578c8d146a1ba4ff213a6bf3801f4480a0337bac1b1f&o=&hp=1" },
    { id: 26, name: "Park Hyatt", city: "Hyderabad", price: 14000, image: "https://tse3.mm.bing.net/th?id=OIP.2INqwA5tpG4BGfvxAn7olwHaD4&pid=Api&P=0&h=180" },
    { id: 27, name: "ITC Kakatiya", city: "Hyderabad", price: 13000, image: "https://tse4.mm.bing.net/th?id=OIP.ztVB4zG31EvaG5Z2LAB74gHaGW&pid=Api&P=0&h=180" },
    { id: 28, name: "The Westin", city: "Hyderabad", price: 12000, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/7d/56/26/the-westin-hyderabad.jpg?w=1200&h=-1&s=1" },

    { id: 29, name: "Hyatt Regency", city: "Ahmedabad", price: 10000, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/41/88/f0/exterior.jpg?w=700&h=-1&s=1" },
    { id: 30, name: "Courtyard by Marriott", city: "Ahmedabad", price: 8000, image: "https://images.trvl-media.com/hotels/7000000/6170000/6165600/6165581/24673dae.jpg?impolicy=fcrop&w=455&h=235&p=1&q=medium" },
    { id: 31, name: "Novotel", city: "Ahmedabad", price: 7000, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/45/a4/3c/exterior-view.jpg?w=900&h=-1&s=1" },
    { id: 32, name: "The Fern", city: "Ahmedabad", price: 6000, image: "https://pix10.agoda.net/hotelImages/296/296225/296225_15062914400031167448.jpg?s=1024x768" },

    { id: 33, name: "JW Marriott", city: "Pune", price: 16000, image: "https://tse2.mm.bing.net/th?id=OIP.1h-YrbzGoqyB4tG6nAm13wHaE8&pid=Api&P=0&h=180" },
    { id: 34, name: "Hyatt Regency", city: "Pune", price: 12000, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/bb/98/a1/exterior.jpg?w=900&h=-1&s=1" },
    { id: 35, name: "Conrad", city: "Pune", price: 15000, image: "https://www.conradpune.com/wp-content/uploads/2022/11/CONRAD_DECOR-_282-1-scaled.jpg" },
    { id: 36, name: "Sheraton Grand", city: "Pune", price: 14000, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/c0/f7/74/sheraton-grand-pune-bund.jpg?w=700&h=-1&s=1" },

    { id: 37, name: "Holiday In Resort", city: "Goa", price: 20000, image: "https://digital.ihg.com/is/image/ihg/holiday-inn-resort-goa-6145673227-4x3" },
    { id: 38, name: "The Leela", city: "Goa", price: 18000, image: "https://im.whatshot.in/img/2020/Feb/leela1-1582545739.jpg" },
    { id: 39, name: "Park Hyatt", city: "Goa", price: 16000, image: "https://www.globalodyssey.co/hotels-in-goa/images/park_hyatt_hotel_big_img1_goa.jpg" },
    { id: 40, name: "Marriott Resort & Spa", city: "Goa", price: 15000, image: "https://r1imghtlak.mmtcdn.com/oiagudp3c552l5d537as4us8001s.jpg?&downsize=573:*&crop=573:240;0,90&output-format=jpg" },

    { id: 41, name: "Zostel Masoori", city: "Masoori", price: 20000, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/78/8c/f0/zostel-plus-mussoorie.jpg?w=700&h=-1&s=1" },
    { id: 42, name: "Royal Orchid Fort", city: "Masoori", price: 18000, image: "https://www.holidify.com/images/cmsuploads/compressed/129745554_20220223172604.jpg" },
    { id: 43, name: "Grand Valley", city: "Masoori", price: 16000, image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH73239255867748/QS1042/QS1042-Q1/IMG-20220528-WA0023.jpg" },
    { id: 44, name: "Masoori Camp Resort ", city: "Masoori", price: 15000, image: "https://tse3.mm.bing.net/th?id=OIP.kSYXuRwGEn5isEJf60QvJwHaFj&pid=Api&P=0&h=180" },
];

  const transportation = [
    {   id:46, type: "Local",       city:"Mumbai", price: "₹10- ₹100",description: "Fast and Best.",image: "https://thumbs.dreamstime.com/b/december-mumbai-maharashtra-india-local-train-indian-railway-running-city-267074424.jpg",mapLink: "https://maps.app.goo.gl/8bYeUh39VaN5hnV1A"},
    {   id:46, type: "Taxi",       city:"Mumbai", price: "₹300 - ₹800",description: "Convenient for short distances.",image: "https://thumbs.dreamstime.com/b/december-mumbai-maharashtra-india-local-train-indian-railway-running-city-267074424.jpg",mapLink: "https://maps.app.goo.gl/8bYeUh39VaN5hnV1A"},
    {   id:47, type: "Bus",        city:"Mumbai", price: "₹20 - ₹50", description: "Economical but may take longer.",image: "https://s3.scoopwhoop.com/anj/iq2jfiwasg3rf/910540631.PNG",mapLink: "https://maps.app.goo.gl/HZRnWgEx18G1ah626" },
   
];
 
 
// Sample attractions data
const attractions = [
    {
        name: "Gateway of India",
        price: "Free",
        image:"https://tse4.mm.bing.net/th?id=OIP.-NpTCmNRn4buOverUSnxxAHaFK&pid=Api&P=0&h=180",
        description: "Iconic landmark with stunning views.",
        city: "Mumbai"
    },
    {
        name: "Marine Drive",
        price: "Free",
        image:"https://tse4.mm.bing.net/th?id=OIP.-NpTCmNRn4buOverUSnxxAHaFK&pid=Api&P=0&h=180",
        description: "Famous boulevard for leisurely walks.",
        city: "Mumbai"
    },
    {
        name: "Chhatrapati Shivaji Maharaj Terminus",
        price: "₹100",
        image:"https://tse4.mm.bing.net/th?id=OIP.-NpTCmNRn4buOverUSnxxAHaFK&pid=Api&P=0&h=180",
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