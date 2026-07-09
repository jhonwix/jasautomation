# Landing de negocio para WABA / WhatsApp Business Platform

Sitio estático preparado para publicar en GitHub Pages. Incluye páginas mínimas recomendadas para presentar un negocio de forma verificable ante Meta/WABA:

- Inicio
- Sobre nosotros
- Servicios
- Contacto
- Política de privacidad
- Términos y condiciones

## 1. Reemplazar placeholders

Busca y reemplaza en todos los archivos:

| Placeholder | Reemplazar por |
|---|---|
| `[Nombre Comercial]` | Nombre que quieres usar como marca/display name relacionado con WhatsApp |
| `[Razón Social]` | Razón social legal |
| `[NIT/RFC/RUC]` o `[Identificación fiscal]` | Identificación fiscal de la empresa |
| `[Dirección o ciudad, país]` | Dirección comercial o ciudad/país |
| `[correo-corporativo]` | Correo del dominio de la empresa, idealmente no Gmail/Outlook |
| `[telefono-comercial]` | Teléfono comercial visible |
| `[numero-whatsapp-formato-internacional]` | Número de WhatsApp con código de país, sin + ni espacios. Ejemplo Colombia: 573001112233 |
| `[usuario-github]` | Usuario u organización de GitHub |
| `[repositorio]` | Nombre del repositorio |
| `[Servicio 1]`, `[Servicio 2]`, etc. | Servicios reales de la empresa |

## 2. Publicar en GitHub Pages

Opción simple desde GitHub:

1. Crea un repositorio, por ejemplo `landing-waba`.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. En GitHub entra a **Settings > Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/root`.
6. Guarda los cambios.
7. GitHub publicará la página en una URL similar a:
   `https://TU_USUARIO.github.io/landing-waba/`

## 3. Recomendación para WABA

Antes de compartir la URL en Meta Business Manager o WhatsApp Manager, valida:

- La página abre sin iniciar sesión.
- Tiene nombre comercial, razón social y datos de contacto visibles.
- La política de privacidad está publicada y enlazada desde el footer.
- El consentimiento para WhatsApp no está premarcado.
- El número de WhatsApp coincide o está relacionado con el negocio.
- Los servicios publicados no pertenecen a categorías prohibidas o restringidas por WhatsApp Business.

## 4. Dominio propio opcional

Para más confianza, usa un dominio corporativo como `https://tudominio.com`. En GitHub Pages puedes configurar un custom domain y agregar un archivo `CNAME` con el dominio.
