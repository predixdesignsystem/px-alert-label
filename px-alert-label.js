/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**

### Usage

    <px-alert-label type="important" label="Oops!"></px-alert-label>
    <px-alert-label type="warning" label="2" badge="true"></px-alert-label>

### Styling
The following custom properties are available for styling:

Custom property | Description
:----------------|:-------------
`--px-alert-label-border-color` | Border or outline color for all labels
`--px-alert-label-border-width` | Border or outline width for all labels
`--px-alert-label-background-color--alert` | Background color for 'alert' type labels
`--px-alert-label-text-color--alert` | Text color for 'alert' type labels
`--px-alert-label-background-color--warning` | Background color for 'warning' type labels
`--px-alert-label-text-color--warning` | Text color for 'warning' type labels
`--px-alert-label-background-color--error` | Background color for 'error' type labels
`--px-alert-label-text-color--error` | Text color for 'error' type labels
`--px-alert-label-background-color--information` | Background color for 'information' type labels
`--px-alert-label-text-color--information` | Text color for 'information' type labels
`--px-alert-label-background-color--healthy` | Background color for 'healthy' type labels
`--px-alert-label-text-color--healthy` | Text color for 'healthy' type labels
`--px-alert-label-background-color--unknown` | Background color for 'unknown' type labels
`--px-alert-label-text-color--unknown` | Text color for 'unknown' type labels

@element px-alert-label
@blurb renders an alert label
@homepage index.html
@demo demo.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './css/px-alert-label-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-alert-label-styles"></style>

    <span class\$="alertlabel {{type}} {{_badge}}">
      <template is="dom-if" if="{{badge}}">
        <template is="dom-if" if="{{!_isCircle(type)}}">
          <svg class="svg-canvas" viewBox="0 0 33 33">
            <polygon id="polygon" points\$="{{_getPoints(type)}}"></polygon>
          </svg>
        </template>
        <template is="dom-if" if="{{_isCircle(type)}}">
          <svg class="svg-canvas" viewBox="0 0 33 33">
            <circle id="circle" cx="16" cy="16" r="15"></circle>
          </svg>
        </template>
      </template>
      <div class="label">
        <span class="label__text">{{label}}</span>
      </div>
    </span>
`,

  is: 'px-alert-label',

  properties: {
    /**
     * The type of alert label defines the visual styling.
     * Should be one of important, warning, error, information, healthy, or unknown.
     */
    type: String,

    /**
     * The text to display inside of the label. When the 'badge' configuration is used,
     * only one digit should be used for the label to indicate severity.
     */
    label: String,

    /**
     * If set to true, the label will appear as a triangle, diamond, square, pentagon, or circle
     * to indicate the severity of an alert, for instance.
     */
    badge: {
      type: Boolean,
      value: false
    },

    _badge: {
      type: String,
      computed: '_getBadgeString(badge)'
    }
  },

  _getBadgeString: function(badge) {
    return badge ? 'badge' : '';
  },

  _getPoints: function(type) {
    if(type === 'important') {
      return '16.5,3 32,30 1,30';
    }
    else if(type === 'warning') {
      return '16,0.5 32.5,16 16,32.5, 0.5,16';
    }
    else if(type === 'info' || type === 'information') {
      return '6.6,32.5 26.4,32.5 32.5,13 16,0.5 0.5,13';
    }
    else {
      return '3,3 3,30 30,30 30,3';
    }
  },

  _isCircle: function(type) {
    return type === 'unknown';
  }
});