const ANIMALITOS = ["perro", "gato", "conejo", "hamster", "loro"];
//                    0        1        2         3         4

for (const animalito of ANIMALITOS) {
  try {
    console.log(" ----------------------");
    if (animalito !== "perro" && animalito !== "hamster") {
      throw new Error("ERROR!!!! NO ES NI PERRO NI HAMSTER!!!! ");
    }
    console.log(animalito);
  } catch (error) {
    console.log("EL ERROR FUE: " + (error as Error).message);
  }
}
