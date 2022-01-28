module.exports = function check(str, bracketsConfig) {
  // все скобки вытаскиваем из массива и превращаем в строку
  bracketsConfig = bracketsConfig.join(',').split(',').join('');
  
  let brackets = [],
      flag = true,
      actualLength = str.length;

  for (let i = 0; i < bracketsConfig.length; i += 2) {
    brackets.push(bracketsConfig.slice(i, i + 2));
  }

  while (flag) {  
    actualLength = str.length;
    for (let i = 0; i < brackets.length; i++) {
      str = str.replace(brackets[i],'');
    }
    if (actualLength === str.length)
      flag = false;
  }
  return actualLength === 0;
}
