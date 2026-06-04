const outer = document.querySelector('.outer-cursor');
const inner = document.querySelector('.inner-cursor');

let mouse = { x: -100, y: -100 };
let outer_pos = { x: -100, y: -100 };
let inner_pos = { x: -100, y: -100 };
let started = false;

outer.style.opacity = '0';
inner.style.opacity = '0';

document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (!started) {
        outer_pos = { x: mouse.x, y: mouse.y };
        inner_pos = { x: mouse.x, y: mouse.y };
        outer.style.opacity = '1';
        inner.style.opacity = '1';
        started = true;
    }
});

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function animate() {
    if (started) {
        inner_pos.x = lerp(inner_pos.x, mouse.x, 0.25);
        inner_pos.y = lerp(inner_pos.y, mouse.y, 0.25);
        outer_pos.x = lerp(outer_pos.x, mouse.x, 0.08);
        outer_pos.y = lerp(outer_pos.y, mouse.y, 0.08);

        inner.style.transform = `translate(${inner_pos.x}px, ${inner_pos.y}px) translate(-50%, -50%)`;
        outer.style.transform = `translate(${outer_pos.x}px, ${outer_pos.y}px) translate(-50%, -50%)`;
    }

    requestAnimationFrame(animate);
}

animate();