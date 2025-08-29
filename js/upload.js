

function getVideo(){
    document.querySelector('#upload-img').addEventListener('submit', async (e) => {
        e.preventDefault();
       /* get the user video */
       let inputFile =  document.querySelector('#video-file').files[0];
       console.log(inputFile);

       /* get the user video */
       let formData = new FormData();
       formData.append("file", inputFile)

       let response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData
       });

       let blob = await response.blob();   // get the processed video back
       let videoUrl = URL.createObjectURL(blob);
       let videoSrc = document.querySelector("video");
       videoSrc.src = videoUrl
       videoSrc.load();
       videoSrc.play();
    })
}

document.addEventListener("DOMContentLoaded", () => {
    getVideo();
});