/**
 * @format
 */
import React from 'react';
import Enzyme,{shallow,mount} from 'enzyme';

// Note: test renderer must be required after react-native.
import ImageList from '../src/components/ImageList';

import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../App';
 
const middlewares = []
const mockStore = configureStore(middlewares)
Enzyme.configure({ adapter: new Adapter() });
const initialProps = {
    imageCount:10,
    images:[],
    length:0,
}

const store = mockStore({
  images: [],
  first: 0,
  second: 0,  
});

describe('renders correctly', () => {
  const setUpFn = props => {
    return mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setUpFn();
  });
const container = shallow(<ImageList {...initialProps} />);

const flatList = wrapper.find('FlatList');

const item = flatList.renderProp('renderItem')({ item: yourData });
expect(item).toMatchSnapshot();
});
