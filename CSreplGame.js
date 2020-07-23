const readlineSync = require('readline-sync')

const commands = [ " NEXT", " COVER", " DEFUSE", " SHOOT"]

ArmedForces = ["SEALS", "GREEN BERETS", "RANGERS", "DELTA FORCE" ]

console.log("************* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("************* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("************* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("************* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("************* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ")
console.log("WELCOME TO TERRORIST HUNTER 2020!!!")
console.log('')
console.log('')
console.log("TERRORIST HAVE TAKEN CONTROL OF A NUCLEAR POWER PLANT AND PLACED A BOMB SOMEWHERE IN THE FACILITY!!") 
console.log("YOUR OBJECTIVE'S ARE TO DEFUSE THE BOMB, ELIMINATE THE TERRORIST AND SECURED THE POWER PLANT.") 
console.log("")
console.log("YOU JUST LANDED ON LOCATION VIA HALO JUMP FROM A C-130, AND HAVE ENTERD THE NUCLEAR POWER PLANT. YOU HAVE TO CLEAR THE BUILDING BY SEARCHING EVERY ROOM!")
console.log("YOU WILL ONLY HAVE 4 KICKASS MOVES:")
console.log('')

console.log(commands.toString())
console.log('')
console.log('')
let getArmedForces = readlineSync.keyInSelect(ArmedForces, "WHICH MILITARY FORCE WILL YOU CHOOSE?\n")

console.log('')
console.log('')
console.log(`${ArmedForces[getArmedForces]}, LET'S SAVE AMERICA!!`)
console.log('')
console.log('')
console.log("YOU ARE IN THE LOBBY.")
console.log("YOU SEE: ")
console.log("   A TERRORIST")
console.log('')

let rightChoiceOne  = true

while(rightChoiceOne ){
    let userInput = readlineSync.question(`\n WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "SHOOT"){
        console.log("🤯 HEAD SHOT! THE ROOM IS CLEARD")
        console.log('')
        rightChoiceOne  = false
    } else if (userInput.trim().toUpperCase() === "COVER"){
        console.log("YOUR UNDER COVER\n"," \n"," \n","YOU SEE: \n","  A TERRORIST")
        console.log('')
    } else if (userInput.trim().toUpperCase() === "DEFUSE"){
        console.log("NO BOMB TO DEFUSE\n"," \n","YOU ARE IN THE LOBBY\n","YOU SEE: \n"," A TERRORIST" )
        console.log('')
    
    }else if (userInput.trim().toUpperCase() === "NEXT"){
        console.log("YOU MUST ELIMINATE THE THREAT  \n"," \n","YOU ARE IN THE LOBBY \n","YOU SEE: \n","  A TERRORIST" )
        console.log('')
    }else if (!commands.includes(userInput.trim().toUpperCase())){
        console.log("GET YOUR HEAD OUT OF YOUR ASS AND FIGHT")
    } else {
        

    }
}
 //   
 console.log("YOU ARE IN THE MAIN REACTOR ROOM")
 console.log("YOU SEE: ")
 console.log("   THE BOMB 💣 ")
 console.log("")

let rightChoiceTwo = true 
while(rightChoiceTwo){
    let userInput = readlineSync.question(`\n WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "DEFUSE"){
        console.log("YOU HAVE DEFUSED THE BOMB, NOW FIND THE OPS! \n")
        console.log('')
        rightChoiceTwo = false
    } else if (userInput.trim().toUpperCase() === "COVER"){
        console.log("WHY ARE YOU HINDING FROM THE BOMB?\n"," \n"," \n","YOU SEE: \n","  A BOMB")
        console.log('')
    } else if (userInput.trim().toUpperCase() === "NEXT"){
        console.log("YOU HAVE TO DEFUSE THE BOMB\n"," \n","MAIN REACTOR ROOM\n","YOU SEE: \n"," A BOMB" )
        console.log('')
    }else if (userInput.trim().toUpperCase() === "SHOOT"){
        console.log("DONT SHOOT THE BOMB DUMMY!! \n"," \n","MAIN REACTOR ROOM\n","YOU SEE: \n","  A BOMB" )
        console.log('')
    
    }else if (!commands.includes(userInput.trim().toUpperCase())){
         console.log("GET YOUR HEAD OUT OF YOUR ASS AND FIGHT")
    }else {
        
    }
}
// 

console.log('')
console.log('')
console.log("YOUR IN THE MAIN CONTROL ROOM")
console.log("YOU ENCOUNTER ")
console.log("   OSAMA BIN LIDEN 👳🏾‍♂️")
console.log('')
// 
// 
let rightChoiceThree = true
while(rightChoiceThree){
    let userInput = readlineSync.question(`\n WHAT DO YOU WANT TO DO? \n ${commands.toString()}\n`)
    if (userInput.trim().toUpperCase() === "SHOOT"){
       
            console.log('')
            console.log('')
            console.log('YOU HAVE ELIMINATED OSAMA BIN LIDEN 👳🏾‍♂️ AND HIS CRONIES!')
            console.log("AMERICA IS SAVED!! ARMED FORCES WIN!!!")
            rightChoiceThree = false
    
    } else if (userInput.trim().toUpperCase() === "COVER"){
        console.log("YOUR UNDER COVER\n"," \n","YOU SEE: \n","  OSAMA BIN LIDEN")
        console.log('')
    } else if (userInput.trim().toUpperCase() === "DEFUSE"){
        console.log("NO BOMB TO DEFUSE\n"," \n","YOUR IN THE MAIN CONTROL ROOM\n","YOU SEE: \n"," OSAMA BIN LIDEN" )
        console.log('')
    }else if (userInput.trim().toUpperCase() === "NEXT"){
        console.log("YOU MUST ELIMINATE THE THREAT  \n"," \n","YOU ARE IN MAIN CONTROL ROOM \n","YOU SEE: \n","  OSAMA BIN LIDEN" )
        console.log('')
            rightChoiceThree = false
        }else if (!commands.includes(userInput.trim().toUpperCase())){
            console.log("GET YOUR HEAD OUT OF YOUR ASS AND FIGHT")
        }
    }
