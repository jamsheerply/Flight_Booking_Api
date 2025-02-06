# FLIGHT BOOKING API

## Project Overview

The Flight Booking API project is designed to allow users to search for flights, book tickets, and manage their bookings. It includes a robust user authentication system where users register and log in to obtain a JWT token, which is required for accessing flight search and booking functionalities. The application handles user authentication securely and validates JWT tokens for authorized access to various API endpoints.

Users can search for available flights by providing parameters such as departure, destination, and travel dates. Once a user books a flight, the confirmed booking details are stored, and they can retrieve their past bookings at any time. The project includes comprehensive error handling, secure endpoints, and a seamless flow from registration to booking and viewing past reservations, ensuring a complete and secure user experience.

## 🚀 Features

- User Authentication (JWT, MongoDB)
- Flight Search (Amadeus API Integration)
- Flight Booking (Amadeus API Integration,MongoDB)
- Retrieve Past Bookings (MongoDB)
- OAuth Integration (Amadeus API Token)
- Error Handling & Logging
- Containerized application
- CI integration
- Google Kubernetes Engine (GKE) deployment

## 🛠 Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT, bcrypt
- API Integration: Amadeus API (OAuth)
- API Testing: Postman
- Version Control: Git, GitHub
- Hosting: Google Cloud Platform (GCP)

## 🔗 Links and Instructions

# API Endpoints

## User Authentication

- **User Registration**: [Register User](https://jamsheer.life/api/v1/auth/register)
- **User Login**: [Login User](https://jamsheer.life/api/v1/auth/login)

**Instructions**:  
After logging in, you will receive a token. Copy the token and paste it in the "Authorization" tab of Postman. Select "Bearer Token" as the type, and paste the token. You can then run the following routes in Postman. The body elements for `search` and `book` should be sent as POST, while `bookings` is a GET request.

## Flight Booking

- **Search Flights**: [Search Flights](https://jamsheer.life/api/v1/booking/search-flights)
- **Book Flight**: [Book Flight](https://jamsheer.life/api/v1/booking/book-flight)
- **View Bookings**: [View Bookings](https://jamsheer.life/api/v1/booking)

For more details, visit the live link documentation: [Postman Documentation](https://documenter.getpostman.com/view/29406159/2sAYX6qNZu)

## 🚀 Quick Start for Local Installation

1. Clone the project

   ```bash
   git clone https://github.com/jamsheerply/Flight_Booking_Api.git
   ```

2. Go to the project directory

   ```bash
   cd Flight_Booking_Api
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Configure environment variables by creating a `.env` file:

- Rename the .env.sample file to .env and fill in your actual values.

5. Start the server

   ```bash
   npm run start
   ```

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact & Support

For questions, support, or collaboration:

- **Email**: jamsheerpayyoli@gmail.com
- **Phone**: +91 9020432432
- **GitHub Issues**: For bug reports and feature requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Jamsheer](https://github.com/jamsheerply)
