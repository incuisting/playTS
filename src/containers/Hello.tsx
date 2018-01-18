import Hello from '../components/Hello/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import { Props } from '../components/Hello/Hello';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/6237
export default connect<Props, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(Hello);