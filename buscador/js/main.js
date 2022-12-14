import {buscador,buscarDato} from "./../componentes/buscador.js";


let orden = [
    [1000, 4, 7, 0.0925, 50.02,	'2018-10-17', '2018-10-20',	'Anna Addison',	'1325 Candy Rd, San Francisco, CA 96123	ZW60001' ,1],
    [1000,	4,	7,	0.0925,	50.02,	'2018-10-17',	'2018-10-20',	'Anna Addison'	    ,'1325 Candy Rd, San Francisco, CA 96123',	'ZW60001', 	1],
    [1001,	5,	8,	0.06,	62.45,	'2018-10-15',	'2018-10-18',	'Carol Campbell'	,'1931 Brown St, Gainesville, FL 85321'	,   'AB61001', 	0],
    [1002,	7,	10,	0.087,	40.33,	'2018-10-14',	'2018-10-17',	'Julia Jones' 	    ,'1622 Seaside St, Seattle, WA 32569' 	,   'CD62001', 	1],
    [1003,	9,	20,	0.0625,	70.98,	'2018-10-12',	'2018-10-15',	'Irene Everly' 	    ,'1756 East Dr, Houston, TX 28562'	    ,   'KB63001', 	0],
    [1004,	6,	7,	0.0625,	30.45,	'2018-10-16',	'2018-10-19',	'Rachel Rose'	    ,'1465 River Dr, Boston, MA 43625' 	    ,   'IK64001', 	1],
    [1005,	5,	8,	0.0625,	100.2,	'2018-10-13',	'2018-10-16',	'Sophie Sutton'	    ,'1896 West Dr, Portland, OR 65842'	    ,   'OP65001', 	0],
    [1006,	3,	5,	0.1025,	58.52,	'2018-10-21',	'2018-10-24',	'Wendy West'	    ,'1252 Vine St, Chicago, IL 73215'	    ,   'XH66001', 	1],
]


export let root = document.querySelector("#root");
root.appendChild(buscador);


function buscar(){
    let txtbuscar = document.querySelector("#inputProducto").value;
    buscarDato();
}

let bt = document.querySelector("#bt_buscar");

bt.addEventListener('click',buscar);