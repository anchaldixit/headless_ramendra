"use client";

import { useEffect, useRef, useState } from "react";

type BookVideoPopupProps = {
  videoUrl: string;
  thumbnailUrl: string;
  altText?: string;
};

export default function BookVideoPopup({
  videoUrl,
  thumbnailUrl,
  altText = "Play video",
}: BookVideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsOpen(false);
  };

  /**
   * Autoplay uploaded video when popup opens
   */
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [isOpen]);

  /**
   * Close popup with ESC
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Book / Video Thumbnail */}
      <button
        type="button"
        onClick={openPopup}
        className="group relative w-[276px] h-[389px] overflow-hidden shrink-0 cursor-pointer"
        aria-label="Play video"
      >
        <img
          src={thumbnailUrl}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Play Icon */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-1"
            >
              <path
                d="M8 5V19L19 12L8 5Z"
                fill="#103f4b"
              />
            </svg>
          </span>
        </span>
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6"
          onClick={closePopup}
        >
          <div
            className="relative z-[10000] w-full max-w-[1100px]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close video"
              className="absolute -top-12 right-0 z-[10001] text-white text-[36px] leading-none hover:text-[#fecb69] transition-colors"
            >
              ×
            </button>

            {/* Video */}
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="relative z-10 block w-full max-h-[80vh] bg-black object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}