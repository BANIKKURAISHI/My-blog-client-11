import { PropTypes } from 'prop-types';

const Contain = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto'>
        {children}
        </div>
    );
};
Contain.propTypes={
    children:PropTypes.node
}
export default Contain;