# Portfolio de Raúl Adeva Alía

Portfolio estático bilingüe (español/inglés), responsive y preparado para GitHub Pages. Está construido con HTML, CSS y JavaScript sin dependencias externas ni backend.

## Archivos

- `index.html`: contenido y estructura semántica.
- `styles.css`: estilos responsive y tema oscuro.
- `script.js`: selector de idioma y renderizado seguro de enlaces sociales.
- `config.js`: configuración de URLs públicas de LinkedIn y GitHub.
- `assets/favicon.svg`: favicon vectorial.

## Antes de publicar

1. Abre `config.js`.
2. Añade las URLs reales de tus perfiles:
   ```js
   window.PORTFOLIO_CONFIG = {
     linkedin: "https://www.linkedin.com/in/TU-PERFIL/",
     github: "https://github.com/TU-USUARIO"
   };
   ```
3. Sustituye los valores de ejemplo por URLs reales. El código solo mostrará URLs HTTPS de LinkedIn o GitHub válidas.
4. Revisa el contenido y la traducción inglesa. La web solo contiene los datos profesionales del CV proporcionado; no se incluye el PDF original porque contiene teléfono y correo electrónico, que no se han elegido como información pública.
5. Prueba localmente abriendo `index.html` en un navegador.

## Publicar con GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `raul-adeva-portfolio`.
2. Sube los archivos y carpetas de este proyecto a la raíz del repositorio.
3. En el repositorio, ve a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama principal (`main`) y la carpeta `/ (root)`, y guarda.
6. Espera a que finalice la publicación. GitHub mostrará la URL pública en Settings → Pages.

No puedo publicar en tu cuenta desde este paquete; debes completar esos pasos con tu sesión de GitHub.

## Seguridad y privacidad

- No hay backend, base de datos, formulario ni dependencias de terceros.
- No añadas tokens, claves API, contraseñas ni datos privados al repositorio.
- El CV original no se incluye en el sitio para evitar publicar teléfono y correo sin querer.
- Los enlaces externos se validan como HTTPS y se abren con `rel="noopener noreferrer"`.
- Al ser una web estática, no procesa datos de visitantes. GitHub puede tratar registros técnicos de acceso conforme a sus propias políticas.
- GitHub Pages proporciona HTTPS cuando la publicación está disponible; activa **Enforce HTTPS** en Settings → Pages si aparece esa opción.
- Revisa los cambios antes de publicar y mantén el contenido de las dependencias (si se añaden en el futuro) actualizado.

## Personalización

El contenido está escrito en `index.html`, y sus traducciones en el objeto `translations` de `script.js`. Cuando cambies texto que tenga `data-i18n`, actualiza ambas versiones para conservar el selector de idioma.

## Nota sobre el contenido

Los proyectos y funciones se describen únicamente con información disponible en el CV proporcionado. No se han inventado URLs de proyectos, métricas, resultados de investigación ni enlaces de perfil.
