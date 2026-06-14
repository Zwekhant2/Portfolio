// Set the "last deployed" date to today, in DD.MM.YYYY (Finnish format).
(function () {
  var el = document.getElementById('deploy-date');
  if (!el) return;
  var d = new Date();
  var dd = String(d.getDate()).padStart(2, '0');
  var mm = String(d.getMonth() + 1).padStart(2, '0');
  var yyyy = d.getFullYear();
  el.textContent = dd + '.' + mm + '.' + yyyy;
})();
