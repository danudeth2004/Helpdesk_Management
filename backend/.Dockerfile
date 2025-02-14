# ใช้ Node.js base image
FROM node:16

# กำหนด working directory
WORKDIR /usr/src/app

# คัดลอก package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมด
COPY . .

# เปิด port ที่ใช้
EXPOSE 5000

# รันแอป
CMD ["npm", "run", "dev"]
