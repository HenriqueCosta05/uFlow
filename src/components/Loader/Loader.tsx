import { ProgressBar } from 'react-aria-components'
import loaderStyles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={loaderStyles.loader}>
            <ProgressBar isIndeterminate aria-label="Loading..." />
        </div>
    )
}

export default Loader
