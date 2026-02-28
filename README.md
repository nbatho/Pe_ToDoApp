# Pe_ToDoApp

Ứng dụng quản lý công việc (To-Do App) được xây dựng bằng MERN Stack với Redux Toolkit và Tailwind CSS.

## 📋 Mục lục

- [Giới thiệu](#giới-thiệu)
- [Tính năng](#tính-năng)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt](#cài-đặt)
- [Cấu hình](#cấu-hình)
- [Chạy ứng dụng](#chạy-ứng-dụng)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)

## 🎯 Giới thiệu

Pe_ToDoApp là một ứng dụng quản lý công việc hiện đại, cho phép người dùng tạo, cập nhật, và xóa các task. Dự án được xây dựng với kiến trúc MERN stack (MongoDB, Express, React, Node.js) kết hợp với Redux Toolkit để quản lý state và Tailwind CSS cho giao diện đẹp mắt.

## ✨ Tính năng

- ✅ Thêm task mới
- ✅ Hiển thị danh sách tasks
- ✅ Đánh dấu task hoàn thành/chưa hoàn thành
- ✅ Xóa task
- ✅ Đếm số task đang active
- ✅ Auto refresh danh sách sau khi xóa
- ✅ Giao diện responsive với Tailwind CSS
- ✅ Quản lý state với Redux Toolkit
- ✅ Loading states và error handling

## 🛠 Công nghệ sử dụng

### Backend

- **Node.js** & **Express.js** - Server framework
- **MongoDB** - Database (MongoDB Atlas)
- **Mongoose** - ODM cho MongoDB
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Quản lý environment variables
- **Nodemon** - Auto-restart server khi development

### Frontend

- **React 19** - UI Library
- **Vite** - Build tool & dev server
- **Redux Toolkit** - State management
- **React Redux** - React bindings cho Redux
- **Axios** - HTTP client
- **React Router** - Routing
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📁 Cấu trúc dự án

```
Pe_ToDoApp/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # Cấu hình kết nối MongoDB
│   │   ├── controllers/
│   │   │   └── tasksControllers.js # Controller xử lý logic tasks
│   │   ├── middlewares/            # Middleware (nếu có)
│   │   ├── models/
│   │   │   └── Task.js             # Schema MongoDB cho Task
│   │   ├── routes/
│   │   │   └── tasksRouters.js     # Routes định nghĩa API endpoints
│   │   └── server.js               # Entry point của backend
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── tasks.js            # API calls với axios
│   │   ├── assets/                 # Static assets
│   │   ├── page/
│   │   │   └── DashboardPage.jsx   # Main dashboard component
│   │   ├── routes/
│   │   │   └── index.jsx           # Route configuration
│   │   ├── store/
│   │   │   └── modules/
│   │   │       ├── app/
│   │   │       │   └── index.js
│   │   │       ├── task/
│   │   │       │   └── index.js    # Redux slice cho tasks
│   │   │       ├── configureStore.js # Redux store setup
│   │   │       └── rootReducer.js   # Root reducer
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── eslint.config.js
│
└── README.md
```

## 💻 Yêu cầu hệ thống

- Node.js >= 16.x
- npm hoặc yarn
- MongoDB Atlas account (hoặc MongoDB local)
- Git

## 🚀 Cài đặt

### 1. Clone repository

```bash
git clone https://github.com/nbatho/Pe_ToDoApp.git
cd Pe_ToDoApp
```

### 2. Cài đặt Backend

```bash
cd backend
npm install
```

### 3. Cài đặt Frontend

```bash
cd ../frontend
npm install
```

## ⚙️ Cấu hình

### Backend Configuration

Tạo file `.env` trong thư mục `backend/`:

```env
PORT=5001
USERNAME_DB=your_mongodb_username
PASSWORD_DB=your_mongodb_password
```

**Lưu ý:** Thay thế `your_mongodb_username` và `your_mongodb_password` với credentials MongoDB Atlas của bạn.

### Frontend Configuration

Nếu backend chạy ở port khác, tạo file `.env` trong thư mục `frontend/`:

```env
VITE_BE_API=http://localhost:5001
```

## ▶️ Chạy ứng dụng

### Development Mode

**1. Chạy Backend:**

```bash
cd backend
npm run dev
```

Server sẽ chạy tại: `http://localhost:5001`

**2. Chạy Frontend (terminal mới):**

```bash
cd frontend
npm run dev
```

Frontend sẽ chạy tại: `http://localhost:5173`

### Production Build

**Frontend:**

```bash
cd frontend
npm run build
npm run preview
```

## 📜 Scripts

### Backend Scripts

```json
{
  "dev": "nodemon src/server.js", // Chạy server với nodemon
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

### Frontend Scripts

```json
{
  "dev": "vite", // Chạy dev server
  "build": "vite build", // Build cho production
  "lint": "eslint .", // Lint code
  "preview": "vite preview" // Preview production build
}
```

## 🔌 API Endpoints

Base URL: `http://localhost:5001/api`

### Tasks

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/tasks`     | Lấy tất cả tasks |
| POST   | `/tasks`     | Tạo task mới     |
| PUT    | `/tasks/:id` | Cập nhật task    |
| DELETE | `/tasks/:id` | Xóa task         |

## 🎨 Giao diện

Ứng dụng sử dụng Tailwind CSS với:

- Gradient background đẹp mắt
- Hover effects mượt mà
- Responsive design
- Modern UI components
- Loading states
- Error handling UI

## 🔐 Bảo mật

- CORS được cấu hình để cho phép cross-origin requests
- Environment variables để bảo vệ credentials
- Mongoose schema validation

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

## 👨‍💻 Author

Pe_ToDoApp - MERN Stack Practice Project

---

