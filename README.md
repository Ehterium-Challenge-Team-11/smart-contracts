# Galdappagos - Smart Contract

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

Este contrato inteligente permite la creación y gestión de tokens NFT, siguiendo el estándar ERC721, con funcionalidades adicionales como enumeración y almacenamiento de metadatos URI.

# Contrato Inteligente

El contrato inteligente denominado "Galdappagos" implementa un token no fungible (NFT) utilizando el estándar ERC721 de OpenZeppelin. 

## Funcionalidad
Este contrato permite la emisión segura de nuevos tokens NFT a través de la función `safeMint`, restringida únicamente al propietario del contrato. Además, hereda y utiliza varios contratos base de OpenZeppelin, como ERC721, ERC721Enumerable y ERC721URIStorage, para proporcionar funcionalidades adicionales relacionadas con la enumeración de tokens y el almacenamiento de metadatos URI.

El contrato también incluye funciones de anulación requeridas por Solidity para personalizar el comportamiento en ciertos casos, como antes de transferir tokens (`_beforeTokenTransfer`), durante la eliminación de un token (`_burn`), para obtener la URI de un token específico (`tokenURI`), y para verificar la compatibilidad de interfaces (`supportsInterface`).

## Dependencias

### OpenZeppelin

El Smart Contract "Galdappagos" tiene las siguientes dependencias importadas desde la biblioteca de contratos de OpenZeppelin:

- **ERC721**: Contrato base que implementa el estándar ERC721 para tokens no fungibles.
- **ERC721Enumerable**: Contrato que extiende ERC721 y proporciona funcionalidad adicional para la enumeración de tokens.
- **ERC721URIStorage**: Contrato que extiende ERC721 y agrega capacidad para almacenar y recuperar metadatos URI para cada token.
- **Ownable**: Contrato que proporciona funcionalidad de control de acceso restringida al propietario del contrato.
- **Counters**: Biblioteca utilizada para llevar un registro del contador de tokens.

Estas dependencias se importan mediante las siguientes instrucciones de importación:

```sol
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
```

## Requisitos y Configuración
Pasos y requisitos necesarios para configurar y utilizar el contrato inteligente, incluyendo versiones de Solidity requeridas, instalación de dependencias, etc.

## Uso
Instrucciones detalladas sobre cómo utilizar y aprovechar las funciones del contrato inteligente.

## Ejemplos de Uso
Ejemplos prácticos de cómo interactuar con el contrato inteligente en diferentes escenarios.

# Desarrollo

Información relevante para desarrolladores interesados en contribuir o colaborar con el proyecto.

## Contribución
Pautas y reglas para la contribución al proyecto, incluyendo instrucciones sobre cómo clonar el repositorio, configurar el entorno de desarrollo y enviar solicitudes de extracción.

## Pruebas

Explicación de cómo ejecutar pruebas unitarias y/o de integración para verificar el correcto funcionamiento del contrato inteligente.

# Despliegue

Instrucciones sobre cómo desplegar el contrato inteligente en una red blockchain específica, incluyendo consideraciones de seguridad y gas.

# Licencia
Información sobre la licencia utilizada para el proyecto.

# Autor
Información sobre el autor o autores del proyecto.

# Agradecimientos
Agradecimientos y reconocimientos a personas o proyectos que han contribuido o inspirado el desarrollo del proyecto.