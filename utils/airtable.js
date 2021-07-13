import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const minifyRecords = records => {
    return records.map(record => getMinifiedRecord(record));
};

const getMinifiedRecord = record => {
    return {
        id: record.fields.id,
        fields: record.fields,
    };
};

export { table, getMinifiedRecord, minifyRecords };