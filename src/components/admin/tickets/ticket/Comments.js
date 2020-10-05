
import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const Wrapper = styled.div` 
    margin-bottom: 10px;
    padding: 10px 0;
`;

const CommentWrapper = styled.div`
    margin-top: 10px;
`;

const Comments = ({ data }) => {
    return (
        <Wrapper>
            {
                data ? 
                data.map(comment => {
                    return (
                        <CommentWrapper key={comment._id}>
                            <Comment data={comment} />
                        </CommentWrapper>
                    )
                }) :
                'No comments'
            }
        </Wrapper>
    );
};

export default Comments;