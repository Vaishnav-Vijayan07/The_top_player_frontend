import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "@/store/NewsSlice";
import { format } from "date-fns";
const News = ({ styles, Lang }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { allNews } = useSelector((state) => state.NewsSlice);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAllNews()).unwrap();
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div className={styles.news_section}>
      <div className="container">
        <div className={styles.tleFlx}>
          <div className={`${styles.tleWrap} tleWrap`}>
            <h2 className={"mTle"}>Trending News</h2>
          </div>
          <div className={styles.rgtSd}>
            <div className={styles.btnWrap}>
              <Link
                href={"#!"}
                className="vAllBtn"
                aria-label="view all button"
              >
                <span>VIEW ALL</span>
                <span
                  className="icon"
                  style={{
                    transform: Lang === "ar" ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2016_70)">
                      <path
                        d="M11 0C4.9344 0 0 4.9344 0 11C0 17.0656 4.9344 22 11 22C17.0656 22 22 17.0656 22 11C22 4.9344 17.0656 0 11 0ZM14.3981 11.6481L9.81475 16.2314C9.636 16.4102 9.40135 16.5 9.16665 16.5C8.932 16.5 8.6973 16.4102 8.51855 16.2314C8.16015 15.873 8.16015 15.2937 8.51855 14.9353L12.4538 11L8.5186 7.06475C8.1602 6.70635 8.1602 6.127 8.5186 5.7686C8.877 5.4102 9.45635 5.4102 9.81475 5.7686L14.3981 10.3519C14.7565 10.7103 14.7565 11.2897 14.3981 11.6481Z"
                        fill="#C7A27D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2016_70">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.dFlx}>
          {allNews?.news?.map((item) => (
            <div className={styles.item} key={item?.id}>
              <div className={styles.newsBx}>
                <div className={styles.dElmt}>
                  <Image
                    src={"/images/news-dElmt-1.svg"}
                    alt="dElmt"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.imgWrap}>
                  <Image
                    src={"/images/news-1.jpg"}
                    alt="news"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.cntWrap}>
                  <div className={styles.tle}>
                    {Lang === "en" ? item?.title_en : item?.title_ar}
                  </div>
                  <div className={styles.txt}>
                    {Lang === "en"
                      ? item?.description_en
                      : item?.description_ar}
                  </div>
                  <div className={styles.info}>
                    Post Date :{" "}
                    {format(new Date(item?.createdAt), "dd MMMM yyyy")}
                  </div>
                  <Link
                    href={"#!"}
                    className={`${styles.vAllBtn} vAllBtn`}
                    aria-label="view all button"
                  >
                    <span>{Lang === "en" ? "READ MORE" : "اقرأ المزيد"}</span>
                    <span
                      className="icon"
                      style={{
                        transform:
                          Lang === "ar" ? "rotate(180deg)" : "rotate(0)",
                      }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2016_70)">
                          <path
                            d="M11 0C4.9344 0 0 4.9344 0 11C0 17.0656 4.9344 22 11 22C17.0656 22 22 17.0656 22 11C22 4.9344 17.0656 0 11 0ZM14.3981 11.6481L9.81475 16.2314C9.636 16.4102 9.40135 16.5 9.16665 16.5C8.932 16.5 8.6973 16.4102 8.51855 16.2314C8.16015 15.873 8.16015 15.2937 8.51855 14.9353L12.4538 11L8.5186 7.06475C8.1602 6.70635 8.1602 6.127 8.5186 5.7686C8.877 5.4102 9.45635 5.4102 9.81475 5.7686L14.3981 10.3519C14.7565 10.7103 14.7565 11.2897 14.3981 11.6481Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2016_70">
                            <rect width="22" height="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className={`${styles.cntWrap} ${styles.dElmtcntWrap}`}>
                  <div className={styles.tle}>
                    Lorem Ipsum is simply dummy text of the printing.
                  </div>
                  <div className={styles.txt}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </div>
                  <div className={styles.info}>Post Date : 25 March 2024</div>
                  <Link
                    href={"#!"}
                    className={`${styles.vAllBtn} vAllBtn`}
                    aria-label="view all button"
                  >
                    <span>READ MORE</span>
                    <span
                      className="icon"
                      style={{
                        transform:
                          Lang === "ar" ? "rotate(180deg)" : "rotate(0)",
                      }}
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2016_70)">
                          <path
                            d="M11 0C4.9344 0 0 4.9344 0 11C0 17.0656 4.9344 22 11 22C17.0656 22 22 17.0656 22 11C22 4.9344 17.0656 0 11 0ZM14.3981 11.6481L9.81475 16.2314C9.636 16.4102 9.40135 16.5 9.16665 16.5C8.932 16.5 8.6973 16.4102 8.51855 16.2314C8.16015 15.873 8.16015 15.2937 8.51855 14.9353L12.4538 11L8.5186 7.06475C8.1602 6.70635 8.1602 6.127 8.5186 5.7686C8.877 5.4102 9.45635 5.4102 9.81475 5.7686L14.3981 10.3519C14.7565 10.7103 14.7565 11.2897 14.3981 11.6481Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2016_70">
                            <rect width="22" height="22" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <div className={styles.item}>
            <div className={styles.newsBx}>
              <div className={styles.dElmt}>
                <Image
                  src={"/images/news-dElmt-1.svg"}
                  alt="dElmt"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={styles.imgWrap}>
                <Image
                  src={"/images/news-1.jpg"}
                  alt="news"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cntWrap}>
                <div className={styles.tle}>
                  Lorem Ipsum is simply dummy text of the printing.
                </div>
                <div className={styles.txt}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
                <div className={styles.info}>Post Date : 25 March 2024</div>
                <Link
                  href={"#!"}
                  className={`${styles.vAllBtn} vAllBtn`}
                  aria-label="view all button"
                >
                  <span>READ MORE</span>
                  <span
                    className="icon"
                    style={{
                      transform: Lang === "ar" ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2016_70)">
                        <path
                          d="M11 0C4.9344 0 0 4.9344 0 11C0 17.0656 4.9344 22 11 22C17.0656 22 22 17.0656 22 11C22 4.9344 17.0656 0 11 0ZM14.3981 11.6481L9.81475 16.2314C9.636 16.4102 9.40135 16.5 9.16665 16.5C8.932 16.5 8.6973 16.4102 8.51855 16.2314C8.16015 15.873 8.16015 15.2937 8.51855 14.9353L12.4538 11L8.5186 7.06475C8.1602 6.70635 8.1602 6.127 8.5186 5.7686C8.877 5.4102 9.45635 5.4102 9.81475 5.7686L14.3981 10.3519C14.7565 10.7103 14.7565 11.2897 14.3981 11.6481Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2016_70">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </div>
              <div className={`${styles.cntWrap} ${styles.dElmtcntWrap}`}>
                <div className={styles.tle}>
                  Lorem Ipsum is simply dummy text of the printing.
                </div>
                <div className={styles.txt}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
                <div className={styles.info}>Post Date : 25 March 2024</div>
                <Link
                  href={"#!"}
                  className={`${styles.vAllBtn} vAllBtn`}
                  aria-label="view all button"
                >
                  <span>READ MORE</span>
                  <span
                    className="icon"
                    style={{
                      transform: Lang === "ar" ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2016_70)">
                        <path
                          d="M11 0C4.9344 0 0 4.9344 0 11C0 17.0656 4.9344 22 11 22C17.0656 22 22 17.0656 22 11C22 4.9344 17.0656 0 11 0ZM14.3981 11.6481L9.81475 16.2314C9.636 16.4102 9.40135 16.5 9.16665 16.5C8.932 16.5 8.6973 16.4102 8.51855 16.2314C8.16015 15.873 8.16015 15.2937 8.51855 14.9353L12.4538 11L8.5186 7.06475C8.1602 6.70635 8.1602 6.127 8.5186 5.7686C8.877 5.4102 9.45635 5.4102 9.81475 5.7686L14.3981 10.3519C14.7565 10.7103 14.7565 11.2897 14.3981 11.6481Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2016_70">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.newsBx}>
              <div className={styles.dElmt}>
                <Image
                  src={"/images/news-dElmt-1.svg"}
                  alt="dElmt"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={styles.imgWrap}>
                <Image
                  src={"/images/news-1.jpg"}
                  alt="news"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cntWrap}>
                <div className={styles.tle}>
                  Lorem Ipsum is simply dummy text of the printing.
                </div>
                <div className={styles.txt}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
                <div className={styles.info}>Post Date : 25 March 2024</div>
                <Link
                  href={"#!"}
                  className={`${styles.vAllBtn} vAllBtn`}
                  aria-label="view all button"
                >
                  <span>READ MORE</span>
                  <span
                    className="icon"
                    style={{
                      transform: Lang === "ar" ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2016_70)">
                        <path
                          d="M11 0C4.9344 0 0 4.9344 0 11C0 17.0656 4.9344 22 11 22C17.0656 22 22 17.0656 22 11C22 4.9344 17.0656 0 11 0ZM14.3981 11.6481L9.81475 16.2314C9.636 16.4102 9.40135 16.5 9.16665 16.5C8.932 16.5 8.6973 16.4102 8.51855 16.2314C8.16015 15.873 8.16015 15.2937 8.51855 14.9353L12.4538 11L8.5186 7.06475C8.1602 6.70635 8.1602 6.127 8.5186 5.7686C8.877 5.4102 9.45635 5.4102 9.81475 5.7686L14.3981 10.3519C14.7565 10.7103 14.7565 11.2897 14.3981 11.6481Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2016_70">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </div>
              <div className={`${styles.cntWrap} ${styles.dElmtcntWrap}`}>
                <div className={styles.tle}>
                  Lorem Ipsum is simply dummy text of the printing.
                </div>
                <div className={styles.txt}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </div>
                <div className={styles.info}>Post Date : 25 March 2024</div>
                <Link
                  href={"#!"}
                  className={`${styles.vAllBtn} vAllBtn`}
                  aria-label="view all button"
                >
                  <span>READ MORE</span>
                  <span
                    className="icon"
                    style={{
                      transform: Lang === "ar" ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2016_70)">
                        <path
                          d="M11 0C4.9344 0 0 4.9344 0 11C0 17.0656 4.9344 22 11 22C17.0656 22 22 17.0656 22 11C22 4.9344 17.0656 0 11 0ZM14.3981 11.6481L9.81475 16.2314C9.636 16.4102 9.40135 16.5 9.16665 16.5C8.932 16.5 8.6973 16.4102 8.51855 16.2314C8.16015 15.873 8.16015 15.2937 8.51855 14.9353L12.4538 11L8.5186 7.06475C8.1602 6.70635 8.1602 6.127 8.5186 5.7686C8.877 5.4102 9.45635 5.4102 9.81475 5.7686L14.3981 10.3519C14.7565 10.7103 14.7565 11.2897 14.3981 11.6481Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2016_70">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default News;
