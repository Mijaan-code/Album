

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentList = document.getElementById('commentsList');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = ''; // Clear the textarea
    }
});






/*
  const audioElements = document.querySelectorAll('audio');
  
  audioElements.forEach(audio => {
    audio.addEventListener('play', () => {
      audioElements.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });  */


  const audioElements = document.querySelectorAll('audio');
let currentSongIndex = 0;

audioElements.forEach((audio, index) => {
    audio.addEventListener('play', () => {
        audioElements.forEach((otherAudio, otherIndex) => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
        currentSongIndex = index;
    });
    audio.addEventListener('ended', playNextSong);
});

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % audioElements.length;
    audioElements[currentSongIndex].play();
}

