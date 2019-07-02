function spongeMeme(sentence) {
  return sentence.replace(/./g, (c, i) => i % 2 == 0 ? c.toUpperCase() : c.toLowerCase());
}