(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var $ = window.jQuery;

function displayPlugin(plugin) {
  console.log(plugin);
  return '<div class="plugin panel panel-default">\n    <div class="panel-heading">\n      <h3 class="panel-title">\n        <a href="https://npmjs.org/package/' + plugin.name + '" parent="_blank">' + plugin.name + '</a>\n        <span class="pull-right"><i class="fa fa-tag"></i> ' + plugin.version + '</span>\n        <span class="pull-right"><i class="fa fa-download"></i> ' + plugin.downloads + '</span>\n      </h3>\n    </div>\n    <div class="panel-body">\n      <p>' + plugin.description + '</p>\n    </div>\n  </div>';
}

function displayPlugins(plugins) {
  var pluginContainerEl = $('#plugin-container');

  $.each(plugins, function (i, plugin) {
    var content = displayPlugin(plugin);

    pluginContainerEl.append(content);
  });
}

$(function () {
  $.getJSON('https://s3-us-west-2.amazonaws.com/videojs-extensions/extensions.json', function (plugins) {
    displayPlugins(plugins);
  });
});

},{}]},{},[1]);
