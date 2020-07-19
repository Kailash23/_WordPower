import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Check = (props) => {
  return (
    <Svg viewBox="0 0 100 99.313" {...props}>
      <Path
        d="M35.506 86.242c-.386 0-.757-.153-1.03-.427L.427 51.771a1.456 1.456 0 012.059-2.06l32.959 32.955 62.012-69.458a1.458 1.458 0 012.174 1.94L36.593 85.754a1.456 1.456 0 01-1.046.486c-.013.002-.028.002-.041.002z"
        fill={props.color || '#FFF'}
      />
    </Svg>
  );
};

export default Check;
