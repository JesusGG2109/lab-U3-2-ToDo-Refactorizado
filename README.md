# TODO SYSTEM | ARCHITECTURAL REFACTOR
---

[![Development Stack](https://img.shields.io/badge/Stack-Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/JesusGG2109/lab-U3-2-ToDo-Refactorizado)
[![Architecture](https://img.shields.io/badge/Pattern-Modular_Monolith-blue?style=for-the-badge)](https://github.com/JesusGG2109)

Implementación avanzada de una aplicación de gestión de tareas enfocada en la robustez lógica y la separación estricta de responsabilidades (SoC). Este proyecto representa la transición de un script imperativo hacia un sistema declarativo y modular.

## 01. CORE ARCHITECTURE

El sistema se fundamenta en un desacoplamiento total de capas para garantizar la escalabilidad:

| LAYER | COMPONENT | TECHNICAL SCOPE |
| :--- | :--- | :--- |
| **Data Persistence** | `storage.js` | Abstracción del Web Storage API. Gestiona la integridad de los datos en disco local. |
| **Interface Controller** | `ui.js` | Manipulación atómica del DOM. Encapsula la lógica de renderizado y estados visuales. |
| **Logic Orchestrator** | `app.js` | Punto de entrada del sistema. Coordina el flujo de datos entre la UI y la persistencia. |

## 02. ENGINEERING UPGRADES

La refactorización se centró en eliminar la deuda técnica mediante los siguientes estándares:

* **EVENT DECOUPLING:** Eliminación de lógica inline en el HTML. Los disparadores se gestionan mediante observadores dinámicos en el DOM.
* **STATE SYNCHRONIZATION:** Implementación de un flujo unidireccional de datos para asegurar que la vista refleje fielmente el estado del storage.
* **MODULAR ENCAPSULATION:** Uso de módulos de ES6 para evitar la contaminación del scope global y proteger la lógica de negocio.
* **SINGLE RESPONSIBILITY PRINCIPLE (SRP):** Cada función y archivo cumple una única tarea, facilitando el mantenimiento y la depuración.

## 03. DEPLOYMENT & STRUCTURE

Para desplegar el entorno de desarrollo localmente:

```bash
git clone [https://github.com/JesusGG2109/lab-U3-2-ToDo-Refactorizado.git](https://github.com/JesusGG2109/lab-U3-2-ToDo-Refactorizado.git)
cd lab-U3-2-ToDo-Refactorizado