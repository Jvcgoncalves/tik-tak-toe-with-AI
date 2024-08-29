export default class SmartAgent {
    constructor() { }

    static gameMove(board) {
        let play
        console.log(board)
        if (board[1][1] == 0) {
            return [1, 1]
        }
        
        play = SmartAgent.#verifyRowCol(1, board) || SmartAgent.#verifyDiagonals(1, board)
        if (play) {
            return play
        }
        
        play = SmartAgent.#verifyRowCol(2, board) || SmartAgent.#verifyDiagonals(2, board)
        if (play) {
            return play
        }
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    return [i, j]
                }
            }
        }

        return null;
    }

    static #verifyRowCol(player, board) {
        for (let i = 0; i < 3; i++) {
            if (SmartAgent.#count(board[i], player) === 2 && SmartAgent.#count(board[i], 0) === 1) {
                return [i, board[i].indexOf(0)];
            }
    
            let col = [board[0][i], board[1][i], board[2][i]];
            if (SmartAgent.#count(col, player) === 2 && SmartAgent.#count(col, 0) === 1) {
                return [col.indexOf(0), i];
            }
        }
    }

    static #verifyDiagonals(player, board) {
        let diagonalPrincipal = [board[0][0], board[1][1], board[2][2]]
        let diagonalSecundaria = [board[0][2], board[1][1], board[2][0]]
    
        if (SmartAgent.#count(diagonalPrincipal, player) == 2 && SmartAgent.#count(diagonalPrincipal, 0) == 1) {
            return [diagonalPrincipal.indexOf(0), diagonalPrincipal.indexOf(0)]
        }
        if (SmartAgent.#count(diagonalSecundaria, player) == 2 && SmartAgent.#count(diagonalSecundaria, 0) == 1) {
            return [diagonalSecundaria.indexOf(0), 2 - diagonalSecundaria.indexOf(0)]
        }
    }

    static #count(arr, value) {
        return arr.filter(item => item === value).length
    }
}