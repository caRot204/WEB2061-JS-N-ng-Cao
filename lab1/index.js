const game = {
    team1: ' Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimich',
            'Goretzka',
            'Conman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Wistel',
            'Hazard',
            'Brant',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: ' Nov 9th,2017',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

};

const [players1, players2] = game.players
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]
console.log(allPlayers);

const playerFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(playerFinal);

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goal were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals('Davies', 'Muller')
printGoals(...game.scored)

team1 < team2 && console.log('Team 1 win');
team1 > team2 && console.log('Team 2 win');