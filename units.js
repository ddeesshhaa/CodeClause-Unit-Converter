const metersToFeet = 3.28084;
const metersToMiles = 0.000621371;
const metersToCms = 100;
const metersToKms = 1000;

// Get input elements
const inputMeters = document.getElementById("inputMeters");
const inputFeet = document.getElementById("inputFeet");
const inputMiles = document.getElementById("inputMiles");
const inputKms = document.getElementById("inputKms");
const inputCm = document.getElementById("inputCm");

const inputMetersArea = document.getElementById("inputAreaMeters");
const inputFeetArea = document.getElementById("inputAreaFeet");
const inputMilesArea = document.getElementById("inputAreaMiles");
const inputKmsArea = document.getElementById("inputAreaKms");
const inputCmArea = document.getElementById("inputAreaCm");

// Add event listeners to input elements
inputMeters.addEventListener("input", convertMeters);
inputFeet.addEventListener("input", convertFeet);
inputMiles.addEventListener("input", convertMiles);
inputKms.addEventListener("input", convertKms);
inputCm.addEventListener("input", convertCm);

inputMetersArea.addEventListener("input", convertMetersArea);
inputFeetArea.addEventListener("input", convertFeetArea);
inputMilesArea.addEventListener("input", convertMilesArea);
inputKmsArea.addEventListener("input", convertKmsArea);
inputCmArea.addEventListener("input", convertCmArea);

// Conversion functions
function convertMeters() {
  const meters = parseFloat(inputMeters.value);

  const feet = meters * metersToFeet;
  const miles = meters * metersToMiles;
  const kms = meters / metersToKms;
  const cm = meters * metersToCms;

  // Update the other input fields
  inputFeet.value = isNaN(feet) ? "" : feet.toFixed(2);
  inputMiles.value = isNaN(miles) ? "" : miles.toFixed(2);
  inputKms.value = isNaN(kms) ? "" : kms.toFixed(2);
  inputCm.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertFeet() {
  const feet = parseFloat(inputFeet.value);

  const meters = feet / metersToFeet;
  const miles = meters * metersToMiles;
  const kms = meters / metersToKms;
  const cm = meters * metersToCms;

  // Update the other input fields
  inputMeters.value = isNaN(meters) ? "" : meters.toFixed(2);
  inputMiles.value = isNaN(miles) ? "" : miles.toFixed(2);
  inputKms.value = isNaN(kms) ? "" : kms.toFixed(2);
  inputCm.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertMiles() {
  const miles = parseFloat(inputMiles.value);

  const meters = miles / metersToMiles;
  const feet = meters * metersToFeet;
  const kms = meters / metersToKms;
  const cm = meters * metersToCms;

  // Update the other input fields
  inputMeters.value = isNaN(meters) ? "" : meters.toFixed(2);
  inputFeet.value = isNaN(feet) ? "" : feet.toFixed(2);
  inputKms.value = isNaN(kms) ? "" : kms.toFixed(2);
  inputCm.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertKms() {
  const kms = parseFloat(inputKms.value);

  const meters = kms * metersToKms;
  const feet = meters * metersToFeet;
  const cm = meters * metersToCms;
  const miles = meters * metersToMiles;

  // Update the other input fields
  inputMeters.value = isNaN(meters) ? "" : meters.toFixed(2);
  inputFeet.value = isNaN(feet) ? "" : feet.toFixed(2);
  inputMiles.value = isNaN(miles) ? "" : miles.toFixed(2);
  inputCm.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertCm() {
  const miles = parseFloat(inputMiles.value);

  const meters = miles / metersToMiles;
  const feet = meters * metersToFeet;
  const kms = meters / metersToKms;
  const cm = meters * metersToCms;

  // Update the other input fields
  inputMeters.value = isNaN(meters) ? "" : meters.toFixed(2);
  inputFeet.value = isNaN(feet) ? "" : feet.toFixed(2);
  inputKms.value = isNaN(kms) ? "" : kms.toFixed(2);
  inputCm.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertMetersArea() {
  const meters = parseFloat(inputMetersArea.value);

  var feet = meters * metersToFeet;
  var miles = meters * metersToMiles;
  var kms = meters / metersToKms;
  var cm = meters * metersToCms;
  feet *= feet;
  miles *= miles;
  kms *= kms;
  cm *= cm;

  // Update the other input fields
  inputFeetArea.value = isNaN(feet) ? "" : feet.toFixed(2);
  inputMilesArea.value = isNaN(miles) ? "" : miles.toFixed(2);
  inputKmsArea.value = isNaN(kms) ? "" : kms.toFixed(2);
  inputCmArea.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertFeetArea() {
  const feet = parseFloat(inputFeetArea.value);

  var meters = feet / metersToFeet;
  var miles = meters * metersToMiles;
  var kms = meters / metersToKms;
  var cm = meters * metersToCms;
  miles *= miles;
  kms *= kms;
  cm *= cm;
  meters *= meters;
  // Update the other input fields
  inputMetersArea.value = isNaN(meters) ? "" : meters.toFixed(2);
  inputMilesArea.value = isNaN(miles) ? "" : miles.toFixed(2);
  inputKmsArea.value = isNaN(kms) ? "" : kms.toFixed(2);
  inputCmArea.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertMilesArea() {
  const miles = parseFloat(inputMilesArea.value);

  var meters = miles / metersToMiles;
  var feet = meters * metersToFeet;
  var kms = meters / metersToKms;
  var cm = meters * metersToCms;
  feet *= feet;
  kms *= kms;
  cm *= cm;
  meters *= meters;
  // Update the other input fields
  inputMetersArea.value = isNaN(meters) ? "" : meters.toFixed(2);
  inputFeetArea.value = isNaN(feet) ? "" : feet.toFixed(2);
  inputKmsArea.value = isNaN(kms) ? "" : kms.toFixed(2);
  inputCmArea.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertKmsArea() {
  const kms = parseFloat(inputKmsArea.value);

  var meters = kms * metersToKms;
  var feet = meters * metersToFeet;
  var cm = meters * metersToCms;
  var miles = meters * metersToMiles;
  feet *= feet;
  miles *= miles;
  cm *= cm;
  meters *= meters;
  // Update the other input fields
  inputMetersArea.value = isNaN(meters) ? "" : meters.toFixed(2);
  inputFeetArea.value = isNaN(feet) ? "" : feet.toFixed(2);
  inputMilesArea.value = isNaN(miles) ? "" : miles.toFixed(2);
  inputCmArea.value = isNaN(cm) ? "" : cm.toFixed(2);
}

function convertCmArea() {
  const cm = parseFloat(inputCmArea.value);

  var meters = miles / metersToMiles;
  var feet = meters * metersToFeet;
  var kms = meters / metersToKms;
  var miles = meters * metersToMiles;

  feet *= feet;
  miles *= miles;
  kms *= kms;
  meters *= meters;
  // Update the other input fields
  inputMetersArea.value = isNaN(meters) ? "" : meters.toFixed(2);
  inputFeetArea.value = isNaN(feet) ? "" : feet.toFixed(2);
  inputKmsArea.value = isNaN(kms) ? "" : kms.toFixed(2);
  inputCmArea.value = isNaN(cm) ? "" : cm.toFixed(2);
}
