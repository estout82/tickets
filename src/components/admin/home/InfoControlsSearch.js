
import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '../../common/Select';
import Input from '../../common/Input';
import Button from '../../common/Button';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${ props => props.theme.textColorOne };
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding-bottom: 5px;
    justify-content: flex-start;
    align-items: center;
`;

const tmpFields = {
    name: 'Name',
    email: 'Email',
    organization: 'Organization',
    department: 'Department'
};

const tmpOperators = {
    is: 'Is',
    isNot: 'Is not',
    contains: 'contains'
};

const tmpJoins = {
    and: 'And',
    or: 'Or',
    not: 'Not'
};

const InfoControls = (props) => {
    const [ conditions, setConditions ] = useState([
        { field: 'name', operator: 'is', value: '', join: '' },
        { field: 'name', operator: 'is', value: '', join: '' },
        { field: 'name', operator: 'is', value: '', join: '' }
    ]);

    return (
        <Wrapper>
            {
                conditions ?
                conditions.map( ( condition, index ) => {
                    return (
                        <Row>
                            <Select options={ tmpFields }/>
                            <Select options={ tmpOperators }/>
                            <Input />
                            { 
                                index === ( conditions.length - 1 ) ? 
                                <Button minimal>+</Button> : 
                                <Select options={ tmpJoins }/> 
                            }
                        </Row>
                    );
                }) :
                'error with conditions'
            }
        </Wrapper>
    );
}

export default InfoControls;