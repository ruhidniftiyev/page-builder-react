import { LuTextCursorInput } from 'react-icons/lu';
import { iconStyle } from '../models/IconStyle';

export const TextInput = {
  title: 'Text Input',
  type: 'textInput',
  icon: <LuTextCursorInput style={iconStyle} />,
  renderSettings: function () {
    return (
      <div>
        <p>Text Input Settings</p>
      </div>
    );
  },
  render: function () {
    return <input />;
  },
};
