# Use uma imagem base Node.js
FROM node:21-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o conteúdo do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta em que a aplicação será executada
EXPOSE 8080

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
