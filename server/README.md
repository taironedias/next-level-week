## init

Criando o projeto em Node.js
```bash
npm init -y
```

##### Depêndencias do projeto (prodution and development)

###### express (framework para lidar com rotas)
```bash
npm install express
```

###### @types/express (módulo para declarar o tipo do express)
```bash
npm install @types/express -D
```

###### typescript (módulo para a linguagem TypeScript)
```bash
npm install typescript -D
```

###### ts-node (módulo para executar a aplicação em TypeScript)
```bash
npm install ts-node -D
```

## init TypeScript
Criar um arquivo de configuração do TypeScript

```bash
npx tsc --init
```

## run

###### npx (executa um pacote/módulo instalado)
```bash
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