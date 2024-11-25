import { MongoClient } from 'mongodb'

export default async function connectToBank(stringConexao)
{
    let mongoClient;

    try
    {
        mongoClient = new MongoClient(stringConexao);
        console.log('Connecting to bank... ');
        await mongoClient.connect();
        console.log('Connected to MongoDB!');
        console.log('String of connection:', stringConexao);


        return mongoClient;

    }
    catch (error)
    {
        console.error('Connection failed to MongoDB:', error);
        process.exit();
    }
}
