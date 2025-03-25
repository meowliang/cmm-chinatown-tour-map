// Define your colors
const navy = "#192F4A";  // Glyph (icon) color
const blue = "#81C7D3";  // Background color
const creme = "#FFFDEC"; // Border color

// Function to create a circular numbered marker
function createNumberedMarker(map, position, number) {
    // Create a container div for the marker
    const container = document.createElement("div");
    
    // Create the circular element
    const circle = document.createElement("div");
    circle.style.backgroundColor = "#192F4A"; // Navy background
    circle.style.color = "#FFFDEC"; // Creme text
    circle.style.width = "32px";
    circle.style.height = "32px";
    circle.style.borderRadius = "50%"; // Makes it circular
    circle.style.display = "flex";
    circle.style.alignItems = "center";
    circle.style.justifyContent = "center";
    circle.style.fontFamily = "Arial, sans-serif";
    circle.style.fontWeight = "bold";
    circle.style.fontSize = "14px";
    circle.style.border = "2px solid #FFFDEC"; // Creme border
    
    // Add the number
    circle.textContent = number;
    
    // Add the circle to the container
    container.appendChild(circle);
    
    // Create the marker
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position,
      content: container
    });
    
    return marker;
  }
  
  // Initialize the map
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7941, lng: -122.4078 },
      zoom: 15,
      mapId: "e8f9fe15ae85b0f5"
    });
  
    // Add numbered markers
    createNumberedMarker(map, { lat: 37.7941, lng: -122.4078 }, "1");
    createNumberedMarker(map, { lat: 37.7965, lng: -122.4068 }, "2");
  }



// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 37.794183, lng: -122.406924 },
//         zoom: 16,
//         styles: [
//             { elementType: "geometry", stylers: [{ color: "#81C7D3" }] },
//             { elementType: "labels.text.fill", stylers: [{ color: "#192F4A" }] },
//             { elementType: "labels.text.stroke", stylers: [{ color: "#FFFDEC" }] },
//             { featureType: "road", elementType: "geometry", stylers: [{ color: "#FFFDEC" }] },
//             { featureType: "poi", stylers: [{ visibility: "off" }] },
//             { featureType: "transit", stylers: [{ visibility: "off" }] },
//             { featureType: "water", stylers: [{ visibility: "off" }] }
//         ]
//     });

//     fetch("sample-data.json")
//         .then(response => response.json())
//         .then(data => {
//             map.data.addGeoJson(data);
//             map.data.setStyle({
//                 icon: {
//                         path: google.maps.SymbolPath.CIRCLE,
//                         scale: 8,
//                         fillColor: "#192F4A", // Your navy color
//                         fillOpacity: 1,
//                         strokeWeight: 1,
//                         strokeColor: "#FFFDEC" // Optional stroke color
//                     },
//                 title: feature => feature.getProperty("name")
//             });
//         });
// }