# ⚡ POS System

A modern, feature-rich **Point of Sale (POS) System** built with vanilla HTML, CSS, and JavaScript. Designed with a premium glassmorphism UI and a clean layered architecture following the **MVC pattern**.

> **Module:** ITS1119 — Assignment POS System  
> **Author:** Hasitha Wijesinghe  
> **Version:** 1.0.4

---

## ✨ Features

### 🔐 Authentication
- Secure login with username & password validation
- Role-based access control (Admin / Cashier)
- Session-aware logout with confirmation dialog

### 📊 Dashboard
- Real-time statistics — Items count, Customers count, Total Revenue
- Latest placed orders table
- Auto-refreshing data on navigation

### 🛒 Order Management
- Create new orders with customer & item selection
- Dynamic cart system — add, remove, and adjust quantities
- Automatic total, discount, subtotal, and balance calculation
- Cash handling with change/due display
- Order update support from history
- Confirmation dialogs before placing or updating orders

### 📦 Item Management
- Full CRUD operations (Create, Read, Update, Delete)
- Real-time inline search
- Input validation with visual feedback
- Deletion protection for items linked to existing orders

### 👥 Customer Management
- Full CRUD operations
- Real-time inline search
- Input validation with visual feedback

### 📜 Order History
- View all placed orders with details
- Filter by date range (start date / end date)
- Search by keyword
- Click to edit/update existing orders

### 👤 User Management
- Dedicated user manager (loaded via iframe overlay)
- Add new users with real-time field-level validation
- Duplicate detection for phone numbers and email addresses
- Role assignment (Admin / Cashier)
- User table with full details

### 🎨 Theming & UI
- **Glassmorphism design** — frosted-glass cards, translucent backgrounds, blur effects
- **SweetAlert2** integration for all alerts and confirmations (theme-aware)
- Smooth hover effects, micro-animations, and transitions

---

## 🏗️ Architecture

The project follows a clean **MVC (Model-View-Controller)** layered architecture:

```
┌─────────────────────────────────────────────┐
│                   View                      │
│         index.html / user_manager.html      │
│              css/style.css                  │
├─────────────────────────────────────────────┤
│                Controller                   │
│   loginController · dashboardController     │
│   orderController · itemController          │
│   customerController · orderHistoryController│
│   userController                            │
├─────────────────────────────────────────────┤
│                  Model                      │
│   orderModel · itemModel                    │
│   customerModel · userModel                 │
├─────────────────────────────────────────────┤
│                DTO Layer                    │
│   Order · OrderDetails · Item               │
│   Customer · User                           │
├─────────────────────────────────────────────┤
│               Data Store                    │
│            db/data.js (in-memory)           │
└─────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
ITS1119-Assignment-POS-System/
│
├── index.html                  # Main application entry point
├── user_manager.html           # User management iframe page
│
├── css/
│   ├── style.css               # Global styles & glassmorphism design system
│   └── user.css                # User manager specific styles
│
├── controller/
│   ├── loginController.js      # Authentication & logout logic
│   ├── dashboardController.js  # Dashboard stats & latest orders
│   ├── orderController.js      # Order placement, cart, & updates
│   ├── itemController.js       # Item CRUD & table rendering
│   ├── customerController.js   # Customer CRUD & table rendering
│   ├── orderHistoryController.js # Order history, search, & filters
│   └── userController.js       # User CRUD & form validation
│
├── model/
│   ├── orderModel.js           # Order business logic & ID generation
│   ├── itemModel.js            # Item business logic & validation
│   ├── customerModel.js        # Customer business logic & validation
│   └── userModel.js            # User business logic & validation
│
├── dto/
│   ├── order.js                # Order data transfer object
│   ├── orderDetails.js         # Order details data transfer object
│   ├── item.js                 # Item data transfer object
│   ├── customer.js             # Customer data transfer object
│   └── user.js                 # User data transfer object
│
├── db/
│   └── data.js                 # In-memory data store with seed data
│
├── utils/
│   ├── script.js               # Navigation, accent picker, side menu toggle
│   └── showAlert.js            # SweetAlert2 wrapper (showAlert & showConfirm)
│
└── assets/
    └── user-logo.svg           # User profile logo asset
```

---

## 🛠️ Tech Stack

| Layer        | Technology                                                  |
|--------------|-------------------------------------------------------------|
| **Markup**   | HTML5 with semantic elements                                |
| **Styling**  | Vanilla CSS with CSS custom properties & `color-mix()`      |
| **Logic**    | Vanilla JavaScript (ES Modules)                             |
| **UI Framework** | Bootstrap 5.3.8 (grid, utilities, icons)                |
| **Icons**    | Bootstrap Icons 1.13.1                                      |
| **Alerts**   | SweetAlert2                                                 |
| **DOM**      | jQuery 3.7.1 (user manager table rendering)                 |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local web server (required for ES Module `import` statements)

### Running the Application

1. **Clone the repository**
   ```bash
   git clone https://github.com/HasithaLWi/ITS1119-Assignment-POS-System.git
   cd ITS1119-Assignment-POS-System
   ```

2. **Start a local server** — use any of the following:
   ```bash
   # Using VS Code Live Server extension (recommended)
   # Right-click index.html → "Open with Live Server"

   # Or using Python
   python -m http.server 5500

   # Or using Node.js
   npx serve .
   ```

3. **Open in browser**
   ```
   http://localhost:5500
   ```

### Default Login Credentials

| Role     | Username | Password    |
|----------|----------|-------------|
| Admin    | `admin`  | `admin123`  |
| Cashier  | `user1`  | `password1` |
| Cashier  | `user2`  | `password2` |

---

## 📸 Application Sections

| Section          | Description                                      |
|------------------|--------------------------------------------------|
| **Login**        | Glassmorphism login card with validation          |
| **Dashboard**    | Stats overview & latest orders                   |
| **Orders**       | Invoice details, item selection, cart, & checkout |
| **Items**        | Item CRUD with search and table                  |
| **Customers**    | Customer CRUD with search and table              |
| **History**      | Order history with date filters and search        |
| **User Manager** | Admin-only user management overlay               |

---

## 🎨 Design System

### CSS Custom Properties
```css
--bg-main       /* Main background */
--bg-card        /* Card background */
--accent         /* Dynamic accent color (user-selectable) */
--text-main      /* Primary text color */
--text-muted     /* Secondary text color */
--glass-bg       /* Glassmorphism background */
--glass-border   /* Glassmorphism border */
--glass-blur     /* Backdrop blur intensity */
--glass-shadow   /* Glassmorphism shadow */
```

### Accent Color Presets
🔴 Rose `#f04b66` · 🟠 Orange `#ff8c00` · 🟡 Yellow `#f1c40f` · 🟢 Green `#2ecc71` · 🔵 Blue `#3498db` · 🟣 Violet `#9b59b6`

---

## 📝 License

© 2026 **Hasitha Wijesinghe** | All Rights Reserved
