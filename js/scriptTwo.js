const numberElement = document.getElementById("whtaApps")
const Bodymessage = "Hi Jord, I'd like to know more about your professional profile."
const redirectWhatsApp = () => {
  
  const number = "5586994411352"
  const url = "https://wa.me/" + number + "?text="+ encodeURIComponent(Bodymessage)
  window.open(url, "_blank").focus()
}
const redirectEmail = () => {

  const email = "jordeallefsilvadecarvalho@gmail.com";
  const subject = "Job vacancy"; 
  const mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(Bodymessage);
  window.open(mailtoLink, '_blank').focus();
}