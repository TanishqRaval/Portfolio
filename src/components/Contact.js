import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>
                    I’d love to collaborate and work on exciting projects together! Feel
                    free to reach out via the form below or connect with me on social
                    media.
                </p>
                <form
                    action="https://formspree.io/f/xbljdydw"
                    method="POST"
                    className="contact-form"
                >
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="social-media">
                    <a
                        href="https://github.com/tanishqraval"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tanishq-raval-76794a204/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
