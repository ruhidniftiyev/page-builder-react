import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import styled from 'styled-components';

const FeedbackPageHeaderWrapper = styled.div`
  display: flex;
  background-color: #f5f5fa;
  height: 8%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eaeaed;
  gap: 10px;
`;

const FeedbackPageHeaderText = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const FeedbackPageHeader = () => {
  const [pageName, setPageName] = useState<string>('Page 1');

  return (
    <FeedbackPageHeaderWrapper>
      <FeedbackPageHeaderText>{pageName}</FeedbackPageHeaderText>
      <CiEdit style={{ color: '#006aff', cursor: 'pointer', fontSize: '20px' }} />
    </FeedbackPageHeaderWrapper>
  );
};

export default FeedbackPageHeader;
