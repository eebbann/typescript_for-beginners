interface User {
	email : string,
	userId: number,
	googleID?: number
}

//reopening interface 
interface User {
	name : string,}


const hihu: User ={email: "pop@gmail.com", userId:90, name:"popo"}