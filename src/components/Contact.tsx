import { useTranslation } from "react-i18next";
import { GrMail } from "react-icons/gr";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className=" dark:bg-gray-900 bg-neutral-100 " id="contact">
      <div className="w-3/4 mx-auto pb-10 pt-8">
        <h3 className="text-center mb-4">{t("contact.headline")}</h3>
        <p className="text-center mb-4">{t("contact.contactText")}</p>
        <div className="flex justify-center ">
          <div className="p-1">
            <GrMail></GrMail>
          </div>
          <div className="text-center">
            <a href="mailto:kontakt@k-and-k.codes"></a>kontakt@k-and-k.codes
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
