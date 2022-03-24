import mongoose from "mongoose";

interface IDb {
  db?: string;
}

export default async function ({ db }: IDb): Promise<void> {
  if (db != null) {
    await mongoose.connect(db, {
      connectTimeoutMS: 1000,
    });
  }
}
