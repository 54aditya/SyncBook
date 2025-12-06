import React from "react";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import { Route, Routes } from "react-router";
import Updateddata from "./components/Bookingupdate";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Toaster/>
      <h1 className="text-3xl font-bold mb-5 ">Booking System</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BookingForm />
              <BookingList />
            </>
          }
        />
        <Route path="/:id" element={<Updateddata/>}/>

      </Routes>
    </div>
  );
}
