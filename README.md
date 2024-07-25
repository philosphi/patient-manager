# Patient Manager

## Features
- View a list of all patients
- Add new patients to the system
- View detailed information for each patient

## Technologies Used
- Next.js 13+ (App Router)
- React
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository
   ```
   git clone https://github.com/yourusername/patient-manager.git
   ```
2. Navigate to the project directory
   ```
   cd patient-manager
   ```
3. Install dependencies
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application
1. Start the development server
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage
- On the homepage, you'll see a list of all patients
- Click on a patient's name to view their detailed information
- Use the "Add a Patient" button to create a new patient record

## API Routes
- GET `/api/patients`: Fetch all patients
- GET `/api/patients/[id]`: Fetch a specific patient by ID
- POST `/api/patients`: Create a new patient

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.