require.config({
  paths: {
    "jquery": "library/jquery/dist/jquery",
    "underscore": "library/underscore-amd/underscore",
    "backbone": "library/backbone-amd/backbone"
  }
});

require(['views/index'], function (IndexView) {
  new IndexView;
});