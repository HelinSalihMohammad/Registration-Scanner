function onScanSuccess(decodedText, decodedResult) {
    // Send the decoded QR code data to your Google Apps Script web app
    fetch('https://script.google.com/macros/s/AKfycbz0jbfc76RpKCDcX3ABfYxCcxgNXlDkFxTm9WXbjVQr/dev', {
      method: 'POST',
      body: new URLSearchParams({
        qrCode: decodedText // The QR code data
      })
    })
    .then(response => response.json()) // Parse the JSON response
    .then(responseData => {
      // Check the status in the response
      if (responseData.status === "success") {
        alert(responseData.message); // Show success message
        // You can use responseData.name and responseData.email if needed
      } else {
        alert(responseData.message); // Show error message
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error scanning the QR code.');
    });
  }
  