# HobbyHub

HobbyHub is a platform where users can discover, join, and create local hobby-based groups like web developing bootcamp, book clubs, painting circles, hiking crews, and more. The platform fosters community building around shared interests and promotes meaningful social interaction through hobby-driven events.

# Live link:
https://hobby-hub-auth-a7450.web.app

# Here are the key features:
- **Featured Hobby Groups** – Displays 6 dynamic ongoing groups on the homepage.
- **Authentication System** – Email/password login and registration using Firebase, along with Google OAuth login.
- **Create, Update, and Manage Groups** – Users can create hobby groups with details like category, meeting location, and more.
- **My Groups Dashboard** – Logged-in users can view, edit, or delete their created groups.
- **Protected Routes** – Routes like Create Group, My Groups, and Group Details are secured and require login.
- **Toast & SweetAlert Notifications** – Used for login errors, success messages, and delete confirmations.
- **Group Status Validation** – Users cannot join groups if the start date has already passed.
- **Dark/Light Mode** – Toggle between dark and light themes on the home page.
- **Interactive UI Enhancements** – Integrated Lottie animations and Awesome Reveal effects for a smooth experience.
- **Responsive Design** – Fully optimized for mobile, tablet, and desktop devices.

# Npm packages
- react-router
- firebase
- react-toastify
- react-icons
- tailwindcss
- daisyui
- react-helmet-async
- dayjs
- lottie-react
- sweetalert2
- react-tooltip
- react-awesome-reveal
- react-simple-typewriter
- slick-carousel
- react-slick

# 🚀 Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/swarnacse19/Hobby-Hub-client-side.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Hobby-Hub-client-side
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Create a `.env` file:**
    In the root of the project, create a file named `.env` and add your Firebase, Stripe, and any other necessary API keys.
    ```env
    VITE_API_KEY=your_firebase_api_key
    ```

5.  **Run the project:**
    Start the development server with this command:
    ```bash
    npm run dev
    ```

The project will now be live at `http://localhost:5173`.
