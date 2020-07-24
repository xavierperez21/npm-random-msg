const messages = [
    "Luis",
    "Jorge",
    "Chava",
    "Erick",
    "Andrea"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

export default { randomMsg };