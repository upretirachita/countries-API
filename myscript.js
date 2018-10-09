
//global variables
displayDiv = document.createElement('div');

       fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(countries => {
           
            //createTable(countries);
            const  decendingPopulation = document.querySelector("#decendingPopulation");
            const  jsonInfo = document.querySelector("#jsonInfo");
            const  acdendingPopulation = document.querySelector("#acdendingPopulation");
            const  capitalSortAtoZ = document.querySelector("#capitalSortAtoZ");
            const  capitalSortZtoA = document.querySelector("#capitalSortZtoA");

            const searchby = document.querySelector("#searchby");

            //createTable(sortPopulationDecending(countries));
            jsonInfo.addEventListener('click',() => {
                createTable(countries);
            }) 
            decendingPopulation.addEventListener('click',() => {
                createTable(sortPopulationDecending(countries));
            })
            acdendingPopulation.addEventListener('click',() => {
                createTable(sortPopulationAssending(countries));
            }) 
            capitalSortAtoZ.addEventListener('click',() => {
                createTable(sortCapitalAtoZ(countries));
            }) 
            capitalSortZtoA.addEventListener('click',() => {
                createTable(sortCapitalZtoA(countries));
            }) 
            searchby.addEventListener('keyup',() => {
                displayDiv.innerHTML ="";
                createTable(searchByRegion(countries));
                        }) 
        })


/*
const sortPopulation = (arr) =>{
    const c = [];
    c = arr.sort((a, b) => a.population - b.population);
        console.log(c);
    return c;
}
*/
//sort poulation 
let sortPopulationAssending = (arr) =>{
 console.log(arr);
 const accendingPopulation = arr.sort((a, b) =>{
      return  (a.population - b.population);
 });

 return accendingPopulation;
}

const  decendPopulation = document.querySelector("#decendingPopulation");
let sortPopulationDecending = (arr) =>{
 console.log(arr);
 const decendingPopulation = arr.sort((a, b) =>{
      return  (b.population - a.population);
 });

 return decendingPopulation;
}
let sortCapitalAtoZ = (arr) => {  
    const sortedValues = [...arr ];
    sortedValues.sort(function(a, b) {
    var nameA = a.capital.toUpperCase(); // ignore upper and lowercase
    var nameB = b.capital.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  return sortedValues; 
}
let sortCapitalZtoA = (arr) => {  
    const sortedValues = [...arr ];
    sortedValues.sort(function(a, b) {
    var nameA = a.capital.toUpperCase(); // ignore upper and lowercase
    var nameB = b.capital.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  return sortedValues; 
}

//Search by Region 
/*
let searchByRegion = (arr) => {
        let result = arr.filter(data=>data.region.includes("Asia")) || (data.region.includes("Africa"))|| (data.region.includes("Polar"));
        return result;
    }
   */
  let searchByRegion = (arr) => {
    let result = arr.filter(data=>(data.name.toLowerCase().startsWith(searchby.value))||(data.region.toLowerCase().startsWith(searchby.value))||(data.capital.toLowerCase().startsWith(searchby.value)));
    console.log(result);
    
    return result;
}
  

const createTable = (arr) => {
    arr.forEach(country => {
        display = document.createElement("div");
        display.className ="countriesDisplay"
        display.innerHTML = 
             `
             <ul>
                 <li><b>Name:</b> ${country.name}</li>
                 <li><b>Capital:</b> ${country.capital}</li>
                 <li><b>Region :</b>${country.region}</li>
                 <li><b>Population :</b>${country.population}</li>
                 <li><b>Currencies :</b>${country.currencies[0].name}</li>
                 <li><b> Languages:</b>${country.languages[0].name}</li>
                 <li><b> Sub-Region:</b>${country.subregion}</li>
                <li><img src=${country.flag} alt = ${country.name} /></li>
                
             </ul>
             `

             display.style.backgroundColor = "#ffff99";
             display.style.height = "150px"
             display.style.marginBottom = "5px"; 
             displayDiv.appendChild(display);
            document.body.appendChild(displayDiv); 
        

 }); 

};
