# 🎟️ Movie Ticket Booking System – MERN Stack

A full-featured MERN stack application for seamless movie ticket booking, secure payments, and robust admin management.
User authentication via Clerk, automated workflows with Inngest, and payments powered by Stripe.


## 🚀 Features

### 🔐 Authentication & Authorization
- User login/signup powered by **Clerk**
- Role-based access control: `user`, `admin`
- Clerk JWT token-based session management

### 🎬 User Features
- Browse movies with posters, genres, and trailers
- View detailed movie info (cast, trailer, release)
- Select seats and book showtimes
- Secure payment via **Stripe**
- Get booking confirmation via **email** (Nodemailer)
- View booking history and cancel future bookings
- Mark movies as favorites

### 🛠️ Admin Features
- Dashboard with bookings analytics
- Add/Edit/Delete movies and showtimes
- View/manage all bookings with real-time status
- Add showtimes with date, time, screen, and availability
- Admin notification emails

### 📩 Email Notifications
- Booking confirmation
- Reminder emails
- Failed/cancelled booking notifications

### ⚙️ Backend Workflow (via **Inngest**)
- Event-driven logic for:
  - Booking confirmation
  - Email notifications
  - Stripe webhook flows
  - Seat release after booking expiration

### 💳 Payment Integration with **Stripe**
- Secure payments for seat booking
- Webhook support for confirming status
- Cancel/expire unpaid bookings after timeout

---

## 🖥️ Tech Stack

| Layer        | Technology                                                                  |
|--------------|------------------------------------------------------------------------------|
| **Frontend** | React.js, Axios, Tailwind CSS, React Router, Context API                    |
| **Backend**  | Node.js, Express.js                                                         |
| **Database** | MongoDB with Mongoose                                                       |
| **Auth**     | Clerk (Authentication & Role Handling)                                      |
| **Payments** | Stripe + Stripe Webhooks                                                    |
| **Email**    | Nodemailer                                                                  |
| **Workflow** | Inngest (event triggers, delays, retries, and job orchestration)            |
| **Env Mgmt** | dotenv                                                                      |

---



