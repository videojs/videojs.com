let $ = window.jQuery;

function displayPlugin(plugin) {
  return `<div class="plugin panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">${plugin.name}</h3>
    </div>
    <div class="panel-body">
      <ul>
        <li>License: ${plugin.version}</li>
        <li>Downloads: ${plugin.downloads}</li>
      </ul>
      <p>${plugin.description}</p>
    </div>
  </div>`;
}

function displayPlugins(plugins) {
  let pluginContainerEl = $('#plugin-container');

  $.each(plugins, function(i, plugin) {
    let content = displayPlugin(plugin);

    pluginContainerEl.append(content);
  });
}

$(function() {
  $.getJSON('/registry/extensions.json', (plugins) => {
    displayPlugins(plugins);
  });
});
