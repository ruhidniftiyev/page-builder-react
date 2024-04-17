import { VscSmiley } from 'react-icons/vsc';
import { iconStyle } from '../models/IconStyle';
import { PiSmileyMehLight } from 'react-icons/pi';
import { PiSmileySadLight } from 'react-icons/pi';
import { PiSmiley } from 'react-icons/pi';
import { PiSmileyAngryBold } from 'react-icons/pi';
import { GoSmiley } from 'react-icons/go';
import styled from 'styled-components';

const SmileyRatingWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  border-left: 2px solid #0078ff;
  justify-content: space-around;
  font-size: 60px;
  font-weight: 500;
`;

const smiles = [
  { icon: <PiSmiley /> },
  { icon: <GoSmiley /> },
  { icon: <PiSmileyMehLight /> },
  { icon: <PiSmileySadLight /> },
  { icon: <PiSmileyAngryBold /> },
];

export const SmileyRating = {
  title: 'Smiley Rating',
  type: 'smileyRating',
  icon: <VscSmiley style={iconStyle} />,
  renderSettings: function () {
    return (
      <div>
        <p>Smiley Rating Settings</p>
      </div>
    );
  },
  render: function () {
    return <SmileyRatingWrapper>{smiles.map((smile) => smile.icon)}</SmileyRatingWrapper>;
  },
};
