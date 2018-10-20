
var element = document.getElementById("brand-name");
var date = new Date().getFullYear();
element.innerHTML = "Алфа Стил EOOД " + date + " ®"

// Wrap every letter in a span
$('.ml1 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline()
    .add({
      targets: '.ml1 .letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 6000,
      delay: function(el, i) {
        return 70 * (i+1)
      }
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: function(el, i, l) {
        return 80 * (l - i);
      }
    // }).add({
    //   targets: '.ml1',
    //   opacity: 0,
    //   duration: 1000,
    //   easing: "easeOutExpo",
    //   delay: 1000
    });