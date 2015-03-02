import Ember from 'ember';

export default Ember.Component.extend({

  // Custom properties passed into this component
  customId: null,
  customPlaceholder: null,
  customLabel: null,

  website: null,
  name: null,
  email: null,

  hasCustom: function() {
    var label = this.get('customLabel');
    var placeholder = this.get('customPlaceholder');
    var id = this.get('customId');

    return (label && placeholder && id);
  }.property('customId', 'customPlaceholder', 'customLabel'),

  isEditing: false,

  keyPress: function(event) {
    if (event.keyCode === 13) {
      this.send('saveForm');
    }
  },

  emailIsValid: function() {
    return /.+@.+\..+/.test(this.get('email'));
  }.property('email'),

  errorMessage: null,

  actions: {
    editForm: function() {
      this.set('isEditing', true);
    },
    saveForm: function() {
      if (this.get('emailIsValid')) {
        this.set('isEditing', false);
        this.set('errorMessage', null);
      } else {
        this.set('errorMessage', 'Your email is not valid');
      }

    },
    cancelSave: function() {
      this.set('isEditing', false);
      this.setProperties({
        website: null,
        name: null,
        email: null,
      });
    }
  }
});
