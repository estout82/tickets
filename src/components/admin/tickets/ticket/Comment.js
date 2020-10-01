
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 1px solid ${ props => props.theme.textColorThree };
    border-radius: 5px;
    padding: 5px;

    header {
        padding: 5px;
        margin-bottom: 10px;
        border-bottom: 1px solid ${ props => props.theme.textColorThree };

        h3 {
            font-size: 14pt;
            font-weight: 300;
        }

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            font-size: 8pt;
            font-weight: 200;
            padding: 3px 0;
            border-radius: 30px;
        }
    }

    p {
        padding: 5px;
    }
`;

export default function Commment({ data }) {
    return (
        <Wrapper>
            <header>
                <h3>{ data.user.firstName + ' ' + data.user.lastName }</h3>
                <p>
                    { new Date(data.timeCreated).toLocaleString() } 
                </p>
            </header>
            <p>
                { data.body }
            </p>
        </Wrapper>
    );
}