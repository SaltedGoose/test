async function insertRow() {
      const url = 'https://script.google.com/macros/s/AKfycbxd8DQBB2n-dKMO2gZAfxnGYq-eAAWUCCCP-sUEyN7qEbi76wQkaU2scMa1f9YyPG0QWw/exec'; // Replace this with your deployed Apps Script URL

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
