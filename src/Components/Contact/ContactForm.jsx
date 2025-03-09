import Button from "../Button/Button";
import style from "./ContactForm.module.css";
import { MdMessage, MdOutlineEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import images1 from "../../../public/images/contact.svg";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [text, settext] = useState("");

  const viacall = () => {
    console.log(" i AM a Call");
  };
  const viaChat = () => {
    console.log(" i AM a Chat");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);
  };

  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button
            onClick={viaChat}
            text="VIA Support Chat"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={viacall}
            text="VIA Call"
            icon={<FaPhoneFlip fontSize="24px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA Email Form"
          icon={<MdOutlineEmail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={style.form_control}>
            <label htmlFor="name"> Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="email"> Email</label>
            <input type="email" name="email" />
          </div>
          <div className={style.form_control}>
            <label htmlFor="text"> Text</label>
            <textarea name="text" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button text="Submit" />

            <div style={{ marginTop: "35px" }}>
              <h1>{name} </h1>
              <br />
              <h1>{email} </h1> <br />
              <h1>{text} </h1>
            </div>
          </div>
        </form>
      </div>

      <div className={style.contact_image}>
        <img src={images1} alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
