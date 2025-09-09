// The context discusses building a retry mechanism for API calls using JavaScript Promises. A likely question that could have been asked in relation to this topic is:

// "Can you describe how to implement a retry mechanism for API calls using JavaScript promises, including error handling and delays between attempts?"

// This question encompasses the creation of a Promise, how to handle success and failure cases, and the specifics of implementing retry logic.

function checkStatus(statusCode) {
  return new Promise((resolve, reject) => {
    if (statusCode === 200) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  });
}

//delay function 
function delay (ms){
    return new Promise((resolve) => {
        setTimeout( resolve, ms);
    });
}
async function retry(statusCode, retries,delayMs = 1000) {
  let attempts = 0;
  while (attempts < retries) {
    try {
      const result = await checkStatus(statusCode);
      console.log(result);
      return;
    } catch (error) {
      attempts++;
      console.log(`Attempt ${attempts} failed. Retrying...`);
      console.log(delayMs);
    }
    if (attempts === retries) {
      console.log("All attempts failed");
    }
    await delay(delayMs);
  }
}

retry(400, 3,8000)
