define(['backbone', 'jquery', 'models/index'], function (Backbone, $, Model) {

  var model = new Model;
  
  var view = Backbone.View.extend({
  
    el: "#orders",
	template: _.template($("#ordersTmpl").html()),
    initialize: function () {
      model.on("getOrdersSuccess", function () {
        this.render();
      }, this)
      model.on("processSuccess", function (id) {
        $("#status").text("Process is added with id = " + id).stop(true).fadeIn(300).fadeOut(2000);
      }, this)
    },
    render: function () {
      $('#orders').html(this.template({orders:model.orders}));
	  $('#orders button').click(function (e) {
        model.process($(e.target).data("id"));
      });
    }
  });

  return view;
});
