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

;(async function (){

    const promiseFunction = async (element) => {
        return new Promise((resolve,reject) =>{
            return resolve(`Nome: ${element.name} - Idade: ${element.age}`)
        });
    }

    //const itemMapped = promiseFunction('x');
    //console.log(itemMapped);
    //console.log(await itemMapped);

    const itemMappedPromise = pets.map(promiseFunction);
    const itemsMapped = await Promise.all(itemMappedPromise);
    console.log(itemsMapped);


})();
