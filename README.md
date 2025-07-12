# Skill Swap Platform

A modern web application that enables users to exchange skills and knowledge through a peer-to-peer platform. Built with React, Node.js, and Tailwind CSS.

## 🚀 Overview

The Skill Swap Platform is a full-stack web application designed to connect people who want to learn new skills with those who can teach them. Users can create profiles listing their skills, browse others' expertise, and initiate skill exchanges in a collaborative environment.

## ✨ Features

### User Management
- **Profile Creation**: Users can create detailed profiles with name, location, and profile photo
- **Skill Listings**: List skills you can teach and skills you want to learn
- **Availability Settings**: Set your availability (weekends, evenings, etc.)
- **Privacy Controls**: Make your profile public or private
- **Search & Browse**: Find users by specific skills (e.g., "Photoshop", "Excel")

### Skill Exchange System
- **Swap Requests**: Send and receive skill exchange requests
- **Request Management**: Accept or reject incoming swap offers
- **Status Tracking**: Monitor current and pending swap requests
- **Cancellation**: Delete swap requests that haven't been accepted
- **Rating System**: Provide feedback and ratings after completing a swap

### Admin Features
- **Content Moderation**: Review and reject inappropriate or spammy skill descriptions
- **User Management**: Ban users who violate platform policies
- **Swap Monitoring**: Track pending, accepted, or cancelled swaps
- **Communication**: Send platform-wide messages (updates, maintenance alerts)
- **Analytics**: Download reports on user activity, feedback logs, and swap statistics

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - Modern UI framework with hooks
- **Vite 7.0.4** - Fast build tool and development server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 5.1.0** - Web application framework
- **ES Modules** - Modern JavaScript module system

### Development Tools
- **Git** - Version control
- **npm** - Package management
- **Hot Module Replacement (HMR)** - Fast development experience

## 📁 Project Structure

```
skill-swap-platform/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── NavBar.jsx     # Navigation component
│   │   │   ├── Body.jsx       # Main content area
│   │   │   ├── Feed.jsx       # Skill feed display
│   │   │   ├── Profile.jsx    # User profile component
│   │   │   ├── Login.jsx      # Authentication component
│   │   │   ├── EditProfile.jsx # Profile editing
│   │   │   ├── Requests.jsx   # Swap requests management
│   │   │   ├── Connection.jsx # User connections
│   │   │   ├── UserCard.jsx   # User display card
│   │   │   └── Footer.jsx     # Footer component
│   │   ├── utils/             # Utility functions
│   │   ├── App.jsx            # Main application component
│   │   ├── main.jsx           # Application entry point
│   │   └── index.css          # Global styles
│   ├── public/                # Static assets
│   ├── package.json           # Frontend dependencies
│   ├── vite.config.js         # Vite configuration
│   └── eslint.config.js       # ESLint configuration
├── server/                    # Backend Node.js application
│   ├── src/
│   │   ├── routes/            # API route handlers
│   │   │   ├── auth.js        # Authentication routes
│   │   │   ├── profile.js     # Profile management routes
│   │   │   ├── request.js     # Swap request routes
│   │   │   └── userroute.js   # User management routes
│   │   ├── models/            # Data models
│   │   ├── middlewares/       # Express middlewares
│   │   ├── config/            # Configuration files
│   │   ├── utils/             # Utility functions
│   │   └── index.js           # Server entry point
│   └── package.json           # Backend dependencies
└── README.md                  # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd skill-swap-platform
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

#### Development Mode

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

#### Production Build

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

### Available Scripts

#### Frontend (client/)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

#### Backend (server/)
- `npm start` - Start the Express server

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the server directory:
```
PORT=3000
NODE_ENV=development
```

### Vite Configuration
The frontend uses Vite for fast development and building. Configuration is in `client/vite.config.js`.

### Tailwind CSS
Tailwind CSS is configured for the frontend with utility-first styling. The configuration uses Tailwind CSS v4.

## 📱 API Endpoints

*Note: API endpoints are currently in development. The following structure is planned:*

- `POST /api/auth/login` - User authentication
- `GET /api/profiles` - Get user profiles
- `POST /api/profiles` - Create/update profile
- `GET /api/requests` - Get swap requests
- `POST /api/requests` - Create swap request
- `PUT /api/requests/:id` - Update request status

## 🧪 Testing

*Testing implementation is planned for future releases.*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Team Members

- **Mudit Agarwal** - [muditagarwal2022@vitbhopal.ac.in](mailto:muditagarwal2022@vitbhopal.ac.in)
- **Karthik Nair** - [internplacecarti@gmail.com](mailto:internplacecarti@gmail.com)
- **Rahul Sharma** - [rahulsharma2022@vitbhopal.ac.in](mailto:rahulsharma2022@vitbhopal.ac.in)
- **Rushikesh Chaudhari** - [rushikeshc2003@gmail.com](mailto:rushikeshc2003@gmail.com)

## 🛣️ Roadmap

- [ ] Complete backend API implementation
- [ ] User authentication and authorization
- [ ] Database integration
- [ ] Real-time messaging system
- [ ] Mobile-responsive design improvements
- [ ] Testing suite implementation
- [ ] Deployment configuration
- [ ] Performance optimization

## 📞 Support

For support, please reach out to any of the team members listed above or create an issue in the repository.

---

*Last updated: January 2024*
