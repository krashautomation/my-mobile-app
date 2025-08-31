# My Mobile App

A cross-platform mobile application built with React Native and Expo.

## Features

*   **User Authentication:** Login and registration screens.
*   **Cross-Platform:** Runs on Android, iOS, and Web.
*   **Themed Components:** Supports light and dark mode.
*   **File-based Routing:** Uses Expo Router for navigation.

## Tech Stack

*   [React Native](https://reactnative.dev/)
*   [Expo](https://expo.dev/)
*   [Expo Router](https://expo.github.io/router/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/my-mobile-app.git
    cd my-mobile-app
    ```
2.  Install dependencies:
    ```sh
    npm install
    ```

### Running the App

*   **Start the development server:**
    ```sh
    npm start
    ```
    This will open the Expo developer tools in your browser. You can then run the app on a physical device using the Expo Go app or on an emulator/simulator.

*   **Run on Android:**
    ```sh
    npm run android
    ```

*   **Run on iOS:**
    ```sh
    npm run ios
    ```

*   **Run on Web:**
    ```sh
    npm run web
    ```

## Project Structure

```
.
├── app/                # Main application code (screens and routes)
│   ├── (auth)/         # Authentication-related screens
│   ├── _layout.jsx     # Main layout
│   └── index.jsx       # App entry point
├── assets/             # Images and other static assets
├── components/         # Reusable React components
├── constants/          # App-wide constants (e.g., colors)
├── package.json        # Project dependencies and scripts
└── ...
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
