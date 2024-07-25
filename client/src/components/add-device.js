import { Button, Form, FormField } from 'semantic-ui-react'

export default function AddDevice() {
    return (
        <Form className="add-device">
            <FormField>
                <label>Manufacturer</label>
                <input placeholder='Manufacturer' />
            </FormField>
            <FormField>
                <label>Model</label>
                <input placeholder='Model' />
            </FormField>
            <FormField>
                <label>Size</label>
                <input placeholder='Model' />
            </FormField>
            <FormField>
                <label>Type</label>
                <input placeholder='Model' />
            </FormField>
            <FormField>
                <label>Serial Number</label>
                <input placeholder='Model' />
            </FormField>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}
