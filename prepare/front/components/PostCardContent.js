import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// postData를 string => string, hashtag => link로 변경함
const PostCardContent = ({ postData }) => // 첫 번째 게시글 #해시태 #익스프레스
    // eslint-disable-next-line implicit-arrow-linebreak
    (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((v,i) => {
                if (v.match(/(#[^\s#]+)/)) {
                    return (
                        <Link
                            href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
                            as={`/hashtag/${v.slice(1)}`}
                            key={i}
                        >
                            <a>{v}</a>
                        </Link>
                    );
                }
                return v;
            })}
        </div>
    );

export default PostCardContent;

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
};
