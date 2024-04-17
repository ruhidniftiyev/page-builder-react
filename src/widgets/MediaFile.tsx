import { HiOutlinePhotograph } from 'react-icons/hi';
import { iconStyle } from '../models/IconStyle';

export const MediaFile = {
  title: 'Media File',
  type: 'mediaFile',
  icon: <HiOutlinePhotograph style={iconStyle} />,
  renderSettings: function () {
    return (
      <div>
        <p>Media File Settings</p>
      </div>
    );
  },
  render: function () {
    return <p>Media File</p>;
  },
};
