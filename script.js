/* ---------------------------------------------------------
   VIDEO LIST (EDIT THIS ONLY)
--------------------------------------------------------- */
const videos = [
  {
    id: 1,
    title: "vid01",
    src: "https://uploadkon.ir/uploads/da5613_26VID-20260104-WA0062-1-.mp4",
    thumb: "https:old.jpg",
    category: "pussy"
  },
  {
    id: 2,
    title: "vid02",
    src: "https://uploadkon.ir/uploads/825f14_26ttyyygfffff56re.mp4",
    thumb: "old1.jpg",
    category: "outdoor"
  },
  {
    id: 3,
    title: "vid03",
    src: "https://uploadkon.ir/uploads/cc3314_26BellaSweet-recorded-media.mp4",
    thumb: "old2.jpg",
    category: "Anal"
  },
  {
    id: 4,
    title: "vid04",
    src: "https://seed005.sujcloud.com/dl/files/scenes/1/10260/Busty_Japanese_watered_with_some_white_sperm-like_liquid_3.mp4",
    thumb: "https:old.jpg",
    category: "Boobs"
  },
  {
    id: 5,
    title: "vid05",
    src: "https://lv.sujcloud.com/files/scenes/1/10260/preview_3.mp4",
    thumb: "old1.jpg",
    category: "Cum"
  },
  {
    id: 7,
    title: "vid07",
    src: "https://uploadkon.ir/uploads/a5d713_26VID-20260113-032815-950.mp4",
    thumb: "https:old.jpg",
    category: "Boobs"
  },
  {
    id: 8,
    title: "vid08",
    src: "https://uploadkon.ir/uploads/af7313_26VID-20260102-WA0082.mp4",
    thumb: "old1.jpg",
    category: "pussy"
  },
  {
    id: 9,
    title: "vid09",
    src: "https://uploadkon.ir/uploads/78c514_26F2YB9YJz-720p.mp4",
    thumb: "old2.jpg",
    category: "pussy"
  },
  {
    id: 10,
    title: "vid10",
    src: "https://uploadkon.ir/uploads/5e1f13_26Asians-prefer-hardcore-anal-and-swallow.mp4",
    thumb: "https:old.jpg",
    category: "Hardcore"
  },
  {
    id: 11,
    title: "vid11",
    src: "https://uploadkon.ir/uploads/b0ab13_26tUSHY.mp4",
    thumb: "old1.jpg",
    category: "Anal"
  },
  {
    id: 12,
    title: "vid12",
    src: "https://uploadkon.ir/uploads/483214_26i75gogr5u.mp4",
    thumb: "old2.jpg",
    category: "other"
  },
  {
    id: 19,
    title: "vid13",
    src: "https://uploadkon.ir/uploads/2de913_26VID-20251224-WA0031.mp4",
    thumb: "https:old.jpg",
    category: "Big Cock"
  },
  {
    id: 25,
    title: "vid14",
    src: "https://uploadkon.ir/uploads/110413_26VID-20260114-024351-213.mp4",
    thumb: "old2.jpg",
    category: "Oiled"
  },
  {
    id: 26,
    title: "vid15",
    src: "https://uploadkon.ir/uploads/be8714_262-5467737386374929188.mp4",
    thumb: "old2.jpg",
    category: "Oiled"
  },
  {
    id: 27,
    title: "vid16",
    src: "vid",
    thumb: "old2.jpg",
    category: "Anal"
  },
  {
    id: 28,
    title: "vid17",
    src: "vid2",
    thumb: "old2.jpg",
    category: "Japanese"
  },
  {
    id: 29,
    title: "vid18",
    src: "vid3",
    thumb: "https:old.jpg",
    category: "Foot"
  },
  {
    id: 35,
    title: "vid19",
    src: "vid4",
    thumb: "old2.jpg",
    category: "Boobs"
  },
  {
    id: 36,
    title: "vid20",
    src: "vid5",
    thumb: "old2.jpg",
    category: "Hardcore"
  },
  {
    id: 37,
    title: "vid21",
    src: "vid6",
    thumb: "old2.jpg",
    category: "other"
  },
  {
    id: 38,
    title: "vid22",
    src: "vid7",
    thumb: "old2.jpg",
    category: "Milf"
  },
  {
    id: 39,
    title: "vid23",
    src: "vid8",
    thumb: "https:old.jpg",
    category: "Squirting"
    },
  {
    id: 40,
    title: "vid",
    src: "vid9",
    thumb: "old2.jpg",
    category: "Anal"
  },
  {
    id: 41,
    title: "vid21",
    src: "vid10",
    thumb: "old2.jpg",
    category: "Cum"
  },
  {
    id: 42,
    title: "vid22",
    src: "vid11",
    thumb: "old2.jpg",
    category: "Threesome"
  },
  {
    id: 43,
    title: "vid23",
    src: "vid12",
    thumb: "https:old.jpg",
    category: "other"
  },
];

/* ---------------------------------------------------------
   CATEGORY BAR (INDEX PAGE)
--------------------------------------------------------- */
if (document.getElementById("category-bar")) {
  const categoryBar = document.getElementById("category-bar");
  const categories = ["ALL", ...new Set(videos.map(v => v.category))];

  categories.forEach(cat => {
    categoryBar.innerHTML += `
      <div class="category-btn" onclick="filterCategory('${cat}')">${cat}</div>
    `;
  });
}

/* ---------------------------------------------------------
   LOAD VIDEOS ON INDEX PAGE
--------------------------------------------------------- */
function loadVideos(filter = "ALL") {
  const list = document.getElementById("video-list");
  if (!list) return;

  list.innerHTML = "";

  videos
    .filter(v => filter === "ALL" || v.category === filter)
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
      playBtn.textContent = "⏸️";
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
