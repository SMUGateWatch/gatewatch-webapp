import '../styles/global.sass'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppMesh({ Component, pageProps }) {
  React.useEffect(()=>{
    const jssStyles = document.querySelector('#jss-server-side')
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles)
    }
  },[])
    return (
      <React.Fragment>    
    <Component {...pageProps} />
    </React.Fragment>
    )
  }

AppMesh.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};