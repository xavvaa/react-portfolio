import React from 'react';

export default function ContactForm() {
    const submitContactForm = (event) => {
        event.preventDefault();
        console.log('Form submitted'); // Debugging line to ensure the function is called
        alert('Your message has been submitted successfully.');
        event.target.reset(); // Reset the form fields after submission
    };

    return (
        <>
            {/* ------------- CONTACT ------------- */}
            <div className="container mt-5" id="contact">
                <form onSubmit={submitContactForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}
