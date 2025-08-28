# Book Finder

A modern React application for discovering books using the Open Library API.

## Features

- 🔍 Search books by title, author, or genre
- 📚 Responsive grid layout for book results
- 🎨 Clean, modern UI with Tailwind CSS
- ⚡ Fast loading with skeleton states
- 📱 Mobile-friendly responsive design
- 🔄 Error handling and retry functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```sh
git clone https://github.com/chittaranjan27/book_finder.git
cd book_finder
npm install


### Running the Application

npm run dev

The application will open in your browser at `http://localhost:{port}`

### Building for Production

Create a production build:

npm run build
npm run preview

## Project Structure

\`\`\`
src/
├── components/
│   ├── SearchBar.jsx    # Search input component
│   └── BookCard.jsx     # Individual book display component
├── App.jsx              # Main application component
├── App.css              # Custom styles and animations
├── main.jsx             # React entry point
└── index.css            # Tailwind CSS imports
\`\`\`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Open Library API** - Book data source

## API Reference

This application uses the [Open Library Search API](https://openlibrary.org/dev/docs/api/search) to fetch book data.

## License

This project is open source and available under the MIT License.
