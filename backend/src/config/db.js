import dotenv from 'dotenv';
import Airtable from 'airtable';

dotenv.config();

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

export const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

export const table = base(process.env.AIRTABLE_TABLE_NAME);