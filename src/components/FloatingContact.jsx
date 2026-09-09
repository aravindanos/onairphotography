import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingContact.css";

function FloatingContact() {
  const phoneNumber = "918248274973";

  const whatsappMessage = encodeURIComponent(
    "Hello ONAIR Photography, I would like to know more about your photography services."
  );

  return (
    <div className="floating-contact">

      {/* CALL */}
      <a
        href={`tel:+${phoneNumber}`}
        className="floating-contact-btn call-btn"
        aria-label="Call ONAIR Photography"
      >
        <Phone size={19} strokeWidth={1.8} />

        <span className="floating-tooltip">
          Call Us
        </span>
      </a>


      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="floating-contact-btn whatsapp-btn"
        aria-label="WhatsApp ONAIR Photography"
      >
     

       <FaWhatsapp size={23} />
<span className="floating-tooltip">
  WhatsApp
</span>
      </a>

    </div>
  );
}

export default FloatingContact;