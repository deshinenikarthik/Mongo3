# WhatsApp Clone - Chat Application (Express & MongoDB)

This is a simple chat application built using **Express.js** and **MongoDB**, inspired by WhatsApp. The app allows users to send, edit, and delete messages using a MongoDB database.

## Features
- **Create Chat Messages**: Users can send messages with sender and receiver details.
- **View All Messages**: Fetch all chat messages stored in MongoDB.
- **Edit Messages**: Modify previously sent messages.
- **Delete Messages**: Remove messages from the database.
- **EJS Templates**: Frontend built with Embedded JavaScript (EJS).

## Technologies Used
- **Node.js** - Server-side runtime
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database & ODM for schema handling
- **EJS** - View engine for rendering templates
- **Method-Override** - Enables PUT & DELETE requests via forms

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- npm (comes with Node.js)

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/karthik/whatsapp-clone.git
   cd whatsapp-clone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB (if not already running):
   ```sh
   mongod
   ```
4. Start the application:
   ```sh
   node app.js
   ```
   or (for development using nodemon):
   ```sh
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`

## Usage
- Navigate to `/chats` to view all chats.
- Use `/chats/new` to create a new chat message.
- Click **Edit** to modify a chat message.
- Click **Delete** to remove a message from the database.

## Code Highlights
- Uses **Mongoose** for MongoDB interactions.
- Implements **RESTful routes** for CRUD operations.
- Uses **EJS templates** for dynamic rendering.

## Future Enhancements
- Add **user authentication** for secure messaging.
- Implement **real-time chat** using **Socket.io**.
- Improve **UI/UX** with better styling and animations.

## Contributing
Feel free to contribute! Fork this repo, make your changes, and create a pull request.

## License
This project is licensed under the MIT License.
