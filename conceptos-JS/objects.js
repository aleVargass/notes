// Syntax
const object = {
    property: "value",
};

/** Objetos
 * Variables dentro de objetos se les llaman propiedades
 * funciones dentro de objetos se les llaman metodos
 * (,) despues de cada atributo 
 *  No se declara el scope de los valores atributo dentro del objeto
 *  No utilizar arrow functions dentro de objetos
 * */
const ale = {
    nombre: 'alejandro',
    apellido: 'vargas',
    edad: 18,
    contacto: {
        correo: 'alelet2506@gmail.com'
    },
    saludar: function () {
        return `Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años, puedes mandarme un correo a ${this.contacto.correo} `
    }
};
ale.nombre = 'alelet';
console.log(ale.nombre);
ale.saludar();



// Add key-value pairs (dot notation)
const tekkenCharacter = {
};
tekkenCharacter.playey = "Hwoarang";



// Add key-value pairs (bracket notation)
tekkenCharacter["hair color"] = "dyed orange";
const eyes = "eye color";
tekkenCharacter[eyes] ="brown";



// Nested objects
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

console.log(userActivity);



// delete keyword to remove object properties
let foods = {
  apples: 25,
  oranges: 32,
};

delete foods.oranges;

console.log(foods);



// Check if an object has a property
users.hasOwnProperty('Alan');
'Alan' in users;



// Every method
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
}  



// Objetos literales
// si una propiedad va a recibir el mismo nombre que la variable, se puede colocar solo el nombre de la variable
//para los metodo se quitan : function
let nombre = 'isra',
    edad = 19;

const persona = {
    nombre: nombre,
    edad: edad,
    hablar: function () {
        return 'como estas?'
    }
}
//es lo mismo que
const person = {
    nombre,
    edad,
    talk() {
        return 'how are you ?'
    }
}



//propiedades dinamicas de los objetos cap_56
const objUsuarios = {
}

let aleatorio = Math.round(Math.random() * 100 + 5);
const usuarios = ['ale', 'isra', 'luis', 'ana'];

usuarios.forEach((usuario, i) => {
    objUsuarios[`id_${aleatorio}`] = usuario
})

console.log(objUsuarios)