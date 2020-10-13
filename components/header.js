import Header from 'next/head'

export default function appHeader(props){
    return(
        <React.Fragment>
            <Header>
                <title>{props.title}</title>
                <meta charSet="utf-8" name="agcs-monitoring-system"/>
            </Header>
        </React.Fragment>
    )
}