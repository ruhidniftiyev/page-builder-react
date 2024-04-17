import React, { useState } from 'react';
import FeedbackTemplate from '../layouts/FeedbackTemplate';
import FeedbackPreview from '../layouts/FeedbackPreview';
import FeedbackEditor from '../layouts/FeedbackEditor';
import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

type Props = {};

const HomeWrapper = styled.div`
  display: flex;
`;

const Home = (props: Props) => {
  const [feedbackComponents, setFeedbackComponents] = useState<any>([]);
  const [selectedComponent, setSelectedComponent] = useState([]);

  const handleAddComponent = (componentType: any) => {
    const newComponent = {
      type: componentType,
      id: uuid4(),
      props: {},
    };
    setFeedbackComponents([...feedbackComponents, newComponent]);
  };

  const [, drop] = useDrop({
    accept: 'element',
    drop: (item: any) => {
      handleAddComponent(item.element.type);
      handleSelectComponent(item.element);
    },
  });

  const handleSelectComponent = (component: any) => {
    setSelectedComponent(component);
  };

  return (
    <HomeWrapper>
      <FeedbackTemplate onAddComponent={handleAddComponent} />
      <FeedbackPreview
        reference={drop}
        onSelectComponent={handleSelectComponent}
        components={feedbackComponents}
      />
      <FeedbackEditor selectedComponent={selectedComponent} />
    </HomeWrapper>
  );
};

export default Home;
