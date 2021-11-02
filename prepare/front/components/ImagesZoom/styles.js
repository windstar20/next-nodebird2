import styled, {createGlobalStyle} from "styled-components";
import {CloseOutlined} from "@ant-design/icons";

export const Overlay = styled.div`
    position: fixed;
    z-index: 5000;
    top:0;left:0;right:0;bottom:0;
`;
//함수 호출 방법
export const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;
// & h1 의미: Header 자식의 h1 태그 지칭(h1을 컴포넌트화 시키지 않아도 됨)

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

export const SlickWrapper = styled.div`
      height: calc(100% - 44px);
      background: #090909;
`;

export const ImgWrapper = styled.div`
    padding: 32px;
    text-align: center;
    
    & img {
    margin: 0 auto;
    max-height: 750px;
    }
`;

export const Indicator = styled.div`
    text-align: center;
    
    & > div {
        width: 75px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background: #313131;
        display: inline-block;
        text-align: center;
        color: white;
        font-size: 15px;
    }
`;
// slick에 이미 정의된 클래스네임에 사용자가 정의한 스타일로 덮어쓰게 함.
// ant-card-cover: transform 과 position: fixed 같이 쓸 때.
export const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }
  .ant-card-cover {
    transform: none !important;
  }
`;
// antd의 버전 오류, transform을 해제함. browser의 오류: transform과 fix 같이 사용할 경우 에러