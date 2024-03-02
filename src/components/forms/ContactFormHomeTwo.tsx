
'use client'
import React from 'react';
import NiceSelect from '@/ui/NiceSelect';

import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
  })
  .required();


const ContactFormHomeTwo = () => {

  const selectHandler = (e: any) => { };


  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };


  return (
    <>
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="tp-contact-2__input">
              <input className="input-field" type="text" placeholder="Your Name" {...register("name")} />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.name?.message}</p>
          </div>
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="tp-contact-2__input">
              <input className="input-field" type="text" placeholder="Your Email" {...register("email")} />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.email?.message}</p>
          </div>
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="tp-contact-2__select">
              <NiceSelect
                className="input-field"
                options={[
                  { value: "01", text: "Subject (optional)" },
                  { value: "02", text: "Online Support" },
                  { value: "03", text: "Live Security" },
                  { value: "04", text: "Hack Protection" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                placeholder="" />

              <span className="focus-border"></span>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-2__textarea">
              <textarea className="input-field" placeholder="Your message here..." {...register("message")}>
              </textarea>
              <span className="focus-border"></span>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-2__btn text-center ">
              <div className="parallax-wrap d-inline-block">
                <div className="parallax-element">
                  <button className="tp-btn-pink-large" type="submit">
                    <span data-hover="Send Message">
                      Send Message
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeTwo;