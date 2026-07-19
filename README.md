# ThinkBoard — Full-Stack Notes Application

A full-stack notes application built on the MERN stack, letting users create, edit, search, and delete notes with a fast, responsive interface.

**Live Demo:** [mern-thinkboard-1m83.onrender.com](https://mern-thinkboard-1m83.onrender.com)

---

## Overview

ThinkBoard is a notes-taking app with a MongoDB schema and REST API designed from scratch (not scaffolded), covering full CRUD plus search. The project also handles edge cases that many basic notes-app clones skip — duplicate note prevention, empty-state UI, and optimistic UI updates so the interface feels fast and responsive rather than laggy. API requests are also protected with rate limiting via Upstash.

Every backend endpoint was tested in Postman before frontend integration, catching validation bugs early.

## Features

- Full CRUD for notes: create, read, update, delete
- Search functionality across notes
- Duplicate note prevention
- Optimistic UI updates for a snappy, non-blocking experience
- Empty-state handling for a cleaner UX
- API rate limiting via Upstash to protect endpoints from abuse
- REST API designed and built from scratch

## Tech Stack

| Layer        | Technology                        |
|--------------|------------------------------------|
| Frontend     | React.js                          |
| Backend      | Node.js, Express.js                |
| Database     | MongoDB                           |
| Rate Limiting| Upstash (Redis-based)              |
| Deployment   | Render                             |

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local instance or MongoDB Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Adikesh59/mern-thinkboard.git
   cd mern-thinkboard
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables

   Create a `.env` file in the `backend` directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   PORT=5000
   ```

5. Run the app
   ```bash
   # In backend directory
   npm run dev

   # In frontend directory (separate terminal)
   npm start
   ```

The app should now be running locally, with the frontend on `http://localhost:3000` and backend on `http://localhost:5000`.

## Deployment

Both the frontend and backend are deployed on [Render](https://render.com). The live version is available here: [mern-thinkboard-1m83.onrender.com](https://mern-thinkboard-1m83.onrender.com)

## Author

**Keshav Kumar**
- GitHub: [@Adikesh59](https://github.com/Adikesh59)
- LinkedIn: [Keshav Kumar](https://linkedin.com/in/keshav-kumar-392a14301)

## License

This project is open source and available under the [MIT License](LICENSE).
