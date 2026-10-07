"use client";

import { useEffect, useRef, useState } from "react";

type VideoPopupProps = {
  videoSource: string;
  videoValue: string;
  title: string;
  thumbnail?: string;
};

export default function VideoPopup({
  videoSource,
  videoValue,
  title,
  thumbnail,
}: VideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isYouTube = videoSource === "youtube";

  /**
   * Clean YouTube video ID
   *
   * Example:
   * _3aqCwcNyCA&t
   * becomes:
   * _3aqCwcNyCA
   */
  const youtubeId = videoValue
    ? videoValue.split(/[?&]/)[0]
    : "";

  /**
   * YouTube thumbnail
   */
  const youtubeThumbnail = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : "";

  /**
   * Open popup
   */
  const openPopup = () => {
    setIsOpen(true);
  };

  /**
   * Close popup
   */
  const closePopup = () => {
    // Stop uploaded MP4 video
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsOpen(false);
  };

  /**
   * Auto play uploaded video
   */
  useEffect(() => {
    if (isOpen && !isYouTube && videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => {
          console.log("Video autoplay prevented:", error);
        });
    }
  }, [isOpen, isYouTube]);

  /**
   * ESC key close
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

  /**
   * Thumbnail
   */
  const posterImage =
    isYouTube && youtubeThumbnail
      ? youtubeThumbnail
      : thumbnail || "/assets/f2b64.png";

  return (
    <>
      {/* Video Card */}
      <button
        type="button"
        onClick={openPopup}
        className="group w-full text-left cursor-pointer"
        aria-label={`Play ${title}`}
      >
        <div className="relative h-[200px] overflow-hidden mb-4">

          <img
            src={posterImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Play icon */}
          <div className="absolute bottom-4 left-4">
            <img
              src="/assets/0d1bb.svg"
              alt="Play"
              width={45}
              height={32}
              className="block"
            />
          </div>

        </div>

        <p className="font-serif not-italic text-white text-[24px] leading-normal mb-2">
          {title}
        </p>
      </button>

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-[1100px]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close video"
              className="absolute -top-12 right-0 text-white text-[36px] leading-none hover:text-[#fecb69] transition-colors"
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
                className="w-full max-h-[80vh] bg-black object-contain"
              />
            )}

          </div>
        </div>
      )}
    </>
  );
}