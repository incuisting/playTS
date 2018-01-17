import * as React from 'react';
import './Hello.css';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
            </div>
        );
    }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return new Array(numChars + 1).join('!'); // 
}