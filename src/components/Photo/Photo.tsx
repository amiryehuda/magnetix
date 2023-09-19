import React from "react";
import { PhotoWrapper } from "./photo-style";

export interface PhotoProps {
  id: number;
  url: string;
}
const Photo: React.FC<PhotoProps> = ({ url, id }) => {
  return <PhotoWrapper src={url} alt={`photo ${id}`} />;
};

export default Photo;
