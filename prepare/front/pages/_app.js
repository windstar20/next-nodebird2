import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from "next/Head";
//공통 CSS인 antd CSS를 넣음.

import wrapper from "../store/configureStore";

const App = ({Component}) => {
    //next-redux-wrapper는 provider 감싸줄 필요 없다.

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Node</title>
            </Head>
            <Component />
        </>

    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default wrapper.withRedux(App);