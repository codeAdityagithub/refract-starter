import { createSignal } from "refract-js";
import "./style.css";

const App = () => {
    const count = createSignal<number>(0);

    const handleClick = () => {
        count.update((v) => v + 1);
    };
    return (
        <div className="container">
            <h2 className="heading">Refract-js Counter</h2>
            <p className="paragraph">
                Modify <code>App.tsx </code> to customize
            </p>

            <h2 className="heading">{() => count.value}</h2>

            <button
                className="button"
                onClick={handleClick}
            >
                Click
            </button>
        </div>
    );
};
export default App;
