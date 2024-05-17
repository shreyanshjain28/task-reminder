import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  class WithLogger extends React.Component {
    state = {
        isLoading: false,
    };

    componentDidMount() {
        // setTimeout(() => {
            this.setState({ isLoading: false });
            console.log('component mounted and state assigned');
        // }, 1000);
    }

    componentDidUpdate() {
        
        //this.setState({ isLoading: false });
        console.log('component updated')
        console.log(`current state - ${this.state.isLoading}`);
        
    }
    
    clickbutton = (prevState) => {
        this.setState({isLoading: !prevState})
        console.log('state changed by user')

    }
    
    render() {
        return (
          <WrappedComponent
            {...this.props}
            loading={this.state.isLoading}
            clickbutton={this.clickbutton}
          />
        );
      }
    }

    WithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`;
    return WithLogger;
};


export default withLogger;