import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';

import './tasks.html';

Template.task.events({
  'click .toggle-checked'(event) {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'(event) {
    Meteor.call('tasks.remove', this._id);
  },
});
