import React, { FC } from 'react';
import styled from 'styled-components';

type FeedbackEditorProps = {
  selectedComponent: any;
};

const FeedbackEditorWrapper = styled.div`
  width: 25vw;
  height: 100vh;
  border: 1px solid black;
`;

const FeedbackEditor: FC<FeedbackEditorProps> = ({ selectedComponent }) => {
  if (!selectedComponent || !selectedComponent.renderSettings) {
    return null;
  }

  const ComponentSettings = selectedComponent.renderSettings;

  return (
    <FeedbackEditorWrapper>
      <ComponentSettings />
    </FeedbackEditorWrapper>
  );
};

export default FeedbackEditor;
