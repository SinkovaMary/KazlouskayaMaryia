function getInfo(a, b) {
  var countryName = prompt(a);
  while (true) {
    if (countryName == "" || countryName == null || !isNaN(parseInt(countryName))) {
      countryName = prompt(a);
      continue;
    }
    break;
  }
  var capitalName = prompt(b);
  while (true) {
    if (capitalName == "" || capitalName == null || !isNaN(parseInt(capitalName))) {
      capitalName = prompt(a);
      continue;
    }
    break;
  };
  addCountry(countryName,capitalName);
}
var CountrysH = {};
function addCountry(countryName,capitalName) {
  CountrysH[countryName]=capitalName}


// -------------------------------

function getCountry(a)
{ var countryName = prompt(a);
  while (true) {
    if (countryName == "" || countryName == null || !isNaN(parseInt(countryName))) {
      countryName = prompt(a);
      continue;
    }
    else{ alert (getCountryInfo(countryName))}
    break;
  }
} 
function getCountryInfo(countryName){
  if ( countryName in CountrysH )
  return 'страна: ' + countryName + ' столица: ' + CountrysH[countryName] ;
else
  return 'нет информации о стране ' + countryName + '!' ;
}


// --------------------------------
function listing(){
  alert ( "список стран:" + listCountrys() )};

function listCountrys() {
  var res="";
  for ( var CN in CountrysH )
      res+='\n'+ getCountryInfo(CN);
  return res;
}

// --------------

function deleteC(a)
{ var countryName = prompt(a);
  while (true) {
    if (countryName == "" || countryName == null || !isNaN(parseInt(countryName))) {
      countryName = prompt(a);
      continue;
    }
    else{ alert("Удалено")}
    deleteCountry(countryName)
    break;
  }
} 
function deleteCountry(countryName) {
delete CountrysH[countryName]};

addCountry('Германия','Берлин');
addCountry('Венгрия','Будапешт');
addCountry('Франция','Париж');


