function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts){
  var newArray = []
  let i = 0
  while (i < facts.length) {
    newArray.push(facts[i] +"!!!")
    i++
  }
  return newArray
}

function iLoveTheBeatles(n){
  var newArray = []
  do {
    newArray.push("I Love the Beatles!")
    n -= 1
  } while (n != 17 && n >1);
  return newArray
}
