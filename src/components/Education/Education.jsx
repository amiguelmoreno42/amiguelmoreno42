function Education() {
    const minimizeBtn = document.querySelector(".minus-icon");
    const maximizeBtn = document.querySelector(".plus-icon");
    const description = document.querySelector(".degree-description");

    function hideShow() {
        minimizeBtn.classList.toggle("minimize");
        maximizeBtn.classList.toggle("minimize");
        description.classList.toggle("minimize");
    }

    return (
        <div id="education" className="education-section">
            <div className="section-title">
                <i className="fa-solid fa-school"></i>
                <h2>Education</h2>
            </div>
            <div className="container">
                <div className="degree">
                    <div className="degree-header">
                        <h3>Curso HTML5 y CSS3</h3>
                        <div className="icon">
                            <i
                                onClick={hideShow}
                                className="plus-icon fa-solid fa-plus"
                            ></i>
                            <i
                                onClick={hideShow}
                                className="minimize minus-icon fa-solid fa-minus"
                            ></i>
                        </div>
                    </div>

                    <div className="degree-description">
                        <div className="degree-description-info">
                            <ul>
                                <li>
                                    How to plan, sketch, design, build, test,
                                    and optimize a professional website
                                </li>
                                <li>
                                    Modern CSS (previous CSS3), including
                                    flexbox and CSS Grid for layout
                                </li>
                                <li>
                                    Modern CSS (previous CSS3), including
                                    flexbox and CSS Grid for layout
                                </li>
                                <li>
                                    Modern CSS (previous CSS3), including
                                    flexbox and CSS Grid for layout
                                </li>
                                <li>
                                    Developer skills such as reading
                                    documentation, debugging, and using
                                    professional tools
                                </li>
                                <li>
                                    Developer skills such as reading
                                    documentation, debugging, and using
                                    professional tools
                                </li>
                                <li>
                                    Developer skills such as reading
                                    documentation, debugging, and using
                                    professional tools
                                </li>
                            </ul>
                        </div>

                        <div className="degree-description-image"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
