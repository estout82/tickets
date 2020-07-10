
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div` 
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: 5px;
    margin: 10px;

    h3 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        padding: 5px 10px;
        font-weight: 300;

        span {
            font-weight: 200;
        }
    }

    article {
        padding: 0 10px;
    }
`;

const TicketComment = (props) => {
    return (
        <Wrapper>
            <h3>
                Eric Stoutenburg
                <span>3-10-20 5:43PM</span>
            </h3>
            <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Sit amet cursus sit amet dictum sit amet justo. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Mus mauris vitae ultricies leo integer malesuada nunc. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Non enim praesent elementum facilisis leo vel. Eget nulla facilisi etiam dignissim.</p>
            </article>
        </Wrapper>
    );
};

export default TicketComment;