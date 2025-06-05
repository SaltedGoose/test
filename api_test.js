fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
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
