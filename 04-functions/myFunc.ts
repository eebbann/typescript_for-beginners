//functions in typescript . how to add types
//by default function create any type whic can be an issue
//so you can add the type declaration in parameter
function addTwo(num: number){

	return num + 2;
}

addTwo(3)

// string type declaration 
function spell(num: string){

	return num + 2; // how come this ddnt give a spiral error notification  here? weell can brake in code 
	//so always tell the user to return a type declaration => function spell(num: string):string

}

//in arrow function

let man = (e : string):string=> { return "jeje"};

 

spell("3times");

//multiple parameter type declaration
function multiFnc(num: number, man : string){
 
}

multiFnc(3, "banana")


// using in array callback functions (map)
const heroes = ["thor", "spiderman", "ironman", "superman"]

heroes.map((hero) : string => {
	return `herois is ${hero}`
})

//using unknow in functions 
// unknown is used when you are not sure of what is being returned

const unkn = ((his:string ) : unknown =>{
 return JSON.parse(his);
})

const nvr = ((errMsg:string ) : never =>{
 throw new Error (errMsg);
 })


export{  }