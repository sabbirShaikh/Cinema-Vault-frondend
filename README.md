# CinemaVault 🎬
### Movie Library Application

CinemaVault is a modern, production-level **movie discovery and library application** built using **React** and **Tailwind CSS**. It features dynamic genre filtering, real-time search, and a premium dark-themed UI designed for an engaging user experience.

---
## ✨ Live link : https://cinema-vaults.netlify.app/
---

## ✨ Features

- **Dynamic Genre Filtering**  
  Automatically extracts unique genres from the movie data and displays them in an interactive filter bar.

- **Live Search**  
  Real-time search functionality for quickly finding movies within the collection.

- **Professional UI / UX**  
  Custom-designed Movie Cards with hover animations, glassmorphism effects, and a polished dark theme.

- **Fully Responsive Design**  
  Optimized for mobile, tablet, and desktop screen sizes.

- **Real-time Data Rendering**  
  Fetches and renders movie data dynamically from an external JSON API.

---

## 🚀 Tech Stack

- **Framework:** React 18+  
- **Styling:** Tailwind CSS  
- **Icons:** Lucide React  
- **HTTP Client:** Fetch API  

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sabbirShaikh/Cinema-Vault-frondend.git
cd cinemavault
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Install Icon Library
```bash
npm install lucide-react
```

### 4️⃣ Start Development Server
```bash
npm run dev
```

The application will be available at:
```
http://localhost:5173
```

---

## 📂 Component Structure

- **MovieDashboard.jsx**  
  Main container responsible for data fetching, search logic, and genre-based filtering.

- **MovieCard.jsx**  
  Reusable UI component to display movie poster, rating, year, genre, and plot details.

- **Footer.jsx**  
  Minimalist footer for branding and copyright information.

---

## 🔧 Data Mapping

The application maps movie data from the following JSON structure:

| JSON Property | UI Representation |
|--------------|------------------|
| `Title` | Movie Name |
| `Poster` | Movie Poster Image |
| `imdbRating` | Rating Score |
| `Year` | Release Year |
| `Genre` | Category Tags |
| `Plot` | Movie Description |

---

## 🧠 Key Highlights

- Clean component-based architecture  
- Scalable and maintainable frontend structure  
- Optimized state handling for filtering and searching  
- Production-ready UI patterns  

---

## 📝 License

© 2026 **CinemaVault**.  
Created by **Sk Sabbir Ali**.
