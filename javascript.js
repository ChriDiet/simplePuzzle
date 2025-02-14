      let verticalPosition = 24;
      let horizontalPosition = 0;
      let timesAdded = 0;
      let jigsawColor = 2;
      

      function drawPuzzle(hasTop, hasRight, hasBottom, hasLeft,jigsawColor, pieceId, pieceClass,verticalPosition, horizontalPosition) {
         document.getElementById('buttons').innerHTML = addPuzzlePiecesToButton()
         document.getElementById("board").innerHTML += createPuzzlePieceHtml(hasTop, hasRight, hasBottom, hasLeft,jigsawColor, pieceId, pieceClass,verticalPosition, horizontalPosition)
      }

      function addPuzzlePiecesToButton() {
         return createPuzzlePieceHtml(true, true, true, true, 1, 9)
            + createPuzzlePieceHtml(false, true, true, true, 2, 8)
            + createPuzzlePieceHtml(true, false, true, true, 1, 7)
            + createPuzzlePieceHtml(true, true, false, true, 2, 6)
            + createPuzzlePieceHtml(true, true, true, false, 1, 5)
            + createPuzzlePieceHtml(false, true, true, false, 2, 4)
            + createPuzzlePieceHtml(false, false, true, true, 1, 3)
            + createPuzzlePieceHtml(true, true, false, false, 2, 2)
            + createPuzzlePieceHtml(true, false, false, true, 1, 1)
      }
      

      function createPuzzlePieceHtml(hasTop, hasRight, hasBottom, hasLeft, color, pieceId, pieceClass, leftPosition, topPosition) {
         let style = '';
         if (leftPosition !== undefined) {
            style = `left: ${leftPosition + 0.5}em; top: ${topPosition + 0.5}em`;}
            
         return /*HTML*/`
            <div id="${pieceId}" class="${pieceClass} jigsaw${color}" onclick="evaluatePiece(${pieceId})" style="${style}">
               ${hasTop ? `<span class="${pieceClass + 't'} t"></span>` : ''}
               ${hasRight ? `<span class="${pieceClass + 'r'} r"></span>` : ''}
               ${hasBottom ? `<span class="${pieceClass + 'b'} b"></span>` : ''}
               ${hasLeft ? `<span class="${pieceClass + 'l'} l"></span>` : ''}
            </div> `;
      }

      function evaluatePiece(pieceId) {
         if (horizontalPosition === 0)
            evaluateFirstRow(pieceId);
         if (horizontalPosition < 24 && horizontalPosition > 0)
            evaluateMiddleRows(pieceId);
         if (horizontalPosition === 24)
            evaluateBottomRow(pieceId);
      }

      function evaluateFirstRow(pieceId) {
         if (verticalPosition === 24 && pieceId === 3)
            addPuzzlePieceToBoard(false, false, true, true, pieceId, 'toBoard')
         if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 8)
            addPuzzlePieceToBoard(false, true, true, true, pieceId, 'toBoard')
         if (verticalPosition == 0 && pieceId == 4)
            addPuzzlePieceToBoard(false, true, true, false, pieceId, 'toBoard')
      }

      function evaluateMiddleRows(pieceId) {
         if (verticalPosition == 24 && pieceId == 7)
            addPuzzlePieceToBoard(true, false, true, true, pieceId, 'toBoard')
         if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 9)
            addPuzzlePieceToBoard(true, true, true, true, pieceId, 'toBoard');
         if (verticalPosition == 0 && pieceId == 5)
            addPuzzlePieceToBoard(true, true, true, false, pieceId, 'toBoard')
      }

      function evaluateBottomRow(pieceId) {
         if (verticalPosition == 24 && pieceId == 1)
            addPuzzlePieceToBoard(true, false, false, true, pieceId, 'toBoard')
         if (verticalPosition < 24 && verticalPosition > 0 && pieceId == 6)
            addPuzzlePieceToBoard(true, true, false, true, pieceId, 'toBoard')
         if (verticalPosition == 0 && pieceId == 2)
            addPuzzlePieceToBoard(true, true, false, false, pieceId, 'toBoard')
      }

      function addPuzzlePieceToBoard(hasTop, hasRight, hasBottom, hasLeft, pieceId, pieceClass) {
         const changeVerticalPosBy = 6
         drawPuzzle(hasTop, hasRight, hasBottom, hasLeft, jigsawColor, pieceId, pieceClass,verticalPosition, horizontalPosition,);
         verticalPosition -= changeVerticalPosBy;
         timesAdded++;
         colorSwitch();
         checkTimesAdded();
      }

      function colorSwitch() {
         jigsawColor === 1 ? jigsawColor = 2 : jigsawColor = 1;
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
