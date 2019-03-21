module.exports = function check(str, bracketsConfig) {
  // your solution
    let bracketsArray = [];
    str.split('').forEach(function(item, i) {
        if (i == 0) {
            bracketsArray.push(item);
            return;
        }
        let lastOpenedBracket = bracketsConfig.find(bracketType =>
            bracketsArray[bracketsArray.length - 1] == bracketType[0]);
        lastOpenedBracket = lastOpenedBracket && lastOpenedBracket[1];
        if (item != lastOpenedBracket) {
            bracketsArray.push(item);
        }
        else {
            bracketsArray.pop();
        }
    });
    if (bracketsArray.length == 0) {
        return true;
    }
    else {
        return false;
    }

}