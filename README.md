# E-Commerce 
## MERN stack Project

This is an E-Commerce web app developed in MERN Stack i.e. ReactJS, NodeJS, Express and MongoDB.

## Features

- User can create account and edit their profiles.
- View and search for products and filter them according to requirement.
- Add products to the cart and place order.
- Give reviews on the products and can edit them later.
- Admin dashboard for admin users to control the orders, products and users easily.

Stripe payment developer mode is used for order placement and redux is used for state management.

To locally run the project-
> Install the dependencies for frontend and backend.
> then create a config.env file in backend/config folder and enter the required variables.
-- PORT, DB_URI, STRIPE_API_KEY, STRIPE_SECRET_KEY, JWT_SECRET, JWT_EXPIRE, COOKIE_EXPIRE, SMTP_SERVICE, SMTP_MAIL, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT, CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
> then go to frontend folder and run the command npm start and in root folder run command npm run dev.