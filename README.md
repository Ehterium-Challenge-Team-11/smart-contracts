# Galdappagos - Smart Contract
===

Breve descripción o resumen del proyecto.

## Tabla de Contenido

- [Descripción](#descripción)
- [Contrato Inteligente](#contrato-inteligente)
  - [Funcionalidad](#funcionalidad)
  - [Dependencias](#dependencias)
  - [Requisitos y Configuración](#requisitos-y-configuración)
  - [Uso](#uso)
  - [Ejemplos de Uso](#ejemplos-de-uso)
- [Desarrollo](#desarrollo)
  - [Contribución](#contribución)
  - [Pruebas](#pruebas)
  - [Despliegue](#despliegue)
- [Licencia](#licencia)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)


# Descripción
===
Descripción más detallada del proyecto y su objetivo principal.

# Contrato Inteligente
===
El contrato inteligente denominado "Galdappagos" implementa un token no fungible (NFT) utilizando el estándar ERC721 de OpenZeppelin. 

## Funcionalidad
Este contrato permite la emisión segura de nuevos tokens NFT a través de la función safeMint, restringida únicamente al propietario del contrato. Además, hereda y utiliza varios contratos base de OpenZeppelin, como ERC721, ERC721Enumerable y ERC721URIStorage, para proporcionar funcionalidades adicionales relacionadas con la enumeración de tokens y el almacenamiento de metadatos URI.

El contrato también incluye funciones de anulación requeridas por Solidity para personalizar el comportamiento en ciertos casos, como antes de transferir tokens (_beforeTokenTransfer), durante la eliminación de un token (_burn), para obtener la URI de un token específico (tokenURI), y para verificar la compatibilidad de interfaces (supportsInterface).

## Dependencias
Lista de las dependencias utilizadas por el contrato inteligente, como bibliotecas o contratos externos.

## Requisitos y Configuración
Pasos y requisitos necesarios para configurar y utilizar el contrato inteligente, incluyendo versiones de Solidity requeridas, instalación de dependencias, etc.

## Uso
Instrucciones detalladas sobre cómo utilizar y aprovechar las funciones del contrato inteligente.

## Ejemplos de Uso
Ejemplos prácticos de cómo interactuar con el contrato inteligente en diferentes escenarios.

# Desarrollo
===
Información relevante para desarrolladores interesados en contribuir o colaborar con el proyecto.

## Contribución
Pautas y reglas para la contribución al proyecto, incluyendo instrucciones sobre cómo clonar el repositorio, configurar el entorno de desarrollo y enviar solicitudes de extracción.

## Pruebas
===
Explicación de cómo ejecutar pruebas unitarias y/o de integración para verificar el correcto funcionamiento del contrato inteligente.

# Despliegue
===
Instrucciones sobre cómo desplegar el contrato inteligente en una red blockchain específica, incluyendo consideraciones de seguridad y gas.

# Licencia
Información sobre la licencia utilizada para el proyecto.

# Autor
Información sobre el autor o autores del proyecto.

# Agradecimientos
Agradecimientos y reconocimientos a personas o proyectos que han contribuido o inspirado el desarrollo del proyecto.