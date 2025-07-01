# National Math Circle Network

A modern, high-tech website for connecting math circles nationwide. Built with React, TypeScript, Tailwind CSS, and Node.js.

## 🚀 Features

- **Modern Design**: Sleek, DJI-inspired interface with glassmorphism effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Hover animations, smooth transitions, and modern UI
- **Math Circle Registration**: Easy registration system for new math circles
- **Resource Sharing**: Platform for sharing problem sets and experiences
- **Live Tracker**: Real-time counter of connected math circles
- **Contact System**: Built-in contact forms and information

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Custom animations** and effects

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **CORS** enabled for cross-origin requests

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/zyamateytelman/mathcirclenetwork.git
   cd mathcirclenetwork
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. **Start the development servers**

   **Backend (Terminal 1):**
   ```bash
   npm start
   ```

   **Frontend (Terminal 2):**
   ```bash
   cd client
   npm start
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🎨 Design Features

- **Glassmorphism Effects**: Transparent cards with backdrop blur
- **Gradient Backgrounds**: Dynamic color transitions
- **Animated Elements**: Floating shapes and smooth transitions
- **Modern Typography**: Professional font hierarchy
- **Interactive Navigation**: Hover effects and smooth scrolling
- **Responsive Design**: Optimized for all screen sizes

## 📱 Pages

- **Home**: Hero section with stats and call-to-action
- **About**: Mission and values information
- **Problem Sets**: Curated mathematical problems
- **Experiences**: Stories from math circles
- **Outreach**: Opportunities for community involvement
- **Register**: Math circle registration form
- **Contact**: Contact information and form

## 🔧 API Endpoints

- `POST /api/circles` - Register a new math circle
- `GET /api/circles/count` - Get total number of circles
- `POST /api/contact` - Submit contact form

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `cd client && npm run build`
2. Deploy the `build` folder to your hosting platform

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the root directory (excluding `client` folder)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Developer**: [Your Name]
- **Design**: Modern, high-tech aesthetic inspired by DJI

## 📞 Contact

- Email: info@nationalmathcircles.org
- Website: [Your deployed URL]

---

Built with ❤️ for the mathematical community 