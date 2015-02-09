define(['backbone', 'jquery'], function (Backbone, $) {

  var model = Backbone.Model.extend({
    orders: {},
    getOrders: function () {
      var ref = this;
      $.get('api/orders', {
        r: Math.random()
        },
		function (data) {
		  ref.orders = data;
		  ref.trigger("getOrdersSuccess");
        }
      );
    },
    process: function (id) {
      var ref = this;
      $.post('api/process/:' + id,
        {},
        function (data) {
          if (data.status)
            ref.trigger("processSuccess", data.id);
          else
            ref.trigger("processError");
        }
      );
    },
    initialize: function () {
      _.extend(this, Backbone.Events);
      this.getOrders();
    },
  });
  
  return model;
});
