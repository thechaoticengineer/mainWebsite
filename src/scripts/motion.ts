const storageKey = 'chaotic-engineer-motion';

export function setupMotion(button: HTMLButtonElement) {
	const media = window.matchMedia('(prefers-reduced-motion: reduce)');
	let paused = false;
	try { paused = window.localStorage.getItem(storageKey) === 'paused'; } catch { /* Storage may be unavailable. */ }

	function sync() {
		const stopped = paused || media.matches || document.hidden;
		document.documentElement.dataset.motion = stopped ? 'paused' : 'running';
		button.hidden = media.matches;
		button.dataset.state = paused ? 'paused' : 'running';
		const label = paused ? 'Resume animations' : 'Pause animations';
		button.setAttribute('aria-label', label);
		button.title = label;
	}

	button.addEventListener('click', () => {
		paused = !paused;
		try { window.localStorage.setItem(storageKey, paused ? 'paused' : 'running'); } catch { /* Keep the in-memory preference. */ }
		sync();
	});
	media.addEventListener('change', sync);
	document.addEventListener('visibilitychange', sync);
	sync();
}
