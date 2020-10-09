const Pet = ({name, animal, breed}) => {
    return React.createElement('div', {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {id: "something-important"},
        [
            React.createElement("h1", {}, "adopt me"),
            React.createElement(Pet, {name: "Pepper", animal: "Bird", breed: "Mixed"}),
            React.createElement(Pet, {name: "Danky", animal: "Dog", breed: "Sheppard"}),
            React.createElement(Pet, {name: "Binkie", animal: "Dog", breed: "Simpson"}),
        ]
    );
}
ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
)