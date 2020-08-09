
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../common/Button';
import Dropdown from '../../common/Dropdown';
import FormSelect from '../../common/FormSelect';
import FormInput from '../../common/FormInput';
import FormText from '../../common/FormText';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    padding: ${ props => props.theme.largePad };
`;

const Form = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: ${ props => props.theme.smallPad };
    margin-top: ${ props => props.theme.largeMargin };
`;

const SubmitTicketForm = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [ categories ] = useState([
        {
            name: 'Hardware Issue',
            id: 1,
            form: [
                {
                    name: 'Priority',
                    type: 'select',
                    options: ['Low', 'Meduim', 'High'],
                    grid: {row: '1', column: '1 / 2'}
                },
                {
                    name: 'Due Date',
                    type: 'input',
                    grid: {row: '1', column: '2 / 3'}
                },
                {
                    name: 'Organization',
                    type: 'select',
                    options: ['Granite Bay Campus', 'Blus Oaks Campus', 'Ministry Support',
                        'Adventure Christian School', 'Thriving Churches International'],
                    grid: {row: '1', column: '3 / 6'}
                },
                {
                    name: 'Description',
                    type: 'text',
                    grid: {row: '2 / 5', column: '1 / 6'}
                }
            ]
        }
    ]);

    useEffect(() => {
        // TODO: load all ticket categories from the backend
    }, []);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);

        // TODO: load form data from backend
    }

    return (
        <Wrapper>
            <Dropdown marginRight="0" onClick={() => selectedCategory(categories[1])} 
                defaultValue="Ticket Type" options={categories.map(category => category.name)}
                onValueChange={(value) => {
                    handleSelectCategory(categories.find(elem => elem.name === value))
                }}>
            </Dropdown>
            <Form>
                {
                    selectedCategory ? selectedCategory.form.map(elem => {
                        switch (elem.type) {
                            case 'select':
                                return (
                                    <FormSelect name={elem.name} 
                                        options={elem.options} row={elem.grid.row}
                                        column={elem.grid.column} />
                                );
                            case 'input':
                                return (
                                    <FormInput name={elem.name} row={elem.grid.row}
                                        column={elem.grid.column} />
                                );
                            case 'text':
                                return (
                                    <FormText name={elem.name} row={elem.grid.row}
                                        column={elem.grid.column} />
                                );
                            default:
                                console.error('unknown form type encountered! ' + 
                                    elem.type)
                                return null;
                        }
                    }) : null
                }
            </Form>
            {
                selectedCategory ?
                <Button marginRight="0" marginTop="10px">Submit</Button> :
                null
            }
        </Wrapper>
    );
}

export default  SubmitTicketForm;