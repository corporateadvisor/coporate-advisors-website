"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Link from "next/link";
import {
  FiDownload,
  FiCalendar,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

type NewsEvent = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
  createdAt: unknown;
  updatedAt: unknown;
};

export default function NewsEventDetailPage() {
  const params = useParams();
  const [newsEvent, setNewsEvent] = useState<NewsEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [relatedEvents, setRelatedEvents] = useState<NewsEvent[]>([]);

  useEffect(() => {
    const fetchNewsEvent = async () => {
      try {
        const idFromUrl = params.id as string;

        if (!idFromUrl) {
          setError("Invalid news event ID");
          setLoading(false);
          return;
        }

        const docRef = doc(db, "uploads", idFromUrl);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const eventData = {
            id: docSnap.id,
            ...docSnap.data(),
          } as NewsEvent;
          setNewsEvent(eventData);
          fetchRelatedEvents(eventData.id);
        } else {
          const q = query(
            collection(db, "uploads"),
            where("id", "==", idFromUrl)
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            const eventData = {
              id: doc.id,
              ...doc.data(),
            } as NewsEvent;
            setNewsEvent(eventData);
            fetchRelatedEvents(doc.id);
          } else {
            setError("News/Event not found.");
            setLoading(false);
          }
        }
      } catch (err) {
        console.error("Error fetching news/event:", err);
        setError("Failed to load news/event.");
        setLoading(false);
      }
    };

    const fetchRelatedEvents = async (currentEventId: string) => {
      try {
        const q = query(
          collection(db, "uploads"),
          orderBy("createdAt", "desc") // Sort by newest first
        );
        const querySnapshot = await getDocs(q);
        const allEvents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as NewsEvent[];

        // Filter out current event and get the 3 newest events
        const filteredEvents = allEvents
          .filter((event) => event.id !== currentEventId)
          .slice(0, 3);

        setRelatedEvents(filteredEvents);
      } catch (err) {
        console.error("Error fetching related events:", err);
        // Fallback: try without ordering if createdAt field doesn't exist
        try {
          const q = query(collection(db, "uploads"));
          const querySnapshot = await getDocs(q);
          const allEvents = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as NewsEvent[];

          // Sort by createdAt if available, otherwise use document ID as fallback
          const sortedEvents = allEvents.sort((a, b) => {
            const dateA = getTimestampValue(a.createdAt);
            const dateB = getTimestampValue(b.createdAt);
            return dateB - dateA; // Descending order (newest first)
          });

          const filteredEvents = sortedEvents
            .filter((event) => event.id !== currentEventId)
            .slice(0, 3);

          setRelatedEvents(filteredEvents);
        } catch (fallbackErr) {
          console.error("Error in fallback fetching:", fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchNewsEvent();
    }
  }, [params.id]);

  // Helper function to extract timestamp value for sorting
  const getTimestampValue = (timestamp: unknown): number => {
    if (!timestamp) return 0;
    try {
      if (timestamp && typeof timestamp === "object" && "toDate" in timestamp) {
        // Firestore Timestamp
        return (timestamp as { toDate: () => Date }).toDate().getTime();
      } else if (timestamp instanceof Date) {
        // JavaScript Date object
        return timestamp.getTime();
      } else if (
        typeof timestamp === "string" ||
        typeof timestamp === "number"
      ) {
        // String or number timestamp
        return new Date(timestamp).getTime();
      }
    } catch (err) {
      console.error("Error parsing timestamp:", err);
    }
    return 0;
  };

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <div className="text-gray-600">Loading news event...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !newsEvent) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <h1 className="text-2xl font-bold mb-2">News/Event Not Found</h1>
              <p>{error}</p>
            </div>
            <Link
              href="/News-Events"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FiArrowLeft className="mr-2" />
              Back to News & Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/News-Events"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200"
          >
            <FiArrowLeft className="mr-2" />
            Back to All News & Events
          </Link>
        </div>

        {/* Image Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="w-full h-64 bg-gray-200 relative">
            {newsEvent.imageUrl ? (
              <Image
                src={newsEvent.imageUrl}
                alt={newsEvent.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            {/* Date Information */}
            <div className="mb-4">
              <div className="flex items-center text-gray-500">
                <FiCalendar className="mr-2" />
                <span className="text-sm font-medium">
                  Published on {formatDate(newsEvent.createdAt)}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {newsEvent.title}
            </h1>

            {/* Description with justified text */}
            <div className="mb-8">
              <div className="text-gray-700 leading-relaxed text-base text-justify">
                {newsEvent.description ||
                  "No description available for this news event."}
              </div>
            </div>

            {/* PDF Download */}
            {newsEvent.pdfUrl && (
              <div className="border-t border-gray-200 pt-6">
                <a
                  href={newsEvent.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <FiDownload className="mr-2" />
                  Download PDF Document
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Related News/Events - Compact Version - Now sorted by newest first */}
        {relatedEvents.length > 0 && (
          <div className="w-full bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                More News & Events
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Latest updates and announcements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedEvents.map((event) => (
                <div
                  key={event.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-32 bg-gray-200">
                    {event.imageUrl ? (
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="flex items-center text-gray-500 text-xs mb-1">
                      <FiCalendar className="mr-1" />
                      {formatDate(event.createdAt)}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                      {event.title}
                    </h3>
                    <Link
                      href={`/News-Events/${event.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-xs"
                    >
                      Read More
                      <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <Link
                href="/News-Events"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                View All Events
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
