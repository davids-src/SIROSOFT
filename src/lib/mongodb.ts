import { MongoClient, Db } from "mongodb";

// Cache-elt kapcsolat, hogy hot-reload alatt ne nyisson újat.
let cached: { client: MongoClient; db: Db } | null = null;

export async function getDb(): Promise<Db | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  if (cached) return cached.db;

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(process.env.MONGODB_DB || "sirosoft");
  cached = { client, db };
  return db;
}
