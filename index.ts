type ID = string | number;
type Year = string | number;
interface Channel {
  id: ID,
  name: string,
  subscribers: number,
  year: Year
}

const getChannelName = (id: ID) => {
  console.log(`El canal con id ${id} se llama Webtoriales`);
}

const getChannelInfo = (channel: Channel) => {
  console.log(`${channel.name} tiene ${channel.subscribers} suscriptores y fue creado en ${channel.year}`);
}

const subscribeToChannel = (channel: Channel) => {
  console.log(`Te has suscrito a ${channel.name}`);
}

const webtoriales: Channel = {
  id: 123,
  name: 'webtoriales',
  subscribers: 1800,
  year: 2019,
};

getChannelName('123');
getChannelName(456);
getChannelName(webtoriales.id);
getChannelInfo(webtoriales);
subscribeToChannel(webtoriales);

type PersonType = {
  name: string
}

interface PersonInterface {
  name: string
}

const person1: PersonType = { name: 'Natasha' };
const person2: PersonInterface = { name: 'Tony' };

type SuperHumanType = { powers: string[] } & PersonType;

const superHuman: SuperHumanType = {
  name: 'Peter Parker',
  powers: ['fuerza', 'sentido aracnido']
};

interface Alien extends PersonInterface {
  planet: string
}

const alien: Alien = {
  name: 'marciano',
  planet: 'marte'
}

interface Pet {
  name: string
}

interface Pet {
  isCute: boolean
}

const myPet: Pet = {
  name: 'Garfield',
  isCute: false
}


type PetType = {
  name: string
}

// type PetType = {
//   isCute: boolean
// }