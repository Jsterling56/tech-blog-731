## Tech Blog Homework Assignment
Welcome to the Tech Blog Homework Assignment README! In this document, you'll find all the information you need to understand, set up, and use the tech blog application for your assignment. This application allows users to create and view tech-related blog posts after logging in.

# Table of Contents
1. Introduction
2. Features
3. Installation
4. Usage
5. Contributing
6. License

## Introduction
The Tech Blog Homework Assignment is a web-based application designed to showcase your skills in web development. It enables users to create, edit, and view tech-related blog posts. Additionally, users can log in to access the posts and manage their own content.

## Features
User Authentication: Users can create accounts and log in securely to the application.
Create Posts: Logged-in users can create new blog posts, sharing their tech insights and knowledge.
Edit and Delete: Users can edit and delete their own posts to keep their content up-to-date.
View Posts: Visitors and logged-in users can browse and read the latest tech blog posts.
Responsive Design: The application is designed to be responsive, ensuring a seamless experience across various devices.

## Installation
Follow these steps to set up the Tech Blog Homework Assignment on your local machine:

Clone Repository: Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/tech-blog.git
Navigate to Directory: Move into the project directory:

bash
Copy code
cd tech-blog
Install Dependencies: Install the required dependencies using your preferred package manager. For example, with npm:

Copy code
npm install
Database Setup: Set up your database (e.g., MySQL) and configure the database connection in the config folder.

Environment Variables: Create a .env file in the root directory and add necessary environment variables:

makefile
Copy code
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
SESSION_SECRET=your_session_secret
Run Migrations: Run database migrations to create the necessary tables:

arduino
Copy code
npm run db:migrate
Start the Application: Start the application using the following command:

sql
Copy code
npm start
Access the Application: Open your web browser and navigate to http://localhost:3000 to access the application.

## Usage
Register / Log In: Create an account or log in using your credentials.

Dashboard: After logging in, you'll be directed to your dashboard, where you can create new posts or manage your existing posts.

Create Post: Click the "New Post" button to create a new tech blog post. Fill in the title and content.

Edit / Delete Post: On your dashboard, you'll see a list of your posts. You can edit or delete any of your posts from here.

View Posts: Visitors and logged-in users can view all blog posts on the homepage.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix:

bash
Copy code
git checkout -b feature/your-feature-name
Commit your changes and push to your forked repository.

Create a pull request describing your changes and their purpose.

## License
This project is licensed under the MIT License.

## Credits
Code is not mine. Code belongs to OwaisIslam from github. As always, thanks to Rommel and Ringo.
ChatGPT was used for debugging.
Feel free to reach out if you have any questions or need further assistance. Happy coding!