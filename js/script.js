function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar.classList.contains('show')) {
    sidebar.classList.add('show');
  } else {
    sidebar.classList.remove('show');
  }
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show');
}

function agregarContenido() {
  const contenido = `
  <div class="container">
  <div class="button-container">
    <div class="info">
      <div class="text">
        <h2>¿Qué es el Diseño Gráfico?</h2>
        <p>El diseño gráfico es un arte visual y una disciplina creativa que se centra en la comunicación visual y la presentación estética de ideas y mensajes. Se utiliza en una amplia variedad de contextos, desde la publicidad y el marketing hasta el diseño de productos, medios digitales y más.</p>
      </div>
      <div class="imagen">
        <img src="images/diseñotxt.jpg" alt="Descripción de la imagen">
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="button-container">
    <div class="info">
      <div class="imagen">
        <img src="images/principios.jpg" alt="Descripción de la imagen">
      </div>
      <div class="text">
        <h2>Principios Fundamentales del Diseño Gráfico</h2>
        <p>Comunicación Visual: El objetivo principal del diseño gráfico es transmitir un mensaje de manera efectiva a través de imágenes, colores, tipografía y otros elementos visuales.</p>
        <p>Estética: Además de la comunicación, el diseño gráfico busca crear experiencias visuales atractivas y memorables. Esto implica el uso consciente de la composición, el equilibrio, el contraste y otros principios del diseño.</p>
        <p>Funcionalidad: El diseño gráfico no solo se trata de lo visualmente atractivo, sino también de la funcionalidad. Debe ser claro, legible y fácil de entender para su audiencia prevista.</p>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="button-container">
    <div class="info">
      <div class="text">
        <h2>Áreas de Aplicación del Diseño Gráfico</h2>
        <p>Diseño de Identidad Corporativa: Esto incluye el diseño de logotipos, tarjetas de visita, papelería corporativa y otros elementos que representan la identidad visual de una empresa o marca.</p>
        <p>Diseño Editorial: Incluye el diseño de revistas, periódicos, libros y otros materiales impresos, así como su disposición y maquetación.</p>
        <p>Diseño de Packaging: Implica la creación de envases y embalajes atractivos y funcionales para productos comerciales.</p>
        <p>Diseño Web y Multimedia: Se enfoca en la creación de sitios web, aplicaciones móviles, animaciones y otros medios digitales.</p>
        <p>Diseño Publicitario: Se centra en la creación de anuncios impresos y digitales, carteles, vallas publicitarias y otros materiales promocionales.</p>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="button-container">
    <div class="info">
    <div class="imagen">
        <img src="images/herramientas-de-diseño.jpg" alt="Descripción de la imagen">
      </div>
      <div class="text">
        <h2>Herramientas y Tecnologías del Diseño Gráfico</h2>
        <p>Software de Diseño Gráfico: Adobe Photoshop, Illustrator, InDesign, Sketch y otros programas especializados son ampliamente utilizados en la industria del diseño gráfico.</p>
        <p>Tecnología Digital: El diseño gráfico ha evolucionado con avances tecnológicos como las tabletas gráficas, pantallas táctiles y software de modelado 3D, lo que permite a los diseñadores explorar nuevas formas de expresión creativa.</p>
      </div>
    </div>
  </div>
</div>
<div class="container">
<div class="button-container">
  <div class="info">
    <div class="text">
      <h2>El Papel del Diseñador Gráfico</h2>
      <p>Los diseñadores gráficos son profesionales creativos que combinan habilidades artísticas con conocimientos técnicos para crear soluciones visuales efectivas. Su trabajo implica entender las necesidades del cliente, investigar y desarrollar conceptos, y llevar a cabo el diseño final con atención al detalle y precisión técnica.</p>
    </div>
  </div>
</div>
</div>
`;


  // Reemplazar el contenido dentro del elemento con el id 'info'
  document.getElementById('info').innerHTML = contenido;
}
document.getElementById('boton1').addEventListener('click', agregarContenido);

function agregarContenidoBoton2() {
  const contenidoBoton2 = `
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="text">
            <h2>Principios Fundamentales del Diseño Gráfico</h2>
            <p>Los principios fundamentales del diseño gráfico son las reglas y conceptos básicos que guían a los diseñadores en la creación de composiciones visualmente atractivas y efectivas. Estos principios son universales y se aplican a todas las formas de diseño, desde una simple tarjeta de visita hasta una compleja campaña publicitaria.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/visual-communication.png" alt="Comunicación Visual">
          </div>
          <div class="text">
            <h3>1. Comunicación Visual</h3>
            <p>El diseño gráfico tiene como objetivo principal comunicar un mensaje de manera efectiva. Para lograrlo, los diseñadores utilizan elementos visuales como imágenes, colores, tipografía y formas para transmitir ideas y emociones.</p>
            <p>La comunicación visual es la capacidad de utilizar estos elementos de manera coherente y clara para contar una historia o presentar información.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/foto-equilibrada.webp" alt="Equilibrio">
          </div>
          <div class="text">
            <h3>2. Equilibrio</h3>
            <p>El equilibrio es la distribución visual de peso en un diseño. Hay dos tipos principales de equilibrio:</p>
            <ul>
              <li>Equilibrio Simétrico: Ocurre cuando los elementos del diseño se organizan de manera uniforme en ambos lados de un eje central. Es una forma de equilibrio clásica y formal.</li>
              <li>Equilibrio Asimétrico: Los elementos se distribuyen de manera desigual pero se equilibran por su contraste visual, tamaño, color o forma. Es más dinámico y puede crear interés visual.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/contraste-opt.jpg" alt="Contraste">
          </div>
          <div class="text">
            <h3>3. Contraste</h3>
            <p>El contraste se refiere a la diferencia entre elementos en un diseño. Puede ser de color, tamaño, forma o textura. El contraste ayuda a destacar elementos importantes y a crear jerarquía visual.</p>
            <p>Por ejemplo, un texto en negrita sobre un fondo claro crea contraste y llama la atención.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Ritmo y repetición.jpg" alt="Ritmo y Repetición">
          </div>
          <div class="text">
            <h3>4. Ritmo y Repetición</h3>
            <p>El ritmo y la repetición en el diseño gráfico se refieren a patrones visuales que se repiten en todo el diseño. Estos elementos ayudan a unificar el diseño y a guiar al ojo a lo largo de la composición.</p>
            <p>Un buen uso del ritmo y la repetición puede crear cohesión y armonía en un diseño.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Espacio.png" alt="Espacio">
          </div>
          <div class="text">
            <h3>5. Espacio</h3>
            <p>El espacio en diseño gráfico no es simplemente "vacío", sino que es una parte activa y esencial del diseño. El espacio negativo, o el área que rodea los elementos en un diseño, es tan importante como los elementos mismos.</p>
            <p>El uso adecuado del espacio puede mejorar la legibilidad, el enfoque y la claridad de un diseño.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/jerarquía.png" alt="Jerarquía">
          </div>
          <div class="text">
            <h3>6. Jerarquía</h3>
            <p>La jerarquía visual es el orden de importancia que se le da a los elementos en un diseño. Los diseñadores utilizan diferentes tamaños, colores, formas y posiciones para establecer una jerarquía clara.</p>
            <p>Por ejemplo, un título grande y en negrita indica que es más importante que el texto regular debajo.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Unidad.jpg" alt="Unidad">
          </div>
          <div class="text">
            <h3>7. Unidad</h3>
            <p>La unidad en el diseño se refiere a cómo todos los elementos de un diseño se relacionan entre sí y se combinan para formar un todo coherente.</p>
            <p>Los elementos deben trabajar juntos en armonía para crear una composición visualmente equilibrada y efectiva.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/enfasis.jpg" alt="Énfasis">
          </div>
          <div class="text">
            <h3>8. Énfasis</h3>
            <p>El énfasis se refiere al punto focal o el elemento principal que se destaca en un diseño.</p>
            <p>Puede lograrse mediante el contraste, el tamaño, el color o la posición. El énfasis ayuda a guiar la atención del espectador y a transmitir la idea principal o el mensaje clave.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Agregar el contenido al elemento con el id 'info'
  document.getElementById('info').innerHTML = contenidoBoton2;
}

document.getElementById('boton2').addEventListener('click', agregarContenidoBoton2);

function agregarContenidoBoton3() {
  const contenidoBoton3 = `
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Logotipo.webp" alt="Diseño de Identidad Corporativa">
          </div>
          <div class="text">
            <h2>1. Diseño de Identidad Corporativa</h2>
            <h3>Logotipos:</h3>
            <p>El diseño de logotipos es esencial para establecer la identidad visual de una empresa o marca. Los logotipos son símbolos gráficos que representan los valores y la personalidad de una organización.</p>
            <h3>Papelería Corporativa:</h3>
            <p>Esto incluye tarjetas de visita, hojas membretadas, sobres y otros elementos de papelería que siguen un estilo coherente basado en el logotipo y los colores corporativos.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Diseño Editorial.jpg" alt="Diseño Editorial">
          </div>
          <div class="text">
            <h2>2. Diseño Editorial</h2>
            <h3>Revistas y Periódicos:</h3>
            <p>Los diseñadores gráficos son responsables del diseño de páginas, disposición de contenido, elección de tipografías y creación de ilustraciones para revistas y periódicos impresos.</p>
            <h3>Libros y eBooks:</h3>
            <p>El diseño de libros abarca desde la maquetación de texto hasta la creación de portadas atractivas que atraigan al lector.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Diseño de Packaging.webp" alt="Diseño de Packaging">
          </div>
          <div class="text">
            <h2>3. Diseño de Packaging</h2>
            <h3>Envases y Etiquetas:</h3>
            <p>El diseño de envases y etiquetas de productos es crucial para atraer la atención del consumidor en los estantes de las tiendas. Los elementos gráficos deben comunicar la marca y el contenido del producto de manera efectiva.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Diseño Web y Multimedia.jpg" alt="Diseño Web y Multimedia">
          </div>
          <div class="text">
            <h2>4. Diseño Web y Multimedia</h2>
            <h3>Sitios Web:</h3>
            <p>Los diseñadores web crean la apariencia visual y la experiencia de usuario de sitios web. Esto incluye la disposición de elementos, selección de colores, tipografía y gráficos.</p>
            <h3>Interfaces de Usuario (UI):</h3>
            <p>En aplicaciones móviles y software, los diseñadores gráficos se enfocan en la creación de interfaces de usuario intuitivas y atractivas.</p>
            <h3>Animaciones y Gráficos Digitales:</h3>
            <p>El diseño gráfico se aplica en la creación de animaciones, gráficos en movimiento y efectos visuales para videos y contenido multimedia.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Diseño Publicitario.jpg" alt="Diseño Publicitario">
          </div>
          <div class="text">
            <h2>5. Diseño Publicitario</h2>
            <h3>Anuncios Impresos y Digitales:</h3>
            <p>Desde vallas publicitarias hasta banners en sitios web, el diseño gráfico en publicidad se centra en captar la atención del público objetivo y comunicar un mensaje de manera efectiva.</p>
            <h3>Folletos y Catálogos:</h3>
            <p>Los diseñadores crean materiales impresos como folletos y catálogos para promocionar productos o servicios de manera visualmente atractiva.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Diseño de Experiencia de Usuario (UX).jpg" alt="Diseño de Experiencia de Usuario (UX)">
          </div>
          <div class="text">
            <h2>6. Diseño de Experiencia de Usuario (UX)</h2>
            <h3>Flujo de Interacción:</h3>
            <p>Los diseñadores de UX se centran en crear experiencias fluidas y agradables para los usuarios al interactuar con productos digitales.</p>
            <h3>Arquitectura de la Información:</h3>
            <p>Organizar el contenido de manera lógica y fácilmente accesible es una parte crucial del diseño de UX.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Diseño de Señalización y Ambiental.png" alt="Diseño de Señalización y Ambiental">
          </div>
          <div class="text">
            <h2>7. Diseño de Señalización y Ambiental</h2>
            <h3>Señalización:</h3>
            <p>El diseño gráfico se utiliza en la creación de letreros y señales para guiar a las personas en entornos físicos como edificios, aeropuertos, hospitales, etc.</p>
            <h3>Ambiental:</h3>
            <p>En espacios públicos y urbanos, el diseño ambiental utiliza gráficos para mejorar la estética y la comunicación visual en áreas como parques, plazas y calles.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="button-container">
        <div class="info">
          <div class="imagen">
            <img src="images/Diseño de Packaging2.webp" alt="Diseño de Packaging">
          </div>
          <div class="text">
            <h2>8. Diseño de Packaging</h2>
            <h3>Diseño de envases y embalajes:</h3>
            <p>Un campo importante del diseño gráfico que implica crear envases y embalajes atractivos y funcionales para productos comerciales.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Agregar el contenido al elemento con el id 'info'
  document.getElementById('info').innerHTML = contenidoBoton3;
}

document.getElementById('boton3').addEventListener('click', agregarContenidoBoton3);

function agregarContenidoBoton4() {
  const contenidoBoton4 = `
    <div class="container">
      <div class="button-container boton4-info">
        <div class="info">
          <div class="boton4-text">
            <h2 class="boton4-titulo">Herramientas y Tecnologías en Diseño Gráfico</h2>
            <p>El diseño gráfico ha evolucionado enormemente gracias al avance de las tecnologías digitales. Estas herramientas permiten a los diseñadores crear de manera eficiente y con mayor precisión, desde ilustraciones hasta interfaces de usuario.</p>
            
            <h3>1. Software de Diseño Gráfico:</h3>
            <p><strong>Adobe Creative Suite:</strong> Adobe ofrece una suite completa de programas de diseño gráfico ampliamente utilizados en la industria.</p>
            <ul>
              <li><strong>Adobe Photoshop:</strong> Para la edición de imágenes, retoque fotográfico y diseño general.</li>
              <li><strong>Adobe Illustrator:</strong> Especializado en ilustraciones vectoriales, logotipos y gráficos.</li>
              <li><strong>Adobe InDesign:</strong> Para maquetación y diseño de documentos, como revistas, libros y folletos.</li>
              <li><strong>Adobe XD:</strong> Especializado en diseño de experiencia de usuario (UI/UX) para aplicaciones y sitios web.</li>
              <li><strong>Sketch:</strong> Una herramienta popular entre diseñadores de interfaces y experiencias de usuario (UI/UX), especialmente para aplicaciones y sitios web.</li>
              <li><strong>Figma:</strong> Una herramienta basada en la nube que permite a los diseñadores colaborar en tiempo real en el diseño de interfaces de usuario, prototipos y más.</li>
              <li><strong>CorelDRAW:</strong> Una alternativa a Illustrator para ilustraciones vectoriales y diseño gráfico.</li>
              <li><strong>Affinity Designer:</strong> Una herramienta potente y asequible para ilustraciones vectoriales, diseño de logotipos y más.</li>
            </ul>
            
            <h3>2. Herramientas de Edición de Imágenes:</h3>
            <p><strong>Adobe Photoshop:</strong> Aunque es parte de la suite de Adobe, Photoshop merece una mención especial por ser el estándar de la industria en edición de imágenes y retoque fotográfico.</p>
            <p><strong>GIMP (GNU Image Manipulation Program):</strong> Una alternativa de código abierto y gratuita a Photoshop, con una amplia gama de herramientas para edición de imágenes.</p>
            <p><strong>Canva:</strong> Una herramienta en línea que permite a los usuarios crear gráficos, diseños de redes sociales y otros elementos visuales de manera sencilla.</p>
            
            <h3>3. Herramientas de Diseño de Vectores:</h3>
            <p><strong>Adobe Illustrator:</strong> Principalmente utilizado para crear ilustraciones, logotipos, iconos y gráficos vectoriales.</p>
            <p><strong>Inkscape:</strong> Una alternativa de código abierto y gratuita a Illustrator, con muchas funciones de diseño de vectores.</p>
            
            <h3>4. Herramientas de Maquetación y Tipografía:</h3>
            <p><strong>Adobe InDesign:</strong> Esencial para el diseño de maquetación, como libros, revistas, folletos y otros materiales impresos.</p>
            <p><strong>QuarkXPress:</strong> Otro software de maquetación para diseñar páginas para impresión y digital.</p>
            
            <h3>5. Herramientas de Animación y Multimedia:</h3>
            <p><strong>Adobe After Effects:</strong> Utilizado para crear efectos visuales, animaciones y gráficos en movimiento para videos.</p>
            <p><strong>Cinema 4D:</strong> Para diseño y animación en 3D, utilizado en animaciones de logotipos y efectos visuales avanzados.</p>
            
            <h3>6. Herramientas de Prototipado y Diseño de Experiencia de Usuario (UX):</h3>
            <p><strong>Adobe XD:</strong> Especializado en el diseño de interfaces de usuario y prototipos interactivos para aplicaciones y sitios web.</p>
            <p><strong>Figma:</strong> Además de su uso para diseño, Figma es popular para prototipado y diseño de experiencia de usuario en tiempo real.</p>
            
            <h3>7. Herramientas de Fotografía y Edición de Imágenes:</h3>
            <p><strong>Adobe Lightroom:</strong> Especializado en edición de fotografías y retoque, especialmente para fotografía digital.</p>
            <p><strong>Capture One:</strong> Otra herramienta potente para edición y catalogación de fotografías, especialmente en fotografía de alta gama.</p>
            
            <h3>8. Hardware:</h3>
            <p><strong>Computadoras y Laptops:</strong> Equipos potentes con buenas capacidades de procesamiento gráfico son esenciales para ejecutar software de diseño gráfico.</p>
            <p><strong>Tabletas Gráficas:</strong> Para ilustración digital precisa y natural, muchas veces preferidas por los diseñadores para dibujar directamente en la pantalla.</p>
            <p><strong>Monitores Calibrados:</strong> Específicos para diseño gráfico, estos monitores ofrecen una reproducción precisa del color.</p>
            
            <h3>9. Recursos y Bibliotecas:</h3>
            <p><strong>Bancos de Imágenes:</strong> Sitios como Shutterstock, Adobe Stock y Unsplash ofrecen una amplia selección de imágenes y gráficos de alta calidad para uso en diseño.</p>
            <p><strong>Bibliotecas de Tipografías:</strong> Herramientas como Google Fonts y Adobe Fonts proporcionan acceso a una amplia variedad de fuentes tipográficas para usar en diseños.</p>
            
            <div class="imagenes">
              <img src="images/Adobe Creative Suite.png" alt="Imagen 1">
              
              <img src="images/Adobe Photoshop.png" alt="Imagen 2">
              
              <img src="images/Adobe Illustrator.png" alt="Imagen 3">
              
              <img src="images/Adobe XD.png" alt="Imagen 4">
              
              <img src="images/Sketch.png" alt="Imagen 5">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Agregar el contenido al elemento con el id 'info'
  document.getElementById('info').innerHTML = contenidoBoton4;
}

document.getElementById('boton4').addEventListener('click', agregarContenidoBoton4);

// Función para agregar contenido al hacer clic en el botón 5
function agregarContenidoBoton5() {
  const contenidoBoton5 = `
    <div class="container">
      <div class="button-container boton5-info">
        <div class="info">
          <div class="boton5-text">
            <h2 class="boton5-titulo">El Papel del Diseñador Gráfico</h2>
            <p>El diseñador gráfico desempeña un papel fundamental en la creación de comunicaciones visuales efectivas y atractivas. Más allá de ser simplemente artistas, los diseñadores gráficos son comunicadores visuales que combinan habilidades artísticas con conocimientos técnicos para transmitir mensajes y contar historias de manera visualmente impactante.</p>
            
            <h3>1. Comprender las Necesidades del Cliente:</h3>
            <p>Antes de comenzar cualquier proyecto, el diseñador gráfico debe comprender completamente las necesidades y objetivos del cliente. Esto implica reuniones iniciales para discutir el alcance del proyecto, el público objetivo, el mensaje que se desea transmitir y cualquier otra información relevante.</p>
            
            <h3>2. Investigación y Desarrollo de Conceptos:</h3>
            <p>Una vez que se comprenden las necesidades del cliente, el diseñador gráfico realiza investigaciones adicionales. Esto puede incluir investigar la competencia, estudiar tendencias de diseño actuales y recopilar inspiración. Basándose en esta investigación, el diseñador desarrolla conceptos creativos que se alinean con los objetivos del proyecto.</p>
            
            <h3>3. Creación de Bocetos y Diseños Preliminares:</h3>
            <p>Antes de pasar al diseño final, el diseñador gráfico crea bocetos y diseños preliminares. Estos pueden ser bosquejos a mano alzada o diseños digitales que exploran diferentes enfoques visuales. Los bocetos permiten al diseñador visualizar ideas y obtener retroalimentación temprana del cliente.</p>
            
            <h3>4. Selección de Elementos Visuales:</h3>
            <p>El diseñador gráfico es responsable de seleccionar y combinar elementos visuales como imágenes, colores, tipografías y formas. Cada elemento se elige con cuidado para transmitir el mensaje de manera efectiva y captar la atención del público objetivo.</p>
            
            <h3>5. Aplicación de Principios de Diseño:</h3>
            <p>Los diseñadores gráficos aplican los principios fundamentales del diseño gráfico, como equilibrio, contraste, ritmo, espacio y jerarquía, en sus creaciones. Estos principios guían la composición visual y ayudan a crear diseños cohesivos y atractivos.</p>
            
            <h3>6. Uso de Software y Tecnologías:</h3>
            <p>Los diseñadores gráficos son expertos en el uso de software y herramientas tecnológicas específicas para su campo. Esto puede incluir programas como Adobe Photoshop, Illustrator, InDesign, Sketch y otros, dependiendo de las necesidades del proyecto.</p>
            
            <h3>7. Trabajo en Colaboración:</h3>
            <p>En muchos casos, los diseñadores gráficos trabajan en equipos multidisciplinarios que pueden incluir a otros diseñadores, redactores, desarrolladores web y clientes. La colaboración es fundamental para asegurar que el diseño cumpla con las expectativas y objetivos del proyecto.</p>
            
            <h3>8. Presentación y Revisión:</h3>
            <p>Una vez que se completa el diseño, el diseñador gráfico presenta el trabajo al cliente para revisión. Durante esta etapa, se pueden realizar ajustes basados en los comentarios del cliente. La capacidad de recibir críticas constructivas y realizar cambios es una parte importante del proceso creativo.</p>
            
            <h3>9. Gestión de Proyectos y Cumplimiento de Plazos:</h3>
            <p>Los diseñadores gráficos deben ser buenos administradores de tiempo y proyectos. Esto implica establecer y cumplir con plazos, organizar archivos de manera eficiente y asegurarse de que todos los aspectos del proyecto estén en orden.</p>
            
            <h3>10. Mantenerse Actualizado:</h3>
            <p>El campo del diseño gráfico está en constante evolución con nuevas tendencias, tecnologías y herramientas emergentes. Los diseñadores gráficos exitosos están siempre aprendiendo y actualizándose para mantenerse al día con las últimas prácticas y tendencias en diseño.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Agregar el contenido al elemento con el id 'info'
  document.getElementById('info').innerHTML = contenidoBoton5;
}

document.getElementById('boton5').addEventListener('click', agregarContenidoBoton5);
