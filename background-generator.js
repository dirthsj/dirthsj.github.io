const background_div = document.getElementById("background-svg-container");

const WIDTH = 10;
const HEIGHT = 20;

const COLORS = [
    "hsla(180, 0%, 25%, 50%)",
    "hsla(180, 0%, 26%, 50%)",
    "hsla(180, 0%, 27%, 50%)",
    "hsla(180, 0%, 28%, 50%)",
    "hsla(180, 0%, 29%, 50%)",
    "hsla(180, 0%, 30%, 50%)",
    "hsla(180, 0%, 31%, 50%)",
    "hsla(180, 0%, 32%, 50%)",
    "hsla(180, 0%, 33%, 50%)",
    "hsla(180, 0%, 34%, 50%)",
    "hsla(180, 0%, 35%, 50%)",
];

const temp = [];

for (let y = 0; y < HEIGHT; y++) {
    temp[y] = [];
    for (let x = 0; x < WIDTH; x++) {
        temp[y][x] = {
            x: x + Math.random() - 0.5,
            y: y + Math.random() - 0.5,
        }
    }
}

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("viewBox", `0 0 ${WIDTH - 1} ${HEIGHT - 1}`)
background_div.appendChild(svg);

for (let y = 0; y < HEIGHT - 1; y++) {
    for (let x = 0; x < WIDTH - 1; x++) {
        let coords = [
            temp[y][x],
            temp[y][x+1],
            temp[y+1][x+1],
            temp[y+1][x],
            temp[y][x]
        ]
        const polyCoords = coords.map(coord => `${coord.x},${coord.y}`)
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", polyCoords.join(' '));
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        polygon.setAttribute("fill", color);
        // polygon.setAttribute("stroke", color);
        // polygon.setAttribute("stroke-width", "0.01");
        svg.appendChild(polygon);
    }
}

console.log(temp);