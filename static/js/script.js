function convertToBinary(state) {
    return state ? "1" : "0";
}

var baseURL = "http://127.0.0.1:5000/api/v1.0/model/"

var toggleButtonSpeed = d3.select(".toggleButtonSpeed");
var toggleButtonAggressive = d3.select(".toggleButtonAggressive");
var toggleButtonAlcohol = d3.select(".toggleButtonAlcohol");
var toggleButtonRedlight = d3.select(".toggleButtonRedlight");
var toggleButtonOver70 = d3.select(".toggleButtonOver70");
var toggleButtonTeen = d3.select(".toggleButtonTeen");

var isToggledSpeed = false;
var isToggledAggressive = false;
var isToggledAlcohol = false;
var isToggledRedlight = false;
var isToggledOver70 = false;
var isToggledTeen = false;

toggleButtonSpeed.on("click", function() {
  isToggledSpeed = !isToggledSpeed;
  updateToggleButton(toggleButtonSpeed, isToggledSpeed);
});

toggleButtonAggressive.on("click", function() {
  isToggledAggressive = !isToggledAggressive;
  updateToggleButton(toggleButtonAggressive, isToggledAggressive);
});

toggleButtonAlcohol.on("click", function() {
  isToggledAlcohol = !isToggledAlcohol;
  updateToggleButton(toggleButtonAlcohol, isToggledAlcohol);
});

toggleButtonRedlight.on("click", function() {
  isToggledRedlight = !isToggledRedlight;
  updateToggleButton(toggleButtonRedlight, isToggledRedlight);
});

toggleButtonOver70.on("click", function() {
  if (isToggledOver70) {
    isToggledOver70 = !isToggledOver70;
    updateToggleButton(toggleButtonOver70, isToggledOver70);
  } else if (!isToggledOver70) {
      if (isToggledTeen) {
        isToggledTeen = !isToggledTeen;
        updateToggleButton(toggleButtonTeen, isToggledTeen);
      }
      isToggledOver70 = !isToggledOver70;
      updateToggleButton(toggleButtonOver70, isToggledOver70);      
  }
});

toggleButtonTeen.on("click", function() {
  if (isToggledTeen) {
    isToggledTeen = !isToggledTeen;
    updateToggleButton(toggleButtonTeen, isToggledTeen);
  } else if (!isToggledTeen) {
      if (isToggledOver70) {
        isToggledOver70 = !isToggledOver70;
        updateToggleButton(toggleButtonOver70, isToggledOver70);
      }
      isToggledTeen = !isToggledTeen;
      updateToggleButton(toggleButtonTeen, isToggledTeen);      
  }
});

function updateToggleButton(button, isToggled) { 
  if (isToggled) {
    button.style("background-color", "rgb(171, 243, 168)"); 
    button.style("border-color", "rgb(171, 243, 168)");
    // console.log(isToggled)
    // console.log(button.node())
  } else {
    button.style("background-color", "rgb(190, 138, 250)");
    button.style("border-color", "rgb(190, 138, 250)"); 
    // console.log(isToggled)
  }
}

document.getElementById("checkButton").addEventListener("click", function() {
    var selectedVisibility = document.getElementById("visibility").value;
    var selectedRoadConditions = document.getElementById("roadConditions").value;
    var selectedImpactType = document.getElementById("impactType").value;

    // console.log(selectedVisibility)
    // console.log(selectedRoadConditions)
    // console.log(selectedImpactType)

    var binaryMapping = {
        visibilityClear: "1000",
        visibilityRain: "0100",
        visibilitySnow: "0010",
        visibilityOther: "0001",
        roadConditionsDry: "1000",
        roadConditionsWet: "0100",
        roadConditionsOther: "0010",
        roadConditionsLooseSnow: "0001",
        impactTypePedestrian: "100000",
        impactTypeOther: "010000",
        impactTypeTurning: "001000",
        impactTypeCyclist: "000100",
        impactTypeRearEnd: "000010",
        impactTypeSMV: "000001"
    };

    var binaryDropdowns = binaryMapping[selectedVisibility] + binaryMapping[selectedRoadConditions] + binaryMapping[selectedImpactType];

    var binaryToggles = convertToBinary(isToggledSpeed) + convertToBinary(isToggledAggressive) + convertToBinary(isToggledAlcohol) + convertToBinary(isToggledRedlight) + convertToBinary(isToggledOver70) + convertToBinary(isToggledTeen);

    var binaryForModel = binaryToggles + binaryDropdowns
    // console.log("Array for Model:", binaryForModel);

    modelURL = baseURL + binaryForModel

    d3.json(modelURL).then(function(prediction) {

        // console.log((prediction["predictions"][0][0]*100).toFixed(2), "%");
        let predictionInsert = d3.select("#results").html("");
        predictionInsert.append("h1").text(`${(prediction["predictions"][0][0]*100).toFixed(2)}%`);

        var overlay = document.getElementById('results');
        if (prediction["predictions"][0][0]*100 >= 50) {
            overlay.style.color = 'rgba(150, 40, 27)'; 
        } else if (prediction["predictions"][0][0]*100 >= 25){
            overlay.style.color = 'rgba(189, 155, 25)';
        } else {
            overlay.style.color = 'rgba(30, 130, 76)';
        }


    });


});

