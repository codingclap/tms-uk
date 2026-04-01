 // Infinite Logo Scroll (Horizontal)

        document.addEventListener("DOMContentLoaded", () => {

            const track = document.getElementById('logo-marqueeInner');

            if (!track) return; // safety check

            let x = 0;
            const speed = 0.7;

            // Clone logos for seamless loop
            const children = [...track.children];
            children.forEach(child => {
                track.appendChild(child.cloneNode(true));
            });

            function animate() {
                const halfWidth = track.scrollWidth / 2;

                x -= speed;

                if (Math.abs(x) >= halfWidth) {
                    x = 0;
                }

                track.style.transform = `translateX(${x}px)`;

                requestAnimationFrame(animate);
            }

            animate();

        });
 // Infinite Logo Scroll (Horizontal)



 
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



// Home page - Tab Script 

function filterTab(tab) {
  // Hide all grids
  document.querySelectorAll('.tab-grid').forEach(grid => {
    grid.classList.add('hidden');
  });

  // Reset all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-maroon', 'text-white');
    // btn.classList.add('border', 'border-gray-400', 'text-gray-700');
  });

  // Show selected grid
  document.getElementById('grid-' + tab).classList.remove('hidden');

  // Activate selected button
  const activeBtn = document.getElementById('tab-' + tab);
  activeBtn.classList.add('bg-maroon', 'bg-opacity-100', 'text-white');
  activeBtn.classList.remove('text-brown');
}
