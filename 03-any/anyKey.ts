//any is not really a good practice people use it to get away from the type checking 
// lets get to code

//any
let hero;

function getHero(){
	return "thor"
}

hero = getHero();

//note: any is generated when values are not specified
// when you hover over the variable name you should get the value
// any is like saying you dont want to do a type checking
//its advice to always avoid "any"