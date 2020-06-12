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
Reduce
Executa uma função para cada elemento
retornando um único valor de retorno
*/
//acc acumulado, cur valor percorrido
//const totalweight = pets.reduce((acc, cur) => {});
const totalweight = pets.reduce((total,pet) => {

    //console.log(`Total: ${total}`);
    //console.log(`Pet:, ${pet.name}`);
    return total + pet.weight;
}, 0); // inicial o total com 0

const totalObj = pets.reduce((total,pet) => {

    //console.log(`Total: ${total}`);
    //console.log(`Pet:, ${pet.name}`);
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight

    };
}, {totalAge: 0, totalWeight: 0}); // inicial o total com 0

//total apenas dos dogs
const totalW = pets.reduce((total,pet) => {
    if (pet.type !== 'dog') {return total};
    
    return {
        totalWeight: total.totalWeight + pet.weight
    };
}, { totalWeight: 0}); 



//encadeando
const totalWall = pets.filter((pet)=>{
    return pet.type == 'dog';
}).reduce((total,pet) => {    
    return {
        totalWeight: total.totalWeight + pet.weight
    };
}, { totalWeight: 0});




console.log(pets);

console.log(totalweight);

console.log(totalObj);

console.log(totalW);

console.log(totalWall);