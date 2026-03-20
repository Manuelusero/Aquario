# 🐠 Aquario — Contexto del Proyecto

> Archivo de referencia para el equipo y para Copilot. Actualizar a medida que el proyecto avanza.

---

## 📋 Descripción General

Sitio web institucional de **Aquario**, empresa de diseño y desarrollo web.  
El objetivo es mostrar los proyectos realizados a potenciales clientes y permitirles contactarnos.

---

## 👥 Equipo

| Rol                  | Responsabilidad               |
| -------------------- | ----------------------------- |
| Full-stack Developer | Desarrollo frontend y backend |
| Diseñadora Web       | Diseño UI/UX, assets visuales |

> El equipo irá creciendo. Actualizar esta tabla cuando se sumen nuevas personas.

---

## 🗂️ Páginas

| Ruta       | Página               | Estado         |
| ---------- | -------------------- | -------------- |
| `/`        | Home                 | 🚧 En progreso |
| `/contact` | Contacto             | 🚧 En progreso |
| `/blog`    | Blog                 | 🚧 En progreso |
| `/faq`     | Preguntas Frecuentes | 🚧 En progreso |

---

## 🛠️ Stack Tecnológico

| Capa                 | Tecnología                          |
| -------------------- | ----------------------------------- |
| Frontend             | React 18 + TypeScript               |
| Build Tool           | Vite                                |
| Routing              | React Router DOM v7                 |
| Estilos              | CSS Modules + CSS Custom Properties |
| Control de versiones | Git + GitHub                        |

---

## 📁 Estructura del Proyecto

```
src/
├── assets/
│   ├── images/       # Imágenes del sitio
│   └── icons/        # Iconos SVG
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Secciones reutilizables por página
│   └── ui/           # Componentes UI atómicos (Button, Card, etc.)
├── data/             # Datos estáticos (proyectos, FAQs, posts del blog)
├── hooks/            # Custom hooks
├── pages/
│   ├── Home/
│   ├── Contact/
│   ├── Blog/
│   └── FAQ/
├── styles/
│   └── index.css     # Estilos globales + CSS variables (design tokens)
├── types/            # Tipos e interfaces TypeScript globales
└── utils/            # Funciones utilitarias
```

---

## 🎨 Diseño

- El diseño es provisto por la diseñadora del equipo en capturas de pantalla.
- Los colores y tipografías se definen en `src/styles/index.css` como CSS Custom Properties.
- Los estilos son temporales hasta recibir el diseño final.

### Design Tokens (pendientes de actualizar con diseño final)

```css
--color-primary: #0077b6 /* Color principal — PENDIENTE */ --color-bg: #ffffff
  /* Fondo — PENDIENTE */ --color-text: #1a1a2e /* Texto — PENDIENTE */;
```

---

## 🔌 Integraciones Pendientes

- [ ] Formulario de contacto (definir si se usa EmailJS, Formspree, backend propio, etc.)
- [ ] Blog (definir si es contenido estático, CMS headless o MDX)
- [ ] SEO (React Helmet / Vite plugin)
- [ ] Analytics

---

## ❓ Preguntas Abiertas

- ¿Cuál es la paleta de colores y tipografía del diseño?
- ¿El blog manejará categorías o etiquetas?
- ¿El formulario de contacto necesita backend o se usa un servicio externo?
- ¿Se va a deployar en Vercel, Netlify u otro servicio?

---

## 📌 Convenciones del Proyecto

- **Componentes**: PascalCase, un componente por archivo, junto a su `.module.css`
- **Hooks**: prefijo `use` (ej: `useContact.ts`)
- **Tipos**: interfaces en `src/types/` cuando son globales, inline cuando son locales
- **Commits**: mensajes en español, convención `tipo: descripción` (feat, fix, chore, style, docs)
- **Idioma del código**: inglés (variables, funciones, tipos); contenido visible en español

---

_Última actualización: Marzo 2026_
