import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import UndoRedo from '../containers/UndoRedo';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
                <UndoRedo />
            </div>
        )
    }
}