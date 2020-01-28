import { createElement, PropTypes } from '@plesk/ui-library';
import Terminal from './containers/Term';

const App = props => <Terminal {...props} />;

App.propTypes = {
    login: PropTypes.string.isRequired,
    sid: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    cluster: PropTypes.string.isRequired,
    serverId: PropTypes.string.isRequired,
};

export default App;
