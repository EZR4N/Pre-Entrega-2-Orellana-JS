/* VARIABLES */

let usuario;
let contrasena;
let intentosRestantes = 3;
let eleccion = 0;
let listaRestaurantes = []
let carritoLista = [];
let listaNombresUsuarios = []
let listaContrasenasUsuarios = []


/* CLASES */

class Menu {
  constructor(id, nombre, categoria, precio){
    this.id = id
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
  }
}

class Restaurante {
  constructor(id, nombre, menu, categoria) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.menu = menu;
    this.categoria = categoria
  }
}

class ItemCarrito {
  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}

let menu1 = new Menu (1, "grande de muzza", "pizza", 20000)
let menu2 = new Menu (2, "grande napolitana", "pizza", 22000)
let menu3 = new Menu (3, "fugazzetta rellena", "pizza", 26000)
let menu4 = new Menu (4, "whopper", "hamburguesa", 15000)
let menu5 = new Menu (5, "whopper con queso", "hamburguesa", 18000)
let menu6 = new Menu (6, "whopper extreme", "hamburguesa", 20000)

const restaurante1 = new Restaurante(1, "Joe´s Pizza", [
  menu1,
  menu2,
  menu3],
  ["pizza"]
);


const restaurante2 = new Restaurante(2, "Burger King", [
  menu4,
  menu5,
  menu6],
  ["hamburguesa"]
);

listaRestaurantes.push(restaurante1)
listaRestaurantes.push(restaurante2)

/* FUNCIONES */

/* LOGIN Y SIGN UP */
function login() {
  let usuarioIngresado;
  let contrasenaIngresada;

  while (intentosRestantes > 0) {
    usuarioIngresado = prompt("LOGIN: ingrese el nombre de usuario").toLowerCase();
    
    contrasenaIngresada = prompt("LOGIN: ingrese la contraseña");
    

    let busquedaListaUsuarios = listaNombresUsuarios.find((nombreUsuario) => nombreUsuario == usuarioIngresado)
    busquedaUsuario = busquedaListaUsuarios
  
    
  if(busquedaListaUsuarios =! undefined){

    let indexBusquedaUsuario = listaNombresUsuarios.indexOf(usuarioIngresado)
    let busquedaContrasena = listaContrasenasUsuarios.find((contrasenaUsuario) => contrasenaUsuario == contrasenaIngresada )
    let indexBusquedaContrasena = listaContrasenasUsuarios.indexOf(contrasenaIngresada)

    if (usuarioIngresado == busquedaUsuario && contrasenaIngresada == busquedaContrasena && indexBusquedaUsuario == indexBusquedaContrasena) {
      alert("Sesión iniciada con éxito!");
      controladorIngreso = 1;
      menuPrincipal();
      break;
    } else {
      alert(
        "Usuario o contraseña erróneos. Intentos restantes: " +
          (intentosRestantes - 1)
      );
      intentosRestantes--;
    }
  }
  if (intentosRestantes == 0) {
    alert("Usted ha realizado demasiados intentos, intente en otro momento");
  }
}
}

function LoginRegistro() {
  while (eleccion == 0) {
    eleccion = prompt("Registrarse: ingrese 1 Iniciar sesión: ingrese 2");
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
    } else {
      if (eleccion == 2) {
        login();
      } else {
        if (eleccion == 1) {
          registro();
          eleccion = 0;
          continue;
        }
      }
    }
  }
}

function registro() {
  usuario = prompt("REGISTRO: Ingrese el nombre de usuario").toLowerCase();
  contrasena = prompt("REGISTRO: Ingrese la contraseña");
  
  listaNombresUsuarios.push(usuario)
  listaContrasenasUsuarios.push(contrasena)
  
  alert("usuario creado con éxito!");
  
}

/* MENU  */

function menuPrincipal() {
  eleccion = 0;

  while (eleccion == 0) {
    eleccion = prompt(
      "Elija una opcion:\n \n-1- Elegir restaurante\n-2- Buscar por tipo de comida\n-3- Carrito de compras\n-4- Cambiar contraseña\n-5- Cerrar sesión"
    );
    if (
      isNaN(eleccion) ||
      (eleccion != 1 &&
        eleccion != 2 &&
        eleccion != 3 &&
        eleccion != 4 &&
        eleccion != 5)
    ) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 1) {
        elegirRestaurante();
        eleccion = 0
        continue
      } else {
        if (eleccion == 2) {
          buscarPorTipoDeComida()
          eleccion = 0
          continue
        }else{
          if (eleccion == 3) {
            carrito(carritoLista);
            eleccion = 0
            continue
          }else{
            if(eleccion == 4){
                cambiarContrasena()
                eleccion = 0
                continue
            }else{
              if(eleccion == 5){
                alert('sesión cerrada')
                break
              }
            }
          }
          }
      }
    }
  }
}

function cambiarContrasena(){
  contrasenaIngresada = undefined
  let acumuladorDeIntentos = 0
  
  while (acumuladorDeIntentos <3 && contrasenaIngresada == undefined ){
  contrasenaIngresada = prompt("ingrese la contraseña actual:");
  let busquedaContrasena = listaContrasenasUsuarios.find((contrasenaUsuario) => contrasenaUsuario == contrasenaIngresada )
  let indexBusquedaContrasena = listaContrasenasUsuarios.indexOf(contrasenaIngresada)
  if(contrasenaIngresada == busquedaContrasena){
    let nuevaContrasena = prompt('Ingrese su nueva contraseña:')
    listaContrasenasUsuarios.splice(indexBusquedaContrasena, 1, nuevaContrasena)
    
    continue
  }else{
    alert('la contraseña ingresada es erronea')
    contrasenaIngresada = undefined
    acumuladorDeIntentos++
  }
  
  }
  }
  


function elegirRestaurante() {
  eleccion = 0;

  while (eleccion == 0) {
    eleccion = prompt(
      "Elija un restaurante para realizar su pedido:\n-1- " +
        restaurante1.nombre +
        "\n-2- " +
        restaurante2.nombre
    );
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 2) {
        menuVisualBurger();
      } else {
        if (eleccion == 1) {
          menuVisualJoespizza();
        }
      }
    }
  }
}

function elegirCantidadPlatos(plato, precio) {
  let cantidadDePlatos = 1;

  eleccion = 0;
  while (eleccion == 0) {
    eleccion = prompt("¿Cuantos " + plato + " desea llevar?");
    if (isNaN(eleccion) || eleccion < 1) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      cantidadDePlatos = eleccion;
      alert("usted va a llevar: " + cantidadDePlatos + " " + plato);
      let itemCarrito = new ItemCarrito(plato, cantidadDePlatos, (precio*cantidadDePlatos));
      carritoLista.push(itemCarrito);
      return cantidadDePlatos;
    }
  }
}


/* MENUS DE RESTAURANTES */

function menuVisualBurger() {
  eleccion = 0;

  while (eleccion == 0) {
    eleccion = prompt(
      "Elija un plato para llevar:\n-1- " +
        restaurante2.menu[0].nombre + '- $' + restaurante2.menu[0].precio+
        "\n-2- " +
        restaurante2.menu[1].nombre + '- $' + restaurante2.menu[1].precio+
        "\n-3- " +
        restaurante2.menu[2].nombre + '- $' + restaurante2.menu[2].precio
    );
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2 && eleccion != 3)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 1) {
        elegirCantidadPlatos(restaurante2.menu[0].nombre, restaurante2.menu[0].precio);
      } else {
        if (eleccion == 2) {
          elegirCantidadPlatos(restaurante2.menu[1].nombre, restaurante2.menu[1].precio);
        } else {
          if (eleccion == 3) {
            elegirCantidadPlatos(restaurante2.menu[2].nombre, restaurante2.menu[2].precio);
          }
        }
      }
    }
  }
}

function menuVisualJoespizza() {
  eleccion = 0;

  while (eleccion == 0) {
    eleccion = prompt(
      "Elija un plato para llevar:\n-1- " +
        restaurante1.menu[0].nombre + '- $'+restaurante1.menu[0].precio+ 
        "\n-2- " +
        restaurante1.menu[1].nombre + '- $'+restaurante1.menu[1].precio+ 
        "\n-3- " +
        restaurante1.menu[2].nombre+ '- $'+restaurante1.menu[2].precio
    );
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2 && eleccion != 3)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 1) {
        elegirCantidadPlatos(restaurante1.menu[0].nombre, restaurante1.menu[0].precio);
      } else {
        if (eleccion == 2) {
          elegirCantidadPlatos(restaurante1.menu[1].nombre, restaurante1.menu[1].precio);
        } else {
          if (eleccion == 3) {
            elegirCantidadPlatos(restaurante1.menu[2].nombre, restaurante1.menu[2].precio);
          }
        }
      }
    }
  }
}

function buscarPorTipoDeComida(){
  eleccion = 0;
  while (eleccion == 0) {
    eleccion = prompt("Que tipo de comida busca?\n -1- Pizzas\n-2-Hamburguesas");
    if (isNaN(eleccion) || (eleccion != 1 && eleccion != 2)) {
      alert("Por favor ingrese una opcion correcta");
      eleccion = 0;
      continue;
    } else {
      if (eleccion == 1){
        let restaurantesPizza = listaRestaurantes.filter(restaurante => restaurante.categoria=="pizza")
        if(restaurantesPizza.length>0){
          let menuPizzas = []
          let acumulador = 0
          for (let i = 0; i < restaurantesPizza.length; i++) {
            menuPizzas.push(restaurantesPizza[i].menu)
            acumulador++
          }
          let menuPizzasReducido = []
          for (let i = 0; i < restaurantesPizza.length; i++) {
            for (let it = 0; it < menuPizzas[i].length; it++) {
              menuPizzasReducido.push(menuPizzas[i][it])
            }
            let menuPizzasReducidoString = ""
            for (let i = 0; i < menuPizzasReducido.length; i++) {
              menuPizzasReducidoString = menuPizzasReducidoString+ "\n-"+ (i+1) + "- "+  menuPizzasReducido[i].nombre+ '- $'+ menuPizzasReducido[i].precio
              
            }
            
            let eleccionPlato = 0


            while (eleccionPlato == 0){
              eleccionPlato = prompt('las opciones de pizzas:'+ menuPizzasReducidoString)
              if(isNaN(eleccionPlato)||(eleccionPlato<1 || eleccionPlato>menuPizzasReducido.length)){
                alert("Por favor ingrese una opcion correcta");
                eleccionPlato = 0
                continue
              }else{
                elegirCantidadPlatos(menuPizzasReducido[(eleccionPlato-1)].nombre, menuPizzasReducido[(eleccionPlato-1)].precio)
                continue
              }
            }
            
          }
          
        }
      }else{
        if (eleccion==2){
          let restaurantesHamburguesa = listaRestaurantes.filter(restaurante => restaurante.categoria=="hamburguesa")
        if(restaurantesHamburguesa.length>0){
          let menuHamburguesas = []
          let acumulador = 0
          for (let i = 0; i < restaurantesHamburguesa.length; i++) {
            menuHamburguesas.push(restaurantesHamburguesa[i].menu)
            acumulador++
          }
          let menuHamburguesasReducido = []
          for (let i = 0; i < restaurantesHamburguesa.length; i++) {
            for (let it = 0; it < menuHamburguesas[i].length; it++) {
              menuHamburguesasReducido.push(menuHamburguesas[i][it])
            }
            let menuHamburguesasReducidoString = ""
            for (let i = 0; i < menuHamburguesasReducido.length; i++) {
              menuHamburguesasReducidoString = menuHamburguesasReducidoString+ "\n-"+ (i+1) + "- "+  menuHamburguesasReducido[i].nombre+ '- $'+ menuHamburguesasReducido[i].precio
              
            }
            
            let eleccionPlato = 0


            while (eleccionPlato == 0){
              eleccionPlato = prompt('las opciones de hamburguesas:'+ menuHamburguesasReducidoString)
              if(isNaN(eleccionPlato)||(eleccionPlato<1 || eleccionPlato>menuHamburguesasReducido.length)){
                alert("Por favor ingrese una opcion correcta");
                eleccionPlato = 0
                continue
              }else{
                elegirCantidadPlatos(menuHamburguesasReducido[(eleccionPlato-1)].nombre, menuHamburguesasReducido[(eleccionPlato-1)].precio)
                continue
              }
            }


            
          }
          
        }
        }
      }
      
      
    }
  }
}

/* CARRITO */

function carrito(carritoLista) {
  
    let carritoListaMapNombre = carritoLista.map((itemNombre) => itemNombre.nombre)
    let carritoListaMapCantidad = carritoLista.map((itemCantidad) => itemCantidad.cantidad)
    let carritoListaMapPrecio = carritoLista.map((itemPrecio) => itemPrecio.precio)
    let nombreCantidadItemCarrito = []
    let precioTotal = 0
    for (let i = 0; i < carritoListaMapNombre.length; i++) {
      let nombreItemCarrito = carritoListaMapNombre[i]
      let cantidadItemCarrito = carritoListaMapCantidad[i]
      let precioItemCarrito = carritoListaMapPrecio[i]
      
      precioTotal =(precioTotal +  precioItemCarrito)
      alert (precioTotal)
      nombreCantidadItemCarrito.push(nombreItemCarrito+ ': '+cantidadItemCarrito+ ' ---   $'+ precioItemCarrito)  
    }
    alert('Usted va a llevar los siguientes platos: \n'+ nombreCantidadItemCarrito.join('\n')+ '\n\nEl total es de: $'+ precioTotal)
}

/* EJECUCIÓN */

LoginRegistro();



