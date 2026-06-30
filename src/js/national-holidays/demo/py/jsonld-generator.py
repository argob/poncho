import urllib.request
import json
import sys
from datetime import datetime, timezone

# Configuración
API_KEY = 'AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY'
API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/'
SPREADSHEET_KEY = '1gu5jRjtdGK1thKBh90BMa8ersRMOKr20GAqOzoVvoG8'
OUTPUT_FILE = '../data/holidays-2026-es.json'
YEAR = '2026'
LANG = 'es-AR'
HOLIDAY_TYPE = dict(
    inamovible = 'Feriado inamovible',
    trasladable = 'Feriado trasladable',
    no_laborable = 'Día no laborable',
    turistico = 'Feriado turístico'
)


def build_url(spreadsheet_key, sheet_name):
    """
    Construye la URL de la API de Google Sheets para obtener los valores de una hoja.

    Args:
        spreadsheet_key (str): ID del spreadsheet de Google Sheets.
        sheet_name (str): Nombre de la hoja dentro del spreadsheet (ej. "2026").

    Returns:
        str: URL completa con la clave de API lista para hacer el request.
    """
    return f"{API_URL}{spreadsheet_key}/values/{sheet_name}?key={API_KEY}&alt=json"


def format_date(raw_date):
    """
    Convierte una fecha del formato DD/MM/YYYY al formato ISO 8601 YYYY-MM-DD.

    Args:
        raw_date (str): Fecha en formato DD/MM/YYYY (ej. "25/05/2026").

    Returns:
        str: Fecha en formato YYYY-MM-DD (ej. "2026-05-25").
    """
    parts = raw_date.split('/')
    return f'{parts[2]}-{parts[1]}-{parts[0]}'


def build_item(position, entry):
    """
    Construye un objeto JSON-LD de tipo ListItem que representa un feriado.

    Args:
        position (int): Posición del ítem en la lista (base 1).
        entry (list): Fila de datos del spreadsheet. Se esperan al menos 3 columnas:
            - entry[0]: Fecha en formato DD/MM/YYYY.
            - entry[1]: Nombre del feriado.
            - entry[2]: Tipo de feriado (ej. "inamovible", "trasladable").

    Returns:
        dict: Objeto JSON-LD con estructura schema.org ListItem > Event.
    """
    return {
        "@type": "ListItem",
        "position": position,
        "item": {
            "@type": "Event",
            "name": entry[1],
            "startDate": format_date(entry[0]),
            "additionalProperty": {
                "@type": "PropertyValue",
                "name": "tipo",
                "value": entry[2]
            },
            "description": HOLIDAY_TYPE[entry[2]],
            "location": {
                "@type": "Country",
                "name": "Argentina",
                
            }
        }
    }


def build_items_list(rows):
    """
    Construye la lista completa de ítems JSON-LD a partir de las filas del spreadsheet.

    Args:
        rows (list[list]): Lista de filas, donde cada fila es una lista de valores
            tal como la devuelve la API de Google Sheets (sin encabezado).

    Returns:
        list[dict]: Lista de objetos ListItem en formato JSON-LD.
    """
    return [build_item(i + 1, row) for i, row in enumerate(rows)]


def build_jsonld(items, year, lang, legal_info=[]):
    """
    Construye el documento JSON-LD completo con metadatos del dataset de feriados.

    Args:
        items (list[dict]): Lista de ítems generada por build_items_list().
        year (str): Año del calendario de feriados (ej. "2026").
        lang (str): Código de idioma BCP 47 (ej. "es-AR").

    Returns:
        dict: Documento JSON-LD con estructura schema.org Dataset > ItemList.
    """
    return {
        "@context": {
            "@vocab": "https://schema.org/",
            "@language": lang
        },
        "@type": "Dataset",
        "name": f"Feriados Nacionales {year}",
        "description": f"Calendario de Feriados Nacionales {year}",
        "dateModified": datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ'),
        "temporalCoverage": year,
        "inLanguage": lang,
        "additionalProperty": {
            "@type": "PropertyValue",
            "name": "timezone",
            "value": "America/Argentina/Buenos_Aires"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Ministerio del Interior"
        },
        "subjectOf": legal_info,
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": len(items),
            "itemListElement": items
        }
    }



def fetch_holidays_legal(year, lang="es"):
    """
    Obtiene los feriados desde Google Sheets y construye el documento JSON-LD.

    Realiza un request HTTP a la API de Google Sheets, valida que la respuesta
    contenga datos y delega la construcción del JSON-LD a build_jsonld().
    Termina el proceso con sys.exit(1) si la hoja no tiene datos.

    Args:
        year (str): Nombre de la hoja del spreadsheet y año del calendario (ej. "2026").
        lang (str): Código de idioma BCP 47 para el documento JSON-LD (ej. "es-AR").

    Returns:
        dict: Documento JSON-LD completo con los feriados del año indicado.
    """
    url = build_url(SPREADSHEET_KEY, 'legal-'+year)
    with urllib.request.urlopen(url) as response:
        json_data = json.loads(response.read().decode('utf-8'))

    if 'values' not in json_data:
        print('no se pudo acceder al listado de legales')
        sys.exit(1)

    legal_items = list()
    for entry in json_data['values'][1:]:
        block = {
            "@type": "CreativeWork",
            "name": entry[0] if len(entry) > 1 and entry[0] else '',
            "description": entry[1] if len(entry) > 1 and entry[1] else ''
        }
        legal_items.append(block)

    return legal_items



def fetch_holidays(year, lang):
    """
    Obtiene los feriados desde Google Sheets y construye el documento JSON-LD.

    Realiza un request HTTP a la API de Google Sheets, valida que la respuesta
    contenga datos y delega la construcción del JSON-LD a build_jsonld().
    Termina el proceso con sys.exit(1) si la hoja no tiene datos.

    Args:
        year (str): Nombre de la hoja del spreadsheet y año del calendario (ej. "2026").
        lang (str): Código de idioma BCP 47 para el documento JSON-LD (ej. "es-AR").

    Returns:
        dict: Documento JSON-LD completo con los feriados del año indicado.
    """
    url = build_url(SPREADSHEET_KEY, year)
    with urllib.request.urlopen(url) as response:
        json_data = json.loads(response.read().decode('utf-8'))

    if 'values' not in json_data:
        print('no se pudo acceder al listado')
        sys.exit(1)

    items = build_items_list(json_data['values'][1:])
    items_legal = fetch_holidays_legal(year)
    return build_jsonld(items, year, lang, items_legal)


def save_jsonld(data, path):
    """
    Serializa el documento JSON-LD, lo imprime en consola y lo guarda en disco.

    Args:
        data (dict): Documento JSON-LD a guardar.
        path (str): Ruta del archivo de salida (ej. "./holidays.json").
    """
    output = json.dumps(data, indent=4, ensure_ascii=False)
    print(output)
    with open(path, 'w') as f:
        f.write(output)


if __name__ == '__main__':
    year = input(f"Año [default {YEAR}]: ").strip() or YEAR
    lang_input = input("Idioma [default es]: ").strip()
    lang = lang_input if lang_input else 'es'
    output_file = f'../data/holidays-{year}-{lang}.json'

    try:
        jsonld = fetch_holidays(year, lang)
        save_jsonld(jsonld, output_file)
    except Exception as e:
        print(f"Error al obtener los datos: {e}")
