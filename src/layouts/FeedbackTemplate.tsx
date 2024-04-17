import React, { FC } from 'react';
import styled from 'styled-components';
import { SmileyRating } from '../widgets/SmileyRating';
import FeedbackElement from '../widgets/FeedbackElement';
import { SingleChoise } from '../widgets/SingleChoise';
import { TextInput } from '../widgets/TextInput';
import { MediaFile } from '../widgets/MediaFile';

type FeedbackTemplateProps = {
  onAddComponent: (type: string) => void;
};

const FeedBackElementsWrapper = styled.div`
  width: 25vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const FeedBackElementsContent = styled.div`
  width: 90%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FeedbackTemplate: FC<FeedbackTemplateProps> = ({ onAddComponent }) => {
  const feedbackElementsArr = [
    { id: 'smileyRating', component: SmileyRating },
    { id: 'singleChoise', component: SingleChoise },
    { id: 'textInput', component: TextInput },
    { id: 'mediaFile', component: MediaFile },
  ];

  return (
    <FeedBackElementsWrapper>
      <FeedBackElementsContent>
        {feedbackElementsArr.map((element: any) => (
          <FeedbackElement
            element={element.component}
            key={element.id}
            onClick={() => onAddComponent(element.component.type)}>
            {element.component.title}
          </FeedbackElement>
        ))}
      </FeedBackElementsContent>
    </FeedBackElementsWrapper>
  );
};

export default FeedbackTemplate;
