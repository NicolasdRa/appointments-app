import { DoctorPage } from '../../../../components/pages/DoctorPage/DoctorPage';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

describe('tests on <DoctorPage/>', () => {
  test('should render <DoctorPage/> correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <DoctorPage />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
