import React from "react";
const GridContainer = (cols,rows,ContainerComponer, ChildComponent, data, classes) => 
{
    class HOC extends React.Component {
        render() 
        {
          return (

                <div className={`grid ${cols} ${rows}`}>
                    <ContainerComponer childComponent={ChildComponent} data={data} classes={classes} />
                </div>
            )
        }
    }

    return HOC;
}


export default GridContainer;