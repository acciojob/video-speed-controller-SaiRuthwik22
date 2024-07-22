const inputs = document.querySelectorAll('.controls input');
function pauseVideo(){
	let video = document.getElementById("video")
	if(!video.paused){
		video.pause()
		console.log(video.currentTime)
	}else{
		video.play()
	}
}
function forward(){
	let video = document.getElementById("video")
	video.currentTime+=25
}
function backward(){
	let video = document.getElementById("video")
	video.currentTime -=10
}
function updateVolume() {
    let video = document.getElementById("video");
    let volumeControl = document.getElementById("volumeControl");
    video.volume = volumeControl.value;
}

function updatePlaybackRate() {
    let video = document.getElementById("video");
    let playbackRateControl = document.getElementById("playbackRateControl");
    video.playbackRate = playbackRateControl.value;
}
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
