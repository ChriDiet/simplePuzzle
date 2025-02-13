
//Model

let verticalPosition = 24;
let horizontalPosition = 0;
let timesAdded = 0;
let jigsawColor = 2;

addPuzzlePiecesToButton();

// function updateView(id) {
//    document.getElementById(id).innerHTML += addPuzzlePiece();
// }


function addPuzzlePiece(toId, hasTop, hasRight, hasBottom, hasLeft, onclick, color, leftPosition, topPosition,pieceId,pieceClass) {
   let style = '';
   if (leftPosition !== undefined) {
      style = `left: ${leftPosition + 0.5}em; top: ${topPosition + 0.5}em`;
   }
   
   document.getElementById(toId).innerHTML += /*HTML*/`
      <div id="${pieceId}" class="${pieceClass} jigsaw${color}" onclick="${onclick}" style="${style}">
         ${hasTop ? `<span class="${pieceClass+'t'} t"></span>` : ''}
         ${hasRight ? `<span class="${pieceClass+'r'} r"></span>` : ''}
         ${hasBottom ? `<span class="${pieceClass+'b'} b"></span>` : ''}
         ${hasLeft ? `<span class="${pieceClass+'l'} l"></span>` : ''}
      </div> 
   `;
}

function addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,pieceClass) {
   const changeVerticalPosBy = 6
   addPuzzlePiece('board', hasTop, hasRight, hasBottom, hasLeft, '', jigsawColor, verticalPosition, horizontalPosition,pieceId,pieceClass);
   verticalPosition -= changeVerticalPosBy;
   timesAdded++;
   colorSwitch();
   checkTimesAdded();
}

function addPuzzlePiecesToButton() {
   addPuzzlePiece('buttons', true, true, true, true, 'evaluatePiece(true,true,true,true,9)', 1);
   addPuzzlePiece('buttons', false, true, true, true, 'evaluatePiece(false,true,true,true,8)', 2);
   addPuzzlePiece('buttons', true, false, true, true, 'evaluatePiece(true,false,true,true,7)', 1);
   addPuzzlePiece('buttons', true, true, false, true, 'evaluatePiece(true,true,false,true,6)', 2);
   addPuzzlePiece('buttons', true, true, true, false, 'evaluatePiece(true,true,true,false,5)', 1);
   addPuzzlePiece('buttons', false, true, true, false, 'evaluatePiece(false,true,true,false,4)', 2);
   addPuzzlePiece('buttons', false, false, true, true, 'evaluatePiece(false,false,true,true,3)', 1);
   addPuzzlePiece('buttons', true, true, false, false, 'evaluatePiece(true,true,false,false,2)', 2);
   addPuzzlePiece('buttons', true, false, false, true, 'evaluatePiece(true,false,false,true,1)', 1);
}

function checkTimesAdded() {
   const verticalLength = 5;
   const changeHorizontalPosBy = 6;
   const resetVerticalPos = 24;
   const resetTimesAdded = 0;
   
   if (timesAdded === verticalLength) {
      verticalPosition = resetVerticalPos;
      horizontalPosition += changeHorizontalPosBy;
      timesAdded = resetTimesAdded;
   }
}

function colorSwitch() {
   jigsawColor === 1 ? jigsawColor = 2 : jigsawColor = 1;
}

function evaluatePiece(hasTop, hasRight, hasBottom, hasLeft,pieceId) {
   if(horizontalPosition === 0) 
      evaluateFirstRow(hasTop, hasRight, hasBottom, hasLeft,pieceId);
   if(horizontalPosition < 24 && horizontalPosition > 0) 
      evaluateMiddleRows(hasTop, hasRight, hasBottom, hasLeft,pieceId);
   if(horizontalPosition === 24)
      evaluateBottomRow(hasTop, hasRight, hasBottom, hasLeft,pieceId);


   // if (horizontalPosition == 0) {
   //    evaluateFirstRow(hasTop, hasRight, hasBottom, hasLeft,pieceId)
   // } else if (horizontalPosition < 24 && horizontalPosition > 0) {
   //    evaluateMiddleRows(hasTop, hasRight, hasBottom, hasLeft,pieceId)
   // } else if (horizontalPosition == 24) {
   //    evaluateBottomRow(hasTop, hasRight, hasBottom, hasLeft,pieceId)
   // }
}

function evaluateFirstRow(hasTop, hasRight, hasBottom, hasLeft,pieceId) {
   if(verticalPosition === 24 && pieceId === 3)
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');
   if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 8)
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');
   if (verticalPosition == 0 && pieceId == 4)
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');


   // if (verticalPosition == 24 && pieceId == 3) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft);
   // } else if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 8) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft);
   // } else if (verticalPosition == 0 && pieceId == 4) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft)
   // }
}

function evaluateMiddleRows(hasTop, hasRight, hasBottom, hasLeft,pieceId) {
   if (verticalPosition == 24 && pieceId == 7) 
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');
   if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 9)
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');
   if (verticalPosition == 0 && pieceId == 5)
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');
   


   // if (verticalPosition == 24 && pieceId == 7) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft);
   // } else if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 9) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft);
   // } else if (verticalPosition == 0 && pieceId == 5) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft)
   // }
}

function evaluateBottomRow(hasTop, hasRight, hasBottom, hasLeft,pieceId) {
   if (verticalPosition == 24 && pieceId == 1)
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');
   if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 6)
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');
   if (verticalPosition == 0 && pieceId == 2)
      addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft,pieceId,'toBoard');



   // if (verticalPosition == 24 && pieceId == 1) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft);
   // } else if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 6) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft);
   // } else if (verticalPosition == 0 && pieceId == 2) {
   //    addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft)
   // }
}

/*
   if(pieceId === n) {
      addToCorrectLocation
   }

   if(currentLocation is true) {
      set pieceId n to location
   }
*/
