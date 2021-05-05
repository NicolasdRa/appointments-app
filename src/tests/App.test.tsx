import App from '../App';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('tests on <App/>', () => {
  test('should render <App/> correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
