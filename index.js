const names = ["James", "Charles", "Chloe"]

function writeCards(names, event) {
    let thankYouMessages= []
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return thankYouMessages
}


function countDown(firstNumber) {
    while (firstNumber>0){
        console.log(firstNumber);
        firstNumber -= 1;
    }
    console.log(firstNumber);
}
