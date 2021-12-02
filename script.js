const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt the user to select a media stream and pass to video element then play
async function selectMediaStream(){
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    console.log(error)
  }
}

button.addEventListener('click', async () =>{
  // Disable the button
  button.disabled = true;
  //Start pic in pic
  await videoElement.requestPictureInPicture()
  //Reset button
  button.disabled = false
});

//On Load
selectMediaStream();