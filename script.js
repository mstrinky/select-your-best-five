const cardArray=[];

function display(cardProduct){
  const tableBody = document.getElementById('card-product');
tableBody.innerHTML = '';
for(let i=0; i<cardProduct.length; i++){
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
  const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerObj = {
    playerName:playerName
  }
  cardArray.push(playerObj);
  display(cardArray);
}

document.getElementById('calculate').addEventListener('click',function(){
    const perPlayer = document.getElementById('player');
    const perPlayerString = perPlayer.value ;
    const player = parseInt(perPlayerString);
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesField = playerExpenses.innerText;
    playerExpenses.innerText = player * cardArray.length;
    
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
  const total = document.getElementById('total');
  const totalField = total.innerText;
  total.innerText = calculateTotal;
})




