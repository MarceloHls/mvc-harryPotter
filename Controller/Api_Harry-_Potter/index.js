const axios = require('axios')

async function dataHarryPotter() {
    return await axios.get("http://hp-api.herokuapp.com/api/characters")
        .then(data => data.data)
        .then(data => {
            let dataHarryPotter = {}
            data.forEach(element => {
                if (!dataHarryPotter[element.name]) {
                    dataHarryPotter[element.name] = element
                }
            });
            return dataHarryPotter
        })
}

module.exports = { dataHarryPotter }


    // 'Harry Potter',         'Hermione Granger',
    // 'Ron Weasley',          'Draco Malfoy',
    // 'Minerva McGonagall',   'Cedric Diggory',
    // 'Cho Chang',            'Severus Snape',
    // 'Rubeus Hagrid',        'Neville Longbottom',
    // 'Luna Lovegood',        'Ginny Weasley',
    // 'Sirius Black',         'Remus Lupin',
    // 'Arthur Weasley',       'Bellatrix Lestrange',
    // 'Lord Voldemort',       'Horace Slughorn',
    // 'Kingsley Shacklebolt', 'Dolores Umbridge',
    // 'Lucius Malfoy',        'Vincent Crabbe',
    // 'Gregory Goyle',        'Mrs Norris',
    // 'Argus Filch'

    // 'name',          'species',
    // 'gender',        'house',
    // 'dateOfBirth',   'yearOfBirth',
    // 'ancestry',      'eyeColour',
    // 'hairColour',    'wand',
    // 'patronus',      'hogwartsStudent',
    // 'hogwartsStaff', 'actor',
    // 'alive',         'image'