// And here's how to use the <Sortable /> component:
class Main extends React.Component {
    constructor(props) {
        super(props);

        // Use this flag to disable/enable the <Sortable />
        this.state = { isEnabled: true };

        this.toggleEnableability = this.toggleEnableability.bind(this);
    }

    toggleEnableability() {
        this.setState({ isEnabled: ! this.state.isEnabled });
    }

    handleOnChange(event, ui) {
        // Attach any custom behavior here
        console.log('DOM changed!', event, ui);
    }

    render() {
        const list = ['ReactJS', 'JSX', 'JavaScript', 'jQuery', 'jQuery UI'];

        return (
            <div>
                <button type="button"
                    onClick={this.toggleEnableability}>
                    Toggle enable/disable
                </button>
                <Sortable
                    opacity={0.8}
                    data={list}
                    enable={this.state.isEnabled}
                    onChange={this.handleOnChange} />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));