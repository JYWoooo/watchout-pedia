import React, {ReactNode} from "react";
import ReactSlick, { Settings } from "react-slick"
import styled from "@emotion/styled";
import { css } from '@emotion/react';
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';

const ArrowButton = styled.button<{ pos?: 'left' | 'right'}>`
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #fff;
  ${({ pos }) => pos === 'left' ? css `left: 0; transform: translate(-50%, -50%)` : css `right: 0; transform: translate(50%, -50%)` }
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    color: #222;
  }
`;

const DEFAULT_SETTINGS: Settings = {
  dots: false, //하단 도트
  arrows: true, //좌우 움직이는 화살표
  infinite: false, //슬라이더 반복
  speed: 500, //auto speed
  slidesToShow: 5, //슬라이드 당 표시될 화면의 개수
  slidesToScroll: 5, //슬라이드 할 때마다 표시되는 슬라이드 수
  swipe: true,
  draggable: true,
  prevArrow: (
    <ArrowButton pos="left">
      <MdArrowBackIos />
    </ArrowButton>
  ),
  nextArrow: (
    <ArrowButton pos="right">
      <MdArrowForwardIos />
    </ArrowButton>
  )
}

interface Props {
  settings?: Settings;
  children?: ReactNode | ReactNode[];
}

const Slider: React.FC<Props> = ({settings = DEFAULT_SETTINGS, children}) => {
  return(
    <ReactSlick {...settings}>
      {children}
    </ReactSlick>
  )
}

export default Slider;