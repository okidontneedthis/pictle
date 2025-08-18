import os
import requests
import json

# Base URL for puzzles
BASE_URL = "https://pictle-default-rtdb.firebaseio.com/puzzles/{}.json"

# Folder setup
os.makedirs("pictle_puzzles/json", exist_ok=True)
os.makedirs("pictle_puzzles/images", exist_ok=True)

# Safety limit
MAX_PUZZLE_ID = 500  # change this to your desired limit

for puzzle_id in range(1, MAX_PUZZLE_ID + 1):
    try:
        url = BASE_URL.format(puzzle_id)
        r = requests.get(url)
        data = r.json()

        if not data:  # skip if null or empty
            print(f"Puzzle {puzzle_id} not found, skipping...")
            continue

        # Save JSON
        json_path = f"pictle_puzzles/json/{puzzle_id}.json"
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        # Save image
        image_url = data.get("image")
        if image_url:
            img_r = requests.get(image_url)
            if img_r.status_code == 200:
                img_path = f"pictle_puzzles/images/{puzzle_id}.png"
                with open(img_path, "wb") as img_file:
                    img_file.write(img_r.content)

        print(f"Saved puzzle {puzzle_id}")

    except Exception as e:
        print(f"Error with puzzle {puzzle_id}: {e}")
