// File: mongo.js
const mongoose = require('mongoose');

// Sử dụng biến môi trường để lưu trữ URL kết nối
const dbURL = process.env.MONGO_URI || 'mongodb+srv://nguyenthilananhit:Nguyenthilananh!2345@cluster0.9gdnlpv.mongodb.net/suggestfilm';

// ✅ Xoá cache model cũ trước khi tạo mới
mongoose.models = {};
mongoose.modelSchemas = {};

// Tạo schema cho reviews
const reviewSchema = new mongoose.Schema({
  review_id: { type: Number, required: true, unique: true },
  movie_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  review_text: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  created_at: { type: Date, default: Date.now }
});

// Tạo model (đảm bảo tên collection là 'reviews')
const Review = mongoose.model('Review', reviewSchema);

// Hàm kết nối và trả về model Review
async function connectMongo() {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Đã kết nối MongoDB thành công!');

    // 🔄 Xoá collection cũ nếu tồn tại (chỉ khi dev/test)
    try {
      await mongoose.connection.db.dropCollection('reviews');
      console.log('🧹 Đã xoá collection reviews cũ');
    } catch (err) {
      if (err.code === 26) {
        console.log('✅ Collection reviews chưa tồn tại, không cần xoá');
      } else {
        throw err;
      }
    }

    return Review;
  } catch (error) {
    console.error('❌ Lỗi kết nối MongoDB:', error);
    throw error;
  }
}

module.exports = connectMongo;
