function Background() {
    const numberOfDivs = 200; // Cantidad de divs que deseas crear

    const divs = [];
    for (let i = 0; i < numberOfDivs; i++) {
        divs.push(
            <div className="circle-container" key={i}>
                <div className="circle"></div>
            </div>
        );
    }

    return <div className="background-container">{divs}</div>;
}

export default Background;
