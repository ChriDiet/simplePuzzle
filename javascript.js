

addPuzzlePiece('board', false, false, true, true, '', 1, 24, 0);
addPuzzlePiece('board', false, true, true, true, '', 2, 18, 0);
addPuzzlePiece('board', false, true, true, true, '', 1, 12, 0);
addPuzzlePiece('board', true, false, true, true, '', 2, 24, 6);

addPuzzlePiece('buttons', true, true, true, true, 'addNormalPuzzlePieceToBoard()', 1);
addPuzzlePiece('buttons', false, true, true, true, 'addPuzzlePieceWithoutTopToBoard()', 2);
addPuzzlePiece('buttons', false, false, true, true, 'addPuzzlePieceWithoutRightAndTopToBoard()', 1);

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