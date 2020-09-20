import React from 'react';
import * as S from './Dialogs.styled';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} ava={dialog.ava} />)
    let messagesElements  = props.state.messages.map((message) => <Message message={message.message} id={message.id} ava={message.ava} />);
    let newMessageElenment = React.createRef();
    let sendMessage = () => {
        newMessageElenment.current.value !== '' ? console.log('Message: ', newMessageElenment.current.value) : console.log(false);
        newMessageElenment.current.value = '';
    }
    return (
        <S.Dialogs>
            <S.DialogsItems>
                { dialogsElements }
            </S.DialogsItems>

            <S.Messages>
                { messagesElements }
            </S.Messages>
            <button onClick={ sendMessage }>Send</button>
            <textarea ref={newMessageElenment} placeholder="Write your message here"></textarea>
        </S.Dialogs>
    )
}

export default Dialogs;