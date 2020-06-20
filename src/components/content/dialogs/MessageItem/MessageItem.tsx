import React from 'react';
import styles from './MessageItem.module.css';

type PropsType = {
    message: string
}

const MessageItem: React.FC<PropsType> = (props: PropsType) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    );
}

export default MessageItem;