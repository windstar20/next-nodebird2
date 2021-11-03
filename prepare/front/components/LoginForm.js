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

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    //액션 => 디스패치
    const dispatch = useDispatch();
    const { logInLoading } = useSelector( (state) => state.user);

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        dispatch(loginRequestAction({email, password}));
        // setIsLoggedIn(true);
    }, [email, password]);

    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);

    // const style = useMemo(() => ({marginTop: 10}),[]);



    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password"
                       type="password"
                       value={password}
                       onChange={onChangePassword} required />
            </div>
            <ButtonWrapper >
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}

// LoginForm.propTypes =  {
//     setIsLoggedIn : PropTypes.func.isRequired
// }

export default LoginForm;