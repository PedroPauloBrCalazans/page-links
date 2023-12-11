function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light. adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.avif")
  } else {
    //se tiver sem light, mater a imagem normal
    img.setAttribute("src", "https://github.com/PedroPauloBrCalazans.png")
  }
}
