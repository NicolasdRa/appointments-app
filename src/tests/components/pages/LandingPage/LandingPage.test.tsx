import { LandingPage } from '../../../../components/pages/LandingPage/LandingPage';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('tests on <LandingPage/>', () => {
  test('should render <LandingPage/> correctly', () => {
    const wrapper = shallow(<LandingPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
