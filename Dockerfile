# Use a imagem base do Node.js 20
FROM node:20

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos do package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação para o contêiner
COPY . .

# Gere o Prisma Client para o ambiente Linux
RUN npx prisma generate

# Exponha a porta que o aplicativo irá usar
EXPOSE 3333

# Defina o comando padrão para iniciar a aplicação
CMD ["npm", "run", "dev"]
