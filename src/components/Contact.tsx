import { GrMail } from "react-icons/gr";

function Contact() {
  return (
    <div className="mb-16" id="contact">
      <div className="w-3/4 mx-auto">
        <h3 className="text-center mb-4">Kontakt</h3>
        <p className="text-center mb-4">
          Ich freue mich darauf, mit Ihnen über Geschäfte zu sprechen oder Sie
          einfach kostenlos zu beraten. Wenn beide Seiten einen Nutzen in der
          Zusammenarbeit sehen, werden wir vorankommen. Wenn nicht, ist das auch
          in Ordnung. Im schlimmsten Fall hatten wir beide ein nettes Gespräch
          und haben ein kostenloses Feedback erhalten.
        </p>
        <div className="flex justify-center">
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
