// Question no 49

// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.


function logHobbies(...hobbies:string[]){

    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}!`);
    })
}

logHobbies("reading", "painting", "cooking");

// Question no 50

// Q50 - Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

function myIdealDay ():string{
    let activity1 = "morning walk in the park";
    let activity2 = "delicious brunch with friends or family";
    let activity3 = "reading a good book at a cozy cafe";

let idealDayDescribe =
 `On my ideal day,
I would start with a peaceful ${activity1},
followed by a ${activity2},
and then spend the afternoon ${activity3}.`;

return idealDayDescribe;
}

console.log(myIdealDay());

// Question no 51

// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.


function calculateArea (width:number,height:number):number{
    return width * height;
}

let calculateAreaArrow = (width:number,height:number): number => 

    width * height;

    console.log(calculateAreaArrow(3,4));


// Question no 52

// Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

let Smartphone = {
    brand:"Apple",
    model: "iPhone 13",
    specs:{
        storage: "128GB",
        screenSize: "6.1 inches",
        batteryLife: "24 hours"
    },
};

console.log(Smartphone);

// Question no 53

// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let developerSkills = {

    languages:[
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS"
    ],
    tools:[
        "Visual Studio Code",
        "Docker",
        "Git"
    ],
    frameworks:[
        "Angular",
        "React",
        "Django"
    ]
}
let {languages,tools,frameworks} = developerSkills;

console.log(`Languages: ${languages[0]} Tools:${tools[0]} Framework:${frameworks[0]}`);

// Question no 54

// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};

    dynamicObject[key] = value;
    return dynamicObject;
  }
  
  
  let userPreference = createObjectWithDynamicKey("theme","Dark");
  

  console.log(userPreference);