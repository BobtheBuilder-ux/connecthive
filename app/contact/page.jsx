"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { LuLoaderPinwheel } from "react-icons/lu";

import { Alert, Snackbar } from "@mui/material";



const Contactpage = ({ session }) => {
  const [processing, setProcessing] = useState(false);
   const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success"); // "success" or "error"

  console.log(session);

  const inv = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  };

  const vls = Yup.object({
    firstname: Yup.string().required("First name is a required field"),
    lastname: Yup.string().required("Last name is a required field"),
    phonenumber: Yup.string().required("This is required"),
    email: Yup.string().required("Email name is a required field"),
    message: Yup.string()
      .required("This is a required field")
      .min(10, "minimum of 10 characters"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setProcessing(true)
    try {
      const contactdata = {
        ...values,
      };

      const docRef = await addDoc(collection(db, "contact"), contactdata);
      console.log(contactdata);
      console.log("Document written with ID: ", docRef.id);
      setAlertType("success"); // set to success
    setOpen(true);
      resetForm();
    } catch (error) {
      console.error("Error in sending report", error);
      // alert("An error occured");
      setAlertType("error"); // set to error
    setOpen(true);
    }finally{
      setProcessing(false)
    }
    
  };

  return (
    <main className="p-3">
      <h1 className="md:text-5xl text-4xl text-gray-800 py-3">Contact Us</h1>

      <div className="md:flex gap-10 lg:gap-18 ">
        <div className="lg:w-1/3 rounded-sm bg-[url('/support.jpg')] bg-cover bg-no-repeat border max-md:mb-2">
          <div className="bg-black/80 text-white p-5 space-y-9 h-full">
            <div className="py-2">
              <h1 className="font-semibold text-2xl">Contact information</h1>

              <p className="text-sm pt-1">
                If you have any questions, feel free to get in touch with us
              </p>
            </div>

            <div className="flex flex-col gap-6 py-3">
              <p className="flex gap-3">
                <FaPhone />
                234 8100 7365
              </p>
              <p className="flex gap-3">
                <FaEnvelope />
                Connecthive.support@gmail.com
              </p>
              <p className="flex gap-3">
                <FaLocationDot />
                178 Gado Nasko Rd 38412 Abuja
              </p>
            </div>

            <div>
              <h1>Monday - Friday</h1>
              <p className="flex gap-3">
                <FaClock />
                9:00am - 9:00pm
              </p>
            </div>

            <div className="flex items-center mt-25 gap-5 text-lg text-white">
              <h1>
                <FaInstagram />
              </h1>
              <h1>
                <RiTwitterXFill />
              </h1>
              <h1>
                <FaGithub />
              </h1>
            </div>
          </div>
        </div>
        <Formik
          initialValues={inv}
          validationSchema={vls}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5 max-md:pt-3 ">
            <div className="flex gap-8">
              <div>
                <label>First Name</label>
                <Field
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  className="border border-gray-300 p-3 outline-none w-full rounded-md shadow"
                />

                <ErrorMessage
                  name="firstname"
                  component={"p"}
                  className="text-xs text-red-600 mt-2"
                />
              </div>

              <div>
                <label>Last Name</label>
                <Field
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 p-3 outline-none w-full rounded-md shadow"
                />
                <ErrorMessage
                  name="lastname"
                  component={"p"}
                  className="text-xs text-red-600 mt-2"
                />
              </div>
            </div>

            <div>
              <label>Email</label>
              <Field
                name="email"
                type="text"
                placeholder="email@example.com"
                className="border border-gray-300 p-3 outline-none w-full rounded-md shadow"
              />
              <ErrorMessage
                name="email"
                component={"p"}
                className="text-xs text-red-600 mt-2"
              />
            </div>

            <div>
              <label>Phone Number</label>
              <Field
                name="phonenumber"
                type="text"
                placeholder="+234 80 0011 0011"
                className="border border-gray-300 p-3 outline-none w-full rounded-md shadow"
              />
              <ErrorMessage
                name="phonenumber"
                component={"p"}
                className="text-xs text-red-600 mt-2"
              />
            </div>

            <div>
              <label>Message</label>
              <Field
                as="textarea"
                name="message"
                placeholder="Your message"
                type="text"
                className="border border-gray-300 p-3 outline-none w-full rounded-md shadow h-35"
              />
              <ErrorMessage
                name="message"
                component={"p"}
                className="text-xs text-red-600 mt-2"
              />
            </div>

            <button
              disabled={processing}
              type="submit"
              className="rounded-sm bg-blue-500 p-3 px-10 text-white font-semibold hover:bg-blue-900 transition-all "
            >
              {processing ? <LuLoaderPinwheel className="animate-spin text-2xl"/> : "Submit" }
            </button>
          </Form>
        </Formik>

      <Snackbar
  open={open}
  autoHideDuration={4000}
  onClose={() => setOpen(false)}
  anchorOrigin={{ vertical:'top', horizontal:'center'}}
>
  <Alert onClose={() => setOpen(false)} severity={alertType}>
    {alertType === "success" ? "Your message was successfully sent!" : "Failed to send message."}
  </Alert>
</Snackbar>

    
      </div>
    </main>
  );
};

export default Contactpage;