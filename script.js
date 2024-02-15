const alternatives = [
  {text:"please rachu ma ,i am pavam & my phone's feeling lonely! Just one call and it might stop giving me the silent treatment!  Just one call please ", images:"images/cat-01.gif"},
  {text:"If hazelnut chocolate were as sweet as your smile, every candy shop would be out of business by now!, my phone bill's on a diet. It needs just one call to feel full again ...", images:"images/cat-02.gif"},
  {text:"Are you a Nic ice cream? Because every time I see you, I melt a little inside! ,  if my phone could cry, it would! Let's dial away its tears with just one call...", images:"images/cat-03.gif"},
  {text:"If hazelnut chocolate and Nic ice cream had a lovechild, it would be you – irresistibly sweet , even my ringtone's gone on strike! It needs one call to get back to work! Just one call please ", images:"images/cat-04.gif"},
  {text:"If I could write a song, it'd be as beautiful as 'Vizhiyil Un Vizhiyil' and it would be all about you. , my phone's like a plant in a drought! It needs just one call to feel the rain of conversation!", images:"images/cat-05.gif"},
]
const ohyes = {text:"I will love you through all of our phases, just like moon 🌖 🌚 🌒 🌙 🌝 🌓 🌘", images:"images/cat-yes.gif",images:"images/cat-yes.gif"}
const ohyes2 = {text:"", images:"images/moon-logo.png"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;
let attempts = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

// Function to create and embed the YouTube video
function embedYouTubeVideo(videoId) {
  const videoContainer = document.createElement('div');
  videoContainer.id = 'video-container';

  const iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '315';
  iframe.src = `https://www.youtube.com/embed/${videoId}`; // Use embed URL
  iframe.frameborder = '0';
  iframe.allowfullscreen = true;

  videoContainer.appendChild(iframe);

  // Append the video container to the body
  document.body.appendChild(videoContainer);
}


errorButton.addEventListener('click', ()=>{
  count = 0;
  attempts = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes"){
          updateDisplay(ohyes)
          
          embedYouTubeVideo('ArFiDG9fhgI');
          buttons.forEach(btn => {
            btn.style.transform = 'scale(1)';
          });
          //updateDisplay(ohyes2)
      }
      if(button.textContent == 'i dont know'){
          attempts++;
          let randomIndex = Math.floor(Math.random() * alternatives.length);
          let alternative = alternatives[randomIndex];
          updateDisplay(alternative);
          button.style.transform = `scale(${1.1 + attempts * 0.1})`; // Increase button size
          // Increase Yes button size twice
          buttons.forEach(btn => {
            if (btn.textContent === "Yes") {
              btn.style.transform = `scale(${2 + attempts * 0.2})`;
            }
          });
      }
  })

  button.addEventListener('mouseover', () => {
    if (button.textContent == 'i dont know') {
        let x = Math.random() * (window.innerWidth - button.clientWidth);
        let y = Math.random() * (window.innerHeight - button.clientHeight);
        button.style.position = "absolute";
        button.style.left = x + "px";
        button.style.top = y + "px";
        attempts++;

        // Increase button size
        //button.style.transform = `scale(${1.1 + attempts * 0.1})`;

        // Increase Yes button size continuously based on attempts
        for (let i = 0; i < attempts; i++) {
            buttons.forEach(btn => {
                if (btn.textContent === "Yes") {
                    //let newScale = parseFloat(btn.style.transform.split(' ')[1]) * 2;
                    btn.style.transform = `scale(${1.1 + attempts * 0.1})`;
                }
            });
        }
    }
});

});
