chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      chrome.storage.sync.get({
        active: false,
        uc: ''
      }, function(options) {
        if (options.active) {
          var scriptContent = "require('" + options.uc + "', function(Uc) {Uc.carga($('#' + simulador.CONSTANTES.ID_CONTENEDOR_PRINCIPAL));});";

          var script = document.createElement('script');
          script.id = 'ucLoader';
          script.appendChild(document.createTextNode(scriptContent));
          (document.body || document.head || document.documentElement).appendChild(script);
        }
      });
      // ----------------------------------------------------------

    }
  }, 10);
});
