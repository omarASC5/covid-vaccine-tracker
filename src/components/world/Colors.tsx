//Escher Campanella:
//This function takes the props.data as input 
//The function output will be a list of arrays that contain the country, and the value that will determine the color
//The value is going to be determined from the amount of people vaccinated in that country or the percentage of people vaccinated (undetermined)

function color(data){
	let countriesColor = [];

	for(let country of data){
		//loop through each entry, get the latest data row on each country
		//make an array {country: country name, value: value for the color}
		//add that array to countriesColor
	}

	return countriesColor;
	
}