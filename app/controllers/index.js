import Ember from 'ember';

export default Ember.Controller.extend({
  message: Ember.computed.alias('model')
});
