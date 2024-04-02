
interface Igeouserjson {
    lat: string,
    lng:string
}
interface Iaddressuserjson {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Igeouserjson
    }
    
    interface Icompanyuserjson {
        name: string,
        catchPhrase: string,
        bs: string
    }

interface Iuserjson {
    id: number,
    name: string,
    username: string
    email: string,
    address: Iaddressuserjson,
    phone: string,
    website: string,
    company: Icompanyuserjson
}

let userrhre: Iuserjson = {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
}

console.log(userrhre)