import fs from "fs";
import path from "path";
import admin from "firebase-admin";

// 1️⃣ Path to your Firebase service account key JSON
// Download this from Firebase Console → Project Settings → Service accounts → Generate new private key
const serviceAccount = JSON.parse(
  fs.readFileSync("./serviceAccountKey.json", "utf8")
);

// 2️⃣ Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pictle-for-rach-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.database();

// 3️⃣ Folder containing your JSON puzzle files
const puzzlesFolder = path.join(process.cwd(), "pictle_puzzles", "json");

async function uploadPuzzles() {
  for (let i = 1; i <= 136; i++) {
    const puzzlePath = path.join(puzzlesFolder, `${i}.json`);

    if (!fs.existsSync(puzzlePath)) {
      console.warn(`⚠️ Skipping missing file: ${i}.json`);
      continue;
    }

    try {
      const existingSnapshot = await db.ref(`puzzles/${i}`).once("value");

      if (existingSnapshot.exists()) {
        console.log(`⏩ Puzzle ${i} already exists. Skipping...`);
        continue;
      }

      const puzzleData = JSON.parse(fs.readFileSync(puzzlePath, "utf8"));
      await db.ref(`puzzles/${i}`).set(puzzleData);

      console.log(`✅ Uploaded puzzle ${i}`);
    } catch (err) {
      console.error(`❌ Error uploading puzzle ${i}:`, err);
    }
  }

  console.log("🎉 All puzzles processed!");
}

uploadPuzzles();
