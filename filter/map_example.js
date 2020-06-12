const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 2
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 3
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 1
    },
    {
        name: 'pitoco',
        type: 'dog',
        age: 9,
        weight: 5
    },
    {
        name: 'catita',
        type: 'cat',
        age: 12,
        weight: 4
    },
    {
        name: 'tob',
        type: 'fish',
        age: 2,
        weight: 3
    },
    {
        name: 'doly',
        type: 'dog',
        age: 4,
        weight: 5
    },
    {
        name: 'shaolin',
        type: 'cat',
        age: 4,
        weight: 1
    },
    {
        name: 'tuco',
        type: 'horse',
        age: 5,
        weight: 1
    }

]

/*
Map
Retornar um novo array com a 
mesma quantidade de elementos 
do array inicial
*/
const newPets = pets.map((pet)=>{
    return pet.name;
});

const newPets1 = pets.map((pet)=>{
    return pet.age;
});


/*foreach

*/
const petsForeach = [];

pets.forEach((pet)=>{

    petsForeach.push(pet.name);
    
});

console.log(pets);
console.log(newPets);
console.log(newPets1);
console.log(petsForeach);

