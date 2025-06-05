fetch("https://script.google.com/macros/s/AKfycbwpU6M0ar0JWURg7dZ2CcHoQxNU3EcYdGk_upVLIWPnxf7NZALr8kJq3l8E5t8-RU2a1Q/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    rowIndex: 2,
    movie: "Tenet",
    location: "Living Room",
    letter: "T",
    number: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("✅ Success:", data))
  .catch(error => console.error("❌ Error:", error));
