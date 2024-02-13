export interface HasFormatter { //En lugar de declarar este método en cada clase individualmente, puedes definir una interfaz HasFormatter que incluya el método getName e incluirlo directamente a las clases
  format():string; // esta funcion tiene q devolver una cadena
}