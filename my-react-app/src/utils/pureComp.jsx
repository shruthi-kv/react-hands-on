import React, {PureComponent} from 'react'

class PureComp extends PureComponent{
    
    render(){
        console.log(this.props.name,"name");
        return <p>Hello {this.props.name}</p>
    }
}

export default PureComp;