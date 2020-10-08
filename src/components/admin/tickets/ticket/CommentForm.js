
import React, { useState } from 'react';
import styled from 'styled-components';
import useEditableForm from '../../../common/hooks/useEditableForm';
import Button from '../../../common/Button';
import Text from '../../../common/Text';
import useAuthUser from '../../../context/useAuthUser';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 10px;
    border: 1px solid ${ props => props.theme.textColorThree };
    border-radius: 5px;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: ${ props => props.margin ? '10px' : '0' }
`;

const CommentForm = ({ addComment }) => {
    const authUser = useAuthUser();
    const [showForm, setShowForm] = useState(false);
    const form = useEditableForm({
        body: {
            value: ''
        }
    });

    const handleAddButtonClick = () => {
        setShowForm(true);
    }

    const handleSaveButtonClick = () => {
        form.handleSubmit((values) => {
            console.log('do request');

            const commentData = {
                user: authUser._id,
                timeCreated: Date(),
                body: values.body.value
            };

            return addComment(commentData);
        })
        .then(status => {
            console.log('done');
            console.log(status);
        })
        .catch(status => {
            console.log(status);
        });
    }

    const handleCancelButtonClick = () => {
        setShowForm(false);
        form.doReset();
    }

    return (
        <>
            {
                showForm ?
                <Wrapper>
                    <Row margin>
                        <Text 
                         value={ form.values.body.value }
                         onChange={ (val) => form.handleChange('body', val) }
                        />
                    </Row>
                    <Row>
                        <Button onClick={ handleSaveButtonClick }>Save</Button>
                        <Button onClick={ handleCancelButtonClick }>Cancel</Button>
                    </Row>
                </Wrapper> :
                <Button onClick={ handleAddButtonClick }>+</Button>
            }
        </>
    );
};

export default CommentForm;