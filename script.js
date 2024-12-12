function calculateCorrection() {
    // Get inputs
    const altitude = parseFloat(document.getElementById("altitude").value);
    const temp = parseFloat(document.getElementById("temp").value);
    const aerodromeTemp = parseFloat(document.getElementById("aerodrome-temp").value);
    const aerodromeElevation = parseFloat(document.getElementById("aerodrome-elevation").value);
    const altimeterSource = parseFloat(document.getElementById("altimeter-source").value);

    // Constants
    const L_0 = 0.00198; // Lapse rate in °C per foot

    // Calculate sea level adjusted temperature (t_0)
    const t_0 = aerodromeTemp + L_0 * aerodromeElevation;

    // Apply the correction formula
    const correction = altitude * ((15 - t_0) / (273 + t_0 - 0.5 * L_0 * (altitude + altimeterSource)));
    const correctedAltitude = altitude + correction;

    // Display the result
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.textContent = `Corrected Altitude: ${correctedAltitude.toFixed(2)} feet`;
}
