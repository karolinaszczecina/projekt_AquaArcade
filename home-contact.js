/* Demo contact form: no network submission, honest status messages. */
(()=>{
 const form=document.getElementById('aa-home-contact-form');
 const status=document.getElementById('aa-home-contact-status');
 if(!form||!status)return;
 form.addEventListener('submit',async(e)=>{
  e.preventDefault(); if(!form.reportValidity())return;
  const d=new FormData(form);
  const msg=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nTopic: ${d.get('topic')}\n\n${d.get('message')}`;
  try {if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(msg);status.textContent='Message copied to clipboard. No message was sent.';}
  catch {status.textContent='Demo only: message validated, but not sent. You can copy the contents of the form manually.';}
 });
})();
