const BookCard = ({ book }) => {
  const { title, author_name, first_publish_year, cover_i, key } = book

  const coverUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : "/abstract-book-cover.png"

  const authors = author_name ? author_name.slice(0, 2).join(", ") : "Unknown Author"
  const year = first_publish_year || "Unknown Year"

  return (
    <div className="book-card group bg-white text-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 
                    hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      
      {/* Book cover with gradient overlay on hover */}
      <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden">
        <img
          src={coverUrl || "/placeholder.svg"}
          alt={`Cover of ${title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "/abstract-book-cover.png"
          }}
        />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Publication year badge */}
        <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
          {year}
        </div>
      </div>
      
      {/* Book details */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="line-clamp-1">by {authors}</span>
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Save
          </button>
          
          <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1.5 rounded-full transition-colors flex items-center">
            More info
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard