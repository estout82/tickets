
import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../../../common/hooks/useForm';
import Button from '../../../common/Button';
import Text from '../../../common/Text';
import useAuthUser from '../../../context/useAuthUser';

const Wrapper = styled.div`
    padding: 0 10px;
`;

const FormWrapper = styled.div`
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
    const form = useForm({
        body: {
            element: 'input'
        }
    });

    const handleAddButtonClick = () => {
        setShowForm(true);
    }

    const handleSaveButtonClick = () => {
        form.handleSubmit((values) => {
            const commentData = {
                user: authUser._id,
                timeCreated: Date(),
                body: values.body
            };

            return addComment(commentData);
        })
        .then(status => {
            // TODO:
        })
        .catch(status => {
            // TODO: 
        });

        setShowForm(false);
        form.doReset();
    }

    const handleCancelButtonClick = () => {
        setShowForm(false);
        form.doReset();
    }

    return (
        <Wrapper>
            {
                showForm ?
                <FormWrapper>
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
                </FormWrapper> :
                <Button onClick={ handleAddButtonClick }>+</Button>
            }
        </Wrapper>
    );
};

export default CommentForm;