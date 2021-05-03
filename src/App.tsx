import { AppRouter } from './components/router/AppRouter/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <AppRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
