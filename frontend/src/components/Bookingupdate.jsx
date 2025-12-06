import React, { useEffect, useState } from "react";
import { API } from "../api";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function Updateddata() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Address: "",
    Income: 0,
    Number: "",
  });

  useEffect(() => {
    // console.log(2+3);
    API.get(`/${id}`)
      .then((res) => setForm(res.data.mongo))
      .catch(() => toast.error("Failed to load booking"));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/${id}`, form);
      toast.success("Booking Updated Successfully");
      navigate("/");
    } catch (error) {
      toast.error("Update failed");
    }
  };

  return (
    <form className="space-y-3 p-5">
      <h2 className="text-xl font-bold">Update Booking</h2>

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
              [key]: key === "Income" ? Number(e.target.value) : e.target.value,
            })
          }
          disabled={["_id", "id", "__v"].includes(key)}
        />
      ))}

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white p-2 w-full rounded"
      >
        Update Booking
      </button>
    </form>
  );
}
