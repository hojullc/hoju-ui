/*!
 * hoju-ui v1.0.0 — JS utilities for tabs, modals, toasts
 * MIT License — https://github.com/hojullc/hoju-ui
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
    : typeof define === 'function' && define.amd ? define(factory)
    : (global.HojuUI = factory());
}(typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  /* ─── TABS ────────────────────────────────────────────────────── */
  function initTabs(container) {
    const el = typeof container === 'string' ? document.querySelector(container) : container;
    if (!el) return;
    const btns   = el.querySelectorAll('.tab-btn');
    const panels = el.querySelectorAll('.tab-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        panels[i] && panels[i].classList.add('active');
      });
    });
  }

  /* ─── MODAL ───────────────────────────────────────────────────── */
  function modal(id) {
    const overlay = document.getElementById(id);
    if (!overlay) return {};
    const close = () => overlay.classList.remove('open');
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    return {
      open()  { overlay.classList.add('open'); },
      close,
      toggle(){ overlay.classList.toggle('open'); },
    };
  }

  /* ─── TOAST ───────────────────────────────────────────────────── */
  function toast(message, opts = {}) {
    const { type = 'info', duration = 3500 } = opts;
    let container = document.getElementById('hoju-toasts');
    if (!container) {
      container = document.createElement('div');
      container.id = 'hoju-toasts';
      document.body.appendChild(container);
    }
    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    const el = document.createElement('div');
    el.className = `hoju-toast toast-${type}`;
    el.innerHTML = `<span class="toast-icon">${icons[type] || 'ℹ'}</span><span>${message}</span>`;
    container.appendChild(el);
    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(20px)';
      el.style.transition = 'opacity .3s,transform .3s';
      setTimeout(() => el.remove(), 300);
    }, duration);
  }

  /* ─── AUTO INIT ───────────────────────────────────────────────── */
  function autoInit() {
    document.querySelectorAll('[data-hoju-tabs]').forEach(el => initTabs(el));
    // Wire modal triggers
    document.querySelectorAll('[data-hoju-modal]').forEach(btn => {
      const id = btn.getAttribute('data-hoju-modal');
      const m = modal(id);
      btn.addEventListener('click', () => m.open());
    });
    document.querySelectorAll('[data-hoju-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const overlay = btn.closest('.modal-overlay');
        if (overlay) overlay.classList.remove('open');
      });
    });
  }

  if (typeof document !== 'undefined') {
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', autoInit)
      : autoInit();
  }

  return { initTabs, modal, toast, autoInit };
}));
