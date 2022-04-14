var elCur1 = document.querySelector("#input1");
var elCur2 = document.querySelector("#input2");
var elLabel1 = document.querySelector("#val1");
var elLabel2 = document.querySelector("#val2");
var elConvertBtn = document.querySelector(".form-convert");
var elExchangeBtn = document.querySelector("#changebtn");
var elClearBtn = document.querySelector("#clear-btn");
var elList = document.querySelector("ol");
elLabel1.textContent = "$USD";
elLabel2.textContent = "UZS";
usdValue = 11348;
elCur2.disabled =true;
elExchangeBtn.addEventListener("click", (e) => {
  elCur1.value = "";
  elCur2.value = "";
  if (elLabel1.textContent == "$USD"){
    elLabel1.textContent = "UZS";
    elLabel2.textContent = "$USD";
  }else {
    elLabel1.textContent = "$USD";
    elLabel2.textContent = "UZS";
  }
})

elConvertBtn.addEventListener("click", function (evt){
evt.preventDefault();

var firstCurrency = elCur1.value.trim();
var secondCurrency = elCur2.value.trim();
if(elLabel1.textContent == "$USD") {
  elCur2.value = Number(elCur1.value) * usdValue;
}else {
  elCur2.value = (Number(elCur1.value) / usdValue).toFixed(4);
}
if(isNaN(elCur2.value)) {
  elCur2.value = "";
  elCur1.value = "";
  elCur1.style= "border-color:red";
}else {
  elCur1.style= "border-color:black";
}

var newLi = document.createElement("li");
var newP = document.createElement("p");
if(elLabel1.textContent == "$USD"){
  newP.textContent = `${elCur1.value}$ => ${elCur2.value} so'm`;
  newP.style.color = "blue"
} else {
  newP.textContent = `${elCur1.value} so'm => ${elCur2.value}$`;
  newP.style.color = "green"
}
if(elCur1.value == ""){
  newP.textContent = ""
}
newLi.append(newP);
elList.append(newLi);
})


elClearBtn.addEventListener("click", (evt) => {
  elList.innerHTML = ""
})