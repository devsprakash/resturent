const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number


// ==================================== 0 ==================================== //

function profileLookup(name,property) {
      
    let akki = facebookProfiles.findIndex( function(index,arr)  {
            
        //console.log(index)
            return index.firstName === "Akash" 
    });

    console.log(akki)
    
      if(!akki){

          console.log("person is  present")
      }else{

         console.log("person is not present")
      }
  
    }

profileLookup("Akash");

// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //

function getNamesFromGurgaon(facebookProfiles) {

    const fullNames = facebookProfiles
    .filter((person) => person.address.location ==="gurgaon")
    .map((person) => (person.address.location && person.firstName) || (person.lastName))
    

    return fullNames

}
getNamesFromGurgaon(facebookProfiles);
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

function findFullName(stateName) {
    
    const fullNames = facebookProfiles
    .filter((person) => person.address.state ==="up")
    .map((person) => person.address.state)
    
     return stateName
}                              
console.log(findFullName("up"));
// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //

function getDLStatus(facebookProfiles) {

    
    const names = facebookProfiles
.filter((user) => user.address.location === "gurgaon")
.map((user) =>{ 

    return  user.firstName+" "+user.hasDrivingLicense
})

console.log(names)
}

getDLStatus(facebookProfiles)

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //

function getFullName(facebookProfiles) {
    
    
    const names = facebookProfiles.map(function (user) {
        return user.firstName +" "+ user.lastName;
    });
    
    console.log(names)
       
}

getFullName(facebookProfiles);


// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //

function getLikes(facebookProfiles) {
    
    const result = facebookProfiles[0].likes

     const result2 = facebookProfiles[1].likes
     
     const result3 = facebookProfiles[2].likes
     
     const result4 = facebookProfiles[3].likes
    
     const result5 = facebookProfiles[4].likes
    

     const arr =[...result, ...result2, ...result4, ...result5];
     console.log(arr)

}
getLikes(facebookProfiles);

// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

function getNameFromDelhiWithDL(facebookProfiles) {

    
           for(let i=0; i<facebookProfiles.length; i++){

                  if(facebookProfiles[i].hasDrivingLicense === true && facebookProfiles[i].firstName === "pritesh"){

                             return false
                  } else{

                      console.log("no such person");
                  }
           }
        return false
       
}

console.log(getNameFromDelhiWithDL(facebookProfiles));

//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

function getNameOfDriverWithoutDL(facebookProfiles) {
    
    for(let i=0; i<facebookProfiles.length; i++){


        if(facebookProfiles[i].hasDrivingLicense === false || facebookProfiles[i].firstName === "sabiha"){
 
                return true
        }
    }

    return false
}

console.log(getNameOfDriverWithoutDL(facebookProfiles));
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh



