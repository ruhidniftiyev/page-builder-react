import React, { FC } from 'react';
import { MediaFile } from '../widgets/MediaFile';
import { TextInput } from '../widgets/TextInput';
import { SingleChoise } from '../widgets/SingleChoise';
import { SmileyRating } from '../widgets/SmileyRating';
import styled from 'styled-components';

type FeedbackPageListProps = {
  components: any;
  onSelectComponent: (component: any) => void;
};

const FeedbackPageListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
`;

const ComponentToRenderElement = styled.div`
  width: 92%;
  height: 80px;
  display: flex;
  margin: 10px 0;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  border: 2px dashed #cdd5e1;
  justify-content: center;
  align-items: center;
`;

const FeedbackPageList: FC<FeedbackPageListProps> = ({ components, onSelectComponent }) => {
  const feedbackElementsMapping: any = {
    smileyRating: SmileyRating,
    singleChoise: SingleChoise,
    textInput: TextInput,
    mediaFile: MediaFile,
  };

  return (
    <FeedbackPageListWrapper>
      {components.map((field: any) => {
        const ComponentToRender = feedbackElementsMapping[field.type].render;
        if (!ComponentToRender) {
          return <p>Component not found!</p>;
        }
        return (
          <ComponentToRenderElement
            onClick={() => onSelectComponent(feedbackElementsMapping[field.type])}>
            <ComponentToRender {...field.props} />
          </ComponentToRenderElement>
        );
      })}
    </FeedbackPageListWrapper>
  );
};

export default FeedbackPageList;
