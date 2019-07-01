function sumR(x) {
  if(x.length === 0){
    return 0;
  } else {
    let sum = 0;
    sum = x.pop() + sumR(x);
      return sum;

  }
}