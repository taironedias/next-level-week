## :round_pushpin: init

Utilizando o **npx** para executar o módulo **create-react-app** e assim criar o projeto com o Hello World. O terceiro parâmetro é o nome do projeto (nesse caso, defini como **web**). Por fim, o quarto parâmetro informamos o template a ser utilizado na criação, como desenvolveremos utilizando o TypeScript, chamamos o **--template=typescript**.

```bash
npx create-react-app web --template=typescript
```
## :bookmark_tabs: Dependencies

**Web (ReactJS):**
  
<img alt="axios" src="https://img.shields.io/badge/axios-^0.19.2-blue" /> <img alt="axios" src="https://img.shields.io/badge/leaflet-^1.6.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react-^16.13.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--dom-^16.13.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--dropzone-^11.0.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--icons-^3.10.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--leaflet-^2.7.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--router--dom-^5.2.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--scripts-3.4.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/typescript-^3.7.5-blue" />

```bash
# axios (middleware para conexão com APIs)
npm install axios

# leaflet (biblioteca JS open-source para mapas)
npm install leaflet

# react-dom (pacote que facilitar a renderização de elementos na DOM)
npm install react-dom

# react-dropzone (React hook para criar um elemento drag'n'drop para arquivos)
npm install react-dropzone

# react-icons (pacote que inclui icons do Font Awesome, Material Design Icons, Feather, etc)
npm install react-icons

# react-leaflet (pacote para utilizar o leaflet no react)
npm install react-leaflet
```

## :rocket: run

```bash
# normalmente é executado na porta 3000
npm start
```