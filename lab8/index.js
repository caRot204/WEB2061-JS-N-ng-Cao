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


const btn = document.querySelectorAll('#button').value;
const text = document.querySelectorAll('#textarea').value;

btn.addEventListener('click', () => {
    console.log(text);
})

