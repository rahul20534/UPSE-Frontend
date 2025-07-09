import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Tags from './Tags.jsx';

const TopicsData = [
  { title: 'Science & Tech', tags: ['GS2', 'GS1', 'Prelims'] },
  { title: 'Geography', tags: ['GS2', 'Prelims'] },
  { title: 'Geopolitics', tags: ['GS2', 'Prelims'] },
  { title: 'History', tags: ['GS2', 'Prelims'] },
  { title: 'Others', tags: ['GS2', 'Prelims'] },
];

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 220px;
  gap: 12px;
`;

const TopicsLabel = styled.p`
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #A8A8A8;
  margin: 0;
`;

const SidebarCard = styled.div`
  background: rgba(255, 255, 255, 0.102);
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TopicList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const TopicItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;


const TopicsDataRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TopicsTitle = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Topics = () => {
  const [selected, setSelected] = useState(2);
  return (
    <SidebarWrapper>
      <TopicsLabel>Topics</TopicsLabel>
      <SidebarCard>
        <TopicList>
          {TopicsData.map((item, index1) => (
            <TopicItem
              key={index1}
              selected={selected === index1}
              onClick={() => setSelected(index1)}
            >
                <TopicsDataRow>
                  {item.tags.map((i, index2) => (
                    <Tags key={index2} value={i} />
                  ))}
                </TopicsDataRow>
                <TopicsTitle selected={selected === index1}>{item.title}</TopicsTitle>
            </TopicItem>
          ))}
        </TopicList>
      </SidebarCard>
    </SidebarWrapper>
  );
};

export default Topics;
