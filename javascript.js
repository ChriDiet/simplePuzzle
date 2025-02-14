let horizontalPosition = 24;
let verticalPosition = 0;
let piecesAdded = 0;
let jigsawColor = 2;
let puzzlePieces = "";
const maxPosition = 24;
const minPosition = 0;
const changePosBy = 6


function updateView() {
   document.getElementById("app").innerHTML = /*html*/ `
      <div id="board">${puzzlePieces}</div>
      <div id="buttons">${addPuzzlePiecesToButton()} 
         <div>
            <button onclick="reload()">Reset</button>
         </div>
      </div>
         `;
}

function addPuzzlePiecesToButton() {
   return createPuzzlePieceHtml(true, true, true, true, 1, 'centerPiece')
      + createPuzzlePieceHtml(false, true, true, true, 2, 'topMiddlePiece')
      + createPuzzlePieceHtml(true, false, true, true, 1, 'rightWallPiece')
      + createPuzzlePieceHtml(true, true, false, true, 2, 'bottomMiddlePiece')
      + createPuzzlePieceHtml(true, true, true, false, 1, 'leftWallPiece')
      + createPuzzlePieceHtml(false, true, true, false, 2, 'topLeftCornerPiece')
      + createPuzzlePieceHtml(false, false, true, true, 1, 'topRightCornerPiece')
      + createPuzzlePieceHtml(true, true, false, false, 2, 'bottomLeftCornerPiece')
      + createPuzzlePieceHtml(true, false, false, true, 1, 'bottomRightCornerPiece')
}


function createPuzzlePieceHtml(hasTop, hasRight, hasBottom, hasLeft, color, pieceId, pieceClass, leftPosition, topPosition) {
   let style = '';
   if (leftPosition !== undefined) {
      style = `left: ${leftPosition + 0.5}em; top: ${topPosition + 0.5}em`;
   }

   return /*HTML*/`
            <div id="${pieceId}" class="${pieceClass} jigsaw${color}" onclick="evaluatePiece(${pieceId})" style="${style}">
               ${hasTop ? `<span class="${pieceClass + 't'} t"></span>` : ''}
               ${hasRight ? `<span class="${pieceClass + 'r'} r"></span>` : ''}
               ${hasBottom ? `<span class="${pieceClass + 'b'} b"></span>` : ''}
               ${hasLeft ? `<span class="${pieceClass + 'l'} l"></span>` : ''}
            </div> `;
}

function evaluatePiece(pieceId) {
   if (verticalPosition == minPosition)
      evaluateTopRow(pieceId);
   if (verticalPosition < maxPosition && verticalPosition > minPosition)
      evaluateMiddleRows(pieceId);
   if (verticalPosition == maxPosition)
      evaluateBottomRow(pieceId);
}

function evaluateTopRow(pieceId) {
   if (horizontalPosition == maxPosition && pieceId == topRightCornerPiece)
      addPuzzlePieceToBoard(false, false, true, true, pieceId, 'toBoard')
   if (horizontalPosition < maxPosition && horizontalPosition > minPosition && pieceId == topMiddlePiece)
      addPuzzlePieceToBoard(false, true, true, true, pieceId, 'toBoard')
   if (horizontalPosition == 0 && pieceId == topLeftCornerPiece)
      addPuzzlePieceToBoard(false, true, true, false, pieceId, 'toBoard')
}

function evaluateMiddleRows(pieceId) {
   if (horizontalPosition == maxPosition && pieceId == rightWallPiece)
      addPuzzlePieceToBoard(true, false, true, true, pieceId, 'toBoard')
   if (horizontalPosition < maxPosition && horizontalPosition > minPosition && pieceId == centerPiece)
      addPuzzlePieceToBoard(true, true, true, true, pieceId, 'toBoard');
   if (horizontalPosition == minPosition && pieceId == leftWallPiece)
      addPuzzlePieceToBoard(true, true, true, false, pieceId, 'toBoard')
}

function evaluateBottomRow(pieceId) {
   if (horizontalPosition == maxPosition && pieceId == bottomRightCornerPiece)
      addPuzzlePieceToBoard(true, false, false, true, pieceId, 'toBoard')
   if (horizontalPosition < maxPosition && horizontalPosition > minPosition && pieceId == bottomMiddlePiece)
      addPuzzlePieceToBoard(true, true, false, true, pieceId, 'toBoard')
   if (horizontalPosition == minPosition && pieceId == bottomLeftCornerPiece)
      addPuzzlePieceToBoard(true, true, false, false, pieceId, 'toBoard')
}

function addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft, pieceId, pieceClass) {
   puzzlePieces += createPuzzlePieceHtml(hasTop, hasRight, hasBottom, hasLeft, jigsawColor, pieceId, pieceClass, horizontalPosition, verticalPosition);
   updateView();
   piecesAdded++
   horizontalPosition -= changePosBy;
   changePuzzlePieceColor();
   checkPiecesAdded();
}

function changePuzzlePieceColor() {
   jigsawColor === 1 ? jigsawColor = 2 : jigsawColor = 1;
}

function checkPiecesAdded() {
   const maxPiecesPerRow = 5;

   if (piecesAdded === maxPiecesPerRow)
      moveToNextRow()
}

function moveToNextRow () {
   const resetPiecesAdded = 0;
   const resetPos = maxPosition;

   horizontalPosition = resetPos;
   piecesAdded = resetPiecesAdded;
   verticalPosition += changePosBy;
}

function reload() {
   window.location.reload();
}

