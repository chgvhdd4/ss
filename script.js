/* ---------------------------------------------------------
   VIDEO LIST (EDIT THIS ONLY)
--------------------------------------------------------- */
const videos = [
  {
    id: 1,
    title: "Cool Tech Review",
    src: "videos/video1.mp4",
    thumb: "https://i.ibb.co/gLgDnsPF/images-30.jpg",
    category: "Tech"
  },
  {
    id: 2,
    title: "Gaming Montage",
    src: "https://r6.ssstik.top/ytdlp/18004721620000000101",
    thumb: "https://screenshots.yaeby.channel/contents/videos_screenshots/28000/28437/642x361/1.jpg",
    category: "Gaming"
  },
  {
    id: 3,
    title: "Funny Moments",
    src: "videos/video3.mp4",
    thumb: "https://fi1-ph.ypncdn.com/videos/202107/29/392076581/original/(m=eaSaaTbWx)(mh=w5ge2DWS-J_0CX6k)8.jpg",
    category: "Comedy"
  }
];

/* ---------------------------------------------------------
   CATEGORY BAR (INDEX PAGE)
--------------------------------------------------------- */
if (document.getElementById("category-bar")) {
  const categoryBar = document.getElementById("category-bar");
  const categories = ["All", ...new Set(videos.map(v => v.category))];

  categories.forEach(cat => {
    categoryBar.innerHTML += `
      <div class="category-btn" onclick="filterCategory('${cat}')">${cat}</div>
    `;
  });
}

/* ---------------------------------------------------------
   LOAD VIDEOS ON INDEX PAGE
--------------------------------------------------------- */
function loadVideos(filter = "All") {
  const list = document.getElementById("video-list");
  if (!list) return;

  list.innerHTML = "";

  videos
    .filter(v => filter === "All" || v.category === filter)
    .forEach(v => {
      list.innerHTML += `
        <div class="card" onclick="openVideo(${v.id})">
          <img src="${v.thumb}">
          <h3>${v.title}</h3>
          <p>${v.category}</p>
        </div>
      `;
    });
}

function filterCategory(cat) {
  loadVideos(cat);
}

if (document.getElementById("video-list")) {
  loadVideos();
}

/* ---------------------------------------------------------
   OPEN VIDEO PAGE
--------------------------------------------------------- */
function openVideo(id) {
  window.location = `video.html?id=${id}`;
}

/* ---------------------------------------------------------
   VIDEO PAGE LOADING (TITLE + VIDEO SOURCE)
--------------------------------------------------------- */
if (document.getElementById("video-title")) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const videoData = videos.find(v => v.id == id);

  if (!videoData) {
    document.getElementById("video-title").textContent = "Video not found";
  } else {
    document.getElementById("video-title").textContent = videoData.title;
    document.getElementById("video").src = videoData.src;
  }
}

/* ---------------------------------------------------------
   CUSTOM VIDEO PLAYER CONTROLS
--------------------------------------------------------- */
const video = document.getElementById("video");
const playBtn = document.getElementById("play-btn");
const loader = document.getElementById("loader");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("time-display");

if (video) {

  /* PLAY / PAUSE */
  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "⏸";
    } else {
      video.pause();
      playBtn.textContent = "▶";
    }
  });

  /* SHOW LOADER WHILE BUFFERING */
  video.addEventListener("waiting", () => loader.style.display = "block");
  video.addEventListener("playing", () => loader.style.display = "none");

  /* UPDATE TIME + PROGRESS BAR */
  video.addEventListener("timeupdate", () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = percent + "%";

    timeDisplay.textContent =
      formatTime(video.currentTime) + " / " + formatTime(video.duration);
  });

  /* CLICK TO SEEK (HOT SELECTION) */
  progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;

    video.currentTime = (clickX / width) * duration;
  });

  /* FORMAT TIME */
  function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }
}
