import "../styles/desktop/contact.css";
import { MdOutlineLocationOn, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-title">
        <h2>contact</h2>
      </div>
      <div className="grid grid-two-cols">
        <div className="contact-info c-left">
          <div className="form">
            <div className="address">
              <MdOutlineLocationOn size={25} />
              <div>
                <h3>location</h3>
                <p>Jhoonjhoonu, Raj. India</p>
              </div>
            </div>
            <div className="email">
              <IoMailUnreadOutline size={23} />
              <div>
                <h3>email</h3>
                <p>dev.vishal556@gmail.com</p>
              </div>
            </div>
            <div className="phone">
              <MdOutlinePhoneInTalk size={20} />
              <div>
                <h3>phone</h3>
                <p>+91 8949087009</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form c-right">
          <form action="https://formspree.io/f/xdknnbed" method="POST">
            <div className="user-info">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="subject-info">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
                required
              />
            </div>
            <div className="message-info">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="7"
                placeholder="message"
              ></textarea>
            </div>

            <div className="form-button">
              <button type="submit" className="btn">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
