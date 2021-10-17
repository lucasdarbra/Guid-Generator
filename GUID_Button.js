
// generate random number
const generatorNum = () => {
    let guidNum = []
    const num = () => {
        return Math.floor(Math.random() * 10)
        }
    for (let i=0; i<1;i++) {
    guidNum.push(num())
     }
    return guidNum[0]
}

// generate random letter
const generatorLetters = () =>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz"   
    let guidLetters = []
    const letters = () => {
        return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }
    for (let i=0; i<1;i++) {
        guidLetters.push(letters())
        }
    return guidLetters [0]
}

// generate random value
const randomValue = () => {
    let zero = 0
    if (zero == Math.floor(Math.random() * 2)){
        return generatorNum()
    } else {
        return generatorLetters()
    }
}   

// generate array with 32 elemets
const guidGenerator = () => {
    let array = []
    for (let i=0; i<32;i++) {
        let func = randomValue()
        array.push(func)
    }   
    return array
}
const guid = guidGenerator()
const concat = guid.join('')

var dash1 = concat.slice(0, 8) + "-" + concat.slice(8)
var dash2 = dash1.slice(0, 13) + "-" + dash1.slice(13)
var dash3 = dash2.slice(0, 18) + "-" + dash2.slice(18)
var dash4 = dash3.slice(0, 23) + "-" + dash3.slice(23)

console.log(dash4);


