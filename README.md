# [NASA APOD Viewer](https://nasaapodreactjs.netlify.app/)

This project is a simple React-based application that displays NASA's Astronomy Picture of the Day (APOD). It fetches the data from NASA's APOD API and provides a user-friendly interface to explore the picture, its details, and additional features like a sidebar for explanations.

## Features

- **Fetch NASA APOD Data:** Retrieves data from the NASA APOD API and caches it locally for the current day.
- **LocalStorage Caching:** Avoids redundant API calls by storing the fetched data in `localStorage` for the day.
- **Dynamic Components:** Includes a `Main` component for displaying the image, a `SideBar` for additional details, and a `Footer` for navigation.
- **Modal Functionality:** Toggles a sidebar/modal for displaying additional picture information.
- **Fallback Loading State:** Displays a loading icon while fetching the data.

## Project Structure

```
.
├── components
│   ├── Footer.jsx
│   ├── Main.jsx
│   └── SideBar.jsx
├── App.jsx
├── README.md
├── package.json
└── public
```

### Main Components

#### `App.jsx`
The root component that manages the application state and handles the API fetch logic.

- **State Variables:**
  - `data`: Stores the fetched APOD data.
  - `loading`: Tracks the loading state during the API fetch.
  - `showModal`: Toggles the visibility of the sidebar/modal.

- **Functions:**
  - `handleToggleModal`: Toggles the `showModal` state.
  - `fetchApIData`: Fetches APOD data from the NASA API and caches it in `localStorage`.

#### `Main.jsx`
Displays the background image from the APOD data.

#### `SideBar.jsx`
A sidebar/modal that shows detailed information about the APOD, including its title, date, and explanation. It also includes a close button.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nasa-apod-viewer.git
   cd nasa-apod-viewer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your NASA API key:
   - Create a `.env` file in the root directory.
   - Add the following line to your `.env` file:

     ```env
     VITE_NASA_API_KEY=your_api_key_here
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

## Technologies Used

- **React:** JavaScript library for building the UI.
- **Fetch API:** Used to retrieve data from the NASA API.
- **LocalStorage:** For caching daily APOD data.
- **CSS (FontAwesome):** Styling and icons for the UI.

## How It Works

1. On load, the app checks if today's APOD data is available in `localStorage`.
2. If not, it fetches the data from the NASA APOD API and stores it locally.
3. The `Main` component displays the image, while the `SideBar` shows detailed information when toggled.

## Usage

- View the APOD with a high-definition image as the background.
- Click the toggle button to open the sidebar and read more about the image.

## Future Improvements

- Add responsiveness for better mobile support.
- Implement error handling for API failures.
- Provide navigation to view previous days' APODs.

## API Reference

**NASA APOD API:** [https://api.nasa.gov/planetary/apod](https://api.nasa.gov/planetary/apod)

- **Parameters:**
  - `api_key`: Your NASA API key.

## License

This project is licensed under the MIT License.
