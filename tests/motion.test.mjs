import test from 'node:test';
import assert from 'node:assert/strict';
import { setupMotion } from '../src/scripts/motion.ts';

function fixture(t, { reduced = false, saved = null, storageBlocked = false } = {}) {
	const originalWindow = globalThis.window;
	const originalDocument = globalThis.document;
	const media = Object.assign(new EventTarget(), { matches: reduced });
	const document = Object.assign(new EventTarget(), { hidden: false, documentElement: { dataset: {} } });
	const attributes = new Map();
	const button = Object.assign(new EventTarget(), {
		dataset: {}, hidden: true, title: '',
		setAttribute: (key, value) => attributes.set(key, value),
	});
	let stored = saved;
	globalThis.window = {
		matchMedia: () => media,
		localStorage: {
			getItem() { if (storageBlocked) throw new Error('Blocked'); return stored; },
			setItem(key, value) { if (storageBlocked) throw new Error('Blocked'); assert.equal(key, 'chaotic-engineer-motion'); stored = value; },
		},
	};
	globalThis.document = document;
	t.after(() => {
		if (originalWindow === undefined) delete globalThis.window; else globalThis.window = originalWindow;
		if (originalDocument === undefined) delete globalThis.document; else globalThis.document = originalDocument;
	});
	setupMotion(button);
	return { button, media, document, attributes, stored: () => stored, state: () => document.documentElement.dataset.motion };
}

test('pause and resume update animation state, accessible label and saved preference', t => {
	const f = fixture(t);
	assert.equal(f.state(), 'running');
	assert.equal(f.button.hidden, false);
	assert.equal(f.attributes.get('aria-label'), 'Pause animations');
	f.button.dispatchEvent(new Event('click'));
	assert.equal(f.state(), 'paused');
	assert.equal(f.stored(), 'paused');
	assert.equal(f.attributes.get('aria-label'), 'Resume animations');
	f.button.dispatchEvent(new Event('click'));
	assert.equal(f.state(), 'running');
	assert.equal(f.stored(), 'running');
});

test('saved pause survives navigation and tab visibility changes', t => {
	const f = fixture(t, { saved: 'paused' });
	assert.equal(f.state(), 'paused');
	f.document.hidden = true;
	f.document.dispatchEvent(new Event('visibilitychange'));
	f.document.hidden = false;
	f.document.dispatchEvent(new Event('visibilitychange'));
	assert.equal(f.state(), 'paused');
});

test('reduced motion takes priority and reacts to system preference changes', t => {
	const f = fixture(t, { reduced: true, saved: 'running' });
	assert.equal(f.state(), 'paused');
	assert.equal(f.button.hidden, true);
	f.media.matches = false;
	f.media.dispatchEvent(new Event('change'));
	assert.equal(f.state(), 'running');
	assert.equal(f.button.hidden, false);
	f.media.matches = true;
	f.media.dispatchEvent(new Event('change'));
	assert.equal(f.state(), 'paused');
});

test('background tabs pause without overwriting the visitor preference', t => {
	const f = fixture(t);
	f.document.hidden = true;
	f.document.dispatchEvent(new Event('visibilitychange'));
	assert.equal(f.state(), 'paused');
	assert.equal(f.stored(), null);
	f.document.hidden = false;
	f.document.dispatchEvent(new Event('visibilitychange'));
	assert.equal(f.state(), 'running');
});

test('pause works when localStorage is blocked', t => {
	const f = fixture(t, { storageBlocked: true });
	f.button.dispatchEvent(new Event('click'));
	assert.equal(f.state(), 'paused');
	f.button.dispatchEvent(new Event('click'));
	assert.equal(f.state(), 'running');
});
