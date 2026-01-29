/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 5000);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_j7kyb9z",
        "template_1463f8f",
        {
          from_name: form.name,
          to_name: "Syed Mashood",
          from_email: form.email,
          to_email: "mediafire334@gmail.com",
          message: form.message,
        },
        "-XuLe5HrmNeSI8ufd"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    // Initialize EmailJS with public key (also acceptable to set via env)
    try {
      emailjs.init("-XuLe5HrmNeSI8ufd");
    } catch (err) {
      // ignore if already initialized
    }
  }, []);

  const handleSubmitAsync = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      to_name: "Syed Mashood",
      from_email: form.email,
      to_email: "mediafire334@gmail.com",
      message: form.message,
    };

    try {
      await emailjs.send("service_j7kyb9z", "template_1463f8f", templateParams);
      setLoading(false);
      showMessage("success", "Thank you! I'll get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error("EmailJS send error:", error);
      showMessage("error", "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {message.text && (
          <div
            className={`mb-4 p-4 rounded-lg font-medium transition-opacity duration-300 ${
              message.type === "success"
                ? "bg-green-900 text-green-100"
                : "bg-red-900 text-red-100"
            }`}
          >
            {message.text}
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmitAsync}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");