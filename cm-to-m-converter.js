document.getElementById("calculate-btn").addEventListener("click", function() {
  var cmInput = parseFloat(document.getElementById("cm").value);
  var mResult = cmInput / 100;
  document.getElementById("m").value = mResult;
});

document.getElementById("reset-btn").addEventListener("click", function() {
  document.getElementById("m").value = "";
  document.getElementById("cm").value = "";
});
