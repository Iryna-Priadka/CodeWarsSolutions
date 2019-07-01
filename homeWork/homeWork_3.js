// ДЗ3. Примитивные типы данных
console.clear();
// Ваше имя и фамилия:


// 1. Создайте переменные со следующими значениями:
        let num = 5734050;
        let str = 'BORSCH';
        let boll1 = true;
        let str1 = 'false';
        let val1 = null;
        let val2 = NaN;
        let val3 = undefined;



// 2. Определите тип данных у созданных переменных и выведите в консоль.

console.log(typeof(num));
console.log(typeof(str));
console.log(typeof(boll1));
console.log(typeof(str1));
console.log(typeof(val1));
console.log(typeof(val2));
console.log(typeof(val3));



// 3. Задайте переменную "цена игрушки" (на английском, конечно!), присвойте в нее значение 25,

let toyPrice = 25;

//    Выведите в консоль предложение "Стоимость пяти игрушек равна 125".
console.log('Стоимость пяти игрушек равна 1'+ toyPrice);

//    При этом предложение должно быть выведено с помощью backticks и переменной "цена игрушки"

console.log(`Стоимость пяти игрушек равна ${toyPrice * 5}`);


console.log('===============================');
// эта строка служит разделителем заданий, не трогать!


// 4. Придумайте примеры сравнения разных типов данных с операторами >, <, ==, ===
//    Для каждого оператора по два примера, один должен давать true, другой false
//    Например: console.log('ABC' < 123); - даст false

console.log(123 == '123');
console.log(123 > NaN);

console.log('123' == 'cba');
console.log((1 + 'QWE') === '1QWE');

console.log('true' !== true);
console.log('false' == false);

console.log(true == true);
console.log('undefined' == undefined);
console.log(null == undefined);

// 5. Задайте переменную what, не присваивайте ей никакого значения. Какой у нее будет тип данных?

let what;
console.log(typeof(what));

//    Опишите процедуру сравнения:
//    если what - true, то выведите в консоль "true", в обратном случае - "false".

if (what){
  console.log('true');
} else {
  console.log('false');
}

//    Теперь скопируйте все сравнение и замените условие на следующее:
//    если what равно undefined, остальное оставьте неизменным.

if (what === undefined){
  console.log('true');
} else {
  console.log('false');
}

