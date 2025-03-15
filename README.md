# AnyJob Platform

![AnyJob Logo](./client/public/anyjob-logo.jpg)

**AnyJob Platform** is a marketplace that connects customers with vendors offering various services. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), this platform allows users to browse services, connect with vendors, and manage their accounts seamlessly.

## Features

- **Customer Features**:

  - Browse services by category and location
  - View vendor profiles, reviews, and ratings
  - Contact vendors directly through the platform
  - Manage account and payment preferences

- **Vendor Features**:

  - Create and manage service listings
  - Upload photos and descriptions of services
  - Track profile performance with analytics
  - Run ads to increase visibility

- **Admin Features**:
  - Monitor platform activity and user engagement
  - Manage vendor and customer accounts
  - Generate reports on revenue and growth

## Technologies Used

### Frontend

- React.js
- Redux Toolkit
- Redux Query Toolkit
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

### Development Tools

- Git & GitHub
- Postman
- ESLint & Prettier

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Git

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/AvishkaGihan/anyjob-platform.git
cd anyjob-platform
```

2. **Backend Setup**

```bash
cd server
npm install

# Create .env file with:
# MONGO_URI=mongodb://localhost:27017/anyjob
# PORT=5000
# JWT_SECRET=your_jwt_secret

npm run dev
```

3. **Frontend Setup**

```bash
cd ../client
npm install
npm start
```

4. **Access the Application**

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Project Structure

```
anyjob-platform/
├── client/               # Frontend (React)
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── store/
│       ├── api/
│       ├── hooks/
│       └── styles/
└── server/              # Backend (Node.js + Express)
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── config/
    └── utils/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/AvishkaGihan/anyjob-platform](https://github.com/AvishkaGihan/anyjob-platform)

---

Happy Coding! 🚀
