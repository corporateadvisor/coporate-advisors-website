// src/app/news-events/page.tsx
"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { FiDownload, FiCalendar } from "react-icons/fi";
import Image from "next/image";

type NewsEvent = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
  createdAt: unknown;
  updatedAt: unknown;
};

export default function NewsEventsPage() {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNewsEvents = async () => {
      try {
        const q = query(
          collection(db, "uploads"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as NewsEvent[];

        setNewsEvents(data);
      } catch (err) {
        console.error("Error fetching news/events:", err);
        setError("Failed to load news and events");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsEvents();
  }, []);

  const formatDate = (timestamp: unknown): string => {
    if (!timestamp) return "";
    try {
      let date: Date;
      if (timestamp && typeof timestamp === "object" && "toDate" in timestamp) {
        // Firestore Timestamp
        date = (timestamp as { toDate: () => Date }).toDate();
      } else if (timestamp instanceof Date) {
        // JavaScript Date object
        date = timestamp;
      } else {
        // String or number timestamp
        date = new Date(timestamp as string | number);
      }

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (err) {
      console.error("Error formatting date:", err);
      return "";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            Loading news and events...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-base sm:text-lg font-medium text-[#231f20] mb-3 sm:mb-4">
            News And Events
          </h2>
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            <span className="text-black">News</span>
            <span className="text-[#ffcb05] mx-2">And</span>
            <span className="text-black">Events</span>
          </h1>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 sm:mb-8 text-center text-sm sm:text-base">
            {error}
          </div>
        )}

        {/* News/Events Grid - Centered with 60% width on mobile */}
        <div className="flex justify-center">
          <div className="w-full max-w-[60%] sm:max-w-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newsEvents.length === 0 ? (
              <div className="col-span-full text-center py-8 sm:py-12">
                <p className="text-gray-500 text-base sm:text-lg">
                  No news or events available at the moment.
                </p>
              </div>
            ) : (
              newsEvents.map((item) => (
                <NewsEventCard
                  key={item.id}
                  item={item}
                  formatDate={formatDate}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Individual News Event Card Component - Side by side layout on all screens
function NewsEventCard({
  item,
  formatDate,
}: {
  item: NewsEvent;
  formatDate: (timestamp: unknown) => string;
}) {
  const [isExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full w-full">
      {/* Side by side layout for all screen sizes */}
      <div className="flex flex-row h-full">
        {/* Image Section - 60% width */}
        <div className="w-3/5">
          {item.imageUrl ? (
            <div className="w-full h-full relative min-h-[180px] sm:min-h-[200px]">
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-contain"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 768px) 45vw, 30vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/placeholder-news.jpg";
                }}
              />
            </div>
          ) : (
            <div className="w-full h-full min-h-[180px] sm:min-h-[200px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs sm:text-sm">No Image</span>
            </div>
          )}
        </div>

        {/* Content Section - 40% width */}
        <div className="w-2/5 p-3 sm:p-4 flex flex-col">
          {/* Date */}
          <div className="flex items-center text-gray-500 mb-2">
            <FiCalendar className="mr-1 text-xs" />
            <span className="text-xs">{formatDate(item.createdAt)}</span>
          </div>

          {/* Title */}
          <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
            {item.title}
          </h2>

          {/* Description */}
          <div className="text-gray-600 text-[10px] sm:text-[12px] mb-3 leading-relaxed flex-1">
            <div className={`${isExpanded ? "" : "line-clamp-6 sm:line-clamp-10"}`}>
              <p className="whitespace-pre-line text-justify">
                {item.description || "No description available."}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-auto pt-2">
            {/* Read More Link */}
            <Link
              href={`/News-Events/${item.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 text-xs sm:text-sm"
            >
              Read More...
            </Link>

            {/* Download Icon */}
            {item.pdfUrl && (
              <a
                href={item.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-1 sm:p-2"
                title="Download PDF"
              >
                <FiDownload size={14} className="sm:w-[16px] sm:h-[16px]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}