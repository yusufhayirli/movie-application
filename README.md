# Movie Search App

This is a **Movie Search Application** built with React, Redux Toolkit, and TypeScript. It uses the OMDb API to fetch and display movie data based on user queries.

## Features

- Search movies by name, year, and type (e.g., movie, series, episode).
- Fetch additional pages for more results using pagination.
- Error handling for API responses and loading states.
- While using the application, you can get help from __https://www.omdbapi.com/__ about the limitations.

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (Node Package Manager)
- __React version must be 18* (not latest for redux compatibility)__

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   
2. **Install dependencies: Run the following command to install all necessary dependencies:**
   ```bash
   npm install
   
This flag will bypass strict peer dependency checks, preventing installation errors.

3. **Run the development server:** Start the application using:
   ```bash
   npm start
   
This will run the application on http://localhost:3000 in your default browser.

### Troubleshooting

- Deprecation Warnings: If you see warnings related to Sass or other libraries, update your dependencies to the latest compatible versions.
- Unsupported Engine Errors: Ensure that your Node.js version matches the requirements specified in the package.json file.
- Peer Dependency Issues: Always use __npm install --legacy-peer-deps__ to avoid peer dependency conflicts.
- If npm install throws error, try __npm install --force__ to install dependencies.
- If having __"No API key provided."__ error, please check __./redux/movieSlice.ts__ and change the api key with your own. (*It might be expired.*)
