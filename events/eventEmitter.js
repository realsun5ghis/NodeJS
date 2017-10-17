var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('FirstEvent', function(data) {
    console.log('First subscriber:' + data);
});

eventEmitter.addListener('SecondEvent',function(data){
	console.log('Second Scriber: '+data);
});

eventEmitter.emit('FirstEvent', '進入了第一事件的監聽函式!');
eventEmitter.emit('SecondEvent', '這是第二個監聽式!');