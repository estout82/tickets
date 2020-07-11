
// TODO: add grid support for displaying slots
// TODO: make this pretty

import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    grid-row: ${ props => props.row ? props.row : 'auto' };
    grid-column: ${ props => props.col ? props.col : 'auto' };
    border: 1px solid ${ props => props.theme.textColorTwo };
    border-radius: ${ props => props.theme.smallRound };
`;

const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;

    h3 {
        margin: 0;
        padding: ${ props => props.theme.largePad };
        font-weight: 300;
        font-size: ${ props => props.theme.largeSizeFont };
    };
`;

const DisplayWrapper = styled.div`
    height: min-content;
    padding: ${ props => props.theme.largePad };
    overflow: scroll;
`;

const ShelfWrapper = styled.div`
    width: 100%;
    height: min-content;

    hr {
        color: ${ props => props.theme.textColorTwo };
    }

    h3 {
        margin: 0;
        padding: ${ props => props.theme.largePad };
        font-weight: 300;
        font-size: ${ props => props.theme.largeSizeFont };
    }

    div {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        width: 100%;
        height: 100px;
        padding-bottom: ${ props => props.theme.largePad };
    }
`;

const SlotWrapper = styled.p`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    margin: 5px;
    border-radius: ${ props => props.theme.smallRound };
    background: ${ props => props.selected ? props.theme.textColorTwo : 
        props.theme.highlightColorTwoDark };
    overflow: scroll;

    span {
        font-weight: 300;
        font-size: 10pt;
        padding-top: 5px;
    }
`;

const LocationPicker = (props) => {
    const [locations] = useState([
        {
            name: 'Cabinent A',
            shelves: [
                {
                    name: 'A1',
                    slots: [ 
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                    ]
                },
                {
                    name: 'A2',
                    slots: [ 
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                    ]
                },
                {
                    name: 'A3',
                    slots: [ 
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                    ]
                },
                {
                    name: 'A4',
                    slots: [ 
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                    ]
                },
                {
                    name: 'A5',
                    slots: [ 
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                        { items: ['item 1', 'item 2', 'item 3'] },
                    ]
                }
            ]
        },
        {
            name: 'Cabinent B',
            shelves: [
                { slots: 10 },
                { slots: 10 },
                { slots: 10 },
                { slots: 10 },
                { slots: 10 }
            ]
        }
    ]);

    const [selectedSlots, setSelectedSlots] = useState([]);

    if (props.value) {
        setSelectedSlots(props.value);
    }

    const handleSlotClick = (shelfName, slotIndex) => {
        let addNew = true; // determines if value is added to the selected slots

        // TODO: clean this
        let newValue = selectedSlots.filter((value) => {
            // determine if slot is already selected
            const isSameSlot = value.shelf === shelfName && value.slot === slotIndex; 
            addNew = addNew && !isSameSlot;
            console.log(isSameSlot, addNew);
            return !isSameSlot;
        });

        if (addNew) {
            newValue = [...selectedSlots, { shelf: shelfName, slot: slotIndex }];
        }

        if (props.boundSetter) {
            props.boundSetter(newValue);
        }

        setSelectedSlots(newValue);
    }

    const renderShelf = (name) => {
        const [location] = locations.filter((location) => {
            if (location.name === name) {
                return location;
            } 

            return null;
        });

        return (
            location.shelves.map(shelf => {
                return (
                    <ShelfWrapper key={shelf.name}>
                        <h3>{ shelf.name }</h3>
                        <div>
                            {
                                shelf.slots.map((slot, index) => {
                                    // determine if slot is selecteds
                                    let selected = false;

                                    selectedSlots.forEach(elem => {
                                        if (elem.shelf === shelf.name &&
                                            elem.slot === index) {
                                            selected = true;
                                        }
                                    });

                                    return (
                                        <SlotWrapper onClick={() => handleSlotClick(shelf.name, index)} 
                                         selected={selected} key={index}>
                                            { 
                                                slot.items.map(item => {
                                                    return (
                                                        <span key={item}>{item}</span>
                                                    );
                                                })
                                            }
                                        </SlotWrapper>
                                    );
                                })
                            }
                        </div>
                        <hr />
                    </ShelfWrapper>
                );
            })
        );
    }

    return (
        <Wrapper row={props.row} col={props.col}>
            <Header>
                <h3>Location</h3>
            </Header>
            <DisplayWrapper>
                { renderShelf('Cabinent A') }
            </DisplayWrapper>
        </Wrapper>
    );
}

export default LocationPicker;