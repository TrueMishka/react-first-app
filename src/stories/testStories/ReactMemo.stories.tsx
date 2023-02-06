import React, {useMemo, useReducer, useState} from 'react';

export default {
    title: 'React Memo demo',
    //component:
};

const NewMessagesCounterSecret = (props: {count: number}) => {
    console.log('Counter rendered')
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('User rendered')
    return <div>
        {props.users.map((u, index) => <div key={index}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Mishka', 'Sasha', 'Masha'])

    const addCounter = () => setCounter(counter + 1)
    const addUser = () => setUsers([...users, 'user' + users.length])

    return (
        <div>
            <button onClick={addCounter}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </div>
    );
};