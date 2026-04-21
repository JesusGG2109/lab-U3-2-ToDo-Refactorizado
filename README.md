# TODO SYSTEM | ARCHITECTURAL REFACTOR
---

[![Development Stack](https://img.shields.io/badge/Stack-Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/JesusGG2109/lab-U3-2-ToDo-Refactorizado)
[![Architecture](https://img.shields.io/badge/Pattern-Modular_Architecture-blue?style=for-the-badge)](https://github.com/JesusGG2109)

Aplicación de gestión de tareas desarrollada en JavaScript puro, enfocada en la separación de responsabilidades, manipulación eficiente del DOM y persistencia de estado en el cliente.

Este proyecto representa la evolución desde una implementación monolítica hacia una arquitectura modular con flujo de datos controlado.

---

## 01. CORE ARCHITECTURE

El sistema está dividido en capas independientes, cada una con responsabilidades bien definidas:

| LAYER | COMPONENT | TECHNICAL SCOPE |
| :--- | :--- | :--- |
| **Data Persistence** | `storage.js` | Encapsula el acceso a localStorage. Maneja serialización y recuperación de datos. |
| **UI Layer** | `ui.js` | Renderizado dinámico del DOM mediante componentes visuales (cards). |
| **Application Logic** | `app.js` | Orquesta eventos, controla el estado y sincroniza UI con almacenamiento. |

---

## 02. FUNCTIONAL FEATURES

Implementación integral de operaciones CRUD y gestión de estado:

* **Gestión de Tareas:** Creación con validación, edición en tiempo real y eliminación.
* **Control de Estado:** Marcado de tareas completadas/pendientes con persistencia automática.
* **Filtros Dinámicos:** Segmentación por categorías (All / Completed / Pending).
* **UX Avanzada:** Reordenamiento mediante Drag & Drop y contador de tareas activo.
* **Persistencia:** Sincronización total con Web Storage API.

---

## 03. ENGINEERING PRINCIPLES

La refactorización se fundamenta en estándares de ingeniería de software:

* **Separation of Concerns (SoC):** División estricta entre lógica, presentación y persistencia.
* **Single Responsibility Principle (SRP):** Modularización de funciones para alta mantenibilidad.
* **Event Delegation:** Gestión optimizada de eventos en elementos inyectados dinámicamente.
* **State-Driven Rendering:** Reconstrucción de la interfaz basada en la fuente única de verdad (state).

---

## 03.5 REFACTORING LOG

Para elevar el estándar de calidad del software, se ejecutaron las siguientes acciones técnicas:

* **Estandarización de Directorios:** Reestructuración de la jerarquía de archivos para separar la lógica de negocio de la interfaz de usuario.
* **Saneamiento de Eventos:** Eliminación de handlers inline (`onclick`, `onchange`) en favor de un sistema de delegación de eventos centralizado.
* **Optimización de Renderizado:** Implementación de limpieza de nodos y reconstrucción de componentes basada en el estado atómico del storage.
* **Modularización ES6:** Encapsulamiento de funcionalidades en módulos independientes, evitando la contaminación del scope global.

---

## 04. UI / UX DESIGN

* **Component-Based Layout:** Transición de estructuras tabulares a diseño basado en tarjetas (Cards).
* **Responsive Framework:** Integración con Bootstrap para adaptabilidad multi-dispositivo.
* **Micro-interactions:** Animaciones fluidas y feedback visual inmediato al interactuar con las tareas.

---

## 05. PROJECT STRUCTURE

```text
.
├── index.html          # Estructura base y entry point
├── styles/
│   └── main.css        # Custom CSS & Overrides
└── js/
    ├── storage.js      # Data Persistence Layer
    ├── ui.js           # Presentation Layer
    └── app.js          # Logic Orchestrator 
```

---

## 06. LOCAL SETUP

Para instanciar el entorno de desarrollo y realizar pruebas locales:

```bash
# Clonar el repositorio
git clone https://github.com/JesusGG2109/lab-U3-2-ToDo-Refactorizado.git

# Acceder al directorio del proyecto
cd lab-U3-2-ToDo-Refactorizado
```

---

## 07. AUTHORSHIP

JesusGG2109  
Lead Developer & Architect  
GitHub Profile

---

## 08. FINAL SUMMARY

Este proyecto demuestra la transición de una implementación básica hacia un sistema estructurado, mantenible y escalable. Se ha logrado un flujo de trabajo profesional aplicando buenas prácticas modernas de desarrollo frontend, garantizando un código limpio y una arquitectura preparada para el crecimiento sin dependencias de terceros.

> "Refactoring is not just about making code look better; it is about making software behave better and last longer."