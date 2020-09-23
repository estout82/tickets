
import React from 'react';
import styled from 'styled-components';
import TicketInfo from './TicketInfo';
import TicketToDo from './TicketToDo';
import TicketComment from './TicketComment';
import TicketCommentForm from './TicketCommentForm';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 60px minmax(auto, 200px) min-content min-content 1fr;
    margin: 10px;
    width: calc(50% - 20px);
    height: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-weight: 300;
    font-size: 10pt;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    grid-column: 1 / 4;
`;

const DescriptionWrapper = styled.div`
    overflow: scroll;
    padding: 0 20px;
    margin: 0;
    grid-column: 1 / 4;

    p {
        margin: 0;
    }
`;

const ToDoWrapper = styled.div`
    grid-column: 1;
    padding: 0 20px;
`;

const InfoWrapper = styled.div`
    grid-column: 1 / 4;
    padding: 10px 20px;
`;

const CommentWrapper = styled.div`
    grid-column: 1 / 4;
    overflow: scroll;
`;

const Ticket = (props) => {
    return (
        <Wrapper>
            <TitleWrapper>
                <p>4473</p>
                <span>Need MacMini</span>
                <span>Tyler Kanishiro</span>
                <span>Granite Bay</span>
            </TitleWrapper>
            <DescriptionWrapper>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Sit amet cursus sit amet dictum sit amet justo. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Mus mauris vitae ultricies leo integer malesuada nunc. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Non enim praesent elementum facilisis leo vel. Eget nulla facilisi etiam dignissim.
                    Tristique senectus et netus et malesuada fames ac. Justo donec enim diam vulputate. Consectetur purus ut faucibus pulvinar elementum. In egestas erat imperdiet sed. Purus in mollis nunc sed id semper risus in hendrerit. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Odio ut sem nulla pharetra diam sit. Eget nunc lobortis mattis aliquam. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Mattis enim ut tellus elementum sagittis vitae et. Sit amet aliquam id diam maecenas ultricies mi. Posuere lorem ipsum dolor sit amet consectetur. Blandit. volutpat maecenas volutpat blandit aliquam. In eu mi bibendum neque egestas congue. Lectus urna duis convallis convallis. Scelerisque purus semper eget duis at. Tincidunt ornare massa eget egestas purus viverra accumsan. Faucibus pulvinar elementum integer enim neque volutpat ac. Ut etiam sit amet nisl purus in mollis nunc. In arcu cursus euismod quis viverra nibh.
                    Nibh sit amet commodo nulla facilisi nullam. Quis hendrerit dolor magna eget est lorem ipsum dolor. At erat pellentesque adipiscing commodo elit at imperdiet dui. Blandit aliquam etiam erat velit. Bibendum at varius vel pharetra. Pharetra massa massa ultricies mi quis. Eu facilisis sed odio morbi. Integer eget aliquet nibh praesent tristique magna sit. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Malesuada fames ac turpis egestas sed tempus urna. Aliquam faucibus purus in massa tempor nec feugiat. Libero nunc consequat interdum varius sit.
                    At varius vel pharetra vel turpis nunc eget lorem dolor. Ultricies lacus sed turpis tincidunt. Euismod elementum nisi quis eleifend quam adipiscing. Pulvinar sapien et ligula ullamcorper. Quam vulputate dignissim suspendisse in. Quis varius quam quisque id. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Libero justo laoreet sit amet cursus sit amet. Aenean et tortor at risus. Tempor commodo ullamcorper a lacus vestibulum sed. Lorem mollis aliquam ut porttitor leo. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Senectus et netus et malesuada fames ac. Sit amet porttitor eget dolor morbi non. Pellentesque nec nam aliquam sem et tortor consequat id. Aliquam ut porttitor leo a diam sollicitudin tempor id eu.
                    Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Justo laoreet sit amet cursus. Sit amet est placerat in egestas erat imperdiet sed. Nunc lobortis mattis aliquam faucibus purus in. Habitant morbi tristique senectus et netus et malesuada fames. Congue eu consequat ac felis donec et odio pellentesque diam. Purus non enim praesent elementum facilisis leo vel fringilla est. Nunc mattis enim ut tellus. Pellentesque habitant morbi tristique senectus et. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Sagittis orci a scelerisque purus semper eget duis at. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Diam quis enim lobortis scelerisque. Tortor at auctor urna nunc id cursus. Praesent tristique magna sit amet purus gravida quis blandit. Ornare quam viverra orci sagittis eu. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Semper viverra nam libero justo.
                </p>
            </DescriptionWrapper>
            <InfoWrapper>
                <TicketInfo />
            </InfoWrapper>
            <ToDoWrapper>
                <TicketToDo />
            </ToDoWrapper>
            <CommentWrapper>
                <TicketComment />
                <TicketCommentForm />
            </CommentWrapper>
        </Wrapper>
    );
} 

export default Ticket;