const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

video.addEventListener('play', () => {
    current_state = 'neutral'
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        happiness = detections[0]['expressions']['happy']
        angriness = detections[0]['expressions']['angry']
        
        //create XMLHttpRequest object
        const xhr = new XMLHttpRequest()

        if (happiness > 0.5 && current_state != 'happy') {
            //open a get request with the remote server URL
            xhr.open("GET", "https://raspberrypi:8080/light/0/on")
            current_state = 'happy'
            console.log('now happy on')
        }

        if (angriness > 0.5 && current_state != 'angry') {
             //open a get request with the remote server URL
            xhr.open("GET", "https://raspberrypi:8080/light/0/off")
            current_state = 'angry'
            console.log('now angry off')
        }
       
        //send the Http request
        xhr.send()

    }, 100)
})