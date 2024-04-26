// React
import { useForm, ValidationError } from '@formspree/react';


// Style
import './contactform.css'


export function ContactMe() {

    const [state, handleSubmit] = useForm("mrgnrrwz");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            action=""
            className="contact-form">
            <div className="input-group">
                <input
                    required
                    placeholder=''
                    type="text"
                    name="name"
                    id="name" />

                <label htmlFor="name">
                    Your Name
                </label>
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className="input-group">
                <input
                    required
                    placeholder=''
                    type="email"
                    name="email"
                    id="email" />
                <label htmlFor="email">
                    Your Email
                </label>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="input-group">
                <textarea
                    placeholder='What do you have in mind?'
                    rows={10}
                    name='message'
                    id='message'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button 
            className='primary-btn'
            type="submit">
                Submit
            </button>
        </form>
    )
}