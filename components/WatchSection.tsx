import { fetchGraphQL } from "@/lib/wpgraphql";
import VideoPopup from "@/components/VideoPopup";
import FeaturedVideoPopup from "@/components/FeaturedVideoPopup";

type WatchVideo = {
  videoSource: string[];
  videoTitle: string | null;
  videoUrlUploadMediaVideoUrlOrYoutubeVideoId: string | null;
};

type FeaturedVideo = {
  featuredVideoSource: string[];
  videoTitle: string | null;
  videoUrlUploadMediaVideoUrlOrYoutubeVideoId: string | null;
};

type WatchSectionResponse = {
  page: {
    homapageFieldValue: {
      homepageVideoSectionFieldValue: {
        featuredVideo: FeaturedVideo[];
        interactionsVideos: WatchVideo[];
      } | null;
    } | null;
  } | null;
};

const GET_WATCH_SECTION_DATA = `
  query GetWatchSectionData {
    page(id: 8, idType: DATABASE_ID) {
      homapageFieldValue {
        homepageVideoSectionFieldValue {

          featuredVideo {
            featuredVideoSource
            videoTitle
            videoUrlUploadMediaVideoUrlOrYoutubeVideoId
          }

          interactionsVideos {
            videoSource
            videoTitle
            videoUrlUploadMediaVideoUrlOrYoutubeVideoId
          }

        }
      }
    }
  }
`;

export default async function WatchSection() {
  const data = await fetchGraphQL<WatchSectionResponse>(
    GET_WATCH_SECTION_DATA
  );

  const videoSection =
    data.page?.homapageFieldValue?.homepageVideoSectionFieldValue;

  const featuredVideos = videoSection?.featuredVideo || [];

  const videos = videoSection?.interactionsVideos || [];

  return (
    <section
      id="watch"
      className="bg-[#103f4b] w-full py-16 lg:py-24"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">

        {/* Section heading */}
        <div className="max-w-[630px] mb-12">

          <p className="font-sans font-bold text-[#fecb69] text-[18px] tracking-[2.16px] uppercase mb-3">
            WATCH
          </p>

          <h2 className="font-serif not-italic text-white text-[48px] lg:text-[64px] leading-normal mb-4">
            Words are only{" "}
            <em className="font-serif italic text-[#fecb69]">
              half the story.
            </em>
          </h2>

          <p className="font-sans font-normal text-white text-[20px] leading-normal">
            On stage, in conversation, and wherever a story finds its audience.
          </p>

        </div>


        {/* Featured videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

          {featuredVideos.map((video, index) => {

            const source =
              video.featuredVideoSource?.[0]?.toLowerCase() || "";

            const videoValue =
              video.videoUrlUploadMediaVideoUrlOrYoutubeVideoId || "";

            const title =
              video.videoTitle || "Watch video";

            /**
             * Don't render invalid video
             */
            if (!source || !videoValue) {
              return null;
            }

            return (
              <FeaturedVideoPopup
                key={`${title}-${index}`}
                videoSource={source}
                videoValue={videoValue}
                title={title}
              />
            );
          })}

        </div>


        {/* Divider */}
        <div className="w-full h-px bg-white/24 my-12" />


        {/* More talks heading */}
        <h3 className="font-serif not-italic text-white text-[44px] leading-normal mb-8">
          More talks &amp; interviews
        </h3>


        {/* More videos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">

          {videos.map((video, index) => {

            const source =
              video.videoSource?.[0]?.toLowerCase() || "";

            const videoValue =
              video.videoUrlUploadMediaVideoUrlOrYoutubeVideoId || "";

            const title =
              video.videoTitle || "Watch video";

            /**
             * Don't render invalid video
             */
            if (!source || !videoValue) {
              return null;
            }

            return (
              <VideoPopup
                key={`${title}-${index}`}
                videoSource={source}
                videoValue={videoValue}
                title={title}
              />
            );
          })}

        </div>


        {/* Cancer Warrior feature card */}
        <div className="bg-[#15606d] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

          <div className="h-[320px] lg:h-[521px] overflow-hidden">

            <img
              src="/assets/1d30d.png"
              alt="Crowned Mr India Cancer Warrior"
              className="w-full h-full object-cover"
            />

          </div>


          <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">

            <div>

              <h3 className="font-serif not-italic text-white text-[48px] lg:text-[62px] leading-normal mb-3">
                Crowned Mr India{" "}
                <em className="font-serif italic text-[#fecb69]">
                  Cancer Warrior.
                </em>
              </h3>

              <p className="font-sans font-normal text-white text-[20px] leading-[28px] max-w-[394px]">
                Celebrating resilience, humour and living life to the fullest.
              </p>

            </div>

            <a
              href="#"
              className="font-sans font-medium text-[#fecb69] text-[20px] underline hover:no-underline transition-all"
            >
              See the moment
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}