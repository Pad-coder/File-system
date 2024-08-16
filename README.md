# NodeJs File System

# Timestamp Files API

This Node.js application allows you to create and retrieve timestamped text files. 
The project uses Express for handling HTTP requests and the Node.js `fs` module for file system operations.

## Features

- **Create a Timestamped File:** Create a text file with the current timestamp as its name and content.
- **Read Timestamped Files:** Retrieve a list of all `.txt` files in the `Timefile` folder.

 # API Endpoints
# 1. Create a new timestamped file
Endpoint: /create-file
Method: GET
Description: This endpoint creates a new text file in the timefile folder. The file name and its content will be the current timestamp.

# Api Example: http://localhost:8000/create-file
# Render: https://nodejs-filesystem-hvbs.onrender.com/create-file

Response will be like this:
{
  "message": "File created",
  "fileName": "1692184800000.txt"
}

# 2. List all timestamped files
Endpoint: /read-files
Method: GET
Description: This endpoint returns a list of all .txt files in the timefile folder.

# Api Example: http://localhost:8000/read-file
# Render: https://nodejs-filesystem-hvbs.onrender.com/read-file

Response will be like this:
{
  "files": [
    "1692184800000.txt",
    "1692184812345.txt"
  ]
}
