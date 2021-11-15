class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    const nonalpha =  /[^A-Za-z0-9]/g;
    let newstring =''
    for(let char in string){
      if (char === '-' || char === '/\'/g'|| char === '/\"/g'|| char === ' '){
        newstring += char
      }
      else if (char === nonalpha){
        newstring += ""
      }
    }
    return newstring
  }
  static titleize(string){
    return string.toUpperCase()
  }
}