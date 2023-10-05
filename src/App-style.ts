import styled from "styled-components";

export const AppLayout = styled.div`
  width: 100%;
  padding: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentArea = styled.div`
  border-top: 1px solid lightgray;
  width: 100%;
  height: 100%;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled.div`
  height: 100%;
  border-right: 1px solid lightgrey;
`;

export const InputSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 40px 24px 0px 24px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

export const PhotosSide = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 18px;
`;

export const AllPhotos = styled.div`
  width: 576px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* align-content: space-around; */
  gap: 16px;
`;
