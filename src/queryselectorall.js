const FuncQuerySelectorAll = () => {
  const elementArray = document.querySelectorAll(
    "a.classTres"
  ); /*Nos devuelve el número de elementos*/

  console.log("aqui");
  for (let i = 0; i < elementArray.length; i++) {
      /*Agregamos un texto diferente ademas cambiamos el fondo y el color del texto*/
    elementArray[i].textContent = "cambio";
    elementArray[i].style.color = "white";
    elementArray[i].style.backgroundColor = "red";
  }
};
