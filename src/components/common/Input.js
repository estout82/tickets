
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
`;

const InputComponent = styled.input`
    display: inline-block;
    width: ${ props => props.fliud ? '100%' : 'auto' };

    padding: ${ props => props.theme.smallPad };
    margin-left: ${ props => props.marginLeft ? props.marginLeft : '0' };
    margin-right: ${ props => props.marginRight ? props.marginRight : 
            props.theme.meduimMargin };
    margin-top: ${ props => props.marginTop ? props.marginTop : '0' };
    margin-bottom: ${ props => props.marginBottom ? props.marginBottom : '0' };

    background: none;
    outline: none;

    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
    font-size: ${ props => props.theme.meduimSizeFont };
    color: ${ props => props.theme.textColorOne };

    &:focus {
        border-color: ${ props => props.valid === true ? 
            props.theme.highlightColorOne : 
            props.theme.errorColorOne };
    }

    &::placeholder {
        color: ${ props => props.theme.textColorTwo };
    }
`;

const InputComponentMinimal = styled.input`
    display: inline-block;
    width: ${ props => props.fliud ? '100%' : 'auto' };
    padding: 3px;
    margin-left: ${ props => props.marginLeft ? props.marginLeft : '0' };
    margin-right: ${ props => props.marginRight ? props.marginRight : 
            props.theme.meduimMargin };
    margin-top: ${ props => props.marginTop ? props.marginTop : '0' };
    margin-bottom: ${ props => props.marginBottom ? props.marginBottom : '0' };
    background: none;
    outline: none;
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
    color: ${ props => props.theme.textColorOne };
    font-size: 10pt;
    font-weight: 300;

    &:focus {
        border-color: ${ props => props.valid === false ? 
            props.theme.highlightColorOne : 
            props.theme.errorColorOne };
    }

    &::placeholder {
        color: ${ props => props.theme.textColorTwo };
    }
`;

const ErrorWrapper = styled.div`
    position: absolute;
`;

const ErrorMessage = styled.div`
    position: relative;
    background: ${ props => props.theme.errorColorOne };
    font-size: 8pt;
    border-radius: 5px;
    padding: 3px;
    top: 28px;
`;

const Input = ({
    name, 
    value, 
    placeholder, 
    minimal, 
    fluid,
    formState, 
    innerRef,
    onChange, 
    onBlur, 
    onFocus, 
    onClick }) => {

    console.log(formState ? formState && formState.valid === false : null);

    const handleValueChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    }

    if (minimal) {
        return (
            <>
                <InputComponentMinimal
                 name={ name }
                 onChange={ handleValueChange }
                 onBlur={ onBlur }
                 onFocus={ onFocus }
                 onClick={ onClick }
                 value={ value }
                 placeholder={ placeholder } 
                />
                {
                    formState && formState.valid === false ? (
                        <ErrorWrapper>
                            { formState.msg.text }
                        </ErrorWrapper>
                    ) : null
                }
            </>
        );
    }

    return (
        <Wrapper>
            <InputComponent 
             name={ name } 
             onChange={ handleValueChange } 
             onBlur={ onBlur }
             onFocus={ onFocus }
             onClick={ onClick }
             value={ value } 
             ref={ innerRef } 
             placeholder={ placeholder }
             fluid={ fluid }
             valid={ formState ? formState.valid : true }
            />
            {
                formState && formState.valid === false ? (
                    <ErrorWrapper>
                        <ErrorMessage>{ formState.msg.text }</ErrorMessage>
                    </ErrorWrapper>
                ) : null
            }
        </Wrapper>
    );
};

export default Input;