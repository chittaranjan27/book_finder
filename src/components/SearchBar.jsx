"use client"

import { useState } from "react"

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex flex-col gap-2">
        <label htmlFor="book-search" className="text-sm font-medium text-gray-700 pl-1">
          Discover your next great read
        </label>
        
        <div className={`flex items-center gap-2 p-1 rounded-xl border-2 transition-all duration-300 
          ${isFocused ? 'border-blue-500 shadow-lg' : 'border-gray-300 shadow-sm'} 
          ${loading ? 'opacity-70' : ''} bg-white`}>
          
          <div className="flex-1 relative">
            <input
              id="book-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search by title, author, or genre..."
              className="w-full px-5 py-4 text-lg border-none bg-transparent text-gray-800 
                       focus:outline-none placeholder-gray-400"
              disabled={loading}
            />
          </div>
          
          <div className="pr-2">
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                        ${loading || !query.trim() ? 
                         'bg-gray-300 cursor-not-allowed' : 
                         'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg'}`}
              aria-label="Search"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2 px-1">
          <span className="text-xs text-gray-500">Try:</span>
          <button 
            type="button"
            onClick={() => setQuery("Science Fiction")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
          >
            Science Fiction
          </button>
          <button 
            type="button"
            onClick={() => setQuery("Mystery")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
          >
            Mystery
          </button>
          <button 
            type="button"
            onClick={() => setQuery("Biography")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
          >
            Biography
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar