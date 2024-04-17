import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import { PiDotsSixBold } from 'react-icons/pi';
import styled from 'styled-components';

type FeedbackElementProps = {
  children: string;
  element: any;
  onClick?: () => void;
};

const FeedbackElementTemplate = styled.div`
  border: 1px solid darkgray;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100px;
`;

const FeedBackElementText = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 5px 0;
`;

const FeedbackElement: FC<FeedbackElementProps> = ({ children, onClick, element }) => {
  const [, drag] = useDrag({
    type: 'element',
    item: { element },
  });

  return (
    <FeedbackElementTemplate ref={drag} onClick={onClick}>
      {element?.icon}
      <FeedBackElementText>{children}</FeedBackElementText>
      <PiDotsSixBold />
    </FeedbackElementTemplate>
  );
};

export default FeedbackElement;
