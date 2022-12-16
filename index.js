const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    const body = document.querySelector("#body");
    
    body.classList.toggle("bg-zinc-900");
    body.classList.toggle("text-white");
    
    btn.classList.toggle("hover:bg-zinc-900");
    btn.classList.toggle("border-black");
    btn.classList.toggle("hover:bg-white");
    btn.classList.toggle("hover:text-zinc-900");

});
