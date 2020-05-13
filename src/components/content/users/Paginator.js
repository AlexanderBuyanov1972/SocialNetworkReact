import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalUsersCount,pageSize,onPageChanged,currentPage}) => {
    const namePrev = 'prev';
    const nameNext = 'next';

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let [stateButtonPrev, setStateButtonPrev] = useState(0);
    let [stateButtonNext, setStateButtonNext] = useState(1);

    const minusOne = () => {
        if (stateButtonPrev > 0 && stateButtonNext < pagesCount) {
            setStateButtonPrev(stateButtonPrev - 1);
            setStateButtonNext(stateButtonNext - 1);
        }
    };
    const plusOne = () => {
        if (stateButtonPrev >= 0 && stateButtonNext < pagesCount - 1) {
            setStateButtonPrev(stateButtonPrev + 1);
            setStateButtonNext(stateButtonNext + 1);
        }
    };

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.button}>
                <button hidden={!stateButtonPrev} onClick={minusOne}>{namePrev}</button>
            </div>
            <div className={styles.page}>
                {pages.filter(p =>
                    p > pageSize * stateButtonPrev && p <= pageSize * stateButtonNext
                ).map(p => <span key={p} onClick={() => { onPageChanged(p) }}
                    className={currentPage === p ? styles.currentPage : undefined} >{p} </span>)}
            </div>
            <div className={styles.button}>
                <button hidden={!(Math.ceil(pagesCount / pageSize - stateButtonNext))} onClick={plusOne}>{nameNext}</button>
            </div>
        </div>
    );
}

export default Paginator;