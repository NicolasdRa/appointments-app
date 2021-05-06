import { CustomCard } from '../../../../components/ui/CustomCard/CustomCard';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

describe('tests on <CustomCard/>', () => {
  const key = '1';
  const doctor = {
    id: '0F8JIqi4zwvb77FGz6Wt',
    lastName: 'Fiedler',
    firstName: 'Heinz-Georg',
    email: 'heinz-georg.fiedler@example.com',
    title: 'mr',
    picture: 'https://randomuser.me/api/portraits/men/81.jpg',
  };
  const wrapper = shallow(
    <Provider store={store}>
      <CustomCard key={key} doctor={doctor} />
    </Provider>,
  );

  test('should render <CustomCard/> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
