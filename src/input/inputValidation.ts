export default function inputValidator() {

  const validate = function(str: string)  {

      let formattedStr = str.split(" ").join("")

      return isWrongLength(formattedStr) && isNumber(formattedStr)

  }

  const isWrongLength = function(str: string): boolean { return str.length === 1};
  const isNumber = function(str: string): boolean  { return !isNaN(Number(str)) };

  return { validate };
}
