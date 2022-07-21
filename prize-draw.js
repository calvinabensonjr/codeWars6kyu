/* https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

Prize Draw
Instructions

To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

Task:
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"
Notes:
The weight array is at least as long as the number of names, it may be longer.

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".

See Examples Test Cases for more examples.

Solution:
*/
//st - string offirstnames
//we - array of weights
//n - a rank
function rank(st, we, n) {
  console.log(st)
  if(st === ''){
    return 'No participants'
  }
    //adds up letters of the name
  function letterSum(str){
    let sum = 0
    for(let i = 0; i < str.length; i++){
//       console.log(str[i],codeToOne(str[i]))
     sum += codeToOne(str[i])
    }
    return sum + str.length
  }
  console.log(st, 'st')
  const names = st.split(',')
  console.log(names,'array')
  let arrWin = []
  
  for(let i = 0; i < names.length; i++){
  
//     console.log('som equals',letterSum(names[i]),'weight =',we[i])
    //winning number is
    let winningNum = letterSum(names[i]) * we[i]
//     console.log(winningNum)
    //added 'n' the rank, into the console log
    arrWin.push({winningNum:winningNum,name:names[i], n})
    //why are all the ranks 4?
    
    
    //rank
    //I want to return the firstname associated with the rank
//     for(let i = 0; i <)
    if(names[i] === n){
//       return 'firstname'
    }
 

  //sort
  }
  arrWin.sort((a,b)=>{
    if(a.winningNum === b.winningNum){
      if(a.name > b.name){
        return 1
      }else{
        return -1
      }
    }
   return b.winningNum-a.winningNum
  })
  console.log(arrWin)
  console.log(names.length, n)
  if(names.length < n){
    return "Not enough participants"
  }
  return arrWin[n-1].name
//   letterSum(st)
  function codeToOne(char){
    
    return char.toLowerCase().charCodeAt() - 96
    
  }
  //return the firstname of the participantwhose rank is n (what does that mean?)
  //so if a random rank number is given,the corresponding firstname of the rank should given
  //it wants the name, associated with whatever rank is chosen (n), in decreasing order
  //if st is empty, return "No participants"
  //if n is greater than the number of participants return "No participipants"
  
//   console.log(codeToOne('c'))
} 
