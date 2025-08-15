const particleColor = '#FF223D';
particlesJS("particles", {
  "particles": {
    "number": {
      "value": 50
    },
    "color": {
      "value": particleColor
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "top",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": false
      }
    }
  },
  "retina_detect": true
});


// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat/MIT
function fixFooter() {
    var footerHeight = $("#footer").outerHeight() + "px";
    var wrapperHeight = "calc(100vh - " + footerHeight + ")";
    $("#wrapper").css({ 'min-height': wrapperHeight });
}

$(document).ready(fixFooter);
$(window).resize(fixFooter);
// @license-end

$(document).ready(function() {
    $('.navbar-toggle').click(function() {
      $('.mobile-nav').toggleClass('active');
      $('.mobile-overlay').toggleClass('active');
    });
  
    $('.navbar-toggle-remove').click(function() {
      $('.mobile-nav').removeClass('active');
      $('.mobile-overlay').removeClass('active');
    });
  });
