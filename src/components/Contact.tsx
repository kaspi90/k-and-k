import { useTranslation } from "react-i18next";
import { GrMail } from "react-icons/gr";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className=" bg-neutral-100 dark:bg-gray-600 " id="contact">
      <div className="w-3/4 mx-auto pb-10 pt-8">
        <h3 className="text-center mb-4">{t("contact.headline")}</h3>
        <p className="text-center mb-4">{t("contact.contactText")}</p>
        <div className="flex justify-center ">
          <div className="p-1">
            <GrMail></GrMail>
          </div>
          <div className="text-center">kontakt@k-and-k.codes</div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
