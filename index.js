<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>open me:></title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="container">
    <label>
      <div class="heart">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg">
      </div>
      <input id="messageState" type="checkbox" style="display:none" />
    </label>
    <div class="message">
      <h1>happy valentines day lovee</h1>
      <p>maraming salamat sa pag stay sakin kahit minsan
      nag aaway tayo maraming salamat dahil nag stay ka parin i promise
        i'll treat you better than your past, wag puro ako love ah?
       take care of yourself wla po ako sa tabi mo para alagaan ka 
      pag nagkasakit ka, i love you so much lovee sorry kung kaunti 
      lang yung mga nabigay ko na gifts i promise gagalingan ko pa
      i love you so much poo loveee, happy valentines day pooo
      enjoy your day and wag magpaka stress ah? loveyou mwaa</p>
      <p></p>
      <p></p>
      <p> - your laloves(Xyryll) </p>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script>
    $("#messageState").on("change", (x) => {
      $(".message").removeClass("openNor").removeClass("closeNor");
      if ($("#messageState").is(":checked")) {
        $(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
        $(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
        $(".container").stop().animate({
          "backgroundColor": "#f48fb1"
        }, 2000);
        console.log("Abrindo");
      } else {
        $(".message").removeClass("no-anim").addClass("closeNor");
        $(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
        $(".container").stop().animate({
          "backgroundColor": "#fce4ec"
        }, 2000);
        console.log("fechando");
      }
    });

    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
      console.log("Animation End");
      if ($(".message").hasClass("closeNor"))
        $(".message").addClass("closed");
      $(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
    });

    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
      console.log("Animation End");
      if (!$(".heart").hasClass("closeHer"))
        $(".heart").addClass("openedHer").addClass("beating");
      else
        $(".heart").addClass("no-anim").removeClass("beating");
      $(".heart").removeClass("openHer").removeClass("closeHer");
    });
  </script>
</body>

</html>
