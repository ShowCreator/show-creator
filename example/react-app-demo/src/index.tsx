import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const render = (props: Record<any, any> = {}) => {
  const { container } = props;
  const target = document.querySelector('#EIMOS-APPS-CONTAINER');
  console.log('target: ', target);

  let render = <div>222</div>;


  ReactDOM.render(render, container ? container.querySelector('#EIMOS-APPS-CONTAINER') : target);
};

render()