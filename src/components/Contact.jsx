import { MdOutlineLocationOn, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      className="section contact-section mt-16 pb-8 w-full h-screen md:h-[75vh]"
      id="contact"
    >
      <div className="section-title">
        <h2 className="text-slate-900">contact</h2>
      </div>
      <div className="grid grid-two-cols gap-4 mt-[2.5rem]">
        <div className="contact-info c-left">
          <div className="form flex flex-col justify-center gap-[10px]">
            <div className="address flex items-center p-4 gap-4">
              <MdOutlineLocationOn size={25} />
              <div>
                <h3>location</h3>
                <p>Jhoonjhoonu, Raj. India</p>
              </div>
            </div>
            <div className="email flex items-center p-4 gap-4">
              <IoMailUnreadOutline size={23} />
              <div>
                <h3>email</h3>
                <p>dev.vishal556@gmail.com</p>
              </div>
            </div>
            <div className="phone flex items-center p-4 gap-4">
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
            <div className="user-info flex gap-4 mt-[10px] items-center">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full px-[5px] py-[10px] outline-none rounded border shadow focus:border focus:border-black focus:duration-300"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full px-[5px] py-[10px] outline-none rounded border shadow focus:border focus:border-black focus:duration-300"
              />
            </div>
            <div className="subject-info mt-[10px]">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="subject"
                required
                className="w-full px-[5px] py-[10px] outline-none rounded border shadow focus:border focus:border-black focus:duration-300"
              />
            </div>
            <div className="message-info mt-[10px]">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="7"
                placeholder="message"
                className="pl-1 w-full px-[5px] py-[10px] outline-none rounded border shadow focus:border focus:border-black focus:duration-300"
              ></textarea>
            </div>

            <div className="form-button">
              <button
                type="submit"
                className="btn bg-slate-900 text-white mt-2"
              >
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
