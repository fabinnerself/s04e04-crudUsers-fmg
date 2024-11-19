# Gestionar usuarios  

## ¡CRUD de usuarios !

Esta aplicación web, construida con ReactJS y Vite, te permite registrar, editar, eliminar y listar usuarios. Se validan los campos de entrada con react-hook-form y yup. Tiene paginacion en los registros. Uso de iconos react-icons.github.io, uso de ventanas modales para mensajes de alerta en las operaciones.
![main](crud-user-main.png)


## Caracteristicas

- **Datos completos:** : Muestra nombres, correo electronico y fecha de nacimiento.

- **Interfaz intuitiva:** Diseño moderno y fácil de usar, optimizado para diferentes dispositivos.

- **Validacion Rbusta:** : Se validan los campos de entrada de manera personalizada con react-hook-form y yup. Los campos se validan en tiempo real  para garantizar la integridad de los datos. Se validan:
Nombres: Mínimo 3 caracteres, solo letras .
Correo electrónico: Formato de correo electrónico válido.
Fecha de nacimiento: Formato de fecha válido (DD/MM/AAAA) no valido fechas futuras yan teriores a 1950.

- **Componentes reutilizables:** : Estructura modular del código para facilitar el mantenimiento.

- **Hooks:** Utiliza los hooks useState, useEffect, useRef, Hook-form y Custom hook personalizado para la conexión a la rest api y paginacion. 

- **CSS:**  Estiliza la aplicación. 

- **ReactJS:**  Framework JavaScript para crear interfaces de usuario. 

- **Vite:**  Herramienta de construcción de frontend rápida y basada en ES modules. 

- **Iconos react-icons.github.io:** : Iconos personalizados para mejorar la interfaz.

- **Licencia:**  MIT se puede usar para cualquier proyecto personal o comercial mientras se mantenga este README.md, mi nombre y la licencia MIT.
 
Puedes visitar la plataforma en línea en [https://s03e03-rm-fmg.vercel.app/](https://s03e03-rm-fmg.vercel.app/)

## Requisitos del Sistema

- **Sistema Operativo:** Ubuntu 22.04.4 LTS o Windows 10 Pro 1803 

- **NodeJS:** Versión 18.20.4 o superior 

- **npm/npx:** Versión 10.8.4 o superior 

- **Vite::** version 5.4 o superior 

- **ReactJs:** vesion 18.3 o superior 
    
## Sistemas Alternativos Probados

El proyecto también ha sido probado en el siguiente entorno alternativo:

- **Sistema Operativo:** Windows 10 Pro 1803

- **NodeJS:** NodeJS: 18.20.4

- **npm/npx:** Versión 10.8.4 o superior 

- **Vite:** version 5.4 o superior 

- **ReactJs:** vesion 18.3 o superior 

## Contribuciones
Las contribuciones son bienvenidas. Si encuentras algún error o deseas agregar nuevas funcionalidades, no dudes en abrir un issue, una pull  request, o fork en el repositorio.

## Imagenes

Pantalla principal ![main](crud.png)

## Comandos Útiles

Ver información del sistema:

uname -r

sb_release -a

node -v

npm -v

## Instalación

estructura del proyecto

## Estructura del proyecto

 ## Instalación

Estrcutura del proyecto
```
index.html
readme.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   ├── AddEdit.jsx
    │   ├── cards.jsx
    │   └── Modal.jsx
    │   └── UserList.jsx
    │   └── UserCard.jsx
    ├── hooks/
    │   ├── useFetch.jsx
    │   └── usePagination.jsx
    └──  assets/
        └── img/
           └── header-img.png

```

Para instalar bajar el proyecto del repositorio:

git clone https://github.com/fabinnerself/s04e04-crudUsers-fmg.git

luego correr:

cd  s04e04-crudUsers-fmg

npm i axios react-hook-form yup

