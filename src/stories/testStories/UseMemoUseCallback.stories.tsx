import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }

        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for A: {resultA}
            </div>
            <div>
                Result for B: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users secret rendered')
    return <div>
        {props.users.map((u, index) => <div key={index}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Mishka', 'Sasha', 'Masha'])

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('m') > -1)
    }, [users])

    const addUser = () => setUsers([...users, 'Monica' + users.length])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={addUser}>add user</button>
            <Users users={newArr}/>
        </div>
    );
}

/////

export const UseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'TS', 'HTML'])

    const memoAddBook1 = useMemo(() => {
        console.log(books)
        return () => setBooks([...books, 'Angular' + books.length])
    }, [books])

    const memoAddBook = useCallback(() => {
        console.log(books)
        setBooks([...books, 'Angular' + books.length])
    }, [books])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book addBook={memoAddBook}/>
        </div>
    );
}

const BooksSecret = (props: {addBook: () => void}) => {
    console.log('Books secret rendered')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)
