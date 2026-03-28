---
name: fullstack-web-developer
description: Usar cuando se necesite diseñar, desarrollar o mejorar aplicaciones web modernas utilizando Next.js y Laravel. Incluye arquitectura de software, desarrollo frontend y backend, integración de APIs, diseño UX/UI mobile-first, control de versiones con GitHub y despliegue continuo en Hostinger.
---

# Skill: Fullstack Web Developer

Diseña y desarrolla aplicaciones web modernas, escalables y centradas en el usuario, combinando buenas prácticas de ingeniería, experiencia de usuario y eficiencia en el desarrollo.

---

## Visión General

Esta skill combina desarrollo frontend y backend con enfoque práctico y orientado a producto. Ayuda a:

1. **Diseñar**: Definir arquitectura, stack y experiencia de usuario  
2. **Desarrollar**: Implementar soluciones eficientes y mantenibles  
3. **Optimizar**: Mejorar performance, escalabilidad y usabilidad  
4. **Desplegar**: Publicar aplicaciones de forma automatizada y segura  

El enfoque prioriza simplicidad, claridad y valor real para el usuario.

---

## Cuándo Usar Esta Skill

Utiliza esta skill cuando el problema implique desarrollo web o toma de decisiones técnicas, especialmente en:

- Creación de aplicaciones web desde cero
- Definición de arquitectura (frontend + backend)
- Desarrollo con Next.js o Laravel
- Integración de APIs
- Mejora de UX/UI
- Optimización de performance
- Configuración de despliegue continuo
- Organización de proyectos con Git y GitHub

---

## Flujo de Trabajo de Desarrollo

Idea → Definir requerimientos → Elegir arquitectura → Diseñar UX (mobile-first) → Estructurar proyecto → Desarrollar → Testear → Deploy → Iterar

Este flujo debe adaptarse según el tamaño y complejidad del proyecto, pero siempre mantener claridad en cada etapa.

---

## Metodología Principal

### 1. Decisión de Arquitectura

- Usar Next.js para frontend, SSR o aplicaciones fullstack ligeras  
- Usar Laravel como backend cuando se requiera lógica compleja, autenticación robusta o APIs estructuradas  
- Comunicación mediante APIs REST  
- Separar responsabilidades entre frontend y backend  

Siempre justificar la elección según el problema.

---

### 2. Desarrollo Frontend (Mobile-First)

- Diseñar primero para pantallas pequeñas (≥320px)  
- Escalar progresivamente a tablet y desktop  
- Priorizar usabilidad, accesibilidad y claridad visual  
- Evitar sobrecargar interfaces  

Buenas prácticas:
- Lazy loading de componentes  
- Optimización de imágenes  
- Manejo eficiente de estado  

---

### 3. Experiencia de Usuario (UX/UI)

- Interfaces intuitivas y consistentes  
- Jerarquía visual clara  
- Feedback inmediato al usuario (loading, errores, éxito)  
- Minimizar fricción en flujos críticos  

No diseñar solo “bonito”, sino funcional y usable.

---

### 4. Desarrollo Backend (Laravel)

- Estructura basada en controladores, modelos y rutas claras  
- Validación de datos obligatoria en backend  
- Uso de middlewares para autenticación y permisos  
- Separación de lógica de negocio  

---

### 5. Control de Versiones

- Uso de Git y GitHub desde el inicio del proyecto  
- Flujo recomendado:
  - main → producción  
  - develop → desarrollo  
  - feature/* → nuevas funcionalidades  

Buenas prácticas:
- Commits semánticos (feat, fix, refactor)  
- Pull requests para revisión de cambios  

---

### 6. Deploy y Entrega Continua

- Deploy automático desde GitHub  
- Uso de variables de entorno seguras  
- Build optimizado en producción  
- Verificación post-deploy  

Plataforma principal: Hostinger

---

### 7. Performance y Optimización

- Evitar renders innecesarios  
- Uso adecuado de SSR/SSG en Next.js  
- Carga diferida de recursos  
- Optimización de assets  

Siempre balancear performance vs complejidad.

---

### 8. Seguridad

- Validar y sanitizar inputs  
- Protección contra vulnerabilidades comunes (XSS, CSRF, SQL Injection)  
- Manejo seguro de autenticación  
- No exponer información sensible  

---

### 9. Testing y Validación

- Probar flujos críticos de usuario  
- Validar endpoints principales  
- Detectar errores antes de producción  

---

## Reglas de Desarrollo

- No sobrecomplicar soluciones simples  
- Priorizar claridad sobre “código inteligente”  
- Evitar overengineering  
- Siempre considerar la experiencia del usuario  
- Justificar decisiones técnicas cuando haya múltiples opciones  
- Es válido proponer alternativas, no imponer una sola solución  

---

## Archivos de Referencia

| Archivo | Contenido |
|--------|----------|
| `arquitectura.md` | Decisiones de stack y संरcción de proyectos |
| `frontend_guidelines.md` | Buenas prácticas en Next.js |
| `backend_guidelines.md` | Estructura y lógica en Laravel |
| `deploy.md` | Proceso de despliegue en Hostinger |
| `ux_ui.md` | Principios de diseño mobile-first |
| `git_workflow.md` | Estrategia de ramas y commits |
