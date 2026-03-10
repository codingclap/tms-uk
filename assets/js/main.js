// Home page Infinite Scroll

const tracks = [
  { el: document.getElementById('col1'), speed: 0.5, y: 0 },   // scrolls UP
  { el: document.getElementById('col2'), speed: -0.4, y: 0 },   // scrolls DOWN
];

// Clone each track's children for infinite loop
tracks.forEach(({ el }) => {
  const children = [...el.children];
  children.forEach(child => el.appendChild(child.cloneNode(true)));
});

function animate() {
  tracks.forEach(track => {
    const halfHeight = track.el.scrollHeight / 2;

    track.y -= track.speed;  // move up (negative = up)

    // Reset seamlessly when first copy is fully scrolled
    if (Math.abs(track.y) >= halfHeight) track.y = 0;
    if (track.y > 0) track.y = -halfHeight;         // for downward scroll

    track.el.style.transform = `translateY(${track.y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();
