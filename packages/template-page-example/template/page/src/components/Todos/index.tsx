import React from 'react';

export default function(props) {
  const { dataSources } = props;
  return (
    <div>
      {
        dataSources.map(function({ title }) {
          return (
            <div>
              <span>{title}</span>
            </div>
          );
        })
      }
    </div>
  );
}