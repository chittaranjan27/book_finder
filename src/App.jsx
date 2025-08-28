"use client"

import { useState } from "react"
import SearchBar from "./components/SearchBar"
import BookCard from "./components/BookCard"
import "./App.css"

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (query) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=20`)

      if (!response.ok) {
        throw new Error("Failed to fetch books")
      }

      const data = await response.json()
      setBooks(data.docs || [])
    } catch (err) {
      setError(err.message || "An error occurred while searching")
      setBooks([])
    } finally {
      setLoading(false)
    }
  }

  const LoadingGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-4 animate-pulse">
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-48 rounded-lg mb-4"></div>
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-4 rounded mb-2"></div>
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-3 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  )

  const EmptyState = () => (
    <div className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-6xl mb-4">🔍</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">No books found</h2>
      <p className="text-gray-600 mb-6">Try searching with different keywords or browse by categories</p>
      <div className="flex flex-wrap justify-center gap-3">
        <button onClick={() => handleSearch("fiction")} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors shadow-sm">
          Fiction
        </button>
        <button onClick={() => handleSearch("science")} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors shadow-sm">
          Science
        </button>
        <button onClick={() => handleSearch("history")} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors shadow-sm">
          History
        </button>
        <button onClick={() => handleSearch("biography")} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors shadow-sm">
          Biography
        </button>
      </div>
    </div>
  )

  const ErrorState = () => (
    <div className="text-center py-16 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 max-w-2xl mx-auto">
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-6">{error}</p>
      <button
        onClick={() => setError(null)}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md"
      >
        Try Again
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-2">
              📚 Book Finder
            </h1>
            <p className="text-gray-600 text-lg">Discover your next great read</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Find Your Next Favorite Book</h2>
            <p className="text-gray-600">Search by title, author, or genre</p>
          </div>
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>

        {/* Results Section */}
        <div className="space-y-8">
          {loading && <LoadingGrid />}

          {error && <ErrorState />}

          {!loading && !error && hasSearched && (
            <>
              {books.length > 0 ? (
                <>
                  <div className="text-center">
                    <p className="text-gray-600 bg-white inline-block px-4 py-2 rounded-full shadow-sm">
                      Found <span className="font-bold text-blue-600">{books.length}</span> books
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                      <BookCard key={book.key} book={book} />
                    ))}
                  </div>
                </>
              ) : (
                <EmptyState />
              )}
            </>
          )}

          {!hasSearched && (
            <div className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="text-6xl mb-4">📖</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Your Book Discovery Journey</h2>
              <p className="text-gray-600 mb-6">Search for books by title, author, or genre to get started</p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl shadow-md w-40">
                  <div className="text-3xl mb-2">🔍</div>
                  <h3 className="font-semibold text-gray-800">Search</h3>
                  <p className="text-sm text-gray-600">Find books by any criteria</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md w-40">
                  <div className="text-3xl mb-2">⭐</div>
                  <h3 className="font-semibold text-gray-800">Discover</h3>
                  <p className="text-sm text-gray-600">Explore new titles</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md w-40">
                  <div className="text-3xl mb-2">❤️</div>
                  <h3 className="font-semibold text-gray-800">Save</h3>
                  <p className="text-sm text-gray-600">Keep track of favorites</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-600">
            Powered by{" "}
            <a
              href="https://openlibrary.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Open Library API
            </a>{" "}
            • Made with ❤️ by @👨‍💻Chitaranjan
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App