import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';

const MyComponent = () => {
  return (
    <View className="wrap">
      <Text>Hello World!</Text>
    </View>
  );
};

export default MyComponent;
