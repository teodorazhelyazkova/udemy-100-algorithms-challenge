export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const getCellColor = (cell: string) => {
        const [col, row] = cell.split('');
        const colValue = col.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        const rowValue = parseInt(row);

        return (colValue + rowValue) % 2;
    };

    return getCellColor(cell1) === getCellColor(cell2);
}

// console.log(chessBoardCellColor('A1', 'C3'));
// console.log(chessBoardCellColor('A1', 'H3'));
