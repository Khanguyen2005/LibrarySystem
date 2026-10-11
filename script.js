document.querySelectorAll(".card .btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var title = btn.parentElement.querySelector("h3").textContent;
    alert("Bạn đã chọn khóa học: " + title);
  });
});

// Mẹo học tập ngẫu nhiên
var tips = [
  "Học 25 phút, nghỉ 5 phút (phương pháp Pomodoro) giúp tập trung hơn.",
  "Giải thích bài cho người khác nghe là cách nhớ lâu nhất.",
  "Ngủ đủ giấc giúp não bộ ghi nhớ kiến thức đã học.",
  "Ôn lại bài sau 1 ngày, 3 ngày, 7 ngày để nhớ bền vững.",
  "Viết tay ghi chú giúp bạn hiểu sâu hơn so với chỉ đọc.",
  "Đặt mục tiêu nhỏ mỗi ngày, đừng chờ đến lúc hoàn hảo mới bắt đầu.",
  "Uống đủ nước và vận động nhẹ để đầu óc minh mẫn.",
];

var tipText = document.getElementById("tip-text");
var tipBtn = document.getElementById("tip-btn");
var lastIndex = -1;

function showTip() {
  var i;
  do {
    i = Math.floor(Math.random() * tips.length);
  } while (i === lastIndex);
  lastIndex = i;
  tipText.classList.add("fade");
  setTimeout(function () {
    tipText.textContent = "“" + tips[i] + "”";
    tipText.classList.remove("fade");
  }, 300);
}

tipBtn.addEventListener("click", showTip);
showTip();
