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
class Userjson implements Igeouserjson, Iaddressuserjson, Icompanyuserjson {
    bs: string;
    catchPhrase: string;
    city: string;
    geo: Igeouserjson;
    lat:string;
    lng: string;
    name: string;
    street: string;
    suite: string;
    zipcode: string;k

   constructor(private _id: number, public username: string, public email: string, private _address: Iaddressuserjson, private phone: string, public  website: string, public _company: Icompanyuserjson) {

   }

    get idUserjson(): number {
        return this._id;
    }

    get address(): Iaddressuserjson {
        return this._address;
    }

    set Userjson(value: Icompanyuserjson) {
        this._company = value;
    }
}


const userclasjson = new Userjson(9, 'ddhhdh', 'hdhddh@888', {street: '3333', suite: 'dchc', geo:{lat:'kdkdkdk',lng:'djdjddjd'}, city:'dkdjd', zipcode:'ddddd'}, '7890', '6hhhh', {name: 'djdjdj', bs: 'dddjdh', catchPhrase: '99iii'} )

console.log(userclasjson)

// interface Iuserjson {
//     id: number,
//     username: string
//     email: string,
//     address: Iaddressuserjson,
//     phone: string,
//     website: string,
//     company: Icompanyuserjson
// }

// let userrhre: Iuserjson = {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//         }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//     }
// }

// console.log(userrhre)

