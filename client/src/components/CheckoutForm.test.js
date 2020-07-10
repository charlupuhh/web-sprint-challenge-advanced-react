import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    
    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});


test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const fNameInput = screen.getByLabelText(/first name/i)
    const lNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const submitButton = screen.getByRole('button')

    act(() => {
        fireEvent.change(fNameInput, { target: {value: 'Charlie'}})
        fireEvent.change(lNameInput, { target: {value: 'Lu'}})
        fireEvent.change(addressInput, { target: {value: '111 Lambda St'}})
        fireEvent.change(cityInput, { target: {value: 'New York'}})
        fireEvent.change(stateInput, { target: {value: 'NY'}})
        fireEvent.change(zipInput, { target: {value: '00000'}})
        fireEvent.click(submitButton);
    })

    const success = await screen.findByTestId(/successMessage/i)
    console.log(success)
    expect(success).toBeInTheDocument();

});


// test('AnimalForm adds new animals to the list', () => {
//     render(<AnimalForm />);
//     //type into all 3 inputs
//     //  1. query for all inputs
//     //  2. run the change event to add text
//     const speciesInput = screen.getByLabelText(/species/i)
//     const ageInput = screen.getByLabelText(/age/i)
//     const notesInput = screen.getByLabelText(/notes/i)

//     //events with RTL!
//     fireEvent.change(speciesInput, { target: {value: 'Monkey'} })
//     fireEvent.change(ageInput, { target: {value: '15'} })
//     fireEvent.change(notesInput, { target: {value: 'docile'} })

//     //click submit! button
//     //  1. query for the button
//     //  2. run the click event on the button

//     const submitButton = screen.getByText(/submit!/i)
//     fireEvent.click(submitButton);

//     //assert that my new animal is in the list
//     //  1. query for the new animal text
//     //  2/ assert that it is being rendered
//     const newAnimal = screen.getByText(/monkey/i)
//     expect(newAnimal).toBeInTheDocument();
// })