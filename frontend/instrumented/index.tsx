import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeaderBar from './components/HeaderBar';
import TodoPage from './pages/TodoPage';
import { MockServer } from './services/MockServer';
import { createServer, Response } from "miragejs"

const environment = process.env.NODE_ENV;

if (environment !== 'production') {
  MockServer({ environment });
}
// // @ts-ignore
// if (window.Cypress) {
//   // If your app makes requests to domains other than / (the current domain), add them
//   // here so that they are also proxied from your app to the handleFromCypress function.
//   // For example: let otherDomains = ["https://my-backend.herokuapp.com/"]
//   // @ts-ignore
//   let otherDomains = []
//   let methods = ["get", "put", "patch", "post", "delete"]

//   createServer({
//     environment: "test",
//     routes() {
//       // @ts-ignore
//       for (const domain of ["/", ...otherDomains]) {
//         for (const method of methods) {
//           // @ts-ignore
//           this[method](`${domain}*`, async (schema, request) => {
//             // @ts-ignore
//             let [status, headers, body] = await window.handleFromCypress(
//               request
//             )
//             return new Response(status, headers, body)
//           })
//         }
//       }

//       // If your central server has any calls to passthrough(), you'll need to duplicate them here
//       // this.passthrough('https://analytics.google.com')
//     },
//   })
// }
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HeaderBar />
        <div className="p-grid">
          <div className="p-col-3" />
          <div className="p-col-6">
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/todo" component={TodoPage}></Route>
            </Switch>
          </div>
          <div className="p-col-3" />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
