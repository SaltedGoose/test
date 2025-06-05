async function insertRow() {
      const url = 'https://script.google.com/macros/s/AKfycbxtMUpffpNBff6yViUjg221TUcniVh_VGD69uVh2p77qLrhAIRxfwgR3U4sANuWpnrUxA/exec'; // Replace this with your deployed Apps Script URL

      const data = {
        movie: "up",
        location: "Upstairs",
        letter: "U",
        number: "9",
        rowIndex: 3
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.status === "success" ? "Row inserted successfully!" : "Error: " + result.message);
      } catch (err) {
        alert("Request failed: " + err.message);
      }
}

insertRow()