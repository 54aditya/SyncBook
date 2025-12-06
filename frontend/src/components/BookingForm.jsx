import React, { useState } from "react";
import { API } from "../api";
import toast from "react-hot-toast";

export default function BookingForm() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Address: "",
    Income: 0,
    Number: "",
  });

  const validateForm = () => {
    if (!form.Name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!form.Email.match(/^[\w.-]+@[\w.-]+\.\w+$/)) {
      toast.error("Invalid email address");
      return false;
    }
    if (!form.Number.match(/^\d{10}$/)) {
      toast.error("Number must be 10 digits");
      return false;
    }
    if (!form.Address.trim()) {
      toast.error("Address is required");
      return false;
    }
   
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()) return;
    try {
      // console.log(form);
      await API.post("/", form);
      toast.success("Booking Created");
      // console.log(form);
    } catch (error) {
      // console.log("Booking failed", error);
      toast.error("Booking failed");
    }
  };

  return (
    <form className="space-y-3 mb-8" onSubmit={handleSubmit}>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          className="border p-2 w-full"
          placeholder={key}
          type={key === "Income" ? "number" : "text"}
          value={form[key]}
          onChange={(e) =>
          setForm({
            ...form,
            [key]: key === "Income"
            ? Number(e.target.value)
            : e.target.value
        })
      }
    />
))}


      <button
        type="submit"
        className="bg-blue-600 text-white p-2 w-full rounded"
      >
        Create Booking
      </button>
    </form>
  );
}
