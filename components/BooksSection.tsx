// Books section — book data ready for WordPress/GraphQL
import { fetchGraphQL } from "@/lib/wpgraphql";
import { GET_STATS_BAR_DATA, StateBarSectionResponse } from "./StatsBar";
import Image from "next/image";

export type BookSectionResponse = {
  page: {
    homapageFieldValue: {
      homepageBookSectionFieldValue: {
        bookSectionInHeading: string | null;
        bookShortDetailsAboutBooks: string | null;
        totalNumberOfBookInHeadingLabel: string | null;
        totalNumberOfBooksPublic: string | null;

        publishedBooks: {
          bookName: string | null;
          bookType: string | null;
          bookUrl: string | null;
          bookImage: {
            node: {
              sourceUrl: string;
              altText: string | null;
            } | null;
          } | null;
        }[] | null;

      } | null;
    } | null;
  } | null;
};

export const GET_BOOK_DATA = `
  query GetBookData {
    page(id: 8, idType: DATABASE_ID) {
      homapageFieldValue {
        homepageBookSectionFieldValue {
          bookSectionInHeading
          bookShortDetailsAboutBooks
          totalNumberOfBookInHeadingLabel
          totalNumberOfBooksPublic

          publishedBooks {
            bookName
            bookType
            bookUrl
            bookImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;



export default async function BooksSection() {

  const data = await fetchGraphQL<BookSectionResponse>(
  GET_BOOK_DATA
  );

  const bookData = data.page?.homapageFieldValue?.homepageBookSectionFieldValue;

  return (
    <section id="books" className="w-full">
      {/* Yellow background header area */}
      <div className="bg-[#ffe0a6] w-full py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left text */}
            <div className="lg:w-[630px] shrink-0">
              <p className="font-sans font-bold text-[#bd2e65] text-[18px] tracking-[2.16px] uppercase mb-3">
                BOOKS
              </p>
              <h2 className="font-serif not-italic text-[#18343e] text-[48px] lg:text-[64px] leading-normal mb-4">
                Stories for{" "}
                <em className="font-serif italic text-[#bd2e65]">every kind of reader.</em>
              </h2>
              <p className="font-sans font-normal text-[#18343e] text-[20px] leading-[32px]">
                {bookData?.bookShortDetailsAboutBooks}
              </p>
            </div>

            {/* "55" counter */}
            <div className="lg:flex-1 flex flex-col items-end">
              <p className="font-serif not-italic text-[#bd2e65] text-[120px] lg:text-[200px] leading-none">
                {bookData?.totalNumberOfBooksPublic}
              </p>
              <p className="font-sans font-normal text-[#5f5f60] text-[20px] leading-[32px] text-right">
                BOOKS &amp;
                <br />
                COUNTING
                {/* {bookData?.totalNumberOfBookInHeadingLabel} */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cream background books grid */}
      <div className="bg-[#ffe0a6] w-full py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {bookData?.publishedBooks?.map((book) => (
              <div className="flex flex-col gap-6">
                <div className="aspect-[275/425] border border-[#eeebeb] overflow-hidden">
                  <a href={book.bookUrl || "#"} target="_blank" rel="noopener noreferrer">
                    {book.bookImage?.node?.sourceUrl && (
                      <img src={book.bookImage.node.sourceUrl}
                        alt={
                          book.bookImage.node.altText ||
                          book.bookName ||
                          "Book by Ramendra Kumar"
                        }
                        className="w-full h-full object-cover"/>
                    )}
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                   <a
                    href={book.bookUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer" >
                    <p className="font-serif not-italic text-[#18343e] text-[18px] lg:text-[20px] leading-normal">
                      {book.bookName}
                    </p>
                      </a>
                    <p className="font-sans font-medium text-[#5f5f60] text-[16px] lg:text-[18px]">
                      {book.bookType}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
