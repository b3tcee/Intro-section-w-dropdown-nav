//Naming Variables

let featureDropdown = document.querySelector(".features__drop"),
    companyDropdown = document.querySelector(".company__drop"),
    features = document.querySelector(".features__dropdown"),
    Company = document.querySelector(".company__dropdown");

//Create Function?
 
featureDropdown.addEventListener("click",Showdrop);
companyDropdown.addEventListener("click",Compdrop);

function Showdrop() {
    features.style.display = "block";
}
function Compdrop() {
    Company.style.display = "block";
}