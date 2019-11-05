
const crime = {lat: 52.547346, lng:-0.1353932};

// Initialize and add the map
const initMap = () => {
  // console.log('hello');
  // console.log(getStopSearchCrime(crime.lat, crime.lng));
  // The location of London
  let london = {lat: 51.5074, lng: 0.1278};
  // The map, centered at London
  let map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: london});
    // The marker, positioned at london
    let marker = new google.maps.Marker({position: london, map: map});
    // console.log(marker);
    // console.log(getStopSearchCrime(crime.lat, crime.lng));
    
  };
  initMap();
  
  const getStopSearchCrime =  (lat, lng) => {
      fetch(`https://data.police.uk/api/stops-street?lat=${lat}&lng=${lng}&date=2018-06`).then(response => response.json()).then(data => console.log(data));
  };
  

getStopSearchCrime(crime.lat, crime.lng);
// console.log(getStopSearchCrime(crime.lat, crime.lng));

