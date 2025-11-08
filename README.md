# Star Wars Character App

A fully responsive React web application displaying Star Wars characters.  

## How to Run the Project

1. **Clone the repo:**
    ```
    git clone https://github.com/harshrai214/star-wars-character-app.git
    cd star-wars-character-app
    ```

2. **Install dependencies:**
    ```
    npm install
    ```

3. **Start the development server:**
    ```
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Implemented Features

- **Character list:** Fetches paginated character data from SWAPI and displays as cards.
- **Random images:** Uses Picsum Photos for character images.
- **Species accent colors:** Card background changes by species.
- **Modal detail view:** Click a card to view character details
  (height, mass, birth year, number of films, homeworld info, date added).
- **Pagination:** Navigate between different pages of results.
- **Responsive design:** Fully functional across mobile, tablet, and desktop.
- **Loading/error UI:** User-friendly skeleton loaders and error messages.

### Bonus Features
- Search bar for character name
- Filters for homeworld, film, species
- Combined search + filter logic
- Mock authentication (login/logout with fake JWT, silent refresh)
- Modal integration test with React Testing Library

## Design Choices & Trade-offs

- Used **Tailwind CSS** for rapid, consistent styling and responsive utilities.
- Modular React functional components and hooks for maintainability.
- Folder structure separates components, pages, utils, and hooks for scalability.
- Opted for JavaScript for wider compatibility; app can be migrated to TypeScript.
- Authentication is fully mocked for demo simplicity.
- Skeleton and error states improve the user experience.
- Fetches additional homeworld/species data only as needed to optimize API calls.

## Screenshots

Below are screenshots from the Star Wars Character App showing the responsive layout, character cards, modal detail view, and filters.

<!-- Put the image files in a folder like `docs/screenshots/` in the repo -->
<p align="center">
  <img src="docs/screenshots/Screenshot 2025-11-08 234936.png" alt="Login Page" width="900" />
</p>

<p align="center">
  <img src="docs/screenshots/Screenshot 2025-11-08 235043.png" alt="Home page" width="320" />
  <img src="docs/screenshots/Screenshot 2025-11-08 235147.png" alt="Character modal detail view" width="320" />
 
</p>

**Captions**
- **Home (Desktop):** Paginated list of character cards with species accent color backgrounds.  
- **Home (Mobile):** Fully responsive card layout optimized for small screens.  
- **Character Modal:** Height, mass, birth year, homeworld and films — opened from a card.  
- **Search & Filters:** Combined search + filter UI for name, homeworld, film, species.



---
