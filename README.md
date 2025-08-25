# 🚀 TwitterFollowCard

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/Theyobii/TwitterFollowCard)](https://github.com/Theyobii/TwitterFollowCard/issues)

contenedor de X de seguimiento 

# ⚡ Caracteristicas

- ✅ **Contenedor Reutilizable** 
- 🎨 **Atractivo**
- ⚡ **Eficaz**

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 18, Vite, CSS3
- **Build Tool:** Vite
- **Linting:** ESLint
- **Deployment:** Render

# 📦 Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:


## Clona el repositorio
```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

## Navega al directorio
```bash
cd tu-repo
```

## Instala las dependencias
```bash
npm install
```

## Inicia el servidor de desarrollo
```bash
npm run dev
```
# 🚀 Uso

## Ejemplo Basico

```jsx
import React from 'react'
import TwitterFollowCard from './components/TwitterFollowCard'

function App() {
  return (
    <TwitterFollowCard
      userName="midudev"
      initialIsFollowing={true}
      onChange={(isFollowing) => console.log(isFollowing)}
    />
  )
}
```

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `userName` | string | - | **Requerido** |
| `isFollowing` | boolean | `false` | Estado de seguimiento |

# 📁 Estructura del Proyecto
```
src/

├── components/          
│   ├── TwitterFollowCard/
│   │   ├── index.jsx   
│   │   ├── styles.css  
│   │   └── index.test.jsx 
│   └── index.js        
├── hooks/              
├── utils/              
├── App.jsx             
└── main.jsx 
```

# 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

- Haz fork del proyecto

- Crea una rama para tu feature (git checkout -b feature/AmazingFeature)

- Commit tus cambios (git commit -m 'Add some AmazingFeature')

- Push a la rama (git push origin feature/AmazingFeature)

- Abre un Pull Request

#Deploy

- Render: https://xfollowcard.onrender.com
## 
⭐️ Hecho con ❤️ y React