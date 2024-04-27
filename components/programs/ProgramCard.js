import Image from "next/legacy/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Program.module.scss";

const ProgramCard = ({ Lang, programDetails }) => {
  const { t } = useTranslation();
  console.log("programDetails", programDetails);
  return (
    <div className={styles.fitness_section}>
      <div className={"container"}>
        <div className={styles.program_bx}>
          <div className={styles.lftSd}>
            <div className={styles.cntWrap}>
              <div className={"tleWrap"}>
                <h2 className={"mTle"}>
                  {/* {t("programs_details.fitness.title")} */}
                  {programDetails?.name || "Fitness program"}
                </h2>
                <div className={"sTle"}>{t("programs_details.contain")}</div>
              </div>
              <div className={styles.list_bx}>
                {
                  <ul
                    className={`${Lang === "ar" ? styles.rightText : styles.leftText}`}
                    dangerouslySetInnerHTML={{
                      __html: Lang === "ar" ? programDetails?.descriptionHTMLAr : programDetails?.descriptionHTML,
                    }}
                  ></ul>
                }
              </div>
              <div className={styles.btnWrap}>
                <Link href={"#!"} className={"baseBtn hoveranim"} aria-label="view all button">
                  <span>Join Now</span>
                  <span className={"icon"}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_2016_70)">
                        <path
                          d="M11 0C4.9344 0 0 4.9344 0 11C0 17.0656 4.9344 22 11 22C17.0656 22 22 17.0656 22 11C22 4.9344 17.0656 0 11 0ZM14.3981 11.6481L9.81475 16.2314C9.636 16.4102 9.40135 16.5 9.16665 16.5C8.932 16.5 8.6973 16.4102 8.51855 16.2314C8.16015 15.873 8.16015 15.2937 8.51855 14.9353L12.4538 11L8.5186 7.06475C8.1602 6.70635 8.1602 6.127 8.5186 5.7686C8.877 5.4102 9.45635 5.4102 9.81475 5.7686L14.3981 10.3519C14.7565 10.7103 14.7565 11.2897 14.3981 11.6481Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2016_70">
                          <rect width="22" height="22" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.rgtSd}>
            <div className={styles.img_outer}>
              <div className={styles.info_offer}>
                <span>
                  25<span className={styles.sm}>%</span> <br />
                  <span className={styles.sm}>OFF</span>
                </span>
              </div>
              <div className={styles.img_wrap}>
                <Image
                  src={"/images/1.png"}
                  alt="fitness"
                  width={380}
                  height={520}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className={styles.info_price}>
                <span>
                  {" "}
                  <sup>$</sup>
                  {programDetails?.amount || 0}
                </span>
                <span className={styles.old_price}>
                  <sup>$</sup>
                  <span>105</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;