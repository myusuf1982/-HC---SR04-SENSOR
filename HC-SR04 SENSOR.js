var rpio = require('rpio');

var GPIO_TRIGGER = 33 var GPIO_ECHO = 35

rpio.open(GPIO_TRIGGER, rpio.OUTPUT, rpio.LOW); rpio.open(GPIO_ECHO, rpio.INPUT);

rpio.msleep(500);

var k=0;

while( k==0) { rpio.msleep(2000);

rpio.write(GPIO_TRIGGER, rpio.HIGH); rpio.usleep(10); rpio.write(GPIO_TRIGGER, rpio.LOW);

while (rpio.read(GPIO_ECHO) == 0) { var hrTime = process.hrtime() StartTime = ((hrTime[0] * 1000000 + hrTime[1] / 1000)/1000000) }

while (rpio.read(GPIO_ECHO) == 1) { var hrTime = process.hrtime() StopTime = ((hrTime[0] * 1000000 + hrTime[1] / 1000)/1000000) }

var TimeElapsed = StopTime - StartTime var distance1 = (TimeElapsed * 17150) console.log('Jarak = ' +distance1+' cm');

}
