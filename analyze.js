const analyze = (data) => ({
  average: (data.reduce((prev, curr) => prev + curr)) / data.length,
  min: Math.min(...data),
  max: Math.max(...data),
  length: data.length,
});

module.exports = analyze;