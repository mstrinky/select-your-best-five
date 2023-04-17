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

document.getElementById('messi').addEventListener('click',function(){
  // console.log('clicked');
  const messi = document.getElementById('messi-text');
  const messiElement = messi.innerText;
  // console.log(messiElement);
  const firstText = document.getElementById('first-text');
firstText.innerText = messiElement;
})

document.getElementById('neymar').addEventListener('click',function(){
  const neymar = document.getElementById('neymar-text');
const neymarElement = neymar.innerText;

const secondText  = document.getElementById('second-text');
secondText.innerText = neymarElement;
})
document.getElementById('mbappe').addEventListener('click',function(){
  const mbappe = document.getElementById('mbappe-text');
const mbappeElement = mbappe.innerText;

const thirdText  = document.getElementById('third-text');
thirdText.innerText = mbappeElement;
})
document.getElementById('machado').addEventListener('click',function(){
  const machado = document.getElementById('machado-text');
const machadoElement = machado.innerText;

const forthText  = document.getElementById('forth-text');
forthText.innerText = machadoElement;
})
document.getElementById('ramos').addEventListener('click',function(){
  const ramos = document.getElementById('ramos-text');
const ramosElement =ramos.innerText;

const fifthText  = document.getElementById('fifth-text');
fifthText.innerText = ramosElement;
})
document.getElementById('sanches').addEventListener('click',function(){
  const sanches= document.getElementById('sanches-text');
const sanchesElement =sanches.innerText;

const sixthText  = document.getElementById('sixth-text');
sixthText.innerText = sanchesElement;
})