
let links = document.querySelectorAll(".close");

links.forEach(function(link) {
  link.addEventListener("click",function(evento){
    evento.preventDefault();
    let content = document.querySelector('.content');
    content.classList.remove("animate__bounce");
    content.classList.remove("animate__animated");
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function(){
      location.href = "/bolets";
    },1000);

    return false;

  });
});
