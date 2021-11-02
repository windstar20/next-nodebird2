import React, {useCallback, useMemo} from 'react';
import {Button, Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import Link from 'next/link';
import styled from 'styled-components';
import useInput from "../hooks/useInput";
import {loginRequestAction} from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top : 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;


const LoginForm = () => {

    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    //액션 => 디스패치
    const dispatch = useDispatch();
    const { isLoggingIn } = useSelector( (state) => state.user);

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        dispatch(loginRequestAction({id, password}));
        // setIsLoggedIn(true);
    }, [id, password]);

    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);

    // const style = useMemo(() => ({marginTop: 10}),[]);



    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">아이디</label>
                <br />
                <Input name="user-password"
                       type="password"
                       value={password}
                       onChange={onChangePassword} required />
            </div>
            <ButtonWrapper >
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

// LoginForm.propTypes =  {
//     setIsLoggedIn : PropTypes.func.isRequired
// }

export default LoginForm;