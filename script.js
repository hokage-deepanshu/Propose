var love = setInterval(function () {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        r_size +
        "px;height:" +
        r_size +
        "px;left:" +
        r_left +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        r_bg +
        ",1);-webkit-animation:love " +
        r_time +
        "s ease;-moz-animation:love " +
        r_time +
        "s ease;-ms-animation:love " +
        r_time +
        "s ease;animation:love " +
        r_time +
        "s ease'></div>"
    );

    $(".bg_heart").append(
      "<div class='heart' style='width:" +
        (r_size - 10) +
        "px;height:" +
        (r_size - 10) +
        "px;left:" +
        (r_left + r_num) +
        "%;background:rgba(255," +
        (r_bg - 25) +
        "," +
        (r_bg + 25) +
        ",1);-webkit-animation:love " +
        (r_time + 5) +
        "s ease;-moz-animation:love " +
        (r_time + 5) +
        "s ease;-ms-animation:love " +
        (r_time + 5) +
        "s ease;animation:love " +
        (r_time + 5) +
        "s ease'></div>"
    );
  }, 200);
  var i = 0;
var txt1 =
    "Hi Sweety..... Ur Chiku here!  <<               Now I wan't to say something special to you. <<<                                            > you mean the world to me and I cannot imagine my life without you.  <<                                                                       < Kya tum MERI aur SIRF MERI BNOGI BETU ❤️? ...!                                                                                                         << ❤️ HAPPY  PROPOSE  DAY❤️";
  var speed = 50;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {
      if (txt1.charAt(i) == "<")
        document.getElementById("text1").innerHTML += "</br>";
      else if (txt1.charAt(i) == ">")
        document.getElementById("text1").innerHTML = "";
      else if (txt1.charAt(i) == "|") {
        $(".bg_heart").css("background-image", "url('')");
      } else document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }