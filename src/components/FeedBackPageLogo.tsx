import React, { useState } from 'react';
import styled from 'styled-components';

const FeedBackPageLogoWrapper = styled.div`
  padding: 30px;
`;

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label`
  background-color: white;
  border: 1px solid lightgray;
  color: black;
  padding: 8px 15px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  cursor: pointer;
`;

const FeedbackPageLogoText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const FeedbackPageLogoImage = styled.img`
  width: 30%;
`;

const FeedbackPageLogo: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FeedBackPageLogoWrapper>
      {selectedImage ? (
        <div>
          <FeedbackPageLogoImage src={selectedImage} alt="logo" style={{ maxWidth: '100%' }} />
        </div>
      ) : (
        <>
          <FeedbackPageLogoText>Survey logo</FeedbackPageLogoText>
          <Label htmlFor="file-input">Browse</Label>
          <FileInput id="file-input" type="file" accept="image/*" onChange={handleImageChange} />
        </>
      )}
    </FeedBackPageLogoWrapper>
  );
};

export default FeedbackPageLogo;
