
function Circle(r){
var raggio = r;
}

Circle.prototype.getCirconferenza = function(){
r
eturn 2 * 3.14 * this.raggio;
}


function myFilter = function(iterator){
var length = this.length;
var index;
var result = [];
var item;

for (index = 0; index < length; index+= 1;){
item = this[index];
if (iterator(item,index,this)) {result.push[this[index];}
}
}
return result;
}


var point

distance getdistance(input un punto e calcola la distanza con il punto stesso)

creo poi triangolo che prende 3 punti in costruttore. getperimetro e area (con formula di erone).


function point(x,y){
this.x = x;
this.y = y;
}

point.prototype.getDistance(point){
if(this.x>point.x) X = this.x-point.x;
else X = point.x - this.x;
if(this.y>point.y) Y = this.y-point.y;
else X = point.y - this.y;
return 
}

