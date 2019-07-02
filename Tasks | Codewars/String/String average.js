function averageString(str) {
let sum = 0;
  let digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if(str == '') return 'n/a';
    let arr = str.split(' ');
    for(i = 0; i < arr.length; i++){
        if(digit.includes(arr[i])){
          sum += digit.indexOf(arr[i]);
        } else {
        return 'n/a';
        }
    }
  let evr = Math.floor(sum/arr.length);
  return digit[evr];
}