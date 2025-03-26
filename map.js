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
      center: { lat: 37.7941, lng: -122.4067 },
      zoom: 17,
      mapId: "e8f9fe15ae85b0f5"
    });
  
  // Create markers in order (1-9)
  createNumberedMarker(map, { lat: 37.7952643, lng: -122.4062706 }, "1");  // 754 Washington Street/Start
  createNumberedMarker(map, { lat: 37.7951077, lng: -122.4064402 }, "2");  // Corner of Grant and Washington
  createNumberedMarker(map, { lat: 37.7949850, lng: -122.4074916 }, "3");  // Spofford Alley/Earthquake
  createNumberedMarker(map, { lat: 37.7941975, lng: -122.4072972 }, "4");  // End of Spofford Alley
  createNumberedMarker(map, { lat: 37.7941737, lng: -122.4068135 }, "5");  // Clay and Waverly
  createNumberedMarker(map, { lat: 37.7934711, lng: -122.4067632 }, "6");  // First Chinese Baptist Church
  createNumberedMarker(map, { lat: 37.7933594, lng: -122.4061739 }, "7");  // Sacramento and Grant
  createNumberedMarker(map, { lat: 37.7925496, lng: -122.4059060 }, "8");  // Grant and California
  createNumberedMarker(map, { lat: 37.7923649, lng: -122.4055921 }, "9");  // Saint Mary's Square Steps
  }
