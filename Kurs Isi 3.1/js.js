// valyuta dəyişməsi üçün api daxil edin
const api = "https://api.exchangerate-api.com/v4/latest/USD";
// müxtəlif nəzarətləri seçmək üçün
var search = document.querySelector(".dey-meb");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from1");
var toCurrecy = document.querySelector(".to2");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
  
// Valyuta dəyişdirildikdə baş verən hadisə
fromCurrecy.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});
  
// Valyuta dəyişdirildikdə baş verən hadisə
toCurrecy.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});
  
search.addEventListener('input', updateValue);
  
// dəyəri yeniləmə funksiyası
function updateValue(e) {
    searchValue = e.target.value;
}
  
// istifadəçi klik etdikdə getresults funksiyasını çağırır
convert.addEventListener("click", getResults);
  
// funksiyası nəticə əldə edir
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
 
// çevrildikdən sonra nəticələri göstərin
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = 
       ((toRate / fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}
  
// istifadəçi sıfırlama düyməsini kliklədikdə
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";

};  