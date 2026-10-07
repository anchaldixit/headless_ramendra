"use client";

import { useEffect, useRef, useState } from "react";

type FeaturedVideoPopupProps = {
  videoSource: string;
  videoValue: string;
  title: string;
};

export default function FeaturedVideoPopup({
  videoSource,
  videoValue,
  title,
}: FeaturedVideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const isYouTube = videoSource === "youtube";

  /**
   * Get clean YouTube video ID
   */
  const youtubeId = videoValue
    ? videoValue.split(/[?&]/)[0]
    : "";

  /**
   * Open popup
   */
  const openPopup = () => {
    setIsOpen(true);
  };

  /**
   * Close popup and stop uploaded video
   */
  const closePopup = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsOpen(false);
  };

  /**
   * Auto play uploaded media video
   */
  useEffect(() => {
    if (isOpen && !isYouTube && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [isOpen, isYouTube]);

  /**
   * ESC key
   */
  useEffect(() => {
    if (!isOpen) return;

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
      {/* Featured Video Card */}
      <button
        type="button"
        onClick={openPopup}
        className="relative group cursor-pointer w-full text-left"
        aria-label={`Play ${title}`}
      >
        <div className="border border-white/24 h-[280px] lg:h-[370px] overflow-hidden relative">

          {/* YouTube thumbnail */}
          {isYouTube && youtubeId ? (
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            /* Uploaded video fallback */
            <video
              src={videoValue}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          )}

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

          {/* Play icon */}
          <div className="absolute bottom-6 left-6">
            <img
              src="/assets/0d1bb.svg"
              alt="Play"
              width={45}
              height={32}
              className="block"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mt-4">
          <p className="font-serif not-italic text-white text-[28px] leading-normal mb-2">
            {title}
          </p>
        </div>
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
            {/* Close button */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close video"
              className="absolute -top-12 right-0 z-[10001] text-white text-[36px] leading-none hover:text-[#fecb69] transition-colors"
            >
              ×
            </button>

            {/* YouTube */}
            {isYouTube ? (
              <div className="relative w-full aspect-video bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
                  title={title}
                  className="absolute inset-0 z-10 block w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : (
              /* Uploaded Media Video */
              <video
                ref={videoRef}
                src={videoValue}
                controls
                autoPlay
                playsInline
                className="relative z-10 block w-full max-h-[80vh] bg-black object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}