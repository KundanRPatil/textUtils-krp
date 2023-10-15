import React, { useState } from 'react'

export default function About() {
    const [text, setText] = useState('Dark Mode')
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setText('Dark Mode');
        } else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setText('Light Mode');
        }
    }
    return (
        <div className='container my-3' style={myStyle}>
            <h1>About Us</h1>
            <div className='container'>TextUtils is a website that offers a range of text-related tools and utilities for manipulating and analyzing text. Its main features include:</div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Word Count</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>TextUtils allows users to input text and instantly find out how many words are in the provided text. This is helpful for writers, students, and professionals who need to keep track of their document's word count.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Remove Blank Spaces</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>The website offers a tool to remove extra spaces and formatting from text. This feature is useful for cleaning up text copied from various sources, ensuring it's more readable and consistent.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Convert to Uppercase and Lowercase</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>TextUtils allows users to convert text to uppercase, making it easy to create titles, headlines, or text that needs to be emphasized.

                            Conversely, users can convert text to lowercase, which can be handy for standardizing text, making it more uniform and readable.</div>
                    </div>
                </div>
            </div>

            <div className="container my-3">
                <button type='button' onClick={toggleStyle} className='btn btn-primary'>{text}</button>
            </div>
        </div>
    )
}
