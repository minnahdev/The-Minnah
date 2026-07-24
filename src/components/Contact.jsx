import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS credentials are fully defined
    if (serviceId && templateId && publicKey) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        })
        .catch((err) => {
          console.error("EmailJS Error: ", err);
          runMailtoFallback();
        });
    } else {
      // Missing environment variables: simulate and trigger mailto fallback
      setTimeout(() => {
        runMailtoFallback();
      }, 800);
    }
  };

  const runMailtoFallback = () => {
    setStatus('success'); // show success interface

    // Prepare mailto link properties
    const subjectLine = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Hello Minnah,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:minnahameenullah@gmail.com?subject=${subjectLine}&body=${bodyContent}`;

    // Redirect browser to open mail client
    window.location.href = mailtoUrl;

    // Clear form fields
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-900 scroll-mt-16">
      {/* Title */}
      <div className="flex items-center space-x-3 mb-12">
        <div className="h-[1px] w-8 bg-accent" />
        <h2 className="text-2xl font-display font-bold uppercase tracking-wider text-white">
          Secure Channel
        </h2>
        <span className="text-xs font-mono text-zinc-500">// COMMUNICATIONS_PORT</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Coordinates & Social links (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-8 font-mono text-xs text-zinc-400">
          <div>
            <h3 className="font-display font-bold text-white text-3xl mb-4 leading-tight">
              Let's Build Something Together.
            </h3>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-sm">
              Reach out for freelance projects, open-source collaborations, community lectures, or technical events.
              Let's craft the next digital product.
            </p>
          </div>

          <div className="space-y-4">

            {/* Phone link */}
            <a
              href="tel:+919207750076"
              className="flex items-center space-x-3 bg-[#111113] border border-[#27272A] hover:border-accent p-4 rounded-lg text-white font-medium group transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">SECURE_VOICE</div>
                <div className="text-xs font-mono">+91 9207750076</div>
              </div>
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/919207750076"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 bg-[#111113] border border-[#27272A] hover:border-accent p-4 rounded-lg text-white font-medium group transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 text-accent animate-pulse" />
              <div>
                <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">WHATSAPP_LINK</div>
                <div className="text-xs font-mono">Chat on WhatsApp</div>
              </div>
            </a>
          </div>

          {/* Social icons row */}
          <div>
            <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-3">SOCIAL_COORDINATES</div>
            <div className="flex gap-3">
              {[
                { url: "https://github.com/minnahdev", icon: <GithubIcon className="w-4 h-4" /> },
                { url: "https://www.linkedin.com/in/minnah-ameenullah/", icon: <LinkedinIcon className="w-4 h-4" /> },
                { url: "https://www.instagram.com/min.dev_/", icon: <InstagramIcon className="w-4 h-4" /> },
                { url: "https://x.com/minnahdev", icon: <TwitterIcon className="w-4 h-4" /> }
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#111113] border border-[#27272A] hover:border-accent hover:text-accent p-3 rounded-lg text-white transition-all duration-200"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact form (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-[#111113] border border-[#27272A] rounded-lg p-6 md:p-8">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center space-y-4 font-sans"
            >
              <CheckCircle className="w-12 h-12 text-accent text-glow-accent" />
              <h3 className="font-display font-bold text-white text-lg uppercase tracking-wider">
                TRANSMISSION ESTABLISHED
              </h3>
              <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                Thank you! Your message has been compiled successfully. (Redirecting to your mail client fallback to complete sending if environment keys aren't set).
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-4 py-2 border border-zinc-800 hover:border-accent text-zinc-400 hover:text-accent rounded font-mono text-xs transition-colors"
              >
                COMPILE_NEW_TRANSMISSION
              </button>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">

              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-zinc-500 uppercase">SENDER_NAME:</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#09090B] border border-zinc-800 rounded px-4 py-3 text-white outline-none focus:border-accent transition-colors font-sans text-sm"
                    placeholder="Enter your name..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-zinc-500 uppercase">SENDER_EMAIL:</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#09090B] border border-zinc-800 rounded px-4 py-3 text-white outline-none focus:border-accent transition-colors font-sans text-sm"
                    placeholder="Enter your email..."
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-zinc-500 uppercase">TRANSMISSION_SUBJECT:</label>
                <input
                  required
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#09090B] border border-zinc-800 rounded px-4 py-3 text-white outline-none focus:border-accent transition-colors font-sans text-sm"
                  placeholder="Subject of message..."
                />
              </div>

              {/* Row 3: Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-zinc-500 uppercase">MESSAGE_BODY:</label>
                <textarea
                  required
                  rows="5"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#09090B] border border-zinc-800 rounded px-4 py-3 text-white outline-none focus:border-accent transition-colors font-sans text-sm resize-none"
                  placeholder="Enter details..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full md:w-auto flex items-center justify-center space-x-2 bg-accent/10 border border-accent hover:bg-accent hover:text-black text-accent font-semibold px-6 py-3.5 rounded transition-all duration-200 border-glow-accent uppercase"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND_MESSAGE_TRANSMISSION</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}