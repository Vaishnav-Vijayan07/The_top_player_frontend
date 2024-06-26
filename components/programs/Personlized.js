import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";

const Personlized = ({ Lang, styles }) => {
  const { t } = useTranslation();
  return (
   <div className={Lang === "ar" ? "progrss_ar" : "progrss_en"}

   > 
     <div className={styles.Personlized}>
      <h2 className="title">{t("programs_details.personal")}</h2>
      <div
        className={`${styles.progress_bar} ${
          Lang === "ar" ? styles.Ar_progress_bar : ""
        }`}
      >
        <div className={styles.week_cont}>
          <div className={styles.line}>
            <span></span>
            <span></span>
          </div>
          <div className={styles.week}>
            <div
              className={styles.week_head}
              style={{
                flexDirection: Lang === "ar" ? "row-reverse" : "row",
              }}
            >
              <div className={styles.image_week}>
                <Image
                  src={"/images/1.svg"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>{t("programs_details.weeks.week1")}
              <span className="En_num">1</span>
              
              </h3>
            </div>
            <h4>{t("programs_details.weeks.title1")}</h4>
            <p>{t("programs_details.weeks.description1")}</p>
          </div>
        </div>
        <div className={styles.week_cont}>
          <div className={styles.line}>
            <span></span>
            <span></span>
          </div>
          <div className={styles.week}>
            <div
              className={styles.week_head}
              style={{
                flexDirection: Lang === "ar" ? "row-reverse" : "row",
              }}
            >
              <div className={styles.image_week}>
                <Image
                  src={"/images/2.svg"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>{t("programs_details.weeks.week2")}
              <span className="En_num">2</span>
              </h3>
            </div>
            <h4>{t("programs_details.weeks.title2")}</h4>
            <p>{t("programs_details.weeks.description2")}</p>
          </div>
        </div>
        <div className={styles.week_cont}>
          <div className={styles.line}>
            <span></span>
            <span></span>
          </div>
          <div className={styles.week}>
            <div
              className={styles.week_head}
              style={{
                flexDirection: Lang === "ar" ? "row-reverse" : "row",
              }}
            >
              <div className={styles.image_week}>
                <Image
                  src={"/images/3.svg"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>{t("programs_details.weeks.week3")}
              <span className="En_num">3</span>
              
              </h3>
            </div>
            <h4>{t("programs_details.weeks.title3")}</h4>
            <p>{t("programs_details.weeks.description3")}</p>
          </div>
        </div>
        <div className={styles.week_cont}>
          <div className={styles.line}>
            <span></span>
            <span></span>
          </div>
          <div className={styles.week}>
            <div
              className={styles.week_head}
              style={{
                flexDirection: Lang === "ar" ? "row-reverse" : "row",
              }}
            >
              <div className={styles.image_week}>
                <Image
                  src={"/images/4.svg"}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3>{t("programs_details.weeks.week4")}
              <span className="En_num">4</span>
              
              </h3>
            </div>
            <h4>{t("programs_details.weeks.title4")}</h4>
            <p>{t("programs_details.weeks.description4")}</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Personlized;
