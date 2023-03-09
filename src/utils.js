export const fetchFromSheets = async (page) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const spreadSheet = process.env.REACT_APP_SPREADSHEET_KEY;
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadSheet}/values/${page}?alt=json&key=${apiKey}`
    );
    const data = await response.json();
    const { values } = data;
    const indexes = values.shift();
    const returnArray = [];
    values.forEach((value, index) => {
      const returnObject = {};
      value.forEach((column, index) => {
        returnObject[indexes[index]] = column;
      });
      returnArray.push(returnObject);
    });
    return returnArray;
  };
  
  export const sortExperiences = (a, b) => {
    if (a.time > b.time) {
      return -1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  };