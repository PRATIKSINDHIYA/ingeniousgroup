/**
 * Ingenious Group — booking & contact form → Brevo via /api/booking
 */
(function () {
  const API_URL = '/api/booking';

  const SERVICE_OPTIONS = [
    { value: '', label: 'Select a service' },
    { value: 'Free demo / strategy call', label: 'Free demo / strategy call' },
    { value: 'Social Media Marketing & Meta Ads & PPC', label: 'Social Media Marketing & Meta Ads & PPC' },
    { value: 'Branding & Identity', label: 'Branding & Identity' },
    { value: 'SEO & Analytics', label: 'SEO & Analytics' },
    { value: 'Content Creation', label: 'Content Creation' },
    { value: 'Website Development', label: 'Website Development' },
    { value: 'Multiple services', label: 'Multiple services' },
  ];

  function getStatusEl(form) {
    let el = form.querySelector('.ig-form-status');
    if (!el) {
      el = document.createElement('p');
      el.className = 'ig-form-status';
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      form.appendChild(el);
    }
    return el;
  }

  function setStatus(form, message, type) {
    const el = getStatusEl(form);
    el.textContent = message;
    el.className = 'ig-form-status' + (type ? ' ig-form-status--' + type : '');
  }

  function getPayload(form) {
    return {
      name: form.elements.name?.value?.trim(),
      email: form.elements.email?.value?.trim(),
      mobile: form.elements.mobile?.value?.trim(),
      company: form.elements.company?.value?.trim() || '',
      service: form.elements.service?.value || '',
      message: form.elements.message?.value?.trim() || '',
      formType: form.dataset.formType || 'booking',
    };
  }

  function validate(payload, requireService) {
    if (!payload.name || !payload.email || !payload.mobile) {
      return 'Please fill name, email, and mobile number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return 'Please enter a valid email address.';
    }
    if (requireService && !payload.service) {
      return 'Please select a service.';
    }
    if (!payload.message) {
      return 'Please add project details or a short message.';
    }
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const submitBtn = form.querySelector('[type="submit"]');
    const requireService = form.dataset.requireService === 'true';
    const payload = getPayload(form);
    const err = validate(payload, requireService);

    if (err) {
      setStatus(form, err, 'error');
      return;
    }

    setStatus(form, 'Sending…', 'loading');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(function () {
        return {};
      });

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus(
        form,
        'Thank you! Booking confirmed. Check your email — ham jaldi aap se reach out karenge.',
        'success'
      );
      form.reset();
    } catch (error) {
      setStatus(
        form,
        error.message ||
          'Could not send online. Message us on WhatsApp: +91 63538 51656',
        'error'
      );
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  }

  document.querySelectorAll('.ig-lead-form').forEach(function (form) {
    form.addEventListener('submit', handleSubmit);
  });
})();
