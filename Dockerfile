# Definindo a imagem base
FROM node:18-alpine

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando o arquivo package.json para o diretório de trabalho
COPY package.json ./

# Instalando as dependências do projeto
RUN npm cache clean --force command
RUN npm install
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install jsx-runtime react react-dom react-redux

# Copiando todo o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Expondo a porta utilizada pela aplicação
EXPOSE 3000 3000

# Definindo o comando que deve ser executado para iniciar a aplicação
CMD ["npm", "start"]
