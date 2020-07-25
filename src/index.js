const messages = [
    "Luis",
    "Jorge",
    "Chava",
    "Erick",
    "Andrea",
    "Mariana",
    "Adriana"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };