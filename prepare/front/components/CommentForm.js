import React, {useCallback} from 'react';
import Proptypes from 'prop-types';
import {Button, Form, Input} from "antd";
import useInput from "../hooks/useInput";
import {useSelector} from "react-redux";

// 게시글의 id 를 넘겨받기 위해 props로 post를 넘겨 받음
const CommentForm = ({post}) => {

    const id = useSelector( state => state.user.me?.id);
    const [commentText, onChangeCommentText] = useInput('');
    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
    }, [commentText]);

    return (
        <Form onFinish={onSubmitComment}>
            COMMENT_FORM영역
            <Form.Item style={{position: 'relative', margin: 0}}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{position: 'absolute', right: 0, bottom: -40}} type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.proptypes = {
    post: Proptypes.object.isRequired
}

export default CommentForm;

