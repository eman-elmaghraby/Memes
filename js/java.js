let inputNumber = document.querySelector(".input");
let btn = document.querySelector(".button");
let nameMeme = document.querySelector("h1");
let imageMeme = document.querySelector(".imageMeme");
let form1 = document.querySelector(".form1");

function validationForm() {
  if (inputNumber === "" || isNaN(inputNumber.value)) {
    nameMeme.innerHTML = "please enter valid number ";
    nameMeme.classList.add("red");
    return false;
  } else if (inputNumber.value < 0) {
    nameMeme.innerHTML = "";
    nameMeme.innerHTML = "invalid number";
    nameMeme.classList.add("red");
    return false;
  }
}
form1.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  try {
    let returnData = await fetch("https://api.imgflip.com/get_memes");
    let fetchedData = await returnData.json();
    let dataArray = fetchedData.data.memes;

    dataArray.forEach((element) => {
      if ((element[inputNumber.value] = inputNumber.value)) {
        nameMeme.innerHTML = dataArray[inputNumber.value].name;
        nameMeme.classList.add("yellow");
        imageMeme.innerHTML = `
          <img src='${dataArray[inputNumber.value].url}' width="100%"/>`;
      }
    });
  } catch (err) {
    console.log(err.message);
  }
});
