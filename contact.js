/* Contact page demo: copies the prepared message; never pretends to send it. */
(() => {
  const form = document.getElementById('aa-contact-form');
  const status = document.getElementById('aa-contact-status');
  if (!form || !status) return;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = form.elements.namedItem('name').value.trim();
    const email = form.elements.namedItem('email').value.trim();
    const topic = form.elements.namedItem('topic').value;
    const message = form.elements.namedItem('message').value.trim();
    if (!name || !email || !message) { status.textContent = 'Please complete all required fields.'; return; }
    const prepared = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(prepared);
      status.textContent = 'Message copied! Nothing has been sent.';
    } catch {
      status.textContent = 'Copying is unavailable here. Please select and copy your message manually. Nothing has been sent.';
    }
  });
})();
