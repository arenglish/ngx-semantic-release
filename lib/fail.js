module.exports = async function failNgx(options, context) {
  console.log("ngx plugin failed");
  return true;
};
