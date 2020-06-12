const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }

]

const eMenorQueCinco = (numero) => {
    return numero < 5;
}

const newPets2 = pets.filter((pet) => eMenorQueCinco(pet.age));
const newPets3 = pets.filter(({age}) => eMenorQueCinco(age));

const newPets = pets.filter((pet)=>{
    return pet.age > 5;
});

console.log(pets);
console.log(newPets);
console.log(newPets2);
console.log(newPets3);