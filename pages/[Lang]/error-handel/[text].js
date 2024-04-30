import LangWrap from "@/components/layouts/LangWarp";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const ErrorHandel = ({ Lang, text }) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <LangWrap Lang={Lang}>
      <div className="inner_section_outer">
        <div className="container container_confirm">
          <div className="failer_card">
            <h1 className="title">{text !== "null" ? text : t("confirm.failure")}</h1>
            <p>{t("confirm.try")}</p>

            <button className="submit-button mt-3" type="button" onClick={() => router.push(`/${Lang}`)}>
              {t("confirm.home")}
            </button>
          </div>
        </div>
      </div>
    </LangWrap>
  );
};

export default ErrorHandel;

export async function getServerSideProps({ params }) {
  return {
    props: {
      Lang: params.Lang,
      text: params.text,
    },
  };
}
