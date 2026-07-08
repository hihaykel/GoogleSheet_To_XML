# GoogleSheet_To_XML

A lightweight Google Apps Script to automatically export Google Sheets data into a clean, structured XML file directly to your Google Drive.

## 📺 Video Tutorial
If you want to see how to set this up step-by-step in less than 5 minutes, watch the video here: **[INSERT YOUR YOUTUBE VIDEO LINK HERE]**

## 🚀 How to Use

1. **Prepare your Data:** Open your Google Sheet and rename the tab at the bottom to `Products`. Ensure your first row contains your headers (e.g., id, name, price, category).
2. **Open the Script Editor:** In the top menu, go to `Extensions` > `Apps Script`.
3. **Paste the Code:** Delete any default code in the editor, copy the script from `code.js` (or paste it here), and click the **Save** icon.
4. **Refresh & Run:** Go back to your Google Sheet and refresh the page (F5). A new menu called `XML Tools` will appear at the top. Click it and select `Export to XML`.
5. **Authorize:** The first time you run it, Google will ask for permissions. Click *Advanced* -> *Go to Untitled project (unsafe)* -> *Allow*.

## 📄 Output Location
Once completed, a success message will pop up. Your structured XML file (`products_export.xml`) will be saved directly in your **Google Drive root folder**.

## ⚖️ License
MIT License - Feel free to use and customize for your own projects!
