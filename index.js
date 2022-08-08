const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

// wrapGifts(gifts);

const myNewArr = [];
function writeCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    const mess = `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
    myNewArr.push(mess);
  }
  return myNewArr;
}
function countDown(int) {
  while (int >= 0) {
    console.log(int);
    int--;
  }
}
