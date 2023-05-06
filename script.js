// console.log('linked');

const cardArray=[];

function display(cardProduct){
// console.log(cardProduct);
const tableBody = document.getElementById('card-product');
tableBody.innerHTML = '';
for(let i=0; i<cardProduct.length; i++){
  // console.log(cardArray[i]);
  const name = cardArray[i].playerName;
  const tr = document.createElement('tr');
  tr.innerHTML =`
  <tr>
  <th>${i + 1}</th>
  <td> ${name} </td>
</tr>
  ` 
  tableBody.appendChild(tr);
}
}
function selection(element){
  // console.log(element.parentNode.parentNode.children[0]);
  const playerName = element.parentNode.parentNode.children[0].innerText;
  // console.log(playerName);
  const playerObj = {
    playerName:playerName
  }
  cardArray.push(playerObj);
  // console.log(cardArray);
  // document.getElementById('player').value= cardArray.length;
  display(cardArray);
}

document.getElementById('calculate').addEventListener('click',function(){
    // console.log('clicked');
    const perPlayer = document.getElementById('player');
    const perPlayerString = perPlayer.value ;
    const player = parseInt(perPlayerString);
    // console.log(player);
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesField = playerExpenses.innerText;
    playerExpenses.innerText = player * cardArray.length;
    // console.log(playerExpensesField);
})




document.getElementById('calculate-total').addEventListener('click',function(){
  const managerField = document.getElementById('manager');
  const managerString = managerField.value;
  const manager = parseInt(managerString);

  const coachField = document.getElementById('coach');
  const coachString = coachField.value;
  const coach = parseInt(coachString);

  const playerExpenses = document.getElementById('player-expenses');
  const playerString = playerExpenses.innerText;
  const playerNumber = parseInt(playerString);

  const calculateTotal = playerNumber + coach + manager;
//   console.log(calculateTotal);
const total = document.getElementById('total');
const totalField = total.innerText;
total.innerText = calculateTotal;
})




