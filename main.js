const fs = require('fs')



const printdata = (command , b ,index,c,d) => {
            fs.readFile('./users.json' , function (error , data) {
            if (error){
                throw error
            }

            userData = JSON.parse(data)

            if (command.toLowerCase() === 'get' && b.toLowerCase() === 'users'){
            for (const obj of userData){
                console.log(obj.name)
            } 
        }

            if (command.toLowerCase() === 'get' && b.toLowerCase() === 'user' && index){
                console.log(userData[index -1])
            }
            if (command.toLowerCase() === 'get' && b.toLowerCase() === 'friends' && index){
                const newdata = userData[index-1].friends
            for (const obj of newdata){
                console.log(obj)
            }
        }
            if (command.toLowerCase() === 'post' && b.toLowerCase() === 'user'){
                const newPerson = {
                    name: index,
                    age: Number(c),
                    eyeColor: d
                }
                userData.push(newPerson)
            }
            if (command.toLowerCase() === 'post' && b.toLowerCase() === 'friends'){
                const newPerson = {
                    name: c
                }

            }

            if (command.toLowerCase() === 'delete' && b.toLowerCase() === 'user'){
            userData.splice(index-1 ,1)
            }

            fs.writeFile('./users.json' , JSON.stringify(userData) ,function (error) {
                if (error){
                    throw error
                }
            })

})





}



let command = process.argv[2]
let b = process.argv[3]
let index 
let c
let d
if (process.argv[4]){
    index = process.argv[4]
}
if (process.argv[5]){
    c = process.argv[5]
}
if (process.argv[6]){
    d = process.argv[6]
}
printdata(command, b , index ,c ,d)

