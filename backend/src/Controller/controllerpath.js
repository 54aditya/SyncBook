import Booking from "../model/schema.js";
import { table } from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();


export const getBookings = async (req, res) => {
  try {
    const mongoData = await Booking.find();

    const records = await table.select().all();

    res.json({
      ok: true,
      mongo: mongoData,
      airtable: records.map(r => ({ id: r.id, ...r.fields })),
    });

  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
};
export const createBooking = async (req, res) => {
  try {

    const record = await table.create([
      {
        fields: {
          Name: req.body.Name,
          Email: req.body.Email,
          Address: req.body.Address,
          Income: req.body.Income,
          Number: req.body.Number,
        }
      }
    ]);
    const rt=record[0].id;
    const newBooking=await Booking.create({
      ...req.body,
      id: rt,
    });


    res.json({ ok: true, mongo: newBooking, airtable: record[0] });

  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
};



export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;        


    const mongoDelete = await Booking.findByIdAndDelete(id);
    const airtableDelete = await table.destroy(mongoDelete.id);


    res.json({ ok: true, mongo: mongoDelete, airtable: airtableDelete });

  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
};



export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const mongoUpdate = await Booking.findByIdAndUpdate(id, req.body, { new: true });

    const airtableUpdate = await table.update(mongoUpdate.id, {
      Name: req.body.Name,
      Email: req.body.Email,
      Address: req.body.Address,
      Income: req.body.Income,
      Number: req.body.Number,
    });

    res.json({ ok: true, mongo: mongoUpdate, airtable: airtableUpdate });

  } catch (error) {
    res.status(400).json({ ok: false, error: error.message });
  }
};


export const getonebooking=async(req,res)=>{
  try{
    const {id}=req.params;

    const data = await Booking.findById(id);
    const airdata=await table.find(data.id);


    res.json({ ok: true, mongo: data, airtable: airdata});
  }catch(error){
    res.status(400).json({ok: false, error: error.message});
  }
};
