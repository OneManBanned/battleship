export const validateText = (str: string) => ['left', 'right', 'Up', 'down', 'q'].includes(str.toLowerCase().trim())

export function validateNumber(str: string)  {

      let formattedStr = str.split(" ").join("")

      return isRightLength(formattedStr) && isNumber(formattedStr)

  }

  const isRightLength = (str: string): boolean => str.length === 1
  const isNumber = (str: string): boolean => !isNaN(Number(str)) 



