// ДЗ4. Объекты. Ссылочный тип данных
// Задание сложное и будет разбираться на доп занятии, но кто сделает 🎖.

// Ваше имя и фамилия:


// 1. Создайте объект который описывает автомобиль.
// Учитывайте не только харатеристики, но и владельца, регистрационные данные
// * историю техобслуживания
// * историю владения
// Для заданий * нужно использовать массив объектов
 // 2. Создайте объекты владельцев автомобилей
let owner1 = {
   name: 'Vasily',
   lastName: 'Ivanov',
   age: 34,
   tickets: 1,
};
  let owner2 = {
   name: 'Ivan',
   lastName: 'Ivanov',
   age: 45,
   tickets: 2,
};

// 1. Создайте объект который описывает автомобиль.
// Учитывайте не только харатеристики, но и владельца, регистрационные данные
// * историю техобслуживания
// * историю владения
// Для заданий * нужно использовать массив объектов

let car = {
  model: 'toyota',
  type: 'prius',
  color: 'grey',
  owners: [owner1, owner2],
 registration: {
   winNumber: 'A345',
   regDate: '10/23/1987',
 },
}
// 3. В автомобиле можно использовать ссылку на владельца.
// Сделайте из автомобиля ссылку на его вдадельца
const own = car.owners[0];
    console.log(own);
// 4. Обращаясь через автомобиль к владельцу, удалите у него произвольное свойство
delete car.owners[0].tickets;
console.log(own);
// 5. Обращаясь через автомобиль к владельцу, добавьте новое свойство вдадельцу
car.owners[0].medal = 3;
console.log(own);
// 6. Проверьте что все сделано правильно и выведите результат в консоль

// 7. Покажите пример как сделать копию объекта
let clone = {};
for(let key in car){
  clone[key] = car [key];
}
console.log(clone);
// 8. Докажите, что вы сделали копию, а не скопировалии ссылку на один и тотже объект
function isTrue() {
if(car !== clone){
  return true;
} else return false;
}
console.log(isTrue());










// ДЗ4. Объекты. Ссылочный тип данных
// Задание сложное и будет разбираться на доп занятии, но кто сделает 🎖.

// Ваше имя и фамилия: Anastasia Goygova


// 1. Создайте объект который описывает автомобиль.
// Учитывайте не только харатеристики, но и владельца, регистрационные данные
// * историю техобслуживания
// * историю владения
// Для заданий * нужно использовать массив объектов

const car = {
  brand: 'Lexus',
  model: 'RX350',
  year: 2018,
  VIN: '1ABCD23EFGH456789',
  licencePlate: '6ABC123',
  owner: {
      name: {
        firstName: 'Anastasia',
        lastName: 'Goygova',
      },
      driverLicence: 'l1234567',
      address: {
        apt: 123,
        home: '1300',
        street: 'Market',
        city: 'San Francisco',
        state: 'California',
        country: 'USA',
        zip: '94107',
      },
  },
  serviceHistory: [
     {date: '08/09/2018', mileage: 5000, workPerformed:['oil change'], vendor: 'Lexus dealership',},
     {date: '11/10/2018', mileage: 6500, workPerformed:['leak check'], vendor: 'Lexus dealership',},
     {date: '05/28/2019', mileage: 9950, workPerformed:['oil change','break check'], vendor: 'Lexus dealership',},
   ],
  ownershipHistory: [
     {
      yearPurhased: 2018,
      typeOfOwner: 'personal',
      lengthOfOwnership:'2 months',
      ownedInState:'California',
      lastOdometrReading: 2000,
     },
     {
      yearPurhased: 2018,
      typeOfOwner: 'personal',
      lengthOfOwnership: '1 year',
      ownedInState: 'California',
      lastOdometrReading: 9950,
     },
  ],
};

// 2. Создайте объекты владельцев автомобилей

  const owner1 = {
      name: {
        firstName: 'Anastasia',
        lastName: 'Goygova',
      },
      diverLicence: 'l1234567',
      address: {
        apt: 123,
        home: '1300',
        street: 'Market',
        city: 'San Francisco',
        state: 'California',
        country: 'USA',
       },
      cell:'(415)123-45-45',
     };

  const owner2 = {
     name:{
       firstName: 'Anna',
       lastName: 'Goriainova',
      },
      driverLicence: 'l1237890',
      address: {
        apt: null,
        home: '1324',
        street: 'Lavender',
        city: 'Concord',
        state: 'California',
        country: 'USA',
        zip: '95022',
      },
      cell:'+1-510-123-4545',
  };



// 3. В автомобиле можно использовать ссылку на владельца.
// Сделайте из автомобиля ссылку на его владельца
 car.owner = owner1;

// 4. Обращаясь через автомобиль к владельцу, удалите у него произвольное свойство
delete car.owner.apt;

// 5. Обращаясь через автомобиль к владельцу, добавьте новое свойство вдадельцу
car.owner.gender = 'female';

// 6. Проверьте что все сделано правильно и выведите результат в консоль
console.log(car.owner);

// 7. Покажите пример как сделать копию объекта
const shallowCopy = {...car};

let stringObj = JSON.stringify(car);
const deepCopy = JSON.parse(stringObj);

// 8. Докажите, что вы сделали копию, а не скопировалии ссылку на один и тотже объект
const isShallowCopy = shallowCopy !== car && shallowCopy.serviceHistory === car.serviceHistory
console.log(isShallowCopy);

const isDeepCopy = deepCopy !== car && deepCopy.serviceHistory !== car.serviceHistory;

console.log(isDeepCopy);






