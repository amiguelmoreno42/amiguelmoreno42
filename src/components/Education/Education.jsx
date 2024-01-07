import { useState } from "react";

function Education() {
    let index = 0;
    const handleToggleAccordion = (e) => {
        console.log(e.target);
        if (e.target.classList.contains("open") == false)
            e.target.classList.toggle("ope");
    };

    return (
        <div className="education-section">
            <div className="title">
                <h2>Education</h2>
            </div>

            <div key={index} className="faq" onClick={handleToggleAccordion}>
                <div className="faq-question">Header</div>

                <div className="faq-answer">Content</div>
            </div>
        </div>
    );
}

export default Education;
