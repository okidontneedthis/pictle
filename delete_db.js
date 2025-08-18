import admin from "firebase-admin";

// Initialize app
admin.initializeApp({
  credential: admin.credential.cert("./serviceAccountKey.json"),
  databaseURL: "https://pictle-for-rach-default-rtdb.asia-southeast1.firebasedatabase.app" // or .app URL
});

// Get a reference to the root
const db = admin.database();
await db.ref("/").set(null);

console.log("🔥 All data deleted from Realtime Database");
