const arrayOfMultiples = (number, length) => {
    const tempArr = []
    for(let i = 0; i < length; i++) {
      tempArr.push(number + number * i)
    }
    return tempArr
  }
  
  console.log(arrayOfMultiples(7, 5))
  console.log(arrayOfMultiples(12, 10))
  console.log(arrayOfMultiples(17, 6))
  console.log('--------------arrayOfMultiples----------------')
  const keysAndValues = (object) => {
    const tempKeys = []
    const tempValues = []
    Object.keys(object).map((key, index) => {
      tempKeys.push(key)
      tempValues.push(object[key])
    });
    return [tempKeys, tempValues]
  }
  
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))
  console.log('---------------keysAndValues---------------')
  
  const count = (number) => {
    if(!Math.floor(Math.abs(number)/10)) {
      return 1;
    } else {
      return 1 + count(Math.abs(number)/10)
    }
  }
  
  console.log(count(318))
  console.log(count(-92563))
  console.log(count(4666))
  console.log(count(-314890))
  console.log(count(654321))
  console.log(count(638476))
  console.log('--------------count----------------')
  
  const secondLargest = (numberArray) => {
    const tempArr = numberArray.sort((a, b) => {
      return a - b;
    });
    return tempArr[tempArr.length - 2]
  }
  
  console.log(secondLargest([10, 40, 30, 20, 50]))
  console.log(secondLargest([25, 143, 89, 13, 105]))
  console.log(secondLargest([54, 23, 11, 17, 10]))
  console.log('-------------secondLargest-----------------')
  
  const squareDigits = (number) => {
    let tempExponent = 0
    let tempResult = 0
    const tempArr = String(number).split("").map((num) => {
      return Number(num)
    })
    tempArr.reverse().map(num => {
      tempResult += Math.pow(num, 2)*Math.pow(10, tempExponent)
      tempExponent += 1
      if(num > 3) {
        tempExponent += 1;
      }
    })
    return tempResult
  }
  
  console.log(squareDigits(9119))
  console.log(squareDigits(2483))
  console.log(squareDigits(3212))
  console.log('------------squareDigits------------------')
  
  const capToFront = (string) => {
    const tempArr = string.split("")
    const uppercaseArr = []
    const lowercaseArr = []
    tempArr.map(char => {
      if (char == char.toUpperCase()) {
       uppercaseArr.push(char)
      }
      if (char == char.toLowerCase()){
       lowercaseArr.push(char)
      }
    })
    return [...uppercaseArr, ...lowercaseArr].join('')
  }
  
  console.log(capToFront("hApPy"))
  console.log(capToFront("moveMENT"))
  console.log(capToFront("shOrtCAKE"))
  console.log('--------------capToFront----------------')
  
  const mirror = (array) => {
    const tempArr = [...array].reverse()
    tempArr.shift()
    return [...array, ...tempArr]
  }
  
  console.log(mirror([0, 2, 4, 6]))
  console.log(mirror([1, 2, 3, 4, 5]))
  console.log(mirror([3, 5, 6, 7, 8]))
  console.log('-------------mirror-----------------')
  
  const getDays = (firstDate, secondDate) => {
    return (secondDate.getTime() - firstDate.getTime())/ 86400000
  }
  
  console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ))
  console.log(getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  ))
  console.log(getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
  ))
  console.log('-------------getDays-----------------')
  