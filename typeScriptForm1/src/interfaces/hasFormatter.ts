export interface HasFormatter { // implements is used when you want to make sure that a class has certain properties and methods defined by an interface, is because we use implements in the classes, we say: class Invoice implements HasFormatter (nos aseguramos que las clases q yo tengo tengan si o si tal metodo)
  format():string; // this function has to return a string
}

/* Si una clase implementa una interfaz pero no proporciona un método "format()" que coincida con la firma requerida por la interfaz, o si el método proporcionado no devuelve el tipo especificado osea un "string", se generará un error en tiempo de compilación. */