function calcularDistancia(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const x1 = 10;
const y1 = 11;
const x2 = 19;
const y2 = 20;

const distancia = Math.floor(calcularDistancia(x1, y1, x2, y2));
console.log(`A distância entre os pontos P(${x1}, ${y1}) e P(${x2}, ${y2}) é ${distancia}`);
