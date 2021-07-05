import { table, getMinifiedRecord, minifyRecords } from './utils/airtable';

export default async (req, res) => {
    try {
        const records = await table
            .select({
                sort: [{ field: "id", direction: "asc" }],
            })
            .firstPage();
        const minifiedRecords = minifyRecords(records);
        res.statusCode = 200;
        res.json(minifiedRecords);
    } catch (err) {
        res.statusCode = 500;
        res.json({ msg: 'Airtable fetch error' });

    }
};
