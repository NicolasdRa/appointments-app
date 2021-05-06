import { ListingPage } from '../../../../components/pages/ListingPage/ListingPage';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

describe('tests on <ListingPage/>', () => {
  test('should render <ListingPage/> correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ListingPage />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
