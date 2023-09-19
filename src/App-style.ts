import styled from "styled-components";

export const AppLayout = styled.div`
  width: 100%;
  padding: 0px 40px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const ContentArea = styled.div`
  width: 100%;
  height: 526px;
  padding: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  /* padding-top: 60px; */
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const PhotosSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const AllPhotos = styled.div`
  width: 526px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
  gap: 16px;
`;
