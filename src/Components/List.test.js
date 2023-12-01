import List from "./List";
import React from "react";
import { fireEvent, render , screen } from "@testing-library/react";
import '@testing-library/jest-dom';

test('after pressing delete button setdata function is called or not', () => { 

    const setData = jest.fn();
    const {getByText} = render(<List index={0} setData = {setData} value = {"Vaibhav"} data = {["vaibhav","ayush"]} />);
    

    const deleteButton = getByText("Delete Task");
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(setData).toBeCalledTimes(1);

    // expect(getByText('vaibhav')).toBeInTheDocument(); 
 })





