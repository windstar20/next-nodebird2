import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from 'styled-components';
import {useSelector} from "react-redux";

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    //리듀서에 있는 initialState를 가져옴. isLoggedIn이 바뀌면 리렌더됨.
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
      <div>
        {/*<div>공통메뉴</div>*/}
        <Menu mode="horizontal">
        <Menu.Item>
            <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item>
            <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>

        <Menu.Item>
            <SearchInput enterButton />
        </Menu.Item>

        <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6} >
                {/*{isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}*/}
                {isLoggedIn ? <UserProfile/> : <LoginForm/>}
            </Col>
            <Col xs={24} md={12} >
                {children}
            </Col>
            <Col xs={24} md={6} >
                <a href="https://bestimage-dev.irm.kr" target="_blank" rel="noreferrer noopener">BestImage</a>
            </Col>
        </Row>
      </div>
  )
}

AppLayout.propTypes = {
  children : PropTypes.node.isRequired,  //react의 노드
}

export default AppLayout;