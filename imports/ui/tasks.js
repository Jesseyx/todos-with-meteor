import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks';

import './tasks.html';

Template.task.events({
  'click .toggle-checked'(event) {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'(event) {
    Tasks.remove(this._id);
  },
});
