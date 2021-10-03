var getChannelName = function (id) {
    console.log("El canal con id " + id + " se llama Webtoriales");
};
var getChannelInfo = function (channel) {
    console.log(channel.name + " tiene " + channel.subscribers + " suscriptores y fue creado en " + channel.year);
};
var subscribeToChannel = function (channel) {
    console.log("Te has suscrito a " + channel.name);
};
var webtoriales = {
    id: 123,
    name: 'webtoriales',
    subscribers: 1800,
    year: 2019
};
getChannelName('123');
getChannelName(456);
getChannelName(webtoriales.id);
getChannelInfo(webtoriales);
subscribeToChannel(webtoriales);
