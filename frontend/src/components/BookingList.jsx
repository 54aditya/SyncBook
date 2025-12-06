import { useEffect, useState } from "react";
import { API } from "../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

// import axios from 'axios';

export default function BookingList(){
  const [Data, setData] = useState([]);
  const [airdata, setairdata] = useState([]);

    const navigate = useNavigate();

  useEffect(() => {
    API.get("/").then((res) => setData(res.data.mongo));
    API.get("/").then((res) => setairdata(res.data.airtable));
  }, [airdata,Data]);

 const deleteBooking = async (id) => {
  try {
    await API.delete(`/${id}`);
    // alert("deleted");
    toast.success("Deleted Successfully");

  } catch (error) {
    // console.log(`mongo ID = ${id}, airtable ID = ${airId}`);
    console.log("Error", error);
    toast.error("There is some error in deletion");
  }
};

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">All Bookings</h2>
        <h3 className="font-semibold">Mongo Data</h3>
      {Data.map((item) => (
        <div
          key={item._id}
          className="border p-4 rounded flex justify-between mb-3"
        >
          <div>
            <p><strong>Name:</strong> {item.Name}</p>
            <p><strong>Email:</strong> {item.Email}</p>
            <p><strong>Address:</strong> {item.Address}</p>
            <p><strong>Number:</strong> {item.Number}</p>
            <p><strong>Income:</strong> {item.Income}</p>
          </div>
          <div className="flex flex-col gap-7 py-2">
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded"
              onClick={() => navigate(`/${item._id}`)}
            >
              Edit
            </button>

          <button
            className="bg-red-400 text-white px-4 py-2 rounded"
            onClick={() => deleteBooking(item._id)}
          >
            Delete
          </button>
        </div>
      </div>
      ))}
      <h3 className="font-semibold">Airtable data</h3>

      {airdata.map((item) =>(
        <div
          key={item.id}
          className="border p-4 rounded flex justify-between mb-3"
        >
          <div>
            <p><strong>Name:</strong>{item.Name}</p>
            <p><strong>Email:</strong>{item.Email}</p>
            <p><strong>Address:</strong>{item.Address}</p>
            <p><strong>Number:</strong>{item.Number}</p>
            <p><strong>Income:</strong>{item.Income}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
