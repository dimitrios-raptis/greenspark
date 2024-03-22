# Product Widgets App

This web application allows users to view and customise product widgets with ease. The user can customise the widgets by changing their colours, adjusting their active state and linking them to the public profile.

## Overview

- The initial properties of the widgets are fetched from an API.
- The user can customise each widget by changing its colour, active state and linkage to the public profile. The interactions with the widgets trigger real-time updates to the underlying data, ensuring a smooth customization experience.
- Only one widget can have the active state at a time.
- There has been attention to details in styling, like hover states, a custom switch button for badge activation, and a custom tooltip component for additional information.
- It has been styled using Sass for maintainable and scalable styling.
- The design is responsive ensuring a seamless viewing on different devices.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Create React App: Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- TypeScript: It adds static typing to JavaScript for enhanced code quality and developer productivity.
- Sass: A CSS preprocessor for maintaining scalable and maintainable styles.
- React Testing Library: It provides utilities for rendering components and interacting with them.
- Additional Libraries: CSSTransition for adding animations to components, used for animating the tooltip, and React Loader Spinner for adding the spinner to enhance user experience during loading time.

## Getting Started

1. To run the application locally, follow these steps:

`git clone https://github.com/dimitrios-raptis/greenspark.git`

2. Navigate to the project directory and install dependencies:

`npm install`

3. Start the development server:

`npm start`

4. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

**Note:** The presence of the .env file in the codebase is intentional and done to showcase the functionality of environment variables. Ensure you have the API URL defined in the .env file at the root directory of the project:

```
REACT_APP_API_URL=https://api.mocki.io/v2/016d11e8/product-widgets
```

## Testing

The project includes unit tests using the React Testing Library to ensure the reliability and stability of the components. While the testing suite isn't extensive, it demonstrates the application's functionality and serves as a starting point for further testing efforts.

## Running Tests

To run tests, execute the following command:

`npm test`

## Building the App

To build the app for production to the `build` folder execute the following command.

`npm run build`

It correctly bundles React in production mode and optimises the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Conclusion

This small app showcases the implementation of a clean, production-ready front-end solution for widget customization. With attention to detail in styling and user interaction, the application delivers an intuitive and reliable user experience.
