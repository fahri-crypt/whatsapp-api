function popupku() {
  var body = document.querySelector("body");      
  var pWm = document.createElement("a");
  pWm.setAttribute("href", "https://api.whatsapp.com/send?phone=6282336037704&text=Aku%20kangen%20kamu%20bebb.");
  pWm.setAttribute("style", "text-decoration: none; color: white; opacity: .5; position: fixed; bottom : 10px; left: 10px");
  pWm.innerHTML = "Syemangaat";
  body.appendChild(pWm);
}
