const jsonData = [
  {
    desde: "05/03/2024",
    hasta: "",
    horario: "12:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El ministro Luis Petri encabeza el acto de asunción de las autoridades del Servicio Meteorológico Nacional y del Instituto Geográfico Nacional.",
  },
  {
    desde: "05/03/2024",
    hasta: "",
    horario: "9:00:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El secretario de Bioeconomía, Fernando Vilella, participa del corte de cinta e inauguración de la muestra agroindustrial ExpoAgro - Edición YPF Agro, en el predio ferial y autódromo de San Nicolás, provincia de Buenos Aires.",
  },
  {
    desde: "05/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La canciller Diana Mondino mantiene un encuentro con el embajador de Canadá, Reid Douglas Sirrs",
  },
  {
    desde: "05/03/2024",
    hasta: "",
    horario: "16:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La canciller se reúne con el embajador de la República de Azerbaiyán, Ramzi Teymurov.",
  },
  {
    desde: "05/03/2024",
    hasta: "",
    horario: "9:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La ministra Patricia Bullrich encabeza el Encuentro del Consejo de Seguridad Interior, integrado por funcionarios nacionales de la cartera, ministros de todo el país y autoridades provinciales.",
  },
  {
    desde: "05/03/2024",
    hasta: "",
    horario: "17:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La ministra brinda una declaración a la prensa tras la realización del Encuentro, en la sede del Ministerio en la calle México N°12 de la ciudad de Buenos Aires.",
  },
  {
    desde: "05/03/2024",
    hasta: "",
    horario: "9:00:00",
    "filtro-ministerio": "Ministerio del Interior",
    descripcion:
      "El ministro Guillermo Francos participa del corte de cinta e inauguración de la muestra agroindustrial ExpoAgro - Edición YPF Agro, en el predio ferial y autódromo de San Nicolás, provincia de Buenos Aires.",
  },
  {
    desde: "06/03/2024",
    hasta: "",
    horario: "9:30:00",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal Florencia Misrahi participa de la apertura de la 4º Ronda de Evaluaciones Mutuas de las actividades del Grupo de Acción Financiera de Latinoamérica (GAFILAT), en el Palacio San Martín.",
  },
  {
    desde: "06/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal recibe a los Directores Regionales del Interior de la Dirección General Impositiva (DGI) para analizar temas de gestión.",
  },
  {
    desde: "06/03/2024",
    hasta: "",
    horario: "16:00:00",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal se reúne con autoridades de la Asociación de Bancos de la Argentina (ABA); la Asociación de Bancos Públicos y Privados de la República Argentina (ABAPPRA); la Asociación de la Banca Especializada (ABE), y la Asociación de Bancos Argentinos (ADEBA).",
  },
  {
    desde: "06/03/2024",
    hasta: "",
    horario: "12:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri participa del acto en conmemoración del 110º aniversario del paso a la inmortalidad del aviador y precursor de la aeronáutica argentina, Jorge Newbery, en el Círculo de la Fuerza Aérea Argentina.",
  },
  {
    desde: "06/03/2024",
    hasta: "",
    horario: "18:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro asiste al encuentro del Consejo Argentino de Relaciones Internacionales (CARI) en la ciudad de Buenos Aires.",
  },
  {
    desde: "06/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino visita la muestra agroindustrial Expoagro 2024 en el predio ferial y autódromo de San Nicolás, provincia de Buenos Aires.",
  },
  {
    desde: "06/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Salud",
    descripcion:
      "El Ministro Mario Russo mantiene un encuentro de trabajo con el Ministro de Salud de Neuquén, Martín Regueiro.",
  },
  {
    desde: "06/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "9:00:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario de Bioeconomía, Fernando Vilella, asiste a la exposición “La Bioeconomía y los periurbanos” en la muestra agroindustrial Expoagro 2024, que se realiza en el predio ferial y autódromo de San Nicolás, provincia de Buenos Aires.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario mantiene un encuentro con contratistas rurales en la muestra agroindustrial Expoagro 2024.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "12:20:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario participa en Expoagro 2024 del lanzamiento del Congreso de la Asociación Argentina de Productores en Siembra Directa (AAPRESID), que se realizará del 7 al 9 de agosto próximo.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario expone en la conferencia “Bioeconomía, una propuesta superadora para los productores argentinos”, en el Auditorio Prensa de Expoagro 2024.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "5:30:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro Mariano Cúneo Libarona se reúne con el Presidente del Consejo General del Poder Judicial de España, Vicente Guilarte Gutiérrez, en la ciudad de Madrid.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "14:30:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro sostiene un encuentro con autoridades de la Conferencia de Ministros de Justicia de los Países Iberoamericanos (COMJIB) en la sede de la Secretaría General Iberoamericana (SEGIB) en Madrid.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro expone en la conferencia “Las controversias del Derecho Penal” en la sede de la SEGIB, presentado por el Fiscal de Sala de Cooperación Internacional de España, Francisco Jiménez Villarejo; el Director del Programa El PAcCTO 2.0, Javier Samper Orgilés, y el Secretario General de la COMJIB, Enrique Gil Botero.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "13:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino recibe a autoridades de la Organización para la Cooperación Islámica (OCI) en el Palacio San Martín.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller mantiene un encuentro de trabajo con miembros de la Comisión de Asuntos Económicos del Parlamento Alemán.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "17:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller encabeza el lanzamiento del programa German Accelerator del Ministerio Federal de Economía y Protección del Clima de Alemania, que proporciona apoyo global a start-ups tecnológicas, en el Parque de la Innovación de la ciudad de Buenos Aires.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "12:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich presenta el Plan “Cosecha Segura” en la Expoagro 2024, con el objetivo de monitorear el flujo de camiones para prevenir delitos vinculados a la logística.\n\r\nTras la presentación, la Ministra brinda una declaración a la prensa y recorre la muestra agroindustrial que se realiza en el predio ferial y autódromo de San Nicolás, provincia de Buenos Aires.",
  },
  {
    desde: "07/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "10:30:00",
    "filtro-ministerio": "Administración Federal Ingresos Públicos",
    descripcion:
      "La Administradora Federal Florencia Misrahi mantiene una reunión de trabajo con Equipo de Liderazgo de la AFIP.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Administración Federal Ingresos Públicos",
    descripcion:
      "La Administradora Federal sostiene una audiencia con la Comisión Nacional de Excombatientes de Malvinas.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Jefatura de Gabinete de Ministros",
    descripcion:
      "El Jefe de Gabinete, Nicolás Posse, recibe a los Gobernadores de las provincias para mantener una reunión de trabajo en el Salón Eva Perón de Casa Rosada.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "5:30:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro Mariano Cúneo Libarona mantiene un encuentro con la prensa española y brinda entrevistas a los diarios ABC y El Mundo y las agencias EFE y Europa Press.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "7:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro se reúne con las Fiscales de Sala del Tribunal Supremo de España, Elvira Tejera, Coordinadora Nacional contra la Criminalidad Informática, y Miriam Bahamonde, Encargada de Cooperación en Temas de Ciberdelito.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro expone como orador invitado en el acto de clausura de la Cumbre de Mujeres Juristas organizada por el Colegio de la Abogacía de Madrid.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro sostiene un encuentro con empresarios para analizar la reinserción de Argentina en el mundo y la seguridad jurídica para inversores.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "16:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro participa de un encuentro de networking en el marco de la Feria ARCO Madrid 2024, organizado por la Embajada argentina en España.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino encabeza el acto en conmemoración del Día Internacional de la Mujer en el Palacio San Martín.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio del Interior",
    descripcion:
      "El Ministro Guillermo Francos participa de la reunión con los Gobernadores de las provincias en el Salón Eva Perón de Casa Rosada.",
  },
  {
    desde: "08/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "11/03/2024",
    hasta: "",
    horario: "",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri participa de la conferencia de prensa en la sede de la Gobernación de Santa Fe en la ciudad de Rosario.",
  },
  {
    desde: "11/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino recibe al embajador de El Salvador, Eduardo José Cardozo Mata.",
  },
  {
    desde: "11/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Ministerio de Salud",
    descripcion:
      "El Ministro Mario Russo mantiene una reunión con la Ministra de Salud de la provincia de Río Negro, Ana Senesi.",
  },
  {
    desde: "11/03/2024",
    hasta: "",
    horario: "10:15:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich viaja a Rosario, Santa Fe, donde mantendrá una reunión de trabajo con el Gobernador Maximiliano Pullaro y el Intendente Pablo Javkin para analizar la situación en el territorio.\n \nTras el encuentro, la Ministra brinda una conferencia de prensa en la sede de la Gobernación de Santa Fe en la ciudad de Rosario.",
  },
  {
    desde: "11/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini se reúne con el Secretario de Hacienda, Carlos Guberman.",
  },
  {
    desde: "11/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "12/03/2024",
    hasta: "",
    horario: "18:00:00",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal Florencia Misrahi participa de la disertación “Los desafíos centrales de la AFIP a comienzos del siglo XXI”, organizada por la Asociación Argentina de Estudios Fiscales.",
  },
  {
    desde: "12/03/2024",
    hasta: "",
    horario: "12:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro Mariano Cúneo Libarona sostiene una audiencia con el embajador de la República de la India, Dinesh Bhatia.",
  },
  {
    desde: "12/03/2024",
    hasta: "",
    horario: "16:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro se reúne con miembros del Observatorio de Víctimas de Delitos (OVD).",
  },
  {
    desde: "12/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      'La Canciller Diana Mondino participa del encuentro de negocios AmCham Summit 2024, organizado por la Cámara de Comercio de los Estados Unidos en Argentina, y expone en el panel "Argentina - EEUU: el futuro de una relación estratégica".',
  },
  {
    desde: "12/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller se reúne con la Conferencia Episcopal Argentina en Casa Rosada.",
  },
  {
    desde: "12/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "13/03/2024",
    hasta: "",
    horario: "",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal Florencia Misrahi viaja a la República de Panamá para participar de la 210° Reunión del Consejo Directivo del Centro Interamericano de Administraciones Tributarias (CIAT), que se realizará los días 14 y 15 de marzo.",
  },
  {
    desde: "13/03/2024",
    hasta: "",
    horario: "16:00:00",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal se reúne con el Director de la Dirección General de Ingresos (DGI) de Panamá, Publio de Gracia, en el marco de la misión internacional que se lleva a cabo.",
  },
  {
    desde: "13/03/2024",
    hasta: "",
    horario: "13:30:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich presenta el nuevo Reglamento General para el Empleo de Armas de Fuego por parte de las Fuerzas Federales de Seguridad en la sede del Ministerio.",
  },
  {
    desde: "13/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Ministerio del Interior",
    descripcion:
      "El Ministro Guillermo Francos recibe en Casa Rosada al Gobernador de Mendoza, Alfredo Cornejo.",
  },
  {
    desde: "13/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini se reúne con el Secretario de Energía, Eduardo Rodríguez Chirillo.",
  },
  {
    desde: "13/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario participa de la reunión semanal de voceros de los ministerios en Casa Rosada",
  },
  {
    desde: "13/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "14/03/2024",
    hasta: "",
    horario: "13:30:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario de Bioeconomía, Fernando Vilella, participa del Iguazú Summit sobre “Implementación del Reglamento de Deforestación de la Unión Europea en los países del Mercosur” y expone en la sesión de la tarde de la cumbre junto al embajador de Alemania, Dieter Lamlé.",
  },
  {
    desde: "14/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "15/03/2024",
    hasta: "",
    horario: "",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal Florencia Misrahi participa, en la República de Panamá, de la 210° Reunión del Consejo Directivo del Centro Interamericano de Administraciones Tributarias (CIAT).",
  },
  {
    desde: "15/03/2024",
    hasta: "",
    horario: "10:15:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario de Bioeconomía, Fernando Vilella, asiste a la segunda jornada de la Iguazú Summit sobre “Implementación del Reglamento de Deforestación de la Unión Europea en los países del Mercosur” y participa de una mesa de debate junto a representantes de Paraguay, Uruguay, Brasil y Alemania.",
  },
  {
    desde: "15/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich monitorea una quema de armas de fuego en el Banco Nacional de Materiales Controlados en la localidad bonaerense de San Martín.",
  },
  {
    desde: "15/03/2024",
    hasta: "",
    horario: "13:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra se reúne con el Director y el Gerente de la Comisión Nacional de Regulación del Transporte (CNRT), Edgar Pérez y Walter Ramírez Moyano, en la sede del Ministerio.",
  },
  {
    desde: "15/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "18/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El ministro Luis Petri participa del acto central de homenaje por el 32 aniversario del atentado contra la Embajada de Israel.",
  },
  {
    desde: "18/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El ministro Mariano Cúneo Libarona participa del acto central de homenaje por el 32 aniversario del atentado contra la Embajada de Israel.",
  },
  {
    desde: "18/03/2024",
    hasta: "",
    horario: "",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich viaja a la provincia de Córdoba, donde visitará lugares y destacamentos de las diferentes fuerzas federales.",
  },
  {
    desde: "18/03/2024",
    hasta: "",
    horario: "16:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra brindará una conferencia de prensa una vez finalizada la recorrida.",
  },
  {
    desde: "18/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal Florencia Misrahi recibe los resultados preliminares de la Primera Evaluación de Diagnóstico realizada con la herramienta TADAT por funcionarios del Fondo Monetario Internacional (FMI) en conjunto con el Banco Interamericano de Desarrollo (BID).",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal mantiene un encuentro de trabajo con autoridades de la Asociación de Fabricantes de Automotores (ADEFA).",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "8:30:00",
    "filtro-ministerio": "Gabinete Nacional",
    descripcion:
      "Se realiza la reunión del Gabinete de Ministros en el Salón Eva Perón de Casa Rosada.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "13:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri viaja a Rosario, Santa Fe, y monitorea el despliegue del equipamiento de las Fuerzas Armadas para la lucha contra el narcotráfico, junto al Gobernador Maximiliano Pullaro y el Intendente Pablo Javkin.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "18:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro mantiene un encuentro protocolar en la Embajada de los Estados Unidos en la ciudad de Buenos Aires.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro Mariano Cúneo Libarona encabeza la primera reunión del Consejo Asesor Interinstitucional de la Reforma Procesal Penal Federal, que contará con la presencia de representantes de todas las áreas y órganos vinculados al Poder Judicial de la Nación, en el Salón de los Pueblos Originarios de Casa Rosada.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro brinda una conferencia de prensa en Casa Rosada para informar los resultados del primer encuentro del Consejo Asesor Interinstitucional de la Reforma Procesal Penal Federal.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "2:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino arriba a la ciudad de Hanoi, Vietnam, para comenzar su gira asiática que incluirá también visitas oficiales a Malasia y Japón.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "4:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller se reúne con el Primer Ministro de Vietnam, Pham Minh Chinh.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "6:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller sostiene un encuentro con su par de Vietnam, Bui Thanh Son.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "23:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino mantiene un encuentro con el Viceministro de Agricultura y Desarrollo Rural de Vietnam, Phung Duc Tien.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio": "Ministerio de Salud",
    descripcion:
      "El Ministro Mario Russo participa de la Reunión Ordinaria de la Comisión Nacional de Alimentos (CONAL) junto a autoridades del Ministerio y de la Secretaría de Bioeconomía.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich participa de la primera reunión del Consejo Asesor Interinstitucional de la Reforma Procesal Penal Federal en Casa Rosada.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "20:30:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini asiste a una cena organizada por la Asociación de Entidades Periodísticas Argentinas (ADEPA), en el marco de la 184° Reunión de la Junta de Directores.",
  },
  {
    desde: "19/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri encabeza el acto de asunción de las nuevas autoridades de la Universidad de la Defensa Nacional (UNDEF)",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "18:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro se reúne con el embajador de Alemania, Dieter Lamlé.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario de Bioeconomía, Fernando Vilella, mantiene una reunión de trabajo con el embajador de Francia, Romain Nadal.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "14:30:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro Mariano Cúneo Libarona sostiene un encuentro con autoridades de la Delegación de la Unión Europea en la Argentina para analizar la agenda de trabajo conjunto con la nueva Jefa de Proyectos, Ilse Cougé.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "0:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller se reúne con el Ministro de Industria y Comercio de Vietnam, Nguyen Hong Dien.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "8:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller participa de una cena de trabajo con empresarios argentinos y vietnamitas.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "23:15:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino recorre la Embajada Argentina en Tokio, en el marco de su visita oficial a Japón.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "23:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller mantiene un almuerzo de trabajo con empresarios.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "9:30:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich brinda una conferencia de prensa para presentar el Sistema Despacho Electrónico de Embarcaciones Deportivas, en el Edificio Guardacostas de la Prefectura Naval Argentina en la ciudad de Buenos Aires.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "12:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini se reúne con el Secretario General de la Unión del Personal Civil de la Nación (UPCN), Luis Carrillo.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "13:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario mantiene un encuentro con miembros del Consejo Directivo de la Asociación de Teleradiodifusoras Argentinas (ATA).",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "14:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario participa de la reunión semanal de voceros de los ministerios en Casa Rosada.",
  },
  {
    desde: "20/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Administración Federal de Ingresos Públicos",
    descripcion:
      "La Administradora Federal Florencia Misrahi participa del acto de inicio del ciclo lectivo de la Escuela del Cuerpo de Abogados y Abogadas del Estado (ECAE) en el auditorio del Banco de la Nación Argentina, donde dictará una clase magistral el Procurador del Tesoro Nacional, Rodolfo Barra.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "8:30:00",
    "filtro-ministerio": "Gabinete Nacional",
    descripcion:
      "Se realiza la reunión del Gabinete de Ministros en el Salón Eva Perón de Casa Rosada.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "12:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri brinda una conferencia de prensa en Casa Rosada con la Ministra de Seguridad, Patricia Bullrich, para presentar Proyectos de Ley conjuntos.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "18:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro Mariano Cúneo Libarona ofrece una charla en la Universidad Católica Argentina (UCA) para alumnos de la carrera de especialización en Derecho Penal.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "19:30:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro se reúne con el Gobernador de Santa Fe, Maximiliano Pullaro.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "21:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino se reúne con el Vicepresidente para América y Caribe de Toyota, Hidemoto Asakura.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "22:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller participa de un encuentro con la Cámara de Comercio e Industria de Japón.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "2:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller se reúne con el Presidente de la Organización de Comercio Exterior de Japón, Norihiko Ishiguro.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "3:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller sostiene un encuentro con el Jefe de la Oficina Regional Asia del Banco Interamericano de Desarrollo (BID), Hideharu Takana.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "7:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion: "La Canciller se reúne con su par de Japón, Yoko Kamikawa.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "12:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich brinda una conferencia de prensa en Casa Rosada con el Ministro de Defensa, Luis Petri, para presentar Proyectos de Ley conjuntos.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "17:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra encabeza la ceremonia de designación y entrega de sables a Suboficiales de la Prefectura Naval Argentina.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini se reúne con el Secretario de Comunicación de San Luis, Diego Masci.",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini mantiene un encuentro con directivos de la Asociación de Radiodifusoras Privadas Argentinas (ARPA).",
  },
  {
    desde: "21/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "8:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri visita la Escuela Militar de Montaña del Ejército Argentino en la ciudad de Bariloche, Río Negro.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario de Bioeconomía, Fernando Vilella, encabeza la reunión del Consejo Federal Agropecuario (CFA), que agrupa a los Ministros de Agricultura de todas las provincias.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro Mariano Cúneo Libarona mantiene reuniones en Rosario, Santa Fe, con jueces de todo el distrito, integrantes de la Cámara Federal, del Tribunal Oral Federal, del Colegio de Abogados, del Ministerio Público Fiscal Federal y del Ministerio Público de la Defensa.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "13:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro brinda una conferencia de prensa en la sede del Tribunal Oral en lo Criminal Federal N°2 de Rosario.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "3:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller mantiene una reunión con el Ministro de Educación, Cultura, Deportes, Ciencia y Tecnología de Japón, Masahito Moriyama.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "4:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller sostiene un encuentro con la Vicepresidente de la Agencia de Cooperación Internacional de Japón, Katsura Miyazaki.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "6:30:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller se reúne con organismos y empresas argentinas y japonesas.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich brinda una conferencia de prensa para anunciar la decisión del Gobierno Nacional de ofrecer a los efectivos de las fuerzas federales asistencia legal en causas que resulten consecuencia del ejercicio de sus funciones, en la sede del Ministerio.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini se reúne con el Director de Televisión Pública, Juan Parodi, y el Director de Radio Nacional, Héctor Cavallero.",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini mantiene un encuentro de trabajo con el Ministro del Interior, Guillermo Francos",
  },
  {
    desde: "22/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "25/03/2024",
    hasta: "",
    horario: "10:30:00",
    "filtro-ministerio": "Administración Federal Ingresos Públicos",
    descripcion:
      "La Administradora Federal Florencia Misrahi mantiene una audiencia con el embajador de la India, Dinesh Bhatia.",
  },
  {
    desde: "25/03/2024",
    hasta: "",
    horario: "17:00:00",
    "filtro-ministerio": "Ministerio de Capital Humano",
    descripcion:
      "El Secretario de Educación, Carlos Torrendel, se reúne con el Ministro de Justicia, Mariano Cúneo Libarona.",
  },
  {
    desde: "25/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri mantiene un encuentro con el embajador del Reino Unido, Christine Hayes.",
  },
  {
    desde: "25/03/2024",
    hasta: "",
    horario: "13:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro Mariana Cúneo Libarona participa del acto de cierre del trabajo realizado en el país por el Grupo de Acción Financiera (GAFI), en el Palacio San Martín.",
  },
  {
    desde: "25/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro mantiene un encuentro de trabajo con la Directora Ejecutiva del Centro de Administración de Derechos Reprográficos de Argentina (CADRA), Magdalena Iraizoz, para analizar los derechos de autor en el mundo editorial.",
  },
  {
    desde: "25/03/2024",
    hasta: "",
    horario: "17:00:00",
    "filtro-ministerio": "Ministerio de Justicia",
    descripcion:
      "El Ministro se reúne con el Secretario de Educación, Carlos Torrendel.",
  },
  {
    desde: "25/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich visita el Escuadrón N°4 de la Gendarmería Nacional Argentina en el Barrio Ejército de los Andes ‘Fuerte Apache’, en la localidad bonaerense de Tres de Febrero.",
  },
  {
    desde: "25/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Presidencial Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "26/03/2024",
    hasta: "",
    horario: "8:30:00",
    "filtro-ministerio": "Gabinete Nacional",
    descripcion:
      "Se realiza la reunión del Gabinete de Ministros en el Salón Eva Perón de Casa Rosada.",
  },
  {
    desde: "26/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri sostiene un encuentro con el Ministro de Defensa del Reino de Dinamarca, Troels Lund Poulsen, con motivo de su visita oficial a la Argentina.",
  },
  {
    desde: "26/03/2024",
    hasta: "",
    horario: "16:00:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario de Bioeconomía, Fernando Vilella, mantiene una reunión con el Jefe de Gobierno de la Ciudad Autónoma de Buenos Aires, Jorge Macri.",
  },
  {
    desde: "26/03/2024",
    hasta: "",
    horario: "18:00:00",
    "filtro-ministerio": "Ministerio de Seguridad",
    descripcion:
      "La Ministra Patricia Bullrich mantiene un encuentro con integrantes mujeres de la Policía de Seguridad Aeroportuaria (PSA).",
  },
  {
    desde: "26/03/2024",
    hasta: "",
    horario: "10:00:00",
    "filtro-ministerio": "Ministerio del Interior",
    descripcion:
      "El Ministro Guillermo Francos se reúne con los Gobernadores del Norte Grande en la provincia de Salta, en el marco de la 19° asamblea de mandatarios de la región.",
  },
  {
    desde: "26/03/2024",
    hasta: "",
    horario: "16:00:00",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "El Secretario Eduardo Serenellini se reúne con voceros de las Embajadas en el país y voceros de los Ministerios",
  },
  {
    desde: "26/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Presidencial Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "27/03/2024",
    hasta: "",
    horario: "12:00:00",
    "filtro-ministerio": "Ministerio de Defensa",
    descripcion:
      "El Ministro Luis Petri participa de un vuelo de control de buques pesqueros en la milla 200 del mar Argentino.",
  },
  {
    desde: "27/03/2024",
    hasta: "04/04/2024",
    horario: "12:00:00",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Secretario de Bioeconomía Fernando Vilella se reúne con el Director General del IICA, Manuel Otero, y su asesor especial Jorge Werthein.",
  },
  {
    desde: "27/03/2024",
    hasta: "",
    horario: "9:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller Diana Mondino presenta el catálogo digital de la Bienal de Venecia.",
  },
  {
    desde: "27/03/2024",
    hasta: "",
    horario: "13:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller se reúne con el Instituto Interamericano de Cooperación para la Agricultura (IICA).",
  },
  {
    desde: "27/03/2024",
    hasta: "",
    horario: "15:00:00",
    "filtro-ministerio":
      "Ministerio de Relaciones Exteriores, Comercio Internacional y Culto",
    descripcion:
      "La Canciller mantiene un encuentro con el Canciller de Georgia.",
  },
  {
    desde: "27/03/2024",
    hasta: "",
    horario: "11:00:00",
    "filtro-ministerio": "Vocería Presidencial",
    descripcion:
      "El Vocero Presidencial Manuel Adorni brinda una conferencia de prensa en Casa Rosada.",
  },
  {
    desde: "01/04/2024",
    hasta: "05/04/2024",
    horario: "",
    "filtro-ministerio": "Secretaría de Prensa",
    descripcion:
      "# El secretario Eduardo [https://www.google.com](Serenellini)  [Duck Duck Go](https://duckduckgo.com) se reúne con el secretario de Empresas y Sociedades del Estado, Mauricio González Botto.",
  },
  {
    desde: "07/05/2024",
    hasta: "",
    horario: "",
    "filtro-ministerio": "Ministerio de Economía",
    descripcion:
      "El Ministro Luis Caputo viaja junto al Secretario de Finanzas, Pablo Quirno, a Punta Cana, República Dominicana, para asistir a la Reunión Anual de la Asamblea de Gobernadores del Banco Interamericano de Desarrollo (BID) y a la Asamblea Anual y Reunión del Directorio de CAF Banco de Desarrollo de América Latina y el Caribe.",
  },
];

module.exports = jsonData;
