import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from "next/Head";
//공통 CSS인 antd CSS를 넣음.

const App = ({Component}) => {
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

export default App;