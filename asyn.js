import fs from "fs";

const data =
    "Hello this is sample text to demonstrate file operation in Node.js";

// Write operation
fs.writeFile("sample.txt", data, "utf-8", (error) => {
    if (error) {
        return console.log(error);
    }

    console.log("Data written successfully");

    // Read operation
    fs.readFile("sample.txt", "utf-8", (error, readData) => {
        if (error) {
            return console.log(error);
        }

        console.log("File content:");
        console.log(readData);

        // Append operation
        fs.appendFile(
            "sample.txt",
            "\nWelcome to FSD Lab",
            "utf-8",
            (error) => {
                if (error) {
                    return console.log(error);
                }

                console.log("Data appended successfully");

                // Delete operation
               // fs.unlink("sample.txt", (error) => {
                    //if (error) {
                        //return console.log(error);
                    //}

                    //console.log("File deleted successfully");
                //});
            }
        );
    });
});