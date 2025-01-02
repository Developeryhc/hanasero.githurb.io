'use Strict';

new TypeIt('.home__title--strong', {
    loop : true,
    speed : 120
})
.pause(1000)
.move(-9)
.delete(11)
.type('Grow Up ')
.pause(1000)
.delete(8)
.type('Active ')
.pause(1000)
.move(null, {to : 'END'})
.delete(17)
.go()