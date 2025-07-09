import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Topicsbutton from '../Topics-Button/TopicsButton.jsx';

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
  margin-top: 24px;
`;

const TopicsLabel = styled.div`
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #A8A8A8;
  margin-bottom: 18px;
  margin-left: 8px;
`;

const SidebarCard = styled.div`
  background: #232325;
  border-radius: 16px;
  box-shadow: 0 2px 8px 0 #00000022;
  padding: 28px 0 28px 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TopicList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopicItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  background: none;
  position: relative;
  margin-bottom: 2px;
  ${({ selected }) =>
    selected &&
    css`
      background: none;
    `}
`;

const OrangeBar = styled.div`
  width: 4px;
  height: 32px;
  background: #FF7A00;
  border-radius: 2px;
  margin-right: 16px;
  margin-left: 0;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const TopicsDataRow = styled.div`
  display: flex;
  align-items: center;
  height: 19px;
  margin-bottom: 2px;
`;

const TopicsTitle = styled.div`
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  color: ${({ selected }) => (selected ? '#fff' : '#fff')};
  margin-left: 0;
  letter-spacing: 0.01em;
`;

const Topics = () => {
  // For demo, select Geopolitics (index 2)
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
              <OrangeBar show={selected === index1} />
              <div style={{ flex: 1 }}>
                <TopicsDataRow>
                  {item.tags.map((i, index2) => (
                    <Topicsbutton key={index2} value={i} />
                  ))}
                </TopicsDataRow>
                <TopicsTitle selected={selected === index1}>{item.title}</TopicsTitle>
              </div>
            </TopicItem>
          ))}
        </TopicList>
      </SidebarCard>
    </SidebarWrapper>
  );
};

export default Topics;
