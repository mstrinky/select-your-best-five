// console.log('linked');
document.getElementById('calculate').addEventListener('click',function(){
    // console.log('clicked');
    const perPlayer = document.getElementById('player');
    const perPlayerString = perPlayer.value ;
    const player = parseInt(perPlayerString);
    // console.log(player);
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesField = playerExpenses.innerText;
    playerExpenses.innerText = player;
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