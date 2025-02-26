function main() {
  (function () {
    "use strict";

    // Rolagem suave ao clicar nos links de navegação
    $("a.page-scroll").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 40,
            },
            900
          );
          return false;
        }
      }
    });

    // Mostrar o menu quando a rolagem atingir uma certa altura
    $(window).bind("scroll", function () {
      var navHeight = $(window).height() - 500;
      if ($(window).scrollTop() > navHeight) {
        $(".navbar-default").addClass("on");
      } else {
        $(".navbar-default").removeClass("on");
      }

      // Mostrar/ocultar a seta de voltar ao topo
      if ($(this).scrollTop() > 100) {
        // Se o usuário rolar mais de 100px
        $("#backToTop").addClass("show");
      } else {
        $("#backToTop").removeClass("show");
      }
    });

    // Configuração do scrollspy
    $("body").scrollspy({
      target: ".navbar-default",
      offset: 80,
    });

    // Fechar o menu ao clicar em um item de navegação
    $(".navbar-nav li a").click(function (event) {
      // Verifica se a janela é pequena o suficiente para o menu suspenso
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });

    // Filtro do portfólio com Isotope
    $(window).load(function () {
      var $container = $(".portfolio-items");
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
      $(".cat a").click(function () {
        $(".cat .active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    });

    // Nivo Lightbox para o portfólio
    $(".portfolio-item a").nivoLightbox({
      effect: "slideDown",
      keyboardNav: true,
    });

    // Rolagem para o topo ao clicar na seta
    $("#backToTop").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
  })();
}

function toggleAnswer(answerId) {
  var answerElement = document.getElementById("answer-" + answerId);
  var questionElement = answerElement.previousElementSibling;

  // Alternar a visibilidade da resposta
  if (
    answerElement.style.display === "none" ||
    answerElement.style.display === ""
  ) {
    answerElement.style.display = "block";
    questionElement.classList.add("active");
  } else {
    answerElement.style.display = "none";
    questionElement.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img/intro-bg.jpg",
    "img/intro-bg2.jpg",
    "img/intro-bg3.jpg",
    "img/intro-bg4.jpg"
  ];

  let currentIndex = 0;
  const introSection = document.querySelector(".intro");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    introSection.style.backgroundImage = `url(${images[currentIndex]})`;
  }, 3000);
});

main();
