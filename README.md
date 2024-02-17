# Jobify

![](/assets/home.png)

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Preview](#project-preview)

## Overview

Jobify is a web application designed to facilitate job searching and management. Leveraging React.js, Node.js, Express.js and MongoDB, Jobify offers a user-friendly interface for job seekers to explore job opportunities and for employers to manage job listings efficiently. The platform incorporates robust authentication, user management, and job-related functionalities to enhance the overall job search experience.

## Technology Stack

- **Node.js**: A powerful runtime environment for server-side JavaScript execution.
- **Express.js**: A flexible and minimalist web framework for building robust web applications and APIs.
- **MongoDB**: A scalable and flexible NoSQL database, likely used for storing user profiles, job listings, and application data.
- **Mongoose**: An elegant MongoDB object modeling tool for Node.js, facilitating schema-based modeling for application data.
- **Multer**: Middleware for handling file uploads, essential for users to upload profile avatars.
- **Other Libraries**: Additional libraries for validation, authorization, and possibly logging to ensure the security and reliability of the application.

## Features

1. **User Authentication and Management**:

   - Secure registration and login functionality for job seekers and employers.
   - User sessions management to maintain authentication state across interactions.
   - Role-based permissions to differentiate between employers and job seekers.

2. **Job Listing and Management**:

   - Creation, update, and deletion of job listings by employers.
   - Comprehensive job search functionality for job seekers.
   - Detailed job listings including company information, job requirements, and application deadlines.

3. **Advanced Search and Filtering**:

   - Advanced search options based on keywords, location, and industry.
   - Filtering capabilities to refine search results based on various criteria.

4. **User Profile Management**:

   - Profile customization including personal information and profile pictures.
   - Professional details such as work experience, education, and skills.

5. **Application Statistics and Insights**:

   - Administrative access to application statistics and insights.
   - Data-driven decisions to optimize platform functionality.

6. **Security and Validation**:
   - Robust validation mechanisms to sanitize and validate user inputs.
   - Authentication and authorization mechanisms to safeguard sensitive data.

## Getting Started

Follow these steps to set up the project locally on your machine:

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://react.dev/)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sothulthorn/jobify.git
```

2. Navigate to the project directory:

```bash
cd jobify
```

3. Create a `.env` file:

```bash
NODE_ENV=YOUR_NODE_ENVIRONMENT
PORT=YOUR_PORT

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_JWT_SECRET
JWT_EXPIRES_IN=YOUR_JWT_EXPIRES_IN

CLOUDINARY_NAME=YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
```

4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```

#### Usage

Visit `http://localhost:5173/` in your browser to access the full application, seamlessly integrating the backend and frontend.

## Project Preview

#### Sign In

![](/assets/login.png)

#### Sign Up

![](/assets/register.png)

#### Add Job

![](/assets/add-job.png)

#### All Jobs

![](/assets/all-jobs.png)

### Stats - Barchart

![](/assets/stats-barchart.png)

### Stats - Areachart

![](/assets/stats-areachart.png)

#### Profile

![](/assets/profile.png)

#### Admin

![](/assets/admin.png)
