function searchCube(arrLines, startIndexLine, startIndexChar, stopIndexChar){
  let resultCube = [];
  for(let i = startIndexLine; i<arrLines.length; i++){
    let line = arrLines[i];
    let targetLine = line.slice(startIndexChar, stopIndexChar+1);
    if(targetLine[0] === "+"){
      targetLine = targetLine.replace(/\+/gi, '-');
      targetLine = "+"+targetLine.slice(1,targetLine.length-1)+"+";
      targetLine[targetLine.length-1] = "+"
    }
    resultCube.push(targetLine);
    line
    if(resultCube.length > 1 && (targetLine[0] === "+" || targetLine[targetLine.length-1] === "+")) {
      resultCube = resultCube.join('\n')
      return resultCube;
    }
  }
}

function breakPieces (shape) {
  const lines = shape.split('\n')
  const cubes = []
  for(i = 0; i < lines.length; i ++) {
    const line = lines[i];
    const lineChars = line.split('');
    let startIndexChar  = false;
    let stopIndexChar = false;
    lineChars.forEach((char, indexChar) => {
      if (char==="+" && startIndexChar === false) {
        startIndexChar  = indexChar;
      } else if (char==="+") {
        stopIndexChar = indexChar;
        const cube = searchCube(lines, i, startIndexChar, stopIndexChar);
        if(cube){
          cubes.push(cube)
        }
        startIndexChar = stopIndexChar;
      }
    })
  }
  return cubes
}