document.addEventListener('DOMContentLoaded', initSOL);

function initSOL() {
  document.getElementById("SOL-automaticLoadingSwitch").addEventListener("change", saveOptions);
  document.getElementById("SOL-devUc").addEventListener("keyup", saveOptions);
  restore_options();

  function saveOptions() {
    var active = document.getElementById('SOL-automaticLoadingSwitch').checked;
    var uc = document.getElementById("SOL-devUc").value;
    console.log('saving options - active: ' + active + ' uc: ' + uc);
    chrome.storage.sync.set({
      active: active,
      uc: uc
    });
  }

  function restore_options() {
    console.log('restoring');
    chrome.storage.sync.get({
      active: false,
      uc: ''
    }, function(options) {
      console.log('restoring options:' + JSON.stringify(options));
      document.getElementById('SOL-automaticLoadingSwitch').checked = options.active;
      document.getElementById("SOL-devUc").value = options.uc;
    });
  }
}
