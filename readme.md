# 🍔 Food Delivery Analytics Dashboard

A full-stack **Food Delivery Analytics Dashboard** designed to analyze and visualize food delivery operations, including revenue, orders, customers, restaurants, deliveries, and business performance.

The application provides an interactive dashboard with analytics charts, tables, authentication, and database-driven insights.

---

## 🚀 Features

### 📊 Dashboard
- Total revenue overview
- Average order value
- Monthly revenue analysis
- Monthly order trends
- Delivery method distribution
- Top-performing restaurants
- Top customers
- Recent orders
- Interactive analytics components

### 📦 Order Analytics
- View order information
- Track order values
- Analyze delivery methods
- Monitor recent orders
- Monthly order statistics

### 👥 Customer Analytics
- Customer information
- Top customers by spending
- Customer spending analysis

### 🍽️ Restaurant Analytics
- Restaurant performance
- Top restaurants by revenue
- Revenue-based restaurant ranking

### 🚚 Delivery Analytics
- Delivery method distribution
- Delivery performance analysis

### 🔐 Authentication
- Login system
- JWT-based authentication
- Protected backend APIs
- Token-based frontend API requests

### 📈 Data Visualization
- Monthly revenue line chart
- Delivery method pie chart
- Interactive tables
- Responsive dashboard layout

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- React Router
- Axios
- Recharts
- Material UI (MUI)
- MUI DataGrid
- React Icons

### Backend

- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Maven
- REST APIs

### Database

- MySQL
- Aiven Cloud MySQL

### Development Tools

- Git
- GitHub
- MySQL Workbench
- VS Code
- IntelliJ IDEA / Eclipse

---

## 🏗️ Architecture

```text
                    ┌─────────────────────────┐
                    │     React Frontend      │
                    │                         │
                    │ React + Vite + MUI      │
                    │ Recharts + Axios        │
                    └────────────┬────────────┘
                                 │
                                 │ REST API
                                 ▼
                    ┌─────────────────────────┐
                    │    Spring Boot Backend  │
                    │                         │
                    │ REST Controllers        │
                    │ Services                │
                    │ JPA Repositories       │
                    │ Spring Security + JWT   │
                    └────────────┬────────────┘
                                 │
                                 │ JDBC / JPA
                                 ▼
                    ┌─────────────────────────┐
                    │      MySQL Database     │
                    │                         │
                    │     Aiven Cloud         │
                    └─────────────────────────┘
