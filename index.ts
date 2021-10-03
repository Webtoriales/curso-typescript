type ID = string | number;

const getChannelName = (id: ID) => {
  console.log(`El canal con id ${id} se llama Webtoriales`);
}

const getChannelInfo = (channel: { id: ID, name: string, subscribers: number, year: ID }) => {
  console.log(`${channel.name} tiene ${channel.subscribers} suscriptores y fue creado en ${channel.year}`);
}

const webtoriales = {
  id: 123,
  name: 'webtoriales',
  subscribers: 1800,
  year: 2019,
};

getChannelName('123');
getChannelName(456);
getChannelName(webtoriales.id);
getChannelInfo(webtoriales);

getChannelName(true);
getChannelInfo({ name: 'hello' });