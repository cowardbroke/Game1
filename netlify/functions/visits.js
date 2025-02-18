exports.handler = async (event, context) => {
  let count = 0;

  // Here you can either fetch or increment a counter stored in a database
  // For simplicity, we'll simulate a counter with a static value
  count++;

  return {
    statusCode: 200,
    body: JSON.stringify({ count })
  };
};
