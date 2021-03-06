const initialState = {
    listWizards: [
        {
            "name": "Harry Potter",
            "image": "http://hp-api.herokuapp.com/images/harry.jpg"
        },
        {
            "name": "Hermione Granger",
            "image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
        },
        {
            "name": "Ron Weasley",
            "image": "http://hp-api.herokuapp.com/images/ron.jpg"
        },
        {
            "name": "Draco Malfoy",
            "image": "http://hp-api.herokuapp.com/images/draco.jpg"
        },
        {
            "name": "Minerva McGonagall",
            "image": "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
        },
        {
            "name": "Cedric Diggory",
            "image": "http://hp-api.herokuapp.com/images/cedric.png"
        },
        {
            "name": "Cho Chang",
            "image": "http://hp-api.herokuapp.com/images/cho.jpg"
        },
        {
            "name": "Severus Snape",
            "image": "http://hp-api.herokuapp.com/images/snape.jpg"
        },
        {
            "name": "Rubeus Hagrid",
            "image": "http://hp-api.herokuapp.com/images/hagrid.png"
        },
        {
            "name": "Neville Longbottom",
            "image": "http://hp-api.herokuapp.com/images/neville.jpg"
        },
        {
            "name": "Luna Lovegood",
            "image": "http://hp-api.herokuapp.com/images/luna.jpg"
        },
        {
            "name": "Ginny Weasley",
            "image": "http://hp-api.herokuapp.com/images/ginny.jpg"
        },
        {
            "name": "Sirius Black",
            "image": "http://hp-api.herokuapp.com/images/sirius.JPG"
        },
        {
            "name": "Remus Lupin",
            "image": "http://hp-api.herokuapp.com/images/lupin.jpg"
        },
        {
            "name": "Arthur Weasley",
            "image": "http://hp-api.herokuapp.com/images/arthur.jpg"
        },
        {
            "name": "Bellatrix Lestrange",
            "image": "http://hp-api.herokuapp.com/images/bellatrix.jpg"
        },
        {
            "name": "Lord Voldemort",
            "image": "http://hp-api.herokuapp.com/images/voldemort.jpg"
        },
        {
            "name": "Horace Slughorn",
            "image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
        },
        {
            "name": "Kingsley Shacklebolt",
            "image": "http://hp-api.herokuapp.com/images/kingsley.jpg"
        },
        {
            "name": "Dolores Umbridge",
            "image": "http://hp-api.herokuapp.com/images/umbridge.jpg"
        },
        {
            "name": "Lucius Malfoy",
            "image": "http://hp-api.herokuapp.com/images/lucius.jpg"
        },
        {
            "name": "Vincent Crabbe",
            "image": "http://hp-api.herokuapp.com/images/crabbe.jpg"
        },
        {
            "name": "Gregory Goyle",
            "image": "http://hp-api.herokuapp.com/images/goyle.jpg"
        },
        {
            "name": "Mrs Norris",
            "image": "http://hp-api.herokuapp.com/images/norris.JPG"
        },
        {
            "name": "Argus Filch",
            "image": "http://hp-api.herokuapp.com/images/filch.jpg"
        }
    ],
    wizardSelect: "",
    wizardDetails: {}
}

function wizards(state = initialState, action) {
    switch (action.type) {
        case "SET_WIZARD":
            const { wizard } = action
            return { ...state, wizardSelect: wizard }
        case "SET_WIZARD_DETAILS":
            const { details } = action
            return { ...state, wizardDetails: details }

        default:
            break;
    }
    return state
}

export default wizards