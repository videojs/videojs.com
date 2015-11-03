let $ = window.jQuery;

function displayPlugin(plugin) {
  console.log(plugin);
  return `<div class="plugin panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">
        <a href="https://npmjs.org/package/${plugin.name}" parent="_blank">${plugin.name}</a>
        <span class="pull-right"><i class="fa fa-tag"></i> ${plugin.version}</span>
        <span class="pull-right"><i class="fa fa-download"></i> ${plugin.downloads}</span>
      </h3>
    </div>
    <div class="panel-body">
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
  $.getJSON('https://s3-us-west-2.amazonaws.com/vjs-extensions/extensions.json', (plugins) => {
    displayPlugins(plugins);
  });
});
