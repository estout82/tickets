
import React from 'react';
import styled from 'styled-components';
import Pill from '../../../common/Pill';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .1fr 1fr .2fr .2fr;
    padding: 0px 20px;
    height: 40px;
    color: ${ props => props.theme.textColorOne };
    font-size: 10pt;
    font-weight: 300;
    border-radius: 5px;

    :hover {
        background: ${ props => props.theme.backgroundColorThree };
        cursor: pointer;
    }
`;

const FieldWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 5px;
`;

const ListRow = ({ data, onClick }) => {

    const handleClick = () => {
        if (onClick) onClick();
    }

    return (
        <Wrapper onClick={handleClick}>
            <FieldWrapper>
                <Pill>{data.number}</Pill>
            </FieldWrapper>
            <FieldWrapper>
                {data.title}
            </FieldWrapper>
            <FieldWrapper>
                {
                    data.user ?
                    data.user.firstName + ' ' + data.user.lastName :
                    'No user'
                }
            </FieldWrapper>
            <FieldWrapper>
                {
                    data.organization ? 
                    data.organization.name :
                    'No organization'
                }
            </FieldWrapper>
        </Wrapper>
    );
}

export default ListRow;