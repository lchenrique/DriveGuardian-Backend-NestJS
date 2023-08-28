# TrackMobil API - Backend de Rastreamento Veicular

A TrackMobil API é a parte backend de um sistema de rastreamento veicular avançado que permite aos usuários monitorar e gerenciar seus veículos de forma eficaz e conveniente. Esta API, construída com Node.js, Nest.js e Prisma, fornece os recursos necessários para coletar e fornecer informações de localização e status dos veículos.

## Funcionalidades Principais

- **Rastreamento em Tempo Real:** Fornecimento contínuo de dados de localização em tempo real dos veículos monitorados.
- **Histórico de Rotas:** Armazenamento e recuperação de informações sobre as rotas percorridas por cada veículo ao longo do tempo.
- **Alertas e Notificações:** Geração e envio de alertas e notificações sobre eventos importantes, como movimentações não autorizadas.
- **Status do Veículo:** Disponibilização de informações detalhadas sobre o status do veículo, como velocidade atual e nível de combustível.

## Como Iniciar

1. Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema.
2. Clone este repositório para o seu ambiente local.
3. No diretório raiz do projeto, abra um terminal.
4. Execute o seguinte comando para iniciar o container da API usando o Docker Compose:

    ````bash
    docker-compose up
    ````
5. A API estará acessível em: `http://localhost:8000`.

## Rotas da API

- `/routes` - Obtém informações sobre as rotas percorridas pelos veículos.
- `/routes/:id` - Obtém informações detalhadas sobre uma rota específica.
- `/places` - Obtém lugares baseados em um termo de busca (`?text=`).
- `/directions` - Obtém direções baseadas em IDs de origem e destino (`?originId=` e `destinationId=`).

## Tecnologias Utilizadas

- Node.js: plataforma de desenvolvimento utilizada para construir a API backend.
- Nest.js: framework para a construção de aplicativos Node.js eficientes e escaláveis.
- Prisma: ORM para facilitar o acesso e manipulação do banco de dados.

---
