import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

// App.js를 BrowserRouter를 적용하기 위한 컴포넌트
// Redux를 사용할 때 여기서 Provider로 연결시킴
const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
