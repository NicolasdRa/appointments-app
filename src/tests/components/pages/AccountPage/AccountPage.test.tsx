import { AccountPage } from '../../../../components/pages/AccountPage/AccountPage';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

describe('tests on <AccountPage/>', () => {
  test('should render <AccountPage/> correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AccountPage />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
