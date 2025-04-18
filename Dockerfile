# Sử dụng Node LTS
FROM node:21.5.0

# Tạo thư mục app trong container
WORKDIR /app

# Copy file package
COPY package*.json ./
COPY .env.sample ./.env

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port
EXPOSE 3000

# Chạy app
CMD ["node", "index.js"]
