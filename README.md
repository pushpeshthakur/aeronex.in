# Aeronex

A full-stack industrial product website and quotation management platform built for **Aeronex**. The project combines a responsive React frontend with a Node.js/Express backend, MongoDB data storage, customer quotation submission, and a protected admin dashboard for reviewing quotation requests.

## Live Project

- **Frontend:** https://aeronex-in.vercel.app
- **Backend API:** https://aeronex-in.onrender.com

> The admin portal is intended for authorized administrators.

---

## Features

### Customer Website
- Responsive landing page for Aeronex industrial products
- Product showcase and dedicated products page
- Responsive navigation
- Product and company-focused content sections
- Quote/enquiry form
- Form validation using required fields
- Success and error feedback after form submission
- Mobile-friendly layout

### Quote Management
Customers can submit:
- Full name
- Company name
- Email
- Phone number
- City
- Pincode
- Enquiry/reason
- Message

Submitted quotation data is stored in MongoDB through the Express REST API.

### Admin Portal
- Dedicated admin login
- Password verification using `bcryptjs`
- JWT-based authentication
- JWT stored in an HTTP-only cookie
- Protected quotation API
- Admin dashboard displaying quotation requests
- Total quotation count
- Desktop table view
- Mobile card view
- Admin logout

### Deployment
- Frontend deployed using Vercel
- Backend deployed using Render
- Environment variables used for backend URL, MongoDB connection, JWT secret, and frontend origin

---

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| React Router | Client-side routing |
| Axios | API requests |
| Tailwind CSS | Responsive styling |
| Vite | Frontend build tool |
| Lucide React | UI icons |
| Framer Motion | UI/animation support |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Admin authentication |
| bcryptjs | Password hashing/verification |
| Cookie Parser | HTTP cookie handling |
| CORS | Cross-origin API access |
| dotenv | Environment configuration |

---

## Project Structure

```text
Aeronex/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── admin.controller.js
│   │   │   └── quote.controller.js
│   │   │
│   │   ├── db/
│   │   │   └── db.js
│   │   │
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── admin.model.js
│   │   │   └── quote.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── admin.routes.js
│   │   │   └── quote.routes.js
│   │   │
│   │   └── createAdmin.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── public/
│   │   └── logo.png
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── QuoteForm.jsx
│   │   │   ├── Reveal.jsx
│   │   │   ├── SectionHead.jsx
│   │   │   ├── Try.jsx
│   │   │   └── WhyChoose.jsx
│   │   │
│   │   ├── data/
│   │   │   └── Content.js
│   │   │
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── Home.jsx
│   │   │   └── ProductsPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
├── .gitignore
└── README.md
```

---

## Application Flow

```text
Customer
   │
   ▼
Aeronex React Website
   │
   │ Submit Quote
   ▼
Express REST API
   │
   ▼
MongoDB
   │
   │
   ▼
Admin Login
   │
   ▼
JWT HTTP-only Cookie
   │
   ▼
Protected Admin API
   │
   ▼
Admin Dashboard
   │
   ▼
View Quote Requests
```

---

## API Endpoints

### Customer Quote API

#### Create Quote

```http
POST /api/quote/upload
```

Example request body:

```json
{
  "fullName": "John Doe",
  "companyName": "Example Industries",
  "email": "john@example.com",
  "phoneNumber": "9876543210",
  "city": "Delhi",
  "reason": "Product enquiry",
  "pincode": "110001",
  "message": "I would like to know more about your products."
}
```

---

### Admin API

#### Admin Login

```http
POST /api/admin/login
```

Request:

```json
{
  "email": "admin@example.com",
  "password": "your-password"
}
```

On successful authentication, the backend creates a JWT and stores it in an HTTP-only cookie named:

```text
token
```

#### Get All Quotes

```http
GET /api/admin/quotes
```

Requires a valid admin authentication cookie.

#### Admin Logout

```http
POST /api/admin/logout
```

Clears the authentication cookie.

---

## Environment Variables

Do **not** commit real `.env` files or secrets to GitHub.

### Backend

Create:

```text
Backend/.env
```

Example:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
```

For production, `FRONTEND_URL` should point to the deployed frontend.

Example:

```env
FRONTEND_URL=https://aeronex-in.vercel.app
```

### Frontend

Create:

```text
Frontend/.env
```

Example for local development:

```env
VITE_BACKEND_URL=http://localhost:3000
```

For production:

```env
VITE_BACKEND_URL=https://aeronex-in.onrender.com
```

> Vite exposes frontend environment variables only when they use the `VITE_` prefix. Never put private secrets such as database passwords or JWT secrets in frontend environment variables.

---

## Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd Aeronex
```

### 2. Install backend dependencies

```bash
cd Backend
npm install
```

### 3. Configure backend environment variables

Create `Backend/.env`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:5173
```

### 4. Start the backend

Development:

```bash
npm run dev
```

Production/start command:

```bash
npm start
```

The backend runs on:

```text
http://localhost:3000
```

---

### 5. Install frontend dependencies

Open another terminal:

```bash
cd Frontend
npm install
```

Create `Frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:3000
```

### 6. Start the frontend

```bash
npm run dev
```

Vite will provide the local development URL in the terminal.

---

## Admin Authentication

The admin authentication flow uses:

1. Admin submits email and password.
2. Backend looks up the admin account in MongoDB.
3. Password is verified using `bcryptjs`.
4. Backend creates a JWT using `jsonwebtoken`.
5. JWT is stored in an HTTP-only cookie.
6. Protected admin routes verify the JWT.
7. Admin dashboard fetches quotation data only after successful authentication.
8. Logout clears the authentication cookie.

For the deployed Vercel + Render setup, the authentication cookie is configured for HTTPS cross-site requests using:

```js
res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 24 * 60 * 60 * 1000
});
```

Frontend authenticated requests use Axios credentials:

```js
{
  withCredentials: true
}
```

---

## MongoDB

The application uses MongoDB with Mongoose.

### Admin collection

Stores administrator credentials:

```text
email
password
```

Passwords should be stored as hashes rather than plain text.

### Quote collection

Stores customer quotation requests:

```text
fullName
companyName
email
phoneNumber
city
reason
pincode
message
```

---

## Frontend Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/home` | Home |
| `/products` | Products |
| `/admin-portal/login` | Admin Login |
| `/admin-portal/dashboard` | Admin Dashboard |

The project includes a Vercel rewrite configuration so React Router routes can work correctly after direct navigation/refresh on the deployed frontend.

---

## Security Considerations

- Admin authentication uses JWT.
- Authentication tokens are stored in HTTP-only cookies.
- Passwords are verified using bcrypt.
- CORS is configured to allow the frontend origin.
- Backend secrets are stored in environment variables.
- `.env` files should not be committed to Git.
- The admin dashboard is protected by authentication middleware.
- Frontend environment variables should contain only public configuration such as the backend API URL.

---

## Deployment

### Frontend — Vercel

The `Frontend` directory is deployed as the Vite/React application.

Configure:

```env
VITE_BACKEND_URL=https://aeronex-in.onrender.com
```

After changing Vercel environment variables, trigger a new deployment because Vite injects environment variables during the build.

### Backend — Render

The `Backend` directory is deployed as the Node.js/Express API.

Configure:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=https://aeronex-in.vercel.app
```

Start command:

```bash
npm start
```

---

## Production Checklist

Before deploying:

- [ ] Add production MongoDB connection string
- [ ] Add a strong JWT secret
- [ ] Configure `VITE_BACKEND_URL`
- [ ] Configure `FRONTEND_URL`
- [ ] Enable HTTPS cookie settings in production
- [ ] Configure CORS with the correct frontend origin
- [ ] Verify `withCredentials: true` on authenticated Axios requests
- [ ] Confirm `.env` is ignored by Git
- [ ] Test customer quote submission
- [ ] Test admin login
- [ ] Test protected quote API
- [ ] Test admin logout
- [ ] Test frontend routes after refreshing the page
- [ ] Test responsive layout on mobile devices

---

## Screenshots

Add screenshots of the following sections to make the GitHub repository more informative:

```text
docs/
├── home.png
├── products.png
├── quote-form.png
├── admin-login.png
└── admin-dashboard.png
```

Then reference them in this README using:

```md
![Aeronex Home](docs/home.png)
```

---

## Future Improvements

Potential future enhancements include:

- Admin quotation search and filtering
- Pagination for large numbers of quotation requests
- Quote status management
- Email notifications for new enquiries
- Admin profile management
- Password reset functionality
- Role-based admin permissions
- Product detail pages
- Contact/enquiry management
- Analytics dashboard
- Automated testing
- Improved API validation and error handling

---

## Author

**Pushpesh Thakur**

Full-Stack / Frontend Developer

### Technologies demonstrated

`React.js` · `JavaScript` · `Tailwind CSS` · `Node.js` · `Express.js` · `MongoDB` · `Mongoose` · `REST API` · `JWT` · `Axios` · `Git` · `Vercel` · `Render`

---

## License

This project is developed for the Aeronex website and application. Add an appropriate license here if the repository is intended to be open source.
