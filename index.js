const logEvent=require('./logEvents')

const Eventemmiter=require('events')

class Myevents extends Eventemmiter{}

const myEvents= new Myevents()

myEvents.on('log',(msg)=>logEvent(msg))

setTimeout(()=>{
    myEvents.emit('log','hey there node events')
},2000)

