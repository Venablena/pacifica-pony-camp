(function () {
  // ← Replace with your real PayPal.Me link or donate button URL
  var PAYPAL_URL = 'https://www.paypal.me/rescueponyclub';

  var backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML =
    '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="donateModalTitle">' +
      '<button class="modal-close" id="donateModalClose" aria-label="Close">✕</button>' +
      '<div style="font-size:2.6rem;margin-bottom:.5rem;">🐴</div>' +
      '<h2 id="donateModalTitle">Support Rescue Pony Club</h2>' +
      '<p>Your gift helps cover the cost of feeding and caring for rescue ponies.</p>' +
      '<a class="btn btn-paypal" href="' + PAYPAL_URL + '" target="_blank" rel="noopener">Donate via PayPal</a>' +
      '<p class="modal-footer-note">Questions? Call Annie: <a href="tel:4152613433">415-261-3433</a></p>' +
    '</div>';

  function openDonateModal() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDonateModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function init() {
    document.body.appendChild(backdrop);

    document.getElementById('donateModalClose').addEventListener('click', closeDonateModal);
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeDonateModal();
    });

    document.querySelectorAll('a[href="donations.html"]').forEach(function (link) {
      link.href = '#';
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openDonateModal();
      });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDonateModal();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.openDonateModal = openDonateModal;
})();
