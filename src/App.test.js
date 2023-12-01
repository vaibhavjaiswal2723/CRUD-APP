// App.test.js
import React from 'react';
import { fireEvent, render, screen,userEvent} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('todo list content is present in the screen or not', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});


test('add task content appear in the content or not', () => {
    render(<App />);
    const linkElement = screen.queryByText(/Add Task in/i);
    expect(linkElement).not.toBeInTheDocument();
  });
 

test("check initially the value of input is empty or not",()=>{
    render(<App/>);
    
    const inputElement=screen.getByPlaceholderText(/enter your task/i);

    expect(inputElement.value).toBe('');
});


test("Check if we enter some value it reflects on input box and when we click on the add task , input box is empty",()=>{
    render(<App/>);

    const inputElement=screen.getByPlaceholderText(/enter your task/i);
    const addButton =screen.getByRole('button',{name:'Add Task'});
   
    fireEvent.change(inputElement,{target:{value:'New Task'}});

    expect(inputElement.value).toBe('New Task');

    fireEvent.click(addButton);

    expect(inputElement.value).toBe('');
    
});


test("check after clicking on add button my task, delete button and edit button comes or not ",()=>{
    render(<App/>);

    const inputElement=screen.getByPlaceholderText(/enter your task/i);
    const addButton =screen.getByRole('button',{name:'Add Task'});

    fireEvent.change(inputElement,{target:{value:'New Task'}});
    
    expect(inputElement.value).toBe('New Task');

    fireEvent.click(addButton);
  
    expect(screen.getByText(/edit task/i)).toBeInTheDocument();
    expect(screen.getByText(/delete task/i)).toBeInTheDocument();

});

test("edits an existing task when edit button is clicked",()=>{
     
    render(<App/>);

    const inputElement=screen.getByPlaceholderText(/enter your task/i);
    const addButton =screen.getByRole('button',{name:'Add Task'});

    fireEvent.change(inputElement,{target:{value:'New Task'}});

    fireEvent.click(addButton);

    const editButton =screen.getByRole('button',{name:'Edit Task'});

    fireEvent.click(editButton);

    fireEvent.change(inputElement,{target:{value:'Edited Task'}});
    const addNewButton =screen.getByRole('button',{name:'Edit'});
    fireEvent.click(addNewButton);

    const editTaskElement=screen.getByText(/edited task/i);
    // console.log("this is my edit task element",editTaskElement);
    expect(editTaskElement).toBeInTheDocument();

});

























  

