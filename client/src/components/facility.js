import { Button, Form, FormField } from 'semantic-ui-react'

export default function Facility() {
    return (
        <Form>
            <FormField>
                <label>Name</label>
                {/* <input placeholder='Manufacturer' /> */}
            </FormField>
            <FormField>
                <label>Address</label>
                {/* <input placeholder='Model' /> */}
            </FormField>
            <FormField>
                {/* <Checkbox label='I agree to the Terms and Conditions' /> */}
            </FormField>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
