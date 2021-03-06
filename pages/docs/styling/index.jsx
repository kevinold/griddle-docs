import React from 'react';
import DocumentTitle from 'react-document-title';
import Markdown from 'utils/markdown';

import Griddle from 'griddle-react';
import { DefaultModules } from 'griddle-render';
import { getBasicData } from 'utils/data';

import intro from './_intro.md';
import icons from './_icons.md';

const Ascending = React.createClass({
  render() {
    return <span style={{backgroundColor: "#FF00AA"}}>(asc)</span>
  }
});

const Descending = React.createClass({
  render() {
    return <span style={{backgroundColor: "#AA00FF"}}>(desc)</span>
  }
});

module.exports = React.createClass({
  statics: {
    metadata: function() {
      return {
        order: 4,
        title: "Styling"
      }
    }
  },

  render() {
    const data = getBasicData();

    return (
      <DocumentTitle title={`${module.exports.metadata().title} | ${this.props.config.siteTitle}`}>
        <div>
          <h1>{module.exports.metadata().title}</h1>
          <Markdown {...intro} />
        </div>
      </DocumentTitle>
    );
  }
})
