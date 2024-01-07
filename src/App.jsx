import Nav from "./components/Nav/Nav";
import Presentation from "./components/Presentation/Presentation";
import Education from "./components/Education/Education";
import Background from "./components/Background/Background";

function App() {
    return (
        <div className="App">
            <Background></Background>
            <Nav></Nav>
            <Presentation></Presentation>
            <Education></Education>
        </div>
    );
}

export default App;
