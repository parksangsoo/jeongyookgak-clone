import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { type, src, size, width } = props;

  const styles = {
    src: src,
    size: size,
    width: width,
  };
  if (type === "default") {
    return <DefaultImage {...styles} src={src} />;
  }
  return (
    <AspectOutter>
      <AspectInner {...styles}></AspectInner>
    </AspectOutter>
  );
};

Image.defaultProps = {
  width: "100%",
  shape: "circle",
  src: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  size: 36,
};

const AspectOutter = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : "")}
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-repeat:no-repeat;
  background-position: center;
  ${(props) => (props.size ? `background-size: ${props.size};` : "")}
`;

const DefaultImage = styled.img`
  ${(props) => (props.width ? `width: ${props.width};` : "100%")}
  object-fit: cover;
`;

export default Image;
