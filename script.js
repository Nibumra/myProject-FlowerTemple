// UI Elements
const inputTemple = document.getElementById("input-temple");
const inputRiver = document.getElementById("input-river");
const outputContainer = document.getElementById("output");
const btnCalculate = document.getElementById("btn-calculate");
const btnClear = document.getElementById("btn-clear");

// Event Listner Functions
btnCalculate.addEventListener("click", (event) => {
  event.preventDefault();
  checkInput(inputTemple.value, inputRiver.value);
});

btnClear.addEventListener("click", (event) => {
  inputTemple.value = "";
  inputRiver.value = "";
  outputContainer.innerHTML = "";
});

// Functions
const checkInput = (temple, river) => {
  if (temple > 0 && river > 0 && temple === river) {
    calculateFlower(temple, river);
  } else if (temple <= 0 || river <= 0) {
    alert("Number of Temple and River should be greater than 0.");
  } else if (temple !== river) {
    alert("Number of Temple and River MUST be SAME.");
  }
};

const renderOutput = (flowerStart, flowerDeducted, flowerRemaining) => {
  outputContainer.innerHTML = "";
  const outputHtml = `
                    <p><em>Starting number of flower: </em> <b> ${flowerStart} </b></p><br>
                    <p><em>Flowers deducted at each Temple:</em> <b> ${flowerDeducted}</b> </p><br>
                    <p><em>Number of remaining flowers:</em> <b> ${flowerRemaining} </b></p>
    `;
  outputContainer.insertAdjacentHTML("beforeend", outputHtml);
};

const calculateFlower = function (temple, river) {
  const multipleFactor = 2;
  const templeFactor = 2; //There must be minimum TWO Temples

  let templeDeduction = Math.pow(templeFactor, temple);
  const flowerStart = templeDeduction - 1;

  let flowerCounter = flowerStart;

  //  UNIT TEST
  //   console.log(`Total number of Temples are ${temple}`);
  //   console.log(`Total number of Rivers are ${river}`);
  //   console.log(`Flowers deducted at each temple is ${templeDeduction}`);
  //   console.log(`Starting number of flower is ${flowerStart}`);

  for (i = 0; i < temple; i++) {
    let newFlower = flowerCounter * multipleFactor;
    let remianFlower = newFlower - templeDeduction;
    flowerCounter = remianFlower;
  }
  const flowerRemaining = flowerCounter;

  //  UNIT TEST
  //   console.log(`Final flowers remaining are ${flowerRemaining}`);

  renderOutput(flowerStart, templeDeduction, flowerRemaining);
};
