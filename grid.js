export function randomGridPosotion() {
    return {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1,
    }
}
export function outsideGrid(posotion) {
    return (posotion.x < 1)
}