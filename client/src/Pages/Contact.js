import Title from "../Components/Title";
import ContactItem from "../Components/ContactItem";
import phone from "../images/phoneicon.svg";
import email from "../images/emailicon.svg";
import location from "../images/locationicon.svg";

function Contact() {
  return (
    <div>
      <div className="title">
        <Title title={"Contact"} span={"About"} />
      </div>
      <div className="Contact">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12464.261883270927!2d-90.339013!3d38.6473749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc504d84f452826e6!2sRangwala%20Architects!5e0!3m2!1sen!2sus!4v1620382228062!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"(314) 496-5971"}
            text2={"(314) 863-6661"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"srangwala@aol.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"201 S. Central Ave, Suite 203"}
            text2={"Clayton, MO 63015"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
