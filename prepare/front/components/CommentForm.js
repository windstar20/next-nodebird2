import React, { useCallback, useEffect } from 'react';
import Proptypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

// 게시글의 id 를 넘겨받기 위해 props로 post를 넘겨 받음
// eslint-disable-next-line react/prop-types
const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const { addCommentDone, addCommentLoading } = useSelector((state) => state.post);

    const [commentText, onChangeCommentText, setCommentText] = useInput('');

    useEffect(() => {
        if (addCommentDone) {
            setCommentText('');
        }
    }, [addCommentDone]);

    const onSubmitComment = useCallback(() => {
        console.log(post.id, commentText);
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id },
        });
    }, [commentText, id]);

    return (
        <Form onFinish={onSubmitComment}>
            COMMENT_FORM영역
            <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button
                    style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}
                    type="primary"
                    htmlType="submit"
                    loading={addCommentLoading}
                >삐약
                </Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.proptypes = {
    post: Proptypes.object.isRequired,
};

export default CommentForm;
