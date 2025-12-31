let numero = 4 + 2;

try {
  if (numero !== 6) {
    throw new Error("EL NUMERO NO ES IGUAL A 6!!!");
  }

  console.log("HASTA PRONTO!!! 🖖🏽🖖🏽🖖🏽🖖🏽");
} catch (error: any) {
  console.log("EL ERROR FUE: " + error.message);
}
