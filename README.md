
# React Favorites App

Esta es una aplicación de React que permite a los usuarios agregar personajes y ubicaciones a su lista de favoritos. La aplicación incluye autenticación básica y diferentes páginas para mostrar personajes, ubicaciones y favoritos.

## Características

- Ver una lista de personajes.
- Ver una lista de ubicaciones.
- Agregar personajes y ubicaciones a favoritos.
- Iniciar sesión con credenciales de demostración.
- Ver y gestionar la lista de favoritos.

## Tecnologías Utilizadas

- React
- React Router
- Context API
- SCSS para estilos
- Bootstrap para diseño y estilos adicionales

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/react-favorites-app.git
    cd react-favorites-app
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Inicia la aplicación:

    ```bash
    npm start
    npm run build
    ```

    La aplicación estará disponible en `http://localhost:3000`.

## Uso

### Navegación

La aplicación incluye un menú de navegación que permite acceder a diferentes páginas:

- **Inicio**: Muestra una lista de personajes.
- **Ubicaciones**: Muestra una lista de ubicaciones.
- **Favoritos**: Muestra la lista de elementos favoritos (disponible solo después de iniciar sesión).
- **Inicio de sesión**: Permite al usuario iniciar sesión.

### Inicio de Sesión

Para iniciar sesión, sigue estos pasos:

1. Haz clic en el enlace "Inicio de sesión" en el menú de navegación.
2. Ingresa las credenciales de demostración:

    ```plaintext
    Usuario: demo
    Contraseña: demo
    ```

3. Haz clic en "Iniciar sesión".

### Agregar a Favoritos

Puedes agregar personajes y ubicaciones a tus favoritos de la siguiente manera:

1. Navega a la página de personajes o ubicaciones.
2. Haz clic en el botón "Agregar a favoritos" en la tarjeta del personaje o ubicación que deseas agregar.

### Ver y Gestionar Favoritos

Para ver y gestionar tus favoritos:

1. Inicia sesión con las credenciales de demostración.
2. Navega a la página "Favoritos" desde el menú de navegación.
3. En la página de favoritos, verás una lista de tus personajes y ubicaciones favoritos.
4. Puedes eliminar un favorito haciendo clic en el botón "Eliminar" en la tarjeta correspondiente.

## Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── AuthStatus.tsx
│   ├── CharacterCard.tsx
│   ├── LocationCard.tsx
│   ├── LoginForm.tsx
│   └── NavigationMenu.tsx
├── contexts/
│   ├── AuthContext.tsx
│   ├── CharactersContext.tsx
│   ├── FavoritesContext.tsx
│   └── LocationsContext.tsx
├── pages/
│   ├── Favorites.tsx
│   ├── Home.tsx
│   ├── Locations.tsx
│   └── Login.tsx
├── styles/
│   ├── AuthStatus.module.scss
│   ├── CharacterCard.module.scss
│   ├── global.scss
│   └── LocationCard.module.scss
├── App.tsx
└── index.tsx

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
