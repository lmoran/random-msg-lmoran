//logica donde vamos a mandar un nombre random
const messages = [
  'Ana',
  'Viviana',
  'Ronald',
  'Milagros',
  'Lucho',
  'Esteban',
  'Pilar',
  'Josue',
  'Lina',
  'Luis',
  'Julio',
  'Maria'
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}
randomMsg()

//exportamos el modulo

module.exports = { randomMsg }
