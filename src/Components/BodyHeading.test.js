import BodyHeading from "./BodyHeading";
import React from "react";
import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom';



test('should render "tasks" when we have more than 1 incomplete task', () => { 
    render(<BodyHeading inCompleteTask={5}/>)
     
    const paraElement=screen.getByText(/5 tasks left/i);
    expect(paraElement).toBeInTheDocument();
 })


 test('should render "task" when we have only one or zero incomplete task', () => { 
    render(<BodyHeading inCompleteTask={1}/>)
     
    const paraElement=screen.getByText(/1 task left/i);
    expect(paraElement).toBeInTheDocument();
 })
