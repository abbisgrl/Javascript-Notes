//More Questions

let nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}

const { speakers } = nestedObject;
function addSpeaker(key, value) {
    let obj = {};
    speakers.push(Object.defineProperty(obj, key, {
        value: value,
        writable: false
    }))
}

addSpeaker('name', "Gyanendra");
addSpeaker('name', "Marghis");
addSpeaker('name', "Tarun");
console.log(speakers);


let { languages } = nestedObject.data;
function addLanguage(key, value) {
    let obj = {
        hello: value
    }
    languages[key] = obj;
}

addLanguage("Hindi", 'Namaste');
addLanguage("Gujrati", 'Jai shree krishna');
console.log(languages);

//nested destructuring to select the countries object
let { data: { continents: { europe: { countries } } } } = nestedObject;
function addCountry(name, capital, population) {
    let obj = {
        capital: capital,
        population: population
    }
    countries[name] = obj;
}
addCountry('india', 'Delhi', 1300000000)
addCountry('south africa', 'captown', 1500000)   
addCountry('china', 'shanghai', 1400000000)
console.log(countries);


console.log(nestedObject);