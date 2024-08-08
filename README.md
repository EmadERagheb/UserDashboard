# User Dashboard 

## Overview

This project is an interactive user dashboard built with Angular 17. The application demonstrates proficiency in Angular by employing advanced features such as state management frameworks, directives, and observables. The goal is to create a responsive, efficient, and user-friendly interface that showcases a list of users with detailed information available upon interaction.

## Features

1. **Responsive Design**
   - Implemented using Bootstrap to ensure the application works seamlessly across different devices and screen sizes.

2. **User List and Pagination**
   - Horizontally centered, paginated user list displaying user cards with avatars and names.
   - Data fetched from the API: `https://reqres.in/api/users?page={page}`

3. **User Details Page**
   - Detailed information for each user fetched from the API: `https://reqres.in/api/users/{id}`
   - Includes a back button to navigate back to the main user list.

4. **Search Functionality**
   - Instant search field in the header to search for users by ID without requiring a separate button.
   - Displays search results and allows navigation to the user details page if the user exists.

5. **Caching Mechanism**
   - Implemented caching to avoid redundant HTTP requests and optimize application performance.

6. **Loading Indicators**
   - Utilized `ngx-loading` to display a loading bar indicating pending network requests.

7. **Notifications**
   - Integrated `ngx-toast` for user notifications to enhance user experience.

8. **State Management**
   - Used NgRx for efficient state handling.

9. **Custom Directives**
   - Implemented custom directives for improved UI interactions.

10. **Styling and Animations**
    - Applied proper styling and animations to enhance the user interface.

## Project Setup

### Prerequisites

- Node.js (v14 or above)
- Angular CLI (v13 or above)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EmadERagheb/UserDashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd UserDashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

## Live Demo

You can view the live demo of the application on Netlify:
[User Dashboard Live Demo](https://maids-userdashboard.netlify.app/home)

## Portfolio

Check out my portfolio to see more of my projects:
[Emad's Portfolio](https://emadragheb.netlify.app/#/home)

## Repository Structure

- **src/app/**: Contains the main application components, services, and modules.
- **src/assets/**: Contains static assets such as images and stylesheets.
- **src/environments/**: Contains environment configuration files.

## API Endpoints

- **Fetch Users**: `https://reqres.in/api/users?page={page}`
- **Fetch User Details**: `https://reqres.in/api/users/{id}`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out to me:

- Email: [emaderagheb@gmail.com](mailto:emaderagheb@gmail.com)
- GitHub: [https://github.com/EmadERagheb](https://github.com/EmadERagheb)

