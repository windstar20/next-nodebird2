import React, {useState} from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const AppLayout = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
        </Menu.Item>

        <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6} > 왼쪽메뉴
                {isLoggedIn ? <UserProfile /> : <LoginForm />}
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