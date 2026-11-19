document.querySelector('#demo-comment-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#comment-status');
  if (status) { status.hidden = false; status.textContent = 'This is a demo form. Your comment has not been published or sent.'; }
});
