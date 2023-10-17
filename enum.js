"use strict";
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["segunda"] = "segunda feira";
    DiasDaSemana["ter\u00E7a"] = "ter\u00E7a feira";
    DiasDaSemana["quarta"] = "quarta feira";
    DiasDaSemana["quinta"] = "quinta feira";
    DiasDaSemana["sexta"] = "sexta feira";
    DiasDaSemana["sabado"] = "sabado";
    DiasDaSemana["domingo"] = "domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
let diaHoje = DiasDaSemana.sexta;
let diaAmanha = DiasDaSemana.sabado;
//console.log("Hoje é " + DiasDaSemana[diaHoje]);
console.log("Hoje é " + diaHoje);
console.log("hoje é " + diaAmanha);
