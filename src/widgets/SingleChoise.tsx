import { RiRadioButtonLine } from 'react-icons/ri';
import { iconStyle } from '../models/IconStyle';

export const SingleChoise = {
  title: 'Single Choise',
  type: 'singleChoise',
  icon: <RiRadioButtonLine style={iconStyle} />,
  renderSettings: function () {
    return (
      <div>
        <p>Single Choise Settings</p>
      </div>
    );
  },
  render: function () {
    return <p>Single Choise</p>;
  },
};
