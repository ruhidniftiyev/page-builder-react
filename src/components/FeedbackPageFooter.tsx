import React from 'react';
import qmeterLogo from '../images/qmeterLogo.png';
import styled from 'styled-components';

const FeedbackPageFooterWrapper = styled.div`
  display: flex;
  height: 8%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eaeaed;
  gap: 10px;
`;

const FeedbackPageFooterImage = styled.img`
  width: 60px;
  height: 15px;
`;

const FeedbackPageFooterText = styled.span`
  color: #cdd5e1;
  font-size: 14px;
  font-weight: 500;
`;

const FeedbackPageFooter = () => {
  return (
    <FeedbackPageFooterWrapper>
      <FeedbackPageFooterText>Powered by</FeedbackPageFooterText>
      <FeedbackPageFooterImage src={qmeterLogo} alt="Qmeter logo" />
    </FeedbackPageFooterWrapper>
  );
};

export default FeedbackPageFooter;
