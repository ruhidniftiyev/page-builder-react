import React, { FC } from 'react';
import { SingleChoise } from '../widgets/SingleChoise';
import { TextInput } from '../widgets/TextInput';
import { SmileyRating } from '../widgets/SmileyRating';
import { MediaFile } from '../widgets/MediaFile';
import FeedbackPageFooter from '../components/FeedbackPageFooter';
import styled from 'styled-components';
import FeedbackPageHeader from '../components/FeedbackPageHeader';
import FeedbackPageLogo from '../components/FeedBackPageLogo';
import FeedbackPageList from '../components/FeedbackPageList';

type FeedbackPreviewProps = {
  components: any;
  reference: any;
  onSelectComponent: (component: any) => void;
};

const FeedbackPreviewWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #f5f5fa;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedbackScreen = styled.div`
  width: 70%;
  height: 90%;
  background-color: white;
  border: 15px solid black;
  border-radius: 30px;
`;

const FeedbackPreviewMain = styled.div`
  height: 84%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeedbackPageDropZone = styled.div`
  border: 2px dashed #cdd5e1;
  margin: 20px 0;
  color: #cdd5e1;
  height: 80px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedbackPageSubmit = styled.button`
  height: 32px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: #0078ff;
  color: white;
`;

const FeedbackPreview: FC<FeedbackPreviewProps> = ({
  components,
  reference,
  onSelectComponent,
}) => {
  return (
    <FeedbackPreviewWrapper>
      <FeedbackScreen ref={reference}>
        <FeedbackPageHeader />
        <FeedbackPreviewMain>
          <FeedbackPageLogo />
          {components.length ? (
            <FeedbackPageList components={components} onSelectComponent={onSelectComponent} />
          ) : (
            <FeedbackPageDropZone>Drag and drop a question here</FeedbackPageDropZone>
          )}
          <FeedbackPageSubmit>Submit</FeedbackPageSubmit>
        </FeedbackPreviewMain>
        <FeedbackPageFooter />
      </FeedbackScreen>
    </FeedbackPreviewWrapper>
  );
};

export default FeedbackPreview;
