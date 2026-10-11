document.querySelectorAll('.card .btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var title = btn.parentElement.querySelector('h3').textContent;
    alert('Bạn đã chọn khóa học: ' + title);
  });
});
