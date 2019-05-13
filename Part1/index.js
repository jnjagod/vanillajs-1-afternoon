
const board = [];

function play(clickedId){
    
const topL = board[0];
const topM = board[1];
const topR = board[2];
const midL = board[3];
const midM = board[4];
const midR = board[5];
const botL = board[6];
const botM = board[7];
const botR = board[8];

   let playerSpan = document.getElementById('player')
   let clickedElement = document.getElementById(clickedId);
   playerSpan.innerText === 'X' ? playerSpan.innerText = 'O' : playerSpan.innerText = 'X';
   playerSpan.innerText === 'X' ? clickedElement.innerText = 'O' : clickedElement.innerText = 'X';
   playerSpan.innerText === 'X' ? board[clickedId] = 'O' : board[clickedId] = 'X';
   console.log(board);
   if (topL !== undefined && topL === topM && topL === topR) {
       alert(`${topR} wins`);
       return;
   }
    if (midL !== undefined && midL === midM && midL === midR) {
       alert(`${midR} wins`);
       return;
   }
   if (botL !== undefined && botL === botM && botL === botR) {
       alert(`${botR} wins`);
       return;
   }
    if (topL !== undefined && topL === midL && topL === botL) {
       alert(`${botL} wins`);
       return;
   }
   if (topM !== undefined && topM === midM && topM === botM) {
       alert(`${botM} wins`);
       return;
   }
   if (topR !== undefined && topR === midR && topR === botR) {
       alert(`${botR} wins`);
       return;
   }
   if (topL !== undefined && topL === midM && topL === botR) {
       alert(`${botR} wins`);
       return;
   }
   if (botL !== undefined && botL === midM && botL === topR) {
       alert(`${topR} wins`);
       return;
   }
   
   let boardFull = true;
   for (let i = 0; i <= 8; i++) {
       if (board[i] === undefined) {
         boardFull = false;
       }
     }
       if (boardFull === true) {
       alert('Tie game');
     }
}
