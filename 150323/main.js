const cat = {
name: 'Mietze',
breed: 'Hauskatze',
age: 13,
showCat: function() {
    document.querySelector('#objectOutput').innerHTML = 
    `Name: ${this.name} gehört zur Rasse ${this.breed}. <br>
    Alter: ${this.age} <br><hr>`;
    console.log(cat)
}
};

document.querySelector('#catObject').addEventListener('click', function(){
    cat.showCat();
})

//Allgemeine Funktionen
let allCat = [];
const months = [
    "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
];
const weeks = [
    "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
];


function validateForm() {
    let input =[];
    input[0] = document.querySelector('#name').value;
    input[1] = document.querySelector('#breed').value;
    input[2] = Number(document.querySelector('#age').value).toFixed(2);
    input[0] = new Date(document.querySelector('#birth').value);
    if(
        (input[0] == null || input[0] == "") &&
        (input[1] == null || input[1] == "") &&
        (input[2] == null || input[2] == "") &&
        (input[3] == null || input[3] == "")
    ){
        alert("Please Fill In All Required Fields!!");
        return false;
    }
    return input;
}

function show(value){
    document.querySelector('#output').innerHTML += 
    `<p>Name: ${value.name}<br>
    Rasse: ${value.breed}<br>
    Alter: ${value.age}<br>
    Geboren Jahr: ${value.birth.getFullYear()}<br>
    Geboren Monat: ${months[value.birth.getMonth()]}<br>
    Geboren Wochentag: ${weeks[value.birth.getDay()]}<br>
    Button: ${value.button}<br><br>
    Zeichenlänge Name: ${value.name.length}<br>
    Zeichen auf einer Random Position:
    ${value.name.charAt(Math.floor(Math.random() * value.name.length))}</p>`;
}

function showAllCats(){
    document.querySelector('#output').innerHTML ='';
    // Sort after Age
    allCat.sort((minAge, maxAge) => minAge.age - maxAge.age);
    //getyoungest and oldest Cat
    showAge(allCat);
    // Show Cats
    for(const thisCat of allCat){
        thisCat.showCat();
    }
}

function showAge(allCat){
    let maxAgeValue = -Number.MAX_VALUE;
    let minAgeValue = Number.MAX_VALUE;
    allCat.forEach(cat => {
        if(cat.age > maxAgeValue){
            maxAgeValue = cat.age;
        }
        if(cat.age < minAgeValue){
            minAgeValue = cat.age;
        }
    });
    document.querySelector('#outputAge').innerHTML = 
    `<p> jüngste Katze: ${minAgeValue}</p>
    <p> älteste Katze: ${maxAgeValue}</p>`;
}

function CatConstructor(name, breed, age, birth, button){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.birth = birth;
    this.button = button;
    this.showCat = function(){
        show(this);
    }
}

document.querySelector('#newCatConstructor').addEventListener('click', function(){ let returnValue = validateForm();
    if(returnValue != false){
        allCat[allCat.length] = new CatConstructor(
            returnValue[0],returnValue[1],returnValue[2],returnValue[3], 'Constructor'
        );
        showAllCats();
    }
})
