
//Model

let verticalPosition = 24; 
let horizontalPosition = 0;
let timesAdded = 0;
let jigsawColor = 2;

addPuzzlePiece('buttons', true, true, true, true, 'evaluatePiece(true,true,true,true)', 1);
addPuzzlePiece('buttons', false, true, true, true, 'evaluatePiece(false,true,true,true)', 2);
addPuzzlePiece('buttons', true, false, true, true, 'evaluatePiece(true,false,true,true)', 1);
addPuzzlePiece('buttons', true, true, false, true, 'evaluatePiece(true,true,false,true)', 2);
addPuzzlePiece('buttons', true, true, true, false, 'evaluatePiece(true,true,true,false)', 1);
addPuzzlePiece('buttons', false, true, true, false, 'evaluatePiece(false,true,true,false)', 2);
addPuzzlePiece('buttons', false, false, true, true, 'evaluatePiece(false,false,true,true)', 1);
addPuzzlePiece('buttons', true, true, false, false, 'evaluatePiece(true,true,false,false)', 2);
addPuzzlePiece('buttons', true, false, false, true, 'evaluatePiece(true,false,false,true)', 1);

function addPuzzlePiece(toId, hasTop, hasRight, hasBottom, hasLeft, onclick, color, leftPosition, topPosition) {
   let style = '';
   if (leftPosition !== undefined) {
      style = `left: ${leftPosition + 0.5}em; top: ${topPosition + 0.5}em`;
   }

   document.getElementById(toId).innerHTML += /*HTML*/`
      <div class="jigsaw${color}" onclick="${onclick}" style="${style}">
         ${hasTop ? `<span class="t"></span>` : ''}
         ${hasRight ? `<span class="r"></span>` : ''}
         ${hasBottom ? `<span class="b"></span>` : ''}
         ${hasLeft ? `<span class="l"></span>` : ''}
      </div> 
      `;
   }

   function addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft) {
      addPuzzlePiece('board', hasTop, hasRight, hasBottom, hasLeft, '', jigsawColor, verticalPosition, horizontalPosition);
      verticalPosition -= 6;
      timesAdded++;
      colorSwitch();
      checkTimesAdded();
   }

   function checkTimesAdded() {
      if (timesAdded == 5) {
         verticalPosition = 24;
         horizontalPosition += 6;
         timesAdded = 0;
      }
   }

   function colorSwitch() {
      if (jigsawColor == 1) {
         jigsawColor = 2;
      } else {
         jigsawColor = 1;
      }
   }

   function evaluatePiece(hasTop,hasRight,hasBottom,hasLeft) {
      if (horizontalPosition == 0 && verticalPosition == 24 && !hasTop && !hasRight) {
         addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft)
      }  else if (horizontalPosition > 24 && verticalPosition == 0 && !hasTop) {
         addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft) 
      }
   }


   