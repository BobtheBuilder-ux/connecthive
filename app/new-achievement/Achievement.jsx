"use client";
import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import { BiLoaderCircle } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Achievement = ({ session }) => {
  const [processing, setProcessing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);

  const initialValues = {
    position: "",
    achievement: "",
  };

  const validationSchema = Yup.object({
    position: Yup.string().required("Position is a required field"),
    achievement: Yup.string()
      .required("Achievements is a required field")
      .min(5, "Minimum of 5 characters"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setProcessing(true);
    try {
      const achievementData = {
        image: session?.user?.image,
        author: session?.user?.name,
        timestamp: new Date().toLocaleDateString(),
        ...values,
        likes: [],
        userId: session?.user?.id
      };
      const docRef = await addDoc(
        collection(db, "achievements"),
        achievementData
      );
      console.log(achievementData);
      console.log("Document written with ID: ", docRef.id);
      resetForm();
      setShowModal(true);
    } catch (error) {
      console.error("Error sending achievement", error);
      alert("An error occurred.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="min-h-dvh md:p-5 p-2 relative z-20">
      <h1 className="text-center text-gray-800 md:text-3xl text-xl font-bold">
        Share your achievements with the community
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="max-w-3xl mx-auto my-5 space-y-5">
          <div>
            <Field
              type="text"
              placeholder="Position..."
              name="position"
              className="border border-gray-200 p-3 outline-none w-full rounded-md shadow"
            />
            <ErrorMessage
              name="position"
              component="p"
              className="text-xs text-red-600 mt-2"
            />
          </div>

          <div>
            <Field
              as="textarea"
              placeholder="Share your achievements..."
              name="achievement"
              className="border border-gray-200 p-3 outline-none w-full rounded-md shadow"
            />
            <ErrorMessage
              name="achievement"
              component="p"
              className="text-xs text-red-600 mt-2"
            />
          </div>

          <button
            disabled={processing}
            type="submit"
            className="bg-blue-500 text-white flex items-center justify-center p-3 rounded-md w-full font-semibold hover:bg-blue-600 transition-colors duration-200 outline-none"
          >
            {processing ? (
              <BiLoaderCircle className="animate-spin text-2xl" />
            ) : (
              "Share Achievement"
            )}
          </button>
        </Form>
      </Formik>

      <div
        className={`${
          showModal ? "flex" : "hidden"
        } h-dvh bg-black/50 w-full absolute inset-0 items-center justify-center`}
      >
        <div className="w-80 h-52 bg-white shadow-md relative p-5 flex ic justify-center flex-col gap-5">
          <FaRegCheckCircle className="text-center text-5xl text-green-600 mx-auto" />
          <p className="text-center text-lg">
            Your achievement has been recorded
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2"
          >
            <IoIosCloseCircleOutline className="text-2xl text-red-700" />
          </button>
        </div>
      </div>

      {/* <button onClick={()=> setShowModal(true)}>Open</button> */}
    </main>
  );
};

export default Achievement;
