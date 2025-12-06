# 📘 **SyncBook – Dual Database Booking System**

SyncBook is a modern booking management system that stores and syncs booking data in **Airtable and MongoDB**. It allows users to **create, update, delete, and view bookings** with a simple and clean interface. Designed for reliability, scalability, and real-world use cases, SyncBook demonstrates full-stack development with dual-database integration.

---

## 🚀 **Features**

* ➕ Create Bookings
* ✏️ Edit Bookings
* ❌ Delete Bookings
* 📄 View All Bookings
* 🔄 Sync data to **Airtable + MongoDB** simultaneously
* 🛠️ Fully REST API based
* 🌐 Built with Express.js (Backend)
* ⚡ Real-time updates when required
* 🧹 Validation + Error handling

---

## 🗄️ **Tech Stack**

### **Backend**

* Node.js
* Express.js
* Airtable API
* MongoDB + Mongoose

### **Frontend**

* React.js (depending on your setup)

### **Other Tools**

* Dotenv
* Axios / Fetch
* Nodemon (optional)

---

## 📁 **Folder Structure**

```
SyncBook/
 ├── backend/
 │    ├── server.js
 │    ├── routes/
 │    ├── controllers/
 │    ├── models/
 │    ├── config/
 │    └── .env
 ├── frontend/
 │    ├── src/
 ├── package.json
 ├── README.md
 └── .gitignore
```

---

## ⚙️ **Environment Variables (.env)**

```
AIRTABLE_API_KEY=your_key_here
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Bookings
MONGODB_URI=your_mongodb_uri
PORT=3000
```

---

## ▶️ **How to Run**

### **1. Install dependencies**

```
npm install
```

### **2. Start the server**

```
npm start
```

Or with nodemon:

```
npm run dev
```

### **3. Open in browser**

```
http://localhost:3000
```

---

## 🧪 **API Endpoints**

### **Create Booking**

```
POST /bookings
```

### **Get All Bookings**

```
GET /bookings
```

### **Update Booking**

```
PUT /bookings/:id
```

### **Delete Booking**

```
DELETE /bookings/:id
```

---

## 📦 **Dual Database Sync Logic**

Every booking action:

1. Stores data in **MongoDB**
2. Mirrors the same data in **Airtable**
3. Keeps both databases consistent

---

## 🎯 **Why SyncBook?**

* Showcases dual-database architecture
* Clean CRUD operations
* Great for portfolio, interviews, and hackathons
* Demonstrates integration with external APIs (Airtable)

---

## 📝 **Future Enhancements**

* Authentication (JWT)
* Admin dashboard
* Search + Filters + Sorting
* Analytics with charts
* Pagination
* Email notifications
* Advanced Payments Option

---

## 👨‍💻 **Author**

**Aditya**
