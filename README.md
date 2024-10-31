# Community Driven Database of Locations

## Project Description

This project is a community-driven platform where users can add, rate, and share secret locations. Users can earn points and reputation by contributing to the platform, and not every location is visible to everyone, depending on the user's reputation. The platform includes a gamification system with leaderboards, challenges, and customizable avatars and profiles.

## Development Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies for the backend services:
   ```bash
   cd backend/user-service
   npm install
   cd ../location-service
   npm install
   ```

3. Install dependencies for the frontend applications:
   ```bash
   cd ../../frontend/web-app
   npm install
   cd ../android-app
   ./gradlew build
   cd ../ios-app
   pod install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory of each service and application.
   - Add the necessary environment variables as specified in the `.env.example` files.

## Running Tests

1. Run unit tests for the backend services:
   ```bash
   cd backend/user-service
   npm test
   cd ../location-service
   npm test
   ```

2. Run unit tests for the frontend applications:
   ```bash
   cd ../../frontend/web-app
   npm test
   cd ../android-app
   ./gradlew test
   cd ../ios-app
   xcodebuild test -scheme LocationApp
   ```

## Deploying the Application

1. Set up a production environment:
   - Ensure all necessary environment variables are set in the production environment.
   - Configure the production database and other required services.

2. Deploy the backend services:
   ```bash
   cd backend/user-service
   npm run build
   npm start
   cd ../location-service
   npm run build
   npm start
   ```

3. Deploy the frontend applications:
   - For the web app, build and deploy the static files to a web server or CDN.
   - For the Android app, generate a release APK and distribute it through the Google Play Store.
   - For the iOS app, generate a release build and distribute it through the Apple App Store.
