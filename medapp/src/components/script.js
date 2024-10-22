    document.getElementById("loginBtn").addEventListener("click", function () {
      document.querySelector(".dropdown").classList.toggle("show");
    });
    document.getElementById("loginBtn").addEventListener("blur", function () {
      document.querySelector(".dropdown").classList.remove("show");
    });
