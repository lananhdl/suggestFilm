const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  // uri: process.env.MYSQL_URL || "mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DATABASE}", // Đọc chuỗi kết nối từ biến môi trường
  // uri: "mysql://team1:team1@$localhost:3307/team1" || "mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DATABASE}", // Đọc chuỗi kết nối từ biến môi trường

  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'team1',
  database: process.env.MYSQL_DATABASE || 'team1',
  port: process.env.MYSQL_PORT || '330',
  password: process.env.MYSQL_ROOT_PASSWORD || 'team1',

  ssl: {
    rejectUnauthorized: false // Tương đương --ssl-mode=VERIFY_IDENTITY
  }
});

module.exports = db;
