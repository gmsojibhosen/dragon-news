import React, { useState } from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { FiBookmark, FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  // Optional: bookmark toggle state
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 max-w-xl mx-auto ">
      {/* Top: Author + Date + Icons */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm text-gray-500">
            <p className="font-medium text-gray-800">{author.name}</p>
            <p className="text-xs text-gray-400">
              {new Date(news.author.published_date).toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </div>
        </div>

        {/* Bookmark + Share Icons */}
        <div className="flex items-center gap-3 text-gray-400">
          <button
            onClick={() => setBookmarked(!bookmarked)}
            className="hover:text-gray-600"
          >
            <FiBookmark
              size={20}
              className={bookmarked ? "text-blue-600" : "text-gray-400"}
            />
          </button>
          <button className="hover:text-gray-600">
            <FiShare2 size={20} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold p-4 line-clamp-2">{title}</h2>

      {/* Image */}
      <div className="w-full">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-4 text-gray-700 text-sm line-clamp-3">{details}</div>

      {/* Read More */}
      <div className="px-4 pb-4">
        <button className="text-blue-600 font-medium hover:underline">
          Read More
        </button>
      </div>

      {/* Footer: Rating + Views */}
      <div className="flex items-center justify-between px-4 pb-4 text-gray-500">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.floor(rating.number)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
