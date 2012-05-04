var domain  = INTERVALS(1)(30); // divido la curva in 30 intervalli 
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]); //divido il primo intervallo in 30 e il secondo in 50
var controls1 = [[1,0], [0,1], [0,1], [-1,0]]; //primo punto e secondo punto: DOVE PASSA LA CURVA. terzo e quarto, vettori che danno la direzione della curva!
var c1 = CUBIC_HERMITE(S0)(controls1);
var curve1 =MAP(c1)(domain);

//DRAW(curve1);

var controls2 = [[2,0,0], [0,2,0], [0,4,0], [-4,0,0]]; //primo punto e secondo punto: DOVE PASSA LA CURVA. terzo e quarto, vettori che danno la direzione della curva!
var c2 = CUBIC_HERMITE(S0)(controls2);
var curve2 =MAP(c2)(domain);

var struct = STRUCT([curve1,curve2]);
//DRAW(struct);

var s12 = BEZIER(S1)([c1,c2]);
var surface12 = MAP(s12)(domain2);
//DRAW(surface12); 
DRAW(SKELETON(1)(surface12)); //Disegna la griglia
//per il 3D bisogna aggiungere un terzo parametro in controls

var s13 = CUBIC_HERMITE(S1)([c1,c2, [0,0,3],[0,0,-3]]);
var surface13 = MAP(s13)(domain2);
DRAW(surface13);


//PROFILE ALARE
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([0,1],[0,1])([15,30]);
var controls3 = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];
var c1 = BEZIER(s0)(controls);
var curve1 = MAP(c1)(domain);