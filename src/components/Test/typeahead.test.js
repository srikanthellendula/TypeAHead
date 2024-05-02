import { screen, render, fireEvent, getByText } from '@testing-library/react';
import TypeAHead from '../TypeAHead';

test('Check for Heading element', ()=>{
    const {getByText} = render(<TypeAHead/>);
    const text = screen.getByText('This is Type A Head Component')
    expect(text).toBeInTheDocument()
})

test('Check for Place Holder..', ()=>{
    const {getByPlacehoderText} = render(<TypeAHead/>);
    const text = screen.getByPlaceholderText('Pick favourite cricketer...')
    expect(text).toBeInTheDocument()
})

test('Check Suggestions',()=>{
    const {getByPlaceholderText, getByText} = render(<TypeAHead/>);
    const inputElement = screen.getByPlaceholderText('Pick favourite cricketer...')    
    
    fireEvent.change(inputElement, {target:{value: 'rai'}})
    const result = screen.getByText('Suresh Raina')
    expect(result).toBeInTheDocument()
})

test('Check more than one Suggestions',()=>{
    const {getByPlaceholderText, getByText, getAllByText} = render(<TypeAHead/>);
    const inputElement = screen.getByPlaceholderText('Pick favourite cricketer...')    
    
    fireEvent.change(inputElement, {target:{value: 'ku'}})
    const results = screen.getAllByText(text => text.includes('Kuldeep Yadav') || text.includes('Anil Kumble'));

  // Check if each result is in the document
    results.forEach(result => {
    expect(result).toBeInTheDocument();
    })
})