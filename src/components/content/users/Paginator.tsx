import React, { useState } from 'react';
import styles from './Paginator.module.css';

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

const Paginator: React.FC<PropsType> = ({ totalCount, pageSize, onPageChanged, currentPage }) => {
    const namePrev = 'prev';
    const nameNext = 'next';

    let pagesCount = Math.ceil(totalCount / pageSize);

    let [stateButtonPrev = 0, setStateButtonPrev] = useState();
    let [stateButtonNext = 1, setStateButtonNext] = useState();

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
    let pages: Array<number> = [];
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
                    className={currentPage === p ? styles.currentPage : styles.simplePage} >{p} </span>)}
            </div>
            <div className={styles.button}>
                <button hidden={!(Math.ceil(pagesCount / pageSize - stateButtonNext))} onClick={plusOne}>{nameNext}</button>
            </div>
        </div>
    );
}

export default Paginator;