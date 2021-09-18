class Contact {

    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNo = params[6];
      this.email = params[7];
    }

    get firstName() {return this._firstName;}
    set firstName(firstName) { 
        const nameRegexPattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegexPattern.test(firstName)) this._firstName = firstName;
        else throw "Invalid First Name";
    }
    get lastName() {return this._lastName;}
    set lastName(lastName) {
        const nameRegexPattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegexPattern.test(lastName)) this._lastName = lastName;
        else throw "Invalid Last Name";
    }
    
    get address() {return this._address;}
    set address(address) {
        const locationRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(locationRegex.test(address))this._address = address; 
        else throw "Invalid Address";
    }
    
    get city() {return this._city;}
    set city(city) {
        const locationRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(locationRegex.test(city))this._city = city; 
        else throw "Invalid City";
    }
    
    get state() {return this._state;}
    set state(state) {
        const locationRegex = RegExp("^[A-Z]{1}[a-zA-Z ]{3,}$");
        if(locationRegex.test(state))this._state = state; 
        else throw "Invalid State";
    }
    
    get zip() {return this._zip;}
    set zip(zip) {
        const pinRegex = RegExp("^([1-9])(\\S){2}(\\s)?\\S{2}[0-9]$");
        if(pinRegex.test(zip))this._zip = zip;
        else throw "Invalid Zip ";
    }
    
    get phoneNo() {return this._phoneNo;}
    set phoneNo(phoneNo) {
        const phoneRegex = RegExp("^\\d{2} [1-9]\\d{9}$");
        if(phoneRegex.test(phoneNo)) this._phoneNo = phoneNo;
        else throw "Invalid Phone No";
    }
    
    get email() {return this._email;}
    set email(email) {
        const emailRegex = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$");
        if(emailRegex.test(email)) this._email = email;
        else throw "Invalid Email";
    }

    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : "+ this.address + 
        ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone No : "+ this.phoneNo + ", Email : "+ this.email;
    }
}
let addressBookArr = new Array();
//UC4
function contactExists(fName, lName){
    return addressBookArr.some(u => u.firstName == fName && u.lastName == lName);
}

//UC7
function addContact(newContact){
    if(contactExists(newContact.firstName, newContact.lastName)){
        throw "Already Present";
    }else{
        addressBookArr.push(newContact);
    }
 }

function editContact(fName, lName, property, value){
    if(contactExists(fName, lName)){
    switch(property){
        case "address":
            addressBookArr.find((contact) => contact.firstName == fName).address = value;
            break;
        case "city":
            addressBookArr.find((contact) => contact.firstName == fName).city = value;
            break;
        case "state":
            addressBookArr.find((contact) => contact.firstName == fName).state = value;
            break;
        case "zip":
            addressBookArr.find((contact) => contact.firstName == fName).zip = value;
            break;
        case "phone":
            addressBookArr.find((contact) => contact.firstName == fName).phoneNo = value;
            break;
        case "email":
            addressBookArr.find((contact) => contact.firstName == fName).email = value;
            break;
        default:
            console.log("Enter valid Property");
    }
  }else{
      console.log("Contact Does Not Exist");
  }
}
//UC5
function deleteContact(fName, lName){
    if(contactExists(fName, lName)){
    addressBookArr = addressBookArr.filter((user) => user.firstName != fName && user.lastName != lName);
    }else{
        console.log("Contact Does Not Exist");
    }
}

//UC6
function countContact(count) {
    count += 1;
    return count;
}
let contact1 =new Contact("Varad", "Vinayak", "Sadashivpeth", "Pune", "Maharashtra", "987654", "91 9898989898", "ganesh@gmail.com");
let contact2 =new Contact("Shree", "Jadhav", "Kalyaninagar", "Pune", "Maharashtra", "876543", "91 8989898989", "shree@gmail.com");


try{
}catch(e){
    console.error(e);
}  
try{
}catch(e){
    console.error(e)
}
console.log(addressBookArr);
console.log("-----------------------")
editContact("Shree","Jadhav","address","Kothrud")
console.log(addressBookArr);
console.log("No of contacts : "+ addressBookArr.reduce(countContact, 0));
console.log("-----------------------")
deleteContact("Shree","Jadhav");
console.log(addressBookArr);
//console.log("-----------------------")
console.log("No of contacts : "+ addressBookArr.reduce(countContact, 0));
try{
    addContact(contact1);
    }catch(e){
        console.error(e);
}