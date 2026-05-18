# Segundo-Entregabable-ProgramacionWeb
Consumo de la API Rick And Morty.

# Rick and Morty App

Aplicacion web construida con **React** que consume la [Rick and Morty API](https://rickandmortyapi.com/) para explorar personajes, buscarlos por nombre y filtrarlos por especie.

---

## Requisitos previos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- [Node.js](https://nodejs.org/) v18 o superior
- [npm](https://www.npmjs.com/) v9 o superior (viene con Node.js)

---

## Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/rick-and-morty-app.git
cd rick-and-morty-app
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Inicia el servidor de desarrollo

```bash
npm run dev
```

### 4. Abre el navegador

```
http://localhost:5173
```

---

##  Dependencias principales

| Paquete          | Version | Uso                       |
|------------------|---------|---------------------------|
| react            | ^18     | Libreria principal        |
| react-dom        | ^18     | Renderizado en el DOM     |
| react-router-dom | ^6      | Navegacion entre paginas  |
| @mui/material    | ^5      | Componentes de UI (Cards) |
| @emotion/react   | ^11     | Requerido por MUI         |
| @emotion/styled  | ^11     | Requerido por MUI         |

---

##  Estructura del proyecto

```
src/
├── Components/
│   ├── Header.jsx          # Navegacion principal
│   ├── Header.css
│   ├── Home.jsx            # Pagina de inicio
│   ├── Home.css
│   ├── AllCharacters.jsx   # Lista de personajes con busqueda
│   ├── AllCharacters.css
│   ├── CardCharacter.jsx   # Tarjeta individual de personaje
│   ├── CardCharacter.css
│   ├── FilterBySpecies.jsx # Filtro por especie con busqueda
│   ├── FilterBySpecies.css
│   ├── Pagination.jsx      # Componente de paginacion
│   ├── SearchCharacter.jsx # Barra de busqueda
│   └── SearchCharacter.css
├ ── Img/                    # Imagenes y logos
├── App.jsx                 # Rutas principales
├── App.css
└── main.jsx
```

---

##  Rutas

| Ruta            | Componente        | Descripcion                              |
|-----------------|-------------------|------------------------------------------|
| `/`             | Redirect          | Redirige automaticamente a `/inicio`     |
| `/inicio`       | `Home`            | Pagina principal                         |
| `/personajes`   | `AllCharacters`   | Lista todos los personajes con busqueda  |
| `/especies`     | `FilterBySpecies` | Filtra personajes por especie            |

---

##  Funcionalidades

**Paginacion**  Navega entre paginas de personajes
**Busqueda global**  Busca entre los 800+ personajes de toda la API
**Coincidencia exacta**  Si el nombre buscado coincide exactamente, muestra solo ese personaje
**Busqueda por inicio**  Muestra personajes cuyo nombre empieza con el texto ingresado
**Filtro por especie**  Filtra por Human, Alien, Robot, Mythological Creature y Humanoid
**Busqueda dentro de especie**  El buscador solo actua dentro de la especie seleccionada
**Responsive**  Adaptado para movil, tablet y escritorio

## Modulos
Home: En este modulo encuentra un infornacion descriptiva sobre que es Rick and Morty
Characters: En este modulo, muestra todos los pesonages en boque de 20 (por eso inicialmen dici que existe "20 personajes encontrados", pero esa cantida pertenece a la pagina no a la cantidad total) personages por pagina, para cmbia de pagina, existen dosbotones en la parte inferior que permitiran desplazarte y ver los personajes de las diferentes paginas.
Filter: Es un modulo que ofrece 5 botenes (human, humanoid, robot, Mythologic, Alien), que permitira filtrar los personajes por su tipo de especie, el cual mostrar en bloque de 20 porsonajes.
Busqueda: Este modulo es implementado tando el Filter como en Characters para realizar la busque de personajes por su nombre, lo que hacer es tomar las letras y los compara las letra iniciales de los nombres de los personajes, y en caso de no coincidir exactemen con un nombre, mostra los personaje qeu conincide inicialmente en su nombre con el termino de busqueda, pero existe diferencia en el buscador de Filte y de Characters, en Filte, solo busca los nombres en los pesonajes de la especie seleccionada y en Characters, buscar en todos los personajes independientemente de su tipo de especie.
---

##  Scripts disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la build de produccion en /dist
npm run preview  # Previsualiza la build de produccion
```

---

##  API utilizada

[Rick and Morty API](https://rickandmortyapi.com/)  API publica y gratuita con informacion de todos los personajes, episodios y locaciones de la serie.

---

## Autor

Desarrollado por **tu nombre**  [GitHub](https://github.com/Daniel-2023)
