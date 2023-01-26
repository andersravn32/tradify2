module.exports = {
  // Compose log entries
  log(label, ...content) {
    content.forEach((entry) => {
      console.log(`[${label}] ${entry}`);
    });
  },

  // Compose JSON response object
  response(status = null, message = null, data = null, time = new Date()) {
    return {
      status,
      message,
      data,
      time,
    };
  },
};
