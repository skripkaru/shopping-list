import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import { store } from './store'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --black: #000000;
    --white: #ffffff;
    --gray-900: hsl(0, 0%, 10%);
    --gray-800: hsl(0, 0%, 20%);
    --gray-700: hsl(0, 0%, 30%);
    --gray-600: hsl(0, 0%, 40%);
    --gray-500: hsl(0, 0%, 50%);
    --gray-400: hsl(0, 0%, 60%);
    --gray-300: hsl(0, 0%, 70%);
    --gray-200: hsl(0, 0%, 80%);
    --gray-100: hsl(0, 0%, 90%);


    --radius: 10px;
    --transition: 0.3s ease-in-out;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
