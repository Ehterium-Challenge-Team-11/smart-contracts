# 🐢 Galdappagos - Smart Contract

El repositorio de Smart Contracts de NFTs es parte del ecosistema de Galdappagos, una iniciativa que busca incentivar las donaciones a las Islas Galápagos utilizando tecnología blockchain y tokens no fungibles (NFTs).

Este repositorio contiene los contratos inteligentes que permiten la emisión, transferencia y gestión de NFTs vinculados a donaciones específicas. Los NFTs representan activos digitales únicos que pueden ser adquiridos por los donantes como recompensa por su contribución a la conservación de las Islas Galápagos.

## Tabla de Contenido

- 📄 [Descripción](#📄-descripción)
- 💡 [Contrato Inteligente](#💡-contrato-inteligente)
  - 🔧 [Funcionalidad](#🔧-funcionalidad)
  - 📦 [Dependencias](#📦-dependencias)
  - ⚙️ [Requisitos y Configuración](#⚙️-requisitos-y-configuración)
  - 📖 [Uso](#📖-uso)
  - 🌟 [Ejemplos de Uso](#🌟-ejemplos-de-uso)
- 🚀 [Desarrollo](#🚀-desarrollo)
  - 🤝 [Contribución](#🤝-contribución)
  - ✔️ [Pruebas](#✔️-pruebas)
  - 📡 [Despliegue](#📡-despliegue)
- 📜 [Licencia](#📜-licencia)
- 👤 [Autor](#👤-autor)
- 🙏 [Agradecimientos](#🙏-agradecimientos)


# 📄 Descripción

El objetivo principal de este proyecto es proporcionar una plataforma transparente y segura que permita a los donantes recibir NFTs como prueba tangible de su apoyo a la causa. Los contratos inteligentes implementados en este repositorio siguen los estándares ERC721 y hacen uso de la biblioteca OpenZeppelin para garantizar la funcionalidad estándar y la seguridad de los NFTs emitidos.

# 💡 Contrato Inteligente

El contrato inteligente denominado "Galdappagos" implementa un token no fungible (NFT) utilizando el estándar ERC721 de OpenZeppelin. 

## 🔧 Funcionalidad
Este contrato permite la emisión segura de nuevos tokens NFT a través de la función `safeMint`, restringida únicamente al propietario del contrato. Además, hereda y utiliza varios contratos base de OpenZeppelin, como ERC721, ERC721Enumerable y ERC721URIStorage, para proporcionar funcionalidades adicionales relacionadas con la enumeración de tokens y el almacenamiento de metadatos URI.

El contrato también incluye funciones de anulación requeridas por Solidity para personalizar el comportamiento en ciertos casos, como antes de transferir tokens (`_beforeTokenTransfer`), durante la eliminación de un token (`_burn`), para obtener la URI de un token específico (`tokenURI`), y para verificar la compatibilidad de interfaces (`supportsInterface`).

## 📦 Dependencias

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

## ⚙️ Requisitos y Configuración

A continuación, se detallan los pasos y requisitos necesarios para configurar y utilizar el contrato inteligente Galdappagos:

### Requisitos
Versión de Solidity: El contrato inteligente Galdappagos está desarrollado en Solidity y requiere una versión igual o superior a 0.8.9.

### Pasos de Configuración
1. Clona el repositorio de los smart contracts de Galdappagos en tu entorno local.

2. Asegúrate de tener instalado el entorno de desarrollo de Ethereum, que incluye el compilador de Solidity (solc) y el entorno de ejecución de Ethereum (por ejemplo, Ganache o una red de prueba de Ethereum).

3. Abre el archivo del contrato inteligente Galdappagos.sol en tu editor de código preferido.

4. Asegúrate de tener todas las dependencias requeridas instaladas. El contrato inteligente Galdappagos importa diferentes contratos de la biblioteca OpenZeppelin, por lo que debes asegurarte de tener instalada la biblioteca y sus dependencias. Puedes instalar las dependencias ejecutando el siguiente comando en la terminal:

```bash
npm install @openzeppelin/contracts
```
5. Realiza las modificaciones necesarias en el contrato inteligente según tus requisitos específicos. Puedes ajustar los nombres y símbolos del token, así como personalizar las funcionalidades adicionales según tus necesidades.


## 📖 Uso
Instrucciones detalladas sobre cómo utilizar y aprovechar las funciones del contrato inteligente.

1. Compila el contrato inteligente Galdappagos utilizando el compilador de Solidity. Puedes utilizar herramientas como Truffle o Remix para compilar el contrato.

2. Despliega el contrato inteligente Galdappagos en una red de prueba de Ethereum o en la red principal. Asegúrate de contar con los fondos necesarios para realizar la transacción de despliegue.

3. Una vez desplegado, el contrato inteligente Galdappagos estará listo para su uso. Puedes interactuar con él mediante transacciones desde direcciones que tengan los permisos adecuados.

## 🌟 Ejemplos de Uso
Ejemplos prácticos de cómo interactuar con el contrato inteligente en diferentes escenarios.

A continuación, se presentan ejemplos prácticos de cómo interactuar con el contrato inteligente Galdappagos en diferentes escenarios:

### Ejemplo 1: Emisión de un NFT por el Propietario del Contrato

```sol
// Dirección del propietario del contrato
address owner = 0x1234567890123456789012345678901234567890;

// Emisión segura de un nuevo NFT por el propietario del contrato
function emitNFT(address recipient, string memory tokenURI) public {
    require(msg.sender == owner, "Only the contract owner can emit NFTs.");
    safeMint(recipient, tokenURI);
}
```

En este ejemplo, el propietario del contrato, identificado por su dirección de Ethereum, tiene el privilegio de emitir nuevos NFTs de Galdappagos. Llamando a la función `emitNFT` y proporcionando la dirección del destinatario y la URI del token, el propietario puede crear y asignar un nuevo NFT a un destinatario específico.

### Ejemplo 2: Consulta de la URI de un NFT Específico
```sol
// Consulta la URI de un NFT específico
function getNFTURI(uint256 tokenId) public view returns (string memory) {
    require(_exists(tokenId), "Token does not exist.");
    return tokenURI(tokenId);
}
```

En este ejemplo, se muestra cómo consultar la URI de un NFT específico dentro del contrato Galdappagos. Al llamar a la función `getNFTURI` y proporcionar el ID de token, se verifica si el token existe y se devuelve la URI asociada a ese NFT en particular. Esto permite a los usuarios obtener la información y los metadatos vinculados a un NFT específico.

### Ejemplo 3: Transferencia de un NFT a Otro Propietario

```sol
// Transferencia segura de un NFT a otro propietario
function transferNFT(uint256 tokenId, address recipient) public {
    require(_isApprovedOrOwner(msg.sender, tokenId), "You are not the owner of the token.");
    _safeTransfer(msg.sender, recipient, tokenId, "");
}
```

En este ejemplo, se demuestra cómo transferir de forma segura la propiedad de un NFT a otro propietario. Al llamar a la función `transferNFT` y proporcionar el ID del token y la dirección del destinatario, el propietario actual del NFT puede transferir la propiedad a otro usuario. Se verifica si el remitente es el propietario o tiene los permisos necesarios para transferir el token, y luego se realiza la transferencia.


# 🚀 Desarrollo

Información relevante para desarrolladores interesados en contribuir o colaborar con el proyecto.

## 🤝 Contribución
Pautas y reglas para la contribución al proyecto, incluyendo instrucciones sobre cómo clonar el repositorio, configurar el entorno de desarrollo y enviar solicitudes de extracción.

## ✔️ Pruebas

Explicación de cómo ejecutar pruebas unitarias y/o de integración para verificar el correcto funcionamiento del contrato inteligente.

# 📡 Despliegue

Instrucciones sobre cómo desplegar el contrato inteligente en una red blockchain específica, incluyendo consideraciones de seguridad y gas.

# 📜 Licencia
Información sobre la licencia utilizada para el proyecto.

# 👤 Autor
Información sobre el autor o autores del proyecto.

# 🙏 Agradecimientos
Agradecimientos y reconocimientos a personas o proyectos que han contribuido o inspirado el desarrollo del proyecto.