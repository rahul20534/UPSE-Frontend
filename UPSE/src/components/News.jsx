import React from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0;
  padding: 0;
  color: #fff;
  background: none;
`;

const Title = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  h1 {
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    margin: 0;
    line-height: 1.2;
    text-transform: none;
    letter-spacing: 0.01em;
  }
`;

const ContextSection = styled.div`
  margin-bottom: 32px;
`;

const ContextHeading = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #fff;
`;

const ContextContent = styled.div`
  background: #44474A;
  color: #BDBDBD;
  border-radius: 20px;
  padding: 18px 24px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
  line-height: 1.5;
`;

const KeyHighlights = styled.div`
  margin-top: 32px;
  color: #fff;
  font-size: 22px;
  font-weight: 500;
`;

const HighlightsList = styled.ul`
  margin: 18px 0 0 0;
  padding-left: 20px;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  li {
    margin-bottom: 16px;
    color: #fff;
    line-height: 1.6;
    a {
      color: #4A7AFF;
      text-decoration: underline;
    }
  }
`;

const News = () => {
  return (
    <NewsContainer>
      <Title>
        <h1>Practising equality in constitutional courts, Pg8</h1>
      </Title>
      <ContextSection>
        <ContextHeading>Context</ContextHeading>
        <ContextContent>
          The Supreme Court’s recent ruling in Jitender @ Kalla vs State (Govt.) of NCT Of Delhi (2025) revisited criteria for designating senior advocates, continuing a system that raises concerns about systemic inequality and elitism in India’s legal profession.
        </ContextContent>
      </ContextSection>
      <KeyHighlights>Key Highlights:</KeyHighlights>
      <HighlightsList>
        <li>Supreme Court upheld <a href="#">Section 16 of the Advocates Act, 1961</a>, maintaining the classification of senior advocates vs advocates.</li>
        <li>The Court found the point-based designation system subjective, but retained the existing application process with minor reforms.</li>
      </HighlightsList>
    </NewsContainer>
  );
};

export default News;
