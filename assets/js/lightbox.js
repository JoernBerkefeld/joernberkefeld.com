// Screenshot lightbox: opens a full-screen overlay with prev/next navigation.
// Each ".project-shots" strip is one gallery; its ".shot-btn" buttons carry
// data-src (full image) and data-caption. Arrow keys and Esc are supported.
(function () {
    const overlay = document.getElementById('lightbox');
    if (!overlay) return;

    const imgEl = overlay.querySelector('.lightbox-img');
    const captionEl = overlay.querySelector('.lightbox-caption');
    const countEl = overlay.querySelector('.lightbox-count');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');
    const closeBtn = overlay.querySelector('.lightbox-close');

    let shots = [];
    let index = 0;

    function show(i) {
        if (!shots.length) return;
        index = (i + shots.length) % shots.length;
        const shot = shots[index];
        imgEl.src = shot.src;
        imgEl.alt = shot.caption;
        captionEl.textContent = shot.caption;
        countEl.textContent = `${index + 1} / ${shots.length}`;
    }

    function open(gallery, startIndex) {
        shots = [...gallery.querySelectorAll('.shot-btn')].map((btn) => ({
            src: btn.dataset.src,
            caption: btn.dataset.caption || '',
        }));
        show(startIndex);
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        imgEl.src = '';
    }

    for (const gallery of document.querySelectorAll('.project-shots')) {
        const buttons = [...gallery.querySelectorAll('.shot-btn')];
        buttons.forEach((btn, i) => {
            btn.addEventListener('click', () => open(gallery, i));
        });
    }

    prevBtn.addEventListener('click', () => show(index - 1));
    nextBtn.addEventListener('click', () => show(index + 1));
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });
    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') show(index - 1);
        else if (e.key === 'ArrowRight') show(index + 1);
    });
})();
