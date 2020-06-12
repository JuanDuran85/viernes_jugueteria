# prueba_ottokalus

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Documento Drive
Prueba - Sistema de inventario OTTOKLAUS

Por Implementar:
-vue
-vuex
-vue Router
-SASS 
-Bootstrap
-Firebase

Por configurar
Bootstrap con SASS (main, app.vue)
Firebase (carpeta externa, main, página web)

Instalación: 

Utilizar Vue-CLI, seleccionando instalación manual y con la barra espaciadora seleccionar: Vuex, Vue Router, CSS pre-procesador, Linter / Formatter y babel. (vue create nombre_proyecto  ---> npm), (vue create nombre_proyecto -m yarn)
Indicar que “y” en: Use history mode for router? (Requires proper server setup for index fallback in production)
Seleccionar el Sass/SCSS (with node-sass)
Seleccionar ESLint with error prevention only
Seleccionar  Lint on save
Seleccionar In package.json
Seleccionar a su conveniencia si o no -->  Save this as a preset for future projects? (y/N)
 Entramos a la carpeta con cd nombre_proyecto
Instalación de Bootstrap: 
npm i --save-dev bootstrap jquery popper.js firebase
yarn add -D bootstrap jquery popper.js firebase
Configurar firebase - página web - ir a consola - añadir proyecto - Ingresar nombre - No seleccionar google analytics - Añadir Firebase a tu aplicación web - copiar la configuración (crear el proyecto, crear la autentificación y base de datos)
Creamos una carpeta en el SRC llamada config y dentro de ella creamos un archivo llamado “firebaseConfig.js” y pegamos la configuración que nos facilita firebase. (en el caso de querer lo pueden agregar a gitignore mediante la ruta, ejemplo: src/config/firebaseConfig.js
Modificar el archivo firebaseConfig.js con: export const
Configurar el Main.js con la importación de bootstrap, firebase, archivo de configuración de firebase y inicializar firebase con el archivo de configuración. 
import firebase from 'firebase';
import { firebaseConfig } from "./config/firebaseConfig";
import 'bootstrap';
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
El servidor se ejecuta con:
npm run serve
yarn serve
Verificar que el style de la App.vue tenga disponible: lang="scss", de lo contrario agregar.
Importar el módulo de sass de bootstrap, mediante la siguiente línea dentro del style de la App.vue: 
@import "../node_modules/bootstrap/scss/bootstrap.scss";
Crear componentes para agregar, eliminar, editar y consultar (componentes con funciones administrativas). Al inicio componentes vacíos.
Creamos el componente de navegación, agregando un navBar de bootstrap. Nav.vue: usamos navegacion (ej https://getbootstrap.com/docs/4.5/components/navbar/)
Creamos las rutas con router-link, agregando a los link con etiquetas a la sustitución de <a> por <router-link>. Agregar a la <ul> la clase ml-auto para llevar los títulos al lado derecho.
Se importa el componente Navegación.vue dentro de la App.vue (importar, nombrar y utilizar)
Modificamos el Home.vue : agregamos una nueva fachada (ej https://getbootstrap.com/docs/4.5/components/jumbotron/ ) 
Modificar el About.vue por Login.vue y agregar un formulario para login con correo y clave. Ej: https://getbootstrap.com/docs/4.5/components/forms/
Modificar el nombre del archivo del About.vue por Login.vue en la carpeta de views (esto es si quieren utilizar ese mismo archivo, de lo contrario, crear la vista desde cero).
Ir a la carpeta de router en src, buscar el archivo index o router.js dentro de la carpeta y modificar la ruta de about por login, incluyendo el nombre del componente. Quitar los comentarios que trae por defecto.Hacer el mismo cambio en la etiqueta de Navegación.vue
Ejecutar el servidor y visualizar los cambios.
Agregar una clase container al div del template dentro del Login.vue para mejorar presentación.
Modificar el formulario con las necesidades del proyecto (formulario para login de usuario con correo y contraseña) 
Agregar la lógica de funcionamiento del formulario del login. Utilizar métodos para la comprobación de los datos ingresados por el usuario (correo y clave) para evitar el llamado a la base de datos con errores básicos. 
Utilizar v-model para tener las variables listas para implementar comprobación y/o validación y posterior envío a firebase. Utilizar expresiones regulares para validar. 
implementar evento @submit.prevent=”nombre_evento” al formulario para activar los métodos.
importar firebase dentro del script para el Login.vue. import firebase from ‘firebase’.
Dentro del método se realiza la validación y el posterior envío de información a firebase, donde el proceso de autentificación se hace mediante:
firebase.auth().signInWithEmailAndPassword(correo,clave)
Agregar condiciones satisfactorias con lógica y mensajes de error según el código interno de firebase ( ej: if (error.code == 'auth/user-not-found'){alert("El usuario no existe en nuestra base de datos"); }else if(error.code == 'auth/wrong-password'){ alert("La contraseña no es válida o el usuario no tiene una contraseña."); }else { alert(error.message);}
Agregar una línea de error abajo de la primera etiqueta de form con un div y agregar las clases de alert-danger de bootstrap. Colocar un v-if=”error” para que solo se muestre si existen errores.
Luego de regresar la promesa correcta de login, se deben limpiar las variables incluyendo la de error. (ojo).
ir a firebase web y crear el proceso de autentificación mediante correo y contraseña en Authentication (Auténtica y administra usuarios).
Luego configurar el proceso de autentificación mediante: Configura el método de inicio de sesión
Dentro de Users creamos nuestros usuarios de forma manual en el botón de añadir usuario.
Agregar el proceso de escucha de estados de auth de firebase para saber si el usuario entro o salio de la aplicación en el ciclo mounted de la App.vue. Importar firebase para poder utilizar el proceso (import firebase from 'firebase';). Eso se hace mediante:
firebase.auth().onAuthStateChanged(user=>{})
Agregar estructura comparativa para ver si hay un usuario conectado o en línea y enviar información al store con una acción, luego mutación para cambiar la variable en el estado (state).
      if (user) { this.$store.dispatch(“nombre de acción”,user.uid); } else{ console.log("Salida de Usuario")}     (en el mounted de App.vue  / user.uid proviene del firebase cuando hay un usuario registrado)
En el store recibir la acción con el dato enviado desde el dispatch, para activar una mutación (mismo dato recibido) NOTA: También cambiar modules por getters y poner en orden. SGMA

