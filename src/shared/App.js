import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        {/* 주소에 path가 주어지지 않았을 때 기본적으로 보여주는 컴포넌트 설정 */}
        {/* exact -> path에 정해진 경로와 정확히 맞아떨어져야 렌더링 */}
        <Route exact path="/" component={Home} />
        {/* 매칭되는 첫 번째 라우트만 보여줌 */}
        <Switch>
          {/* name이라는 속성의 params가 설정된 /about 경로의 페이지 */}
          <Route path="/about/:name" component={About} />
          {/* /about 경로로 들어왔을 때 보여줄 페이지 */}
          <Route path="/about" component={About} />
        </Switch>

        {/* 라우트로 설정한 컴포넌트가 전달받는 props */}
        {/* history: push, replace 등을 통해 다른 경로로 이동하거나 앞, 뒤 페이지로 이동 */}
        {/* location: '현재 경로'에 대한 정보, URL 쿼리(/about?foo=bar 형식) 정보도 가짐 */}
        {/* match: 어떤 라우트에 '매칭' 되었는지에 대한 정보, params(/about/:name 형식) 정보도 가짐 */}
      </div>
    );
  }
}

export default App;
