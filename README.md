# cv-generator
Using React, Google Sheets, and CSS to create a dynamic cv and cover letter generator.

More about the idea behind this repository on Medium: https://raphaelaleixo.medium.com/using-react-google-sheets-and-css-to-create-a-dynamic-cv-and-cover-letter-generator-fa70f12b08a0

## How to use

- Create an API key on Google Cloud for Google Spreadsheets
- Create a file called `.env.local` on the project root and add your secret key on it:
```
REACT_APP_API_KEY=YourSecretKey
```
- Clone the example spreadsheet on this link: https://docs.google.com/spreadsheets/d/1wLQ-nwaZcGZtafRrYnJi02huqao4YULmfU3m03m43U4/edit#gid=0
- Set the sharing options on the newly cloned spreadsheet to "anyone with the link".
- Get the id from your spreadsheet. The id comes after the `/d/` in the url.
- Go to your `.env.local` file and add that spreadsheet id:
```
REACT_APP_SPREADSHEET_KEY=YourSpreadsheetId
```
- Run `yarn install` and then `yarn start`

That should be it. You should have your CV/CoverLetter generator running on your localhost. :)

