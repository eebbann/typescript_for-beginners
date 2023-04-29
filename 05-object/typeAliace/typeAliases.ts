type fruits ={
	name : string,
	vitamin : string,	
	category : string
}
const fruits={

}
function fruitty(yum: fruits):fruits{
  return {name :" ", vitamin : " ", category : " "}
}

fruitty({name:"Fresh mangos",vitamin:"34", category:"dry fruit"})


//adding a readonly so no one can manipulate id
type fruit ={
	readonly _id:string,
	name : string,
	vitamin : string,	
	category : string,
	creditCar : number
}

const fruit ={ 
	  _id:"21",
	name : "eban",
	vitamin : "c",
	category : "dry"
}

//combining types 
//in a scenerios where youre working with other dev and yourre getting diffent types but want to combine together 

type cardDate={
 date: number
}

type cardBank={
	bank: string
}

type cardDetails = cardDate & cardBank &{
 expireDate : number
}  















export {}