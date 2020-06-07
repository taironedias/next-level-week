## :round_pushpin: init

```bash
# cria o projeto em Node.js default
npm init -y
```

## :bookmark_tabs: Dependencies

**Server (Node.js):**

<img alt="express" src="https://img.shields.io/badge/express-^4.17.1-brightgreen" /> <img alt="celebrate" src="https://img.shields.io/badge/celebrate-^12.1.1-brightgreen" /> <img alt="cors" src="https://img.shields.io/badge/cors-^2.8.5-brightgreen" /> <img alt="knex" src="https://img.shields.io/badge/knex-^0.21.1-brightgreen" /> <img alt="multer" src="https://img.shields.io/badge/multer-^1.4.2-brightgreen" /> <img alt="sqlite3" src="https://img.shields.io/badge/sqlite3-^4.2.0-brightgreen" />


##### Depêndencias do projeto (prodution and development)


```bash
# express (framework para lidar com rotas)
npm install express

# celebrate (middleware de validação para express)
npm install celebrate

# cors (middleware que permite acessar recursos de outros sites)
npm install cors

# knex (SQL query builder para MySQL, SQLite3, Postgres, etc)
npm install knex

# multer (middleware para uploads de arquivos)
npm install multer

# sqlite3 (pacote para gerenciar a persistência dos dados)
npm install sqlite3

# @types/express (módulo para declarar o tipo do express no TypeScript)
npm install @types/express -D

# typescript (módulo para a linguagem TypeScript)
npm install typescript -D

# ts-node (módulo para executar a aplicação em TypeScript)
npm install ts-node -D
```

## :round_pushpin: init TypeScript

```bash
# cria um arquivo de configuração do TypeScript
npx tsc --init
```

## :rocket: run


```bash
# npx (executa um pacote/módulo instalado)
npx ts-node src/server.ts
```

Para facilitar a execução dos arquivos em TypeScript, deve-se instalar o `ts-node-dev`, poiso script fica observando as alterações e dar um reload no servidor (similar ao nodemon).

```bash
npm install ts-node-dev -D
```

Dentro do `package.json` criar um script para facilitar a execução no shell.
```json
"scripts" : {
    "dev" : "ts-node-dev src/server.ts"
}
```
Uma vez a instrução acima definida, fazer a seguinte chamada no shell:
```bash
npm run dev
```