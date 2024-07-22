import { Button, Form, FormField, Checkbox } from 'semantic-ui-react'

export default function AddDevice() {
    return (
        <Form>
            <FormField>
                <label>Manufacturer</label>
                <input placeholder='Manufacturer' />
            </FormField>
            <FormField>
                <label>Model</label>
                <input placeholder='Model' />
            </FormField>
            <FormField>
                {/* <Checkbox label='I agree to the Terms and Conditions' /> */}
            </FormField>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
