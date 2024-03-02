'use client';
import React, { useState } from 'react';



import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    company: yup.string().required().label("Company"),
    message: yup.string().required().label("Message"),
  })
  .required();


const budget_categorys = [
  { id: "10_20k", title: "10-20k", },
  { id: "30_40k", title: "30-40k", },
  { id: "40_50k", title: "40-50k", },
  { id: "50_100k", title: "50-100k", },
  { id: "greater_than_100k", title: "> 100k", },
]

const ContactForm = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFocused2, setIsFocused2] = useState<boolean>(false);
  const [isFocused3, setIsFocused3] = useState<boolean>(false);
  const [isFocused4, setIsFocused4] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(1);


  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
  const onSubmit = (data: FormData) => {
    const notify = () => toast("Message send successful");
    notify();
    setIsFocused(false);
    setIsFocused2(false);
    setIsFocused3(false);
    setIsFocused4(false); 
    
    reset();
    console.log(data);
  };


  // handle focus and blur events 

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleFocus2 = () => {
    setIsFocused2(true);
  };
  const handleFocus3 = () => {
    setIsFocused3(true);
  };
  const handleFocus4 = () => {
    setIsFocused4(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value === '') {
      setIsFocused(false);
    }
  };
  const handleBlur2 = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value === '') {
      setIsFocused2(false);
    }
  };
  const handleBlur3 = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value === '') {
      setIsFocused3(false);
    }
  };
  const handleBlur4 = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value === '') {
      setIsFocused4(false);
    }
  };

  const handleItemClick = (index: number) => {
    setActiveCategory(index);
  };




  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-inner__wrapper">
          <div className="postbox__comment-form">
            <h3 className="contact-inner__form-title">Request A Quote</h3>
            <div className="row gx-20">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="postbox__comment-input mb-35">
                  <input type="text" className="inputText" {...register("name")} onFocus={handleFocus} onBlur={handleBlur} />
                  <span className={`floating-label ${isFocused ? 'floating-label-floated' : ''}`}>Your  Name</span>
                  <p className="form_error">{errors.name?.message}</p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="postbox__comment-input mb-35">
                  <input type="text" className="inputText" {...register("company")} onFocus={handleFocus2} onBlur={handleBlur2} />
                  <span className={`floating-label ${isFocused2 ? 'floating-label-floated' : ''}`}>Company</span>
                  <p className="form_error">{errors.company?.message}</p>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="postbox__comment-input mb-35">
                  <input type="text" className="inputText" {...register("email")} onFocus={handleFocus3} onBlur={handleBlur3} />
                  <span className={`floating-label ${isFocused3 ? 'floating-label-floated' : ''}`}>Your Email</span>
                  <p className="form_error">{errors.email?.message}</p>
                </div>
              </div>
              <div className="col-xxl-12">
                <div className="postbox__comment-input mb-20">
                  <textarea className="textareaText" {...register("message")} onFocus={handleFocus4} onBlur={handleBlur4}></textarea>
                  <span className={`floating-label-2 ${isFocused4 ? 'floating-label-floated' : ''}`}>Your Comment</span>
                  <p className="form_error">{errors.message?.message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-inner__category mb-45">
                <h4 className="contact-inner__category-title">Project budget (USD)</h4>
                <div className="contact-inner__category-wrapper">

                  {budget_categorys.map((item, index) => (
                    <label key={index} htmlFor={item.id}
                      onClick={() => handleItemClick(index)}
                      className={`contact-budget-btn ${activeCategory === index ? 'active' : ''}`}
                    >{item.title}</label>
                  ))}

                  {budget_categorys.map((item, index) => (
                    <input key={index} type="radio" name="contact_budget" id={item.id} />
                  ))}

                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="postbox__comment-btn">
                <button type="submit" className="tp-btn-grey-lg">
                  <span>
                    <i>Send Message</i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;