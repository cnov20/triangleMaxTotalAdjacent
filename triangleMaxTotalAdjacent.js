function readFile (file) {
  // Read text file and save data from file
  var fs = require('fs')
  var allData = fs.readFileSync(file, 'utf8')

  // Create array from text file data and save
  const lines = allData.split('\n')
  const numRows = lines.length

  // Initialize empty array
  // Create / fill list with empty sub-arrays for subsequent data processing
  var list = []
  for (let i = 0; i < numRows; i++) {
    list[i] = []
  }

  // Based on length of file data, fill subarrays with data from text file
  // Text data is in string format, so it must be parsed to integers first -- to be later summed up
  for (let i = 0; i < numRows; i++) {
    const row = lines[i].split(' ')
    for (let j = 0; j < row.length; j++) {
      list[i][j] = parseInt(row[j])
    }
  }

  // Since this readFile function is serving as the entry point for our program, call main max calculation function here
  findAdjacentMax(list)
}

// Serves to grab last row of 2D array, to be the starting point of the max calculation algorithm
function getLastRow (array, runningMax) {
  return array[array.length - 1]
}

// Calculates max of adjacent elements of the result array
// This is in relation to the current element/iteration of the array passed into the function
function findAdjacentMiniMax (currentElement, numOne, numTwo) {
  let miniMax = 0
  if (numOne > numTwo) {
    miniMax = numOne
  } else if (numTwo > numOne) {
    miniMax = numTwo
  } else { // If elements are of the same value -- choose first one found (left-adjacent) -- in line with Python's min() and max() function specs
    miniMax = numOne
  }
  miniMax = currentElement + miniMax
  return miniMax
}

function findAdjacentMax (array) {
  const arrayLength = array.length
  let runningMax = 0
  let finalMax = 0
  let resultArray = []

  // Starting point for algorithm
  // Also serves as storage/updating of running (max) total
  resultArray = getLastRow(array)

  // Iterate through rows of matrix, and then iterate through columns
  for (let i = arrayLength - 2; i >= 0; i--) {
    const row = array[i]
    for (let j = 0; j < row.length; j++) {
      const col = array[j]
      const currentElement = array[i][j]

      // Artifacts from initial attempt(s) to use a truly "top-down", iterative approach
      const leftAdjacentElem = array[i + 1][j]
      const rightAdjacentElem = array[i + 1][j + 1]

      // Find max at each mini-triangle (current element and two adjacent elements)
      // Then set result of each mini-max function call to corresponding position in result array, 
      // using this as a running total/build-up towards final total of entire triangle
      runningMax = findAdjacentMiniMax(currentElement, resultArray[j], resultArray[j + 1])
      resultArray[j] = runningMax
    }
  }

  // Based on last step of the above for loops,
  // the first position of resultArray holds the final, max adjacent total of the triangle's elements
  finalMax = resultArray[0]
  console.log('FINAL MAX: ', finalMax)
  return finalMax
}

const triangleArray = [[5], [9, 6], [4, 6, 8], [0, 7, 1, 5]]
readFile('triangle.txt')
findAdjacentMax(triangleArray)
