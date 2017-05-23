const starWars7 = 'Star Wars: El Despertar de la Fuerza';
const pgStarWars7 = 13;

const nameLuis = 'Luis'
const ageLuis = 26;

const nameFer = 'Fernando'
const ageFer = 12;

function canWatchMovie(name, age, isWithAdult){
  if(age >= pgStarWars7){
    alert(`${name} puede pasar a ver ${starWars7}`);
  }else if(isWithAdult){
    alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompañado/a por un adulto`);
  }else{
    alert(`${name} no puede pasar a ver ${starWars7}.
      Tiene ${age} y necesita tener ${pgStarWars7}`);
  }
}

canWatchMovie(nameLuis, ageLuis);
canWatchMovie(nameFer, ageFer, true);
