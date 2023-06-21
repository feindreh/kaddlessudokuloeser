const makeEmptySudoku = () => {
    const arr = []
    for(let i = 0; i<9;i++){
        const row = []
        for(let j = 0; j<9 ; j++){
            row.push("")
        }
        arr.push(row)
    }
    return arr
  }

export default makeEmptySudoku