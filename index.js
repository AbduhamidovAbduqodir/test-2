function move(position, roll,) {
    return (position * 2 + roll);
}
let position = prompt("sonni kiriting")
let roll = prompt("sonni kiriting")



position = Number(position)
roll = Number(roll)


console.log(move(position, roll,));