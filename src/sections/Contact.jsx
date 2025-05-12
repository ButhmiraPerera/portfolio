import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="[display:flex] [justify-content:center] [align-items:center] section-padding">
      <div className="[width:100%] [height:100%] 
          [padding-left:1.25rem] [padding-right:1.25rem]
          [@media(min-width:768px)]:[padding-left:2.5rem] [@media(min-width:768px)]:[padding-right:2.5rem]">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid-12-cols [margin-top:4rem]">
          <div className="[grid-column:span_12]
              [@media(min-width:1280px)]:[grid-column:span_5]">
            <div className="[display:flex] [justify-content:center] [align-items:center] card-border [border-radius:0.75rem] [padding:2.5rem]">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="[width:100%] [display:flex] [flex-direction:column] [gap:1.75rem]"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                    className="[width:100%] [padding:0.75rem] [border-radius:0.375rem] [border:1px_solid_rgba(255,255,255,0.1)] [background:transparent]"
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    className="[width:100%] [padding:0.75rem] [border-radius:0.375rem] [border:1px_solid_rgba(255,255,255,0.1)] [background:transparent]"
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                    className="[width:100%] [padding:0.75rem] [border-radius:0.375rem] [border:1px_solid_rgba(255,255,255,0.1)] [background:transparent]"
                  />
                </div>

                <button type="submit" className="cta-wrapper [background:transparent] [border:none] [cursor:pointer]">
        <div className="cta-button group [position:relative] [display:flex] [align-items:center]">
          <p className="text [padding-left:1rem] [padding-right:1rem]">
            {loading ? "Sending..." : "Send Message"}
          </p>
          <div className="arrow-container [position:relative] [flex-shrink:0] [width:1.5rem] [height:1.5rem]">
            <div className="bg-morph [position:absolute] [inset:0] [border-radius:50%] [background:#cd7c2e]" />
            <div className="[position:absolute]  [inset:0] [display:flex] [justify-content:center] [align-items:center]">
              <img 
                src="/images/arrow-down.svg" 
                alt="arrow" 
                className="arrow-icon [width:0.65rem] [height:0.95rem]"
              />
            </div>
          </div>
        </div>
      </button>
              </form>
            </div>
          </div>
          <div className="[grid-column:span_12] [min-height:24rem] [margin-top:2rem]
              [@media(min-width:1280px)]:[grid-column:span_7] [@media(min-width:1280px)]:[margin-top:0]">
            <div className="[background:#cd7c2e] [width:100%] [height:100%] hover:[cursor:grab] [border-radius:1.5rem] [overflow:hidden]">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;