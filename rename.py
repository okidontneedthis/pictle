import os

# Path to the folder containing your files
folder_path = r"C:\Users\tan.k\OneDrive - WAVERLEY CHRISTIAN COLLEGE\Python\pictle\pictle_puzzles\images"

# Get all files in the folder (ignore directories)
files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

# Sort files by their current name (case-insensitive)
files.sort(key=str.lower)

# Loop through files and rename them sequentially
for index, filename in enumerate(files, start=1):
    # Get the file extension (without the dot)
    extension = os.path.splitext(filename)[1]
    
    # Create new file name
    new_name = f"{index}{extension}"
    
    # Full paths for renaming
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    
    # Rename the file
    os.rename(old_path, new_path)

print("Renaming complete!")
