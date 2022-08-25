/**
 * Template para el popup del mapa
 */
 const popup_template = (row) => {

  const opening_time = 
    `<dt>
        <i class="icono-arg-reloj text-primary"></i> 
        Días y horarios de atención
    </dt>
    <dd class="m-l-2">${row['opening-time']}</dd>`;
  const phone = 
    `<dt>
        <i class="icono-arg-telefono-lineal text-primary"></i> 
        Teléfono del centro
    </dt>
    <dd class="m-l-2">${row.phone}</dd>`;
  const email = 
    `<dt>
        <i class="icono-arg-mail-1 text-primary"></i> Correo electrónico
    </dt>
    <dd class="m-l-2">${row.email}</dd>`;
  const web =
    `<dt><i class="fa fa-link text-primary"></i> Página web</dt>
    <dd class="m-l-2">
      <a href="${row.web}" target="_blank">${row.web}</a>
    </dd>`;
  const hormonizacion_adolescentes = 
    '<li>Hormonización adolescentes (testosterona/estrógenos)</li>'; 
  const hormonizacion_adultos = 
    '<li>Hormonización personas adultas (testosterona/estrógenos)</li>'; 
  const inhibicion_puberal = 
    '<li>Inhibición puberal</li>';
  const reference = 
    `<dt>
      <i class="icono-arg-calendario text-primary"></i>
      Días y horarios
    </dt> 
    <dd class="m-l-2">${row.reference}</dd>`;

  const template = 
    `<article>
        <h1 class="h5 text-primary p-t-1">${row.name} ${row.id}</h1>
        <h2 class="h6">Servicios que se brindan</h2>
        <ul class="m-y-0 m-x-0">
          ${row['filtro-hormonizacion-adolescentes'] == 'SI' ? hormonizacion_adolescentes : ''}
          ${row['filtro-hormonizacion-adultos'] == 'SI' ? hormonizacion_adultos : ''}
          ${row['filtro-inhibicion-puberal'] == 'SI' ? inhibicion_puberal : ''}
        </ul>
        <hr>
        <dl style="font-size:1rem">
            <dt>
              <i class="icono-arg-marcador-ubicacion-1 text-primary" 
                  style="padding-right:.25rem;"></i> 
              Ubicación
            </dt>
            <dd class="m-l-2 m-b-0">
              ${row.address.replace(/[\,\.]$/, '')}.
            </dd>
            <dd class="m-l-2">
              ${[row.locality,row.province].join(', ')}
            </dd>
            ${row.reference ? reference : ''}
            ${row['opening-time'] ? opening_time : ''}  
            ${row.phone ? phone : ''}
            ${row.email ? email : ''}
            ${row.web ? web : ''}
        </dl>
    </article>`;
      
  return template;
};