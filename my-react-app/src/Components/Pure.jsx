// import React, { PureComponent } from "react";

// class PureComp extends PureComponent {
//   render() {
//     console.log("✅ Pure Component Rendered");
//     return <p>Pure Component — {this.props.name}</p>;
//   }
// }

// export default PureComp;


import React from 'react';

const Pure = ({name}) =>{

    React.useEffect(() => {
    console.log("render........");
  }, [name]);

    console.log("pure-componetn")
    return(
        <p>Pure Comp {name}</p>
    )
}

export default React.memo(Pure)