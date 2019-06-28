console.clear();
// Методы, которые возвращают новые строки

// 1. Повторение исходной строки заданное количество раз
// str.repeat(count);       count - любое целое число больше или равное нулю

let str1 = 'xy3';
// вернуть str1, повторенную 7 раз
// проверьте, что будет, если вместо целого числа в качестве count взять 2.2 или 1.8
let str11 = str1.repeat(7);
console.log(str11);


//2. Метод, который может "слепить вместе" две или более строк
// str.concat(str2, str3[, ..., strN]);

let first = 'How ';
let second = 'are ';
let third = 'you?'
// с помощью метода concat получите фразу "How are you?"
// Получите эту же фразу с помощью конкатенации (используйте +).
let arr12 =[];
arr12.push(second, third);
let str122 = first.concat(arr12)
let str12 = first.concat(second, third);
console.log(str12, str122);



// Если у вас получились две одинаковые строки с помощью concat и знака +,
// то, пожалуйста, забудьте про метод concat и пользуйтесь обычной конкатенацией через + в дальнейшем.

//3. Метод, заменяющий указанное выражение на необходимое вам (replacer)
// str.replace(subStr|RegExp, newSubStr|function);

let str = 'can we get rid of this, this and this?';
// тут придется попотеть немного и рассмотреть разные ситуации:
// а) str.replace(subStr, newSubStr);
// subStr - явным видом (типа 'abc') указываем, что мы хотим заменить
// newSubStr - таким же явням образом указваем НА ЧТО мы хотим заменить

// Задание: замените в строке str (выше) слово 'this' на 'that' (один раз и только первое)
let str13 = str.replace('this', 'that');
console.log(str13);



// б) str.replace(RegExp, newSubStr);
// вместо subStr можно использовать RegExp, с их помощью можно заменить все 'this' в строке одним махом
// используем /this/g - где g - флаг global (значит, во всей строке)

// Задание: замените в строке str (выше) все слова 'this' на 'that'
let str133 = str.replace(/this/g, 'that');
console.log(str133);



// в) str.replace(RegExp, function);
// чтобы заменить что-то с помощью внутренней функции, у нас должна быть написана функция, например.
function takeFiveSymbols(str){
  let str123 = str.substring(0, 5) + str.substring(5, 6)
  return str123; //функция вернет первые пять символов строки
}

// Задание: примените функцию takeFiveSymbols внутри метода replace
// (замените все 'this' на первые пять символов этой же строки)
let str134 = str.replace(/this/g, takeFiveSymbols(str));
console.log(str134);

//
