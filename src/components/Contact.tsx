import { GrMail } from "react-icons/gr";

function Contact() {
  return (
    <div className=" bg-neutral-100 dark:bg-gray-900" id="contact">
      <div className="w-3/4 mx-auto pb-10 pt-8">
        <h3 className="text-center mb-4">Kontakt</h3>
        <p className="text-center mb-4">
          Wir freuen uns auf spannende Projekte. Wenn du React-Entwickler für
          dein Projekt suchst, kannst dich gerne jederzeit bei uns melden.
        </p>
        <div className="flex justify-center ">
          <div className="p-1">
            <GrMail></GrMail>
          </div>
          <div className="text-center">kontakt@k-and-k.de</div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
