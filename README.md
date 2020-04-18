# Boilerplate Angular

Proyecto que contiene el esqueleto base que se debe utilizar de ahora en adelante por la parte FRONTEND, esta estructurado y armado con el Framework Angular v8.3 (https://angular.io/) integrado con el framework de estilos Bootstrap 4.

# Instalaciones necesarias

1. Instalar NODE js: https://nodejs.org/es/
2. Instalar GIT: https://git-scm.com/
3. Instalar Typescript: https://www.typescriptlang.org/
4. Instalar Angular CLI: https://cli.angular.io/

# Levantar proyecto

1. Clona el repositorio `git clone https://github.com/fbellod1986/boilerplate-angular-base.git`
2. Ejecuta `ng update @angular/core @angular/cli --force` para actualizar a la ultima version de angular. Con respecto a esto, cualquier duda ver sitio [Angular Update Guide](https://update.angular.io/)
2. Ejecuta `npm install` para instalar todas las dependencias necesarias para que la aplicación pueda levantarse.
3. Ejecuta `ng serve` en la consola. Navega a `http://localhost:4200/`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.


# Links de interés hechos por [Franco Bello](https://medium.com/@fbellod)

Integración continua: Angular + Github + Firebase + Travis CI:
https://medium.com/angular-chile/integraci%C3%B3n-continua-angular-github-firebase-travis-ci-a1a8946d471a

Entendiendo el LazyLoad y sus beneficios + ANGULAR
https://medium.com/@fbellod/entendiendo-el-lazyload-y-sus-beneficios-angular-b8ae4bffa199

Como iterar y subir los cambios de tu APP con Angular a Firebase: https://medium.com/front-end-chile/como-iterar-y-subir-los-cambios-de-tu-app-con-angular-a-firebase-658d07d766c7

Firebase: Como subir tu APP de Angular a Firebase.
https://medium.com/front-end-chile/firebase-como-subir-tu-app-de-angular-a-firebase-93de35ff9f09

Como Integrar el Framework Bootstrap en un proyecto Angular:
https://medium.com/@fbellod/como-integrar-el-framework-bootstrap-en-un-proyecto-angular-a5d53fa79e03

Como consultar la “foto del día” directo desde la Nasa con Angular y Bootstrap 4:
https://medium.com/@fbellod/como-consultar-la-foto-del-d%C3%ADa-directo-desde-la-nasa-con-angular-y-bootstrap-4-513fb1bdc9c5

Como setear valores en la cabecera desde el route params con Interceptors + ANGULAR:
https://medium.com/@fbellod/como-setear-valores-en-la-cabecera-desde-el-route-params-con-interceptors-angular-1b2d025bebb1


# Dependencias instaladas

## CYPRESS
* [Cypress](https://fotos.subefotos.com/ef4b8a0e1b5c946e888b26eb8a828f8ao.png) 

![](https://fotos.subefotos.com/ef4b8a0e1b5c946e888b26eb8a828f8ao.png)

## Interacciones
* [NGX Bootstrap](https://valor-software.com/ngx-bootstrap/)

## Framework de estilos
* [Bootstrap](https://getbootstrap.com/)

## Fechas y Horas
* [Moments](https://momentjs.com/)

# Buenas practicas

## Estructura de archivos
Generalmente se define la estructura de acuerdo a la complejidad del proyecto. Entre más grande sea, mas orden requiere. Este es un ejemplo de un proyecto en el cual se separaron los componentes. El folder Auth representa todos los componentes relacionados con el login y registro de un sitio. A la misma altura se crearon los demás componentes. Así mismo, hay una carpeta Shared, que contiene archivos que se usarán de forma global, como lo son los services, models, helpers, footer, header, y demás componentes que puedas requerir.

El nivel de complejidad de la aplicación va a requerir mejor organización. Tener una estructura bien definida nos ayudará a pensar en escalabilidad.

![](https://fotos.subefotos.com/1e72226c61c3e7346e6a378f38a0a098o.png)

## Nombres claros
Uno de los mayores problemas a la hora de entender el código, suele ser el nombre que le damos a nuestros métodos, variables o parámetros.

#### Esto
![](https://miro.medium.com/max/268/1*zEP_U4K2QKX0ypveH8IqcQ.png)
#### no es lo mismo que esto:
![](https://miro.medium.com/max/332/1*kuiod_KbJbxaie70gzRIvQ.png)

## Organiza tu código
Algunas formas de tener un archivo de código mas organizado y legible son:

* Lo más importante debe ir arriba.
* Primero propiedades, después métodos.
* Un Item para un archivo: cada archivo debería contener solamente un componente, al igual que los servicios.
* Solo una responsabilidad: Cada clase o modulo debería tener solamente una responsabilidad.
* El nombre correcto: las propiedades y métodos deberían usar el sistema de camel case (ej: getUserByName), al contrario, las clases (componentes, servicios, etc) deben usar upper camel case (ej: UserComponent).
* Los componentes y servicios deben tener su respectivo sufijo: UserComponent, UserService.
* Imports: los archivos externos van primero.

## Provee claridad
Cuando estés escribiendo, piensa que probablemente alguien más tendrá que leer tu código en algún momento. Todos hemos sufrido a la hora de leer código ajeno. Es por eso que lo ideal cuando escribimos es pensar en la persona que lo leerá, o incluso en ti mismo. No has llegado a algún trozo de código que tu mismo escribiste pero ni a palos entiendes?

## Código auto-descriptivo:
Explica en tu mismo código, no en comentarios.
Tus comentarios deben ser claros y entendibles.

## Evita comentar si:

* Tratas de explicar que hace tu código, deja que este sea tan claro que se explique solo.
* Tienes funciones y métodos bien nombrados. No te llenes de obviedades.

## Comenta cuando:
* Trates de explicar por qué hiciste lo que hiciste.
* Trates de explicar consecuencias de lo que escribiste. 3. en API docs.

## Componentes
En Angular, lo más importante debe ir al inicio. En nuestros componentes generalmente escribimos nuestras propiedades primero y después nuestros métodos. Así mismo, a veces agrupamos nuestras propiedades o funciones alfabéticamente y otras veces por funcionalidad. Lo importante aquí es mantener una consistencia durante todo el proyecto.

Además:
Es importante tratar de escribir código lo mas compacto posible. Cada quien tiene una forma distinta de escribir y estructurar sus funciones. A mi gusto, un método no debería tener más de 20 lineas de código, entre más código junto tengas más difícil será entenderlo. Es por esto que utilizamos funciones que nos permitan hacer composición.
Queremos que nuestros componentes sean lo más simples posibles. En este contexto, delega la mayor parte de tu lógica a tus servicios.
Se consistente con tus funciones, y por favor no escribas cosas fuera de lugar!!! Nombrar tu función como “quieroPanConPalta” y cometer faltas ortográficas es una falta de respeto.

## Servicios
Algunas de las mejores prácticas a la hora de crear servicios son:

* Crea tus servicios como Injectables
* Utiliza tus servicios para recolectar tu data: es total responsabilidad de tus servicios recolectar la data necesaria, ya sea desde una API, localstorage o alguna estructura que hayamos creado nosotros mismos para poder desarrollar.
* Tus componentes nunca deben encargarse de pensar como traer data, estos solo deberían encargarse de llamar al servicio que contiene todo lo necesario. Así que por favor, no llames tus API’s en tus componentes.
* Crea un servicio base en la raiz para que sea heredado desde otros servicios que se encuentren en tus modulos.

![](https://fotos.subefotos.com/cc1103bcd837d911d9f806a814f48022o.png)

## Funcionamiento
Para mejorar el funcionamiento de tus aplicaciones te recomiendo seguir guías de mejores prácticas que se ajusten a tu metodología de trabajo, utilizar compilación AoT (Ahead of Time), agregar lazy loading a tu proyecto, fijarte en el tamaño de tus boundle y de ser posible hacer mejoras utilizando Audits y Lightouse. Pensar con buenas prácticas en el presente te ahorrarán tiempo y dolores de cabeza en el futuro.

## Lifecycle Method (Metodo de Ciclo de Vida)
En Angular, cada componente tiene un ciclo de vida, una cantidad de etapas diferentes que atraviesa. Hay 8 etapas diferentes en el ciclo de vida de los componentes. Cada etapa se denomina lifecycle hook event o en ‘evento de enlace de ciclo de vida’. Podemos utilizar estos eventos en diferentes fases de nuestra aplicación para obtener el control de los componentes. Como un componente es una clase de TypeScript, cada componente debe tener un método constructor.
El constructor de la clase de componente se ejecuta primero, antes de la ejecución de cualquier otro lifecycle hook. Si necesitamos inyectar dependencias en el componente, el constructor es el mejor lugar para hacerlo. Después de ejecutar el constructor, Angular ejecuta sus métodos de enganche de ciclo de vida en un orden específico.
![](https://miro.medium.com/max/842/0*wEGNC-p9kA91tb8K.png)

1. `ngOnChanges`: Este evento se ejecuta cada vez que se cambia un valor de un input control dentro de un componente. Se activa primero cuando se cambia el valor de una propiedad vinculada. Siempre recibe un change data map o mapa de datos de cambio, que contiene el valor actual y anterior de la propiedad vinculada envuelta en un SimpleChange
2. `ngOnInit`: Se ejecuta una vez que Angular ha desplegado los data-bound properties(variables vinculadas a datos) o cuando el componente ha sido inicializado, una vez que ngOnChanges se haya ejecutado. Este evento es utilizado principalmente para inicializar la data en el componente.
3. `ngDoCheck`: Se activa cada vez que se verifican las propiedades de entrada de un componente. Este método nos permite implementar nuestra propia lógica o algoritmo de detección de cambios personalizado para cualquier componente.
4. `ngAfterContentInit`: Se ejecuta cuando Angular realiza cualquier muestra de contenido dentro de las vistas de componentes y justo después de ngDoCheck. Actuando una vez que todas las vinculaciones del componente deban verificarse por primera vez. Está vinculado con las inicializaciones del componente hijo.
5. `ngAfterContentChecked`: Se ejecuta cada vez que el contenido del componente ha sido verificado por el mecanismo de detección de cambios de Angular; se llama después del método ngAfterContentInit. Este también se invoca en cada ejecución posterior de ngDoCheck y está relacionado principalmente con las inicializaciones del componente hijo.
6. `ngAfterViewInit`: Se ejecuta cuando la vista del componente se ha inicializado por completo. Este método se inicializa después de que Angular ha inicializado la vista del componente y las vistas secundarias. Se llama después de ngAfterContentChecked. Solo se aplica a los componentes.
7. `ngAfterViewChecked`: Se ejecuta después del método ngAfterViewInit y cada vez que la vista del componente verifique cambios. También se ejecuta cuando se ha modificado cualquier enlace de las directivas secundarias. Por lo tanto, es muy útil cuando el componente espera algún valor que proviene de sus componentes secundarios.
8. `ngOnDestroy`: Este método se ejecutará justo antes de que Angular destruya los componentes. Es muy útil para darse de baja de los observables y desconectar los event handlers para evitar memory leaks o fugas de memoria.

Un ejemplo de esta estructura se encuentra en el componente `/boilerplate/life-cycle-method`

# CanActivate con AuthGuard
Interfaz que una clase puede implementar para ser un guardia que decide si se puede activar una ruta. Si todos los guardias devuelven verdadero, la navegación continuará. Si algún guardia devuelve falso, se cancelará la navegación. Si algún guardia devuelve un UrlTree, se cancelará la navegación actual y se iniciará una nueva navegación hacia el UrlTree que devuelve el guardia.

1. Imaginemos que el usuario que se logeo cargo al localStorage un arreglo con solo 2 accesos, estos estan dentro de un objeto llamado scope.role, este objeto vendra del JWT ya desencryptado:
   `scope = {
    role: ['view-data', 'view-transaction']
  };`
 2. A todos los routing de los componentes se le setea un `expectedRole`, si este coincide con alguna de las opciones del objeto json que se guardo en el localStorage asociado al usuario, se podra acceder a el, de lo contrario retornara false y no mostrara el componente.
![](https://fotos.subefotos.com/0480c2c25a44cb72a44e010fab7c44b2o.png)

## Parte de la información fue sacada gracias a:
https://medium.com/@tatymolys
