# Full React Project with dashboard (open to develop any requirement)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project is built using React version 18 and is designed to provide a robust authentication and authorization system. It utilizes JWT tokens and a combination of local storage and cookie storage to store user authentication information and permissions.

The project also features a customizable dashboard theme, making it easy to develop and add new requirements. Whether you need to add new features or modify existing ones, this project provides a solid foundation to build upon.

## Features

- User authentication and authorization with React context API for state management.
- JWT token-based authentication
- Local and cookie storage for storing authentication information
- Customizable dashboard theme
- Open to developing any additional requirements

## Installation

1. Clone the repository:
`git clone https://github.com/info-aliahmadi/Hydra.React.git`

2. Install dependencies:
`npm install`

3. Start the development server:
`npm start`

4. Open your browser and visit:
`http://localhost:3000`

## Configuration

The project may require certain configurations to connect to your specific backend or to modify the authentication and authorization settings. Here are the key files to look into for configuration:

- src/config.js: Contains configuration variables such as API endpoints, Authentication and Authorization Storage Types and names, or any other environment-specific settings.

## Usage

This project provides a starting point for building a React application with authentication and authorization features. Here are a few guidelines on how to use and extend it:

- Authentication and Authorization: The project already includes a basic authentication and authorization system. You can customize it or extend it to fit your specific requirements. Look into the `src/modules/auth/services` folder to modify the authentication flow and user permissions.

- Dashboard Theme: The project comes with a pre-built dashboard theme [Mantis Free React Material UI Dashboard Template](https://github.com/codedthemes/mantis-free-react-admin-template) free version. You can modify the styling and layout by editing the files in the `src/themes` folder. Feel free to add additional components or modify existing ones to match your desired design.

- Adding New Features: To add new features to the project, follow these general steps:

-- Create a new folder in `src/modules` folder and follow like other modules.
-- Define the necessary routes in the `src/modules/YOUR_MODULE/routes` folder.
-- Implement any required API calls or data handling in `src/modules/YOUR_MODULE/services` folder.
-- Add any necessary authentication or authorization checks (by adding `<Authorize permission="YOUR_PERMISSION">` component on any route or component).
-- Integrate the new component into the existing application by updating the appropriate files.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

Please ensure that your contributions adhere to the project's coding standards and practices.

## Contact

For any questions or inquiries, please contact [Ali Ahmadi](mailto: info.aliahmadi@gmail.com).
