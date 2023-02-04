const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yeallow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yeallow card'],

]);
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())]
console.log(events);

gameEvents.delete(64)

console.log(`1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phút`);
const time = [...gameEvents.keys()].pop();

console.log(time);
console.log(`1 sự kiện xảy ra, trung bình mỗi ${time / gameEvents.size} phút`);


for (const [min, events] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} half] ${min}: ${events}`);
}

// 2.2
document.body.append(document.createElement('textarea'));
const btn = document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');

    console.log(rows);

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});
//2.4

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue'
    })
})();



