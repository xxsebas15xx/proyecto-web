# Proyecto Semana 4

Landing page simple para practicar una estrategia de ramificación y fusión con un equipo de cuatro integrantes.

## Estructura

```text
proyecto-web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
└── README.md
```

## Ejecutar el proyecto

No requiere dependencias. Abre `index.html` directamente en el navegador o utiliza la extensión Live Server de VS Code.

## Flujo de trabajo con Git

1. Actualizar la rama principal:

   ```bash
   git switch main
   git pull origin main
   ```

2. Crear una rama para el módulo asignado:

   ```bash
   git switch -c feature/nombre-del-modulo
   ```

3. Guardar y publicar los cambios:

   ```bash
   git add .
   git commit -m "feat: desarrollar nombre del modulo"
   git push -u origin feature/nombre-del-modulo
   ```

4. Abrir un Pull Request hacia `main`, revisar los cambios y resolver conflictos antes de fusionar.

## Módulos sugeridos

- Integrante 1: menú de navegación.
- Integrante 2: sección de inicio.
- Integrante 3: sección de servicios.
- Integrante 4: sección de contacto y estilos.

## Estado inicial

El proyecto contiene la estructura base, estilos mínimos y un mensaje de inicio en JavaScript. Las secciones se completarán en ramas independientes.