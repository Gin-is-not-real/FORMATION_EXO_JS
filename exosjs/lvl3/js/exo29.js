let joursSemaine = ["jourImaginaire", "lundi", "mardi", "mercredi", "juedi", "vendredi", "samedi", "dimanche"];

//Code à faire ici
joursSemaine.splice(0, 1);
console.log("splice index 0: ", joursSemaine);

joursSemaine.splice(joursSemaine.indexOf("juedi"), 1, "jeudi");
console.log("splice jeudi: ", joursSemaine);
