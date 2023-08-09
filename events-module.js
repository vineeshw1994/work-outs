const events = require('events')

const emitter = new events.EventEmitter()

emitter.on('order-pizza',(size,topping)=>{
    console.log(`order received: baking a ${size} pizza with ${topping}`);
})

emitter.emit('order-pizza','large','mushrooms')