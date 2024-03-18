function toggle(){
    const html = document.documentElement
    html.classList.toggle('ilustra')
    const txt = document.querySelector("#texto")
    if (html.classList.contains('ilustra')){
        document.getElementById("texto").innerHTML= "Portfolio Ilustração"
        txt.setAttribute("href", "https://instagram.com/arthurseabroso")
    } else{
        document.getElementById("texto").innerHTML= "Portfolio Programação"
        txt.setAttribute("href", "https://github.com/Seabroso42")

    }
}