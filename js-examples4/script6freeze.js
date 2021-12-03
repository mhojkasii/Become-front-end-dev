const config = {
    url: "http://smapleurl.com",
    tableName: "Persons"
}

const fibo = [0,1,1,2,3,5];

Object.freeze(fibo);

// fully const object
Object.freeze(config);

// 
// Object.seal(config);
// delete(config.tableName);

// config.tableName = 'Car';

console.log(config);