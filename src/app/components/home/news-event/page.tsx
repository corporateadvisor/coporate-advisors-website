"use client";

import { useEffect, useState } from "react";
import { db, storage, auth } from "@/app/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

interface UploadData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
  docId: string;
}

export default function ViewUploads() {
  const [uploads, setUploads] = useState<UploadData[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUploads = async () => {
      const querySnapshot = await getDocs(collection(db, "uploads"));
      const data: UploadData[] = querySnapshot.docs.map((docSnap) => {
        const d = docSnap.data() as Omit<UploadData, "docId">;
        return { ...d, docId: docSnap.id };
      });
      setUploads(data);
    };

    fetchUploads();
  }, []);

  const handleDelete = async (upload: UploadData) => {
    setDeletingId(upload.docId);
    try {
      if (upload.imageUrl) {
        const imageRef = ref(storage, upload.imageUrl);
        await deleteObject(imageRef).catch(() => {});
      }
      if (upload.pdfUrl) {
        const pdfRef = ref(storage, upload.pdfUrl);
        await deleteObject(pdfRef).catch(() => {});
      }

      await deleteDoc(doc(db, "uploads", upload.docId));
      setUploads((prev) => prev.filter((item) => item.docId !== upload.docId));
    } finally {
      setDeletingId(null);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="max-w-[90%] mx-auto bg-[#F5F7F8] mb-4">
      {/* Sign Out Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>

      {/* Title */}
      <div className="pb-4 mb-6 relative">
        <div className="flex justify-center font-bold mt-5">
          <p className="text-[42px]">
            <span className="text-black">News </span>
            <span className="text-yellow-400">And </span>
            <span className="text-black">Events</span>
          </p>
        </div>
      </div>

      {/* Upload Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uploads.map((upload) => (
          <div
            key={upload.docId}
            className="bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden flex"
          >
            {/* Left: Image */}
            <div className="w-1/3">
              {upload.imageUrl ? (
                <Image
                  src={upload.imageUrl}
                  alt="Uploaded"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                  No Image
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-1">{upload.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-3 mt-4">
                  {upload.description}
                </p>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <Link
                  href={`/uploads/${upload.docId}`}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Read more...
                </Link>

                {upload.pdfUrl && (
                  <a
                    href={upload.pdfUrl}
                    download
                    title="Download PDF"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FiDownload size={18} />
                  </a>
                )}

                <button
                  onClick={() => handleDelete(upload)}
                  disabled={deletingId === upload.docId}
                  className="text-red-600 text-sm hover:underline ml-auto"
                >
                  {deletingId === upload.docId ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-6">
        <Link
          href="/news"
          className="px-6 py-2 border-2 bg-white mb-5 border-[#FFCB05] text-gray-700 rounded justify-center text-center transition w-[15%]"
        >
          See More...
        </Link>
      </div>
    </div>
  );
}
