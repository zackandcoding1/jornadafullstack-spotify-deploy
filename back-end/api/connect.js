// JavaScript Assíncrono
// await async
// Fulfilled
import { MongoClient } from "mongodb";

const URI = "mongodb+srv://isaacnbgomes:cOQr7HXWjI99EEoV@cluster0.9ohec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI)

export const db = client.db("spotifyAula");

// const songCollection = await db.collection('songs').find({}).toArray();
// console.log(songCollection)