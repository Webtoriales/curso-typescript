var getChannelName = function (id) {
    console.log("El canal con id " + id + " se llama Webtoriales");
};
var getChannelInfo = function (channel) {
    console.log(channel.name + " tiene " + channel.subscribers + " suscriptores y fue creado en " + channel.year);
};
getChannelName(123);
getChannelName('123');
var webtoriales = { id: 123, name: 'webtoriales', subscribers: 1800, year: 2019 };
getChannelInfo(webtoriales);
