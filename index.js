const logEvent=require('./logEvents')

const Eventemmiter=require('events')

class Myevents extends Eventemmiter{}

const myEvents= new Myevents()

myEvents.on('log',(msg)=>logEvent(msg))

setTimeout(()=>{
    myEvents.emit('log','hello there prof')
},2000)

