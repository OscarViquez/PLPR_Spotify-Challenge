// DOM Elements //
// 5:02
// ================================================================ //
const viewPlaylistButtonEl = document.getElementById('playlist-btn');

const playlistContainer = document.querySelector('#playlist-list');


// //
// ================================================================ //
let playlistSongs = ["Photograph", "I Hear a Symphony", "Underground", "Elenor Rigby", "More than the Day Before", "Pictures of Mountain", "Stay With Me", "Cigarrito y cafe", "Plastic Love", "Better Now"]

viewPlaylistButtonEl.addEventListener('click', function () {

    playlistSongs.forEach(song => {
        let listElement = document.createElement('li');
        listElement.textContent = `# ${playlistSongs.indexOf(song) + 1} ${song}`;
        playlistContainer.append(listElement);
    });
    
    viewPlaylistButtonEl.disabled = true;
})