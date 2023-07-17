// openDB is a utility function provided by 'idb' that helps you create and manage IndexedDB databases.
import { openDB } from "idb";

// initializes an IndexedDB database named "jate" and defines methods to put and get data from it.
const initdb = async () =>
  //  opens the 'jate' database with version 1. If the database with this name and version doesn't exist, the upgrade function will be executed.
  openDB("jate", 1, {
    // This is the upgrade function that is executed when the database is created or its version is updated.
    upgrade(db) {
      // Checks if an object store named 'jate' already exists in the database. If it exists, it logs a message and returns early.
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // If the 'jate' object store doesn't exist, it creates one with a keyPath of 'id' and auto-incrementing keys.
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// method for adding data to the 'jate' database
export const putDb = async (content) => {
  // console.error("putDb not implemented");
  console.log("PUT to the database");
  // opens the 'jate' database with version 1 and assigns it to the jateDb variable
  const jateDb = await openDB("jate", 1);
  // creates a transaction on the 'jate' object store in read-write mode.
  const tx = jateDb.transaction("jate", "readwrite");
  // retrieves the object store from the transaction
  const store = tx.objectStore("jate");
  //  puts the content object into the 'jate' object store. The put method is used to add or update data in the object store.
  const request = store.put({ jate: content });
  // waits for the put operation to complete and stores the result
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // console.error("getDb not implemented");
};

initdb();
// try catch on the put and get??
