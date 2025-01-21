function onScanSuccess(decodedText, decodedResult) {
    alert(`QR Code scanned: ${decodedText}`);
    // Send the decoded QR code data to your Google Apps Script endpoint
    fetch('https://script.google.com/macros/library/d/1dpqos3tzFWsdigTPgRDfFxmlaVR7vLW47z9TchSi-B64m4mbTG9dnKGD/1', {
        method: 'POST',
        body: new URLSearchParams({
            qrCode: decodedText // Send the scanned QR code to the server
        })
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData); // Handle the response from the server
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function onScanError(errorMessage) {
    console.error(errorMessage); // Handle any scan errors
}

// Initialize the QR code scanner
const html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", {
        fps: 10, // frames per second
        qrbox: 250 // size of the scanning box
    });

html5QrcodeScanner.render(onScanSuccess, onScanError);
