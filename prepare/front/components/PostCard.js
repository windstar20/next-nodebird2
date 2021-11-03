import React, { useCallback, useState } from 'react';
import { Avatar, Button, Card, Comment, List, Popover } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';

// eslint-disable-next-line react/prop-types
const PostCard = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const { removePostLoading } = useSelector((state) => state.post);
    // const { me } = useSelector(state => state.user);
    // const id = me && me.id;
    // const id = me?.id; // 위의 두줄을 아래와 같이 가능
    // const id = useSelector(state => state.user.me && state.user.me.id);
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, []);

    return (
        <div style={{ marginBottom: 20, borderBottom: 'solid red 1px' }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    liked
                        ? <HeartTwoTone twoToneColor="#c41fe0" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <RetweetOutlined key="retweet" />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover
                        key="more"
                        content={(
                            <Button.Group>
                                {/* 로그인을 했고, 작성자 아이디와 내 아이디가 같으면 수정, 삭제 버튼 보이기 */}
                                {id && post.User.id === id ? (
                                    <>
                                        <Button>수정</Button>
                                        <Button type="danger" onClick={onRemovePost}>삭제</Button>
                                    </>
                                )
                                    : <Button>신고</Button> }
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avatar={<Avatar src={post.User.avatarImage}>{ post.User.nickname[0] }</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened && (
                <div>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random">{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div>
    );
};

PostCard.proptypes = {
    // post: PropTypes.object.isRequired
    // proptypes 디테일한 검증
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object), // 객체들의 배열
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};
export default PostCard;
