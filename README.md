# 🚀 Greeting App

A simple **React & Node.js** application that allows users to enter their name and receive a **greeting message** from the backend API.

---

## ✨ Features

- ✅ Simple UI with React & Tailwind CSS  
- ✅ Backend API built using Node.js & Express  
- ✅ Frontend communicates with the API using Axios  
- ✅ Proper error handling for missing names  
- ✅ Easy setup and deployment  
- ✅ **Custom Hook for API calls**  

---

## 🛠️ Technologies Used

### **Frontend**
- **React.js**: JavaScript library for building the UI  
- **Axios**: HTTP client for making API requests  
- **Tailwind CSS**: Utility-first CSS framework for styling  

### **Backend**
- **Node.js**: Runtime environment for server-side JavaScript  
- **Express.js**: Framework for handling API routes  
- **CORS**: Middleware for enabling cross-origin requests  

---

## 🚀 Installation and Setup

### **Prerequisites**  
Ensure you have the following installed on your system:  
- [Node.js](https://nodejs.org/) (v16+)

---

### **Steps**

#### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/SuhaniKapasiya/ScreeningTask.git
```

#### 2️⃣ Install Dependencies  
```bash
# Backend
..cd
cd backend
npm install

# Frontend
..cd
cd frontend
npm install
```

#### 3️⃣ Start the Application  
```bash
# Start the Backend
cd backend
node server.js
```

#### 4️⃣ Start the Frontend  
```bash
cd ../frontend
npm start
```

#### 5️⃣ Open the App in Your Browser  
Visit: [http://localhost:3000/](http://localhost:3000/)

---

## 🔗 API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint  | Description |
|--------|----------|-------------|
| GET    | `/greet` | Returns a greeting message |

#### Example Request
```http
GET /api/greet?name=John
```

#### Example Response
```json
{
  "message": "Hello, John!"
}
```

#### Error Handling (If no name is provided)
```json
{
  "error": "Name is required."
}
```

---

## 🎨 UI Components

### **Greeting Form (`GreetingComponent.js`)**
- Accepts user input (name)
- Sends a request to the backend API
- Displays the greeting response

---

## 🔄 Custom Hook (`useGreeting.js`)

### **What it does**
- Handles fetching the greeting message from the backend API.
- Manages the response and error handling.
- Stores the greeting message in state.

### **Advantages of using the custom hook**
- **Code Reusability**: Encapsulates API logic, making it reusable across components.
- **Separation of Concerns**: Keeps API logic separate from UI components.
- **Improved Readability**: Simplifies components by offloading state management and API calls.

Usage example:
```javascript
const { message, getGreeting } = useGreeting();
```

---

## 📜 License

This project is licensed under the **MIT License**.

