# Referencia UI/UX del home de ADM Design & Build para Devwolf

**Referencia:** [admdesign.com.sg](https://www.admdesign.com.sg/)  
**Revisión:** 4 de octubre de 2026  
**Alcance:** únicamente la página de inicio. Este archivo documenta el estilo y la experiencia antes de cambiar el index de Devwolf.

## 1. Cómo se obtuvo esta referencia

Se revisó el contenido público del home, se recorrió visualmente en navegador y se inspeccionaron elementos y estilos calculados del DOM. Las capturas observadas fueron en un viewport de aproximadamente 808 × 668 px; por ello, las medidas espaciales de este documento son orientativas y no equivalen a un diseño verificado en todos los breakpoints. Se comprobó la presencia de Webflow, 15 instancias de Swiper y 73 elementos con `data-w-id` en el DOM observado. Las duraciones y curvas de animación que se proponen abajo son **especificaciones para Devwolf**, no valores extraídos del código original.

## 2. ADN visual

- **Dirección:** editorial, tecnológica y de alto contraste; composición cinematográfica con mucho negro, imagen arquitectónica, tipografía blanca grande y un acento naranja puntual.
- **Fondo observado:** `rgb(8, 8, 8)` (`#080808`) en el body. Superficies negras y grises muy oscuras, con degradados suaves alrededor de imágenes y cambios de sección.
- **Acento observado:** `rgb(245, 127, 0)` (`#F57F00`) en etiquetas y elementos activos. Se usa en cifras grandes, indicadores, líneas finas, viñetas, botones y detalles del logotipo.
- **Tipografía observada:** Aeonik con fallback Arial/sans-serif. Titulares de peso regular y grandes; se apoyan en tamaño, interlineado y espacios libres, no en negrita extrema. Ejemplos medidos en el viewport revisado: titulares de sección cercanos a 32–35 px. Las cifras del bloque de empresa son mucho mayores.
- **Composición:** bordes de secciones poco evidentes; predominan columnas amplias, divisiones por una línea vertical, alineaciones estrictas y bloques que llenan casi toda la pantalla. Las fotografías aportan la textura y el color secundario.
- **Microdetalles:** etiquetas pequeñas en mayúsculas, numeración `01`, `02`, etc., flechas discretas, contornos finos en botones y tarjetas, logos monocromos en bandas horizontales.

## 3. Mapa del home y comportamiento por sección

| Orden | Sección observada | Estilo y contenido | Movimiento e interacción observados | Traducción para Devwolf |
| --- | --- | --- | --- | --- |
| 1 | Portada visual | Logotipo ADM naranja a gran escala sobre negro; debajo, mosaico de fotografías de interiores con separaciones oscuras. Navegación sobrepuesta. | La portada ocupa el primer encuadre. En la revisión se observaron cambios de encuadre y del encabezado al iniciar el scroll; no se verificó una secuencia exacta de carga. | Abrir con identidad Devwolf fuerte y un mosaico de **proyectos/disciplinas propios**, sin copiar fotografías ni marca ADM. El mensaje de negocio debe seguir visible y claro. |
| 2 | Barra de navegación | Logo pequeño a la izquierda; enlaces Home, About Us, Services, Projects, Clients; idioma y Contact Us a la derecha. En una captura inicial apareció el botón de menú y luego la barra completa durante la transición. | Barra fija en la parte superior mientras se recorren los bloques. Contraste estable sobre negro, enlace activo en naranja; botón de contacto con borde. Existe menú superpuesto para estados compactos. | Header fijo y ligero con logo, Inicio, Nosotros, Servicios, Proyectos/Experiencia, Contacto. Resaltar la sección actual con acento Devwolf y asegurar el menú móvil. |
| 3 | About Us / Who We Are | Pantalla partida en dos. Izquierda: etiqueta, titular, texto, navegación entre Who We Are / Our Values / Our Team / Founders e imagen. Derecha: contenido activo con cifras enormes. Una línea naranja vertical y un punto luminoso separan ambas mitades. | El bloque se mantiene en pantalla durante varios tramos del scroll. Los estados de contenido se organizan mediante Swiper con miniaturas y transición `fade` verificados en el DOM. El punto de la línea funciona como marcador visual. | Usar un bloque narrativo para «Quiénes somos», capacidades, equipo y forma de trabajo. Sólo mostrar cifras reales y verificables. La línea puede adoptar el amarillo de Devwolf y el contenido cambiar al scroll **o** mediante controles accesibles. |
| 4 | What We Do | Encabezado introductorio y cuatro pasos: Planning, Designing, Construction, Management. En cada paso aparece una pieza visual tipo cubo/volumen con imagen y un título grande al lado. | Secuencia inmersiva que avanza con el desplazamiento. Se observó un cubo visual y el paso «02 Designing». El DOM contiene un Swiper `fade` para el contenido y un Swiper vertical sincronizado con miniaturas para la parte 3D. | Reinterpretar como recorrido de Devwolf: diagnóstico → diseño/propuesta → ejecución → soporte. Puede usar imágenes por disciplina y cambios de plano; el efecto 3D es opcional si afecta carga o claridad. |
| 5 | Propuesta de valor | Titular «Bold Design. Clear Strategy. Dependable Results.» en dos columnas con una breve descripción. Después aparecen grandes círculos cálidos con ideas como Perfectly Designed, Carefully Planned y Smartly Executed; hay palabras de gran tamaño en el fondo. | Los círculos entran y se desplazan por etapas de scroll. Se observaron cambios de tarjeta activa y disposición; existe un Swiper horizontal para una variante compacta. El rótulo «Skip Section» permite saltar este tramo. | Sustituir por tres fortalezas propias y creíbles. Mantener círculos o formas amplias, texto de fondo tenue y transiciones suaves. Incluir un salto accesible si se usa un tramo largo de scroll fijado. |
| 6 | Proyectos destacados | Titular «Projects That Define Our Craft». Escena oscura con una gran pantalla inclinada que muestra un proyecto, miniaturas laterales, logo/nombre y texto contextual. | Cambia el proyecto principal como una galería. El DOM muestra Swiper vertical para la escena/miniaturas y carruseles `fade` sincronizados para visual y descripción. No se comprobó cada gesto de navegación en todos los proyectos. | Crear una galería con trabajos reales de Devwolf. Imagen o video central, categoría, resultado y enlace. Si aún no hay casos publicables, usar ejemplos de capacidad claramente identificados como tales. |
| 7 | Testimonios y clientes | «Trusted Partnership» a la izquierda; logo y cita extensa en el panel central/derecho, botones circulares anterior/siguiente, CTA «See all Works». Abajo, banda de logos en movimiento horizontal. | Carrusel de testimonios con controles visibles; el DOM confirma Swiper `fade`. La tira de logos se observó desplazándose en la página. | Usar testimonios y logos sólo con autorización y contenido real. Mantener flechas grandes, indicadores de posición, pausa al hover/foco y arrastre táctil si se implementa. |
| 8 | CTA final | Foto de interior desenfocada y oscurecida, anillos finos concéntricos, una tarjeta fotográfica pequeña desplazada, titular central y botón naranja. | La composición aparece tras la banda de clientes; combina capas de profundidad y cambio de escala visual respecto de la sección anterior. | CTA «Cuéntanos tu proyecto» con imagen propia, anillos sutiles en amarillo/azul y un único botón principal. |
| 9 | Footer | Logo grande, lema, navegación, email, newsletter, redes y cinco columnas de sedes. Negro/gris, líneas finas naranjas. | Transición a una retícula densa y estable; enlaces con estados interactivos discretos. | Footer con datos reales de La Paz/Bolivia, enlaces, contacto y redes actuales. No trasladar newsletter o sedes que Devwolf no tenga. |

## 4. Lenguaje de movimiento a conservar

### Desplazamiento narrativo

El home alterna tramos normales con escenas que permanecen visibles mientras el scroll cambia su contenido. Esto crea sensación de relato, especialmente en «About», «What We Do» y la propuesta de valor. En Devwolf, usar este recurso sólo en 1–2 secciones clave para evitar una página excesivamente larga. Cada escena debe tener una salida clara y permitir navegación por teclado.

### Sincronización de medios y texto

La referencia actualiza imagen, rótulo y descripción como una sola unidad. Se comprobó el uso de Swiper `fade`, Swiper vertical y miniaturas sincronizadas en varias secciones. Para Devwolf, cada cambio de servicio o proyecto debe actualizar **el estado completo**: visual, nombre, resumen, número activo y `aria-label`.

### Capas y profundidad

Se observaron fotografías oscurecidas, una escena de proyecto con perspectiva, cubo visual, círculos grandes y anillos sobre el CTA. La profundidad se obtiene con escala, perspectiva, máscara/degradado y contraste. No requiere necesariamente un motor 3D: CSS transform y fotografías optimizadas pueden reproducir la sensación.

### Ritmo y microinteracciones

- Entrada de títulos e imágenes al viewport en pasos separados, sin hacer esperar a quien navega.
- Controles con señal clara de hover, foco y estado activo; flechas y numeración como pistas de exploración.
- Texto secundario breve frente a titulares grandes, para que la lectura siga siendo posible durante el movimiento.
- Movimiento continuo sólo en elementos secundarios, como la banda de logos; al enfocar o pasar el puntero debería detenerse.

### Parámetros propuestos para Devwolf

Estos valores **no son mediciones de ADM**. Son un punto de partida para implementar una experiencia similar y ajustarla con pruebas:

| Elemento | Valor inicial sugerido |
| --- | --- |
| Reveal de texto | `opacity: 0 → 1`, `translateY: 24–40px → 0`, 0.6–0.9 s, `power3.out` |
| Cambio entre paneles | crossfade de 0.45–0.7 s; desfase de 0.08–0.15 s entre imagen y texto |
| Imagen en hover | escala máxima `1.03–1.06` en 0.5–0.8 s |
| Parallax decorativo | desplazamiento menor a 8 % del alto de la imagen; ligado al scroll, sin mover texto esencial |
| Escena fijada | 2–3 estados, duración total aproximada de 1.5–2.5 alturas de viewport |
| Indicador de avance | línea o puntos con progreso visible y etiquetas comprensibles |
| `prefers-reduced-motion` | eliminar pinning prolongado, parallax, autoplay y transformaciones; conservar contenido y controles |

## 5. Adaptación a la identidad y al index actuales de Devwolf

La [portada actual](../app/page.tsx) ya usa una narrativa oscura y animaciones GSAP; [los estilos globales](../app/globals.css) y los componentes del home contienen la paleta de marca. El index visible en el código usa principalmente `#05080D` para el fondo, `#14213D` para azul profundo, `#FCA311` para el acento y blanco para texto. Los tokens globales también incluyen azules y menta; conviene consolidarlos cuando se implemente el rediseño para evitar dos sistemas de color paralelos.

| Función en ADM | Equivalente recomendado en Devwolf |
| --- | --- |
| Negro `#080808` | Fondo `#05080D`, con superficies `#0B1222` / azul profundo `#14213D` |
| Naranja `#F57F00` | Amarillo ámbar de marca `#FCA311` para puntos, líneas, números y CTA |
| Blanco puro | Blanco y `#EAF0FF` según contraste del fondo |
| Logotipo naranja gigante | Marca Devwolf con composición de alto impacto, sin imitar el lettering de ADM |
| Fotografía de interiores | Construcción, energía, redes, equipos, software e impresión 3D propios |
| Recorrido de diseño y obra | Recorrido integral de ingeniería y tecnología ya descrito en el home |

### Orden recomendado para una futura implementación

1. Mantener la propuesta de valor de Devwolf y reconstruir el hero con un encuadre de marca más fuerte.
2. Transformar «Nosotros» en una escena de dos columnas con cifras/capacidades verificadas y estados navegables.
3. Mostrar los seis servicios existentes como recorrido visual claro; no reducirlos a cuatro sólo porque ADM presenta cuatro etapas.
4. Dar protagonismo al proceso ya existente «Escuchamos / Proponemos / Ejecutamos / Acompañamos» mediante cambios sincronizados de imagen y texto.
5. Incorporar proyectos y testimonios cuando haya material real. Mantener CTA y footer con datos actuales.

## 6. Reglas de UX para aplicar el estilo sin perder usabilidad

- El scroll debe avanzar normalmente con rueda, táctil, teclado y enlaces directos. Evitar bloquear la página mientras corre una animación.
- La navegación a anclas debe compensar el header fijo. Las escenas fijadas deben ofrecer salida y permitir llegar a la sección siguiente sin repetir gestos innecesarios.
- Todo carrusel necesita botones, nombre del estado actual, foco visible y una versión utilizable sin JavaScript.
- `prefers-reduced-motion: reduce` debe mostrar todos los contenidos sin dependencia del movimiento. Pausar movimiento continuo al interactuar.
- Priorizar fotografías optimizadas, carga diferida fuera del primer encuadre y transformación de `opacity`/`transform`; evitar animar layout o cargar una escena WebGL para un efecto que CSS puede resolver.
- Conservar titulares descriptivos y CTAs legibles. La espectacularidad visual no debe ocultar qué hace Devwolf ni cómo contactarlo.

## 7. Estado de esta entrega

Este documento es una **guía de referencia**, no una copia del código ni de los activos de ADM. No se modificó el index en esta etapa. La próxima fase debe convertir las decisiones anteriores en componentes y animaciones de Devwolf, validar desktop/móvil y ajustar la intensidad de movimiento con pruebas reales.
