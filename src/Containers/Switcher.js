import React from "react";
import { connect } from "react-redux";

import { 
    actionGreen,
    actionRed, 
    actionBlue 
} from "../actions/switcher";


class Switcher extends React.Component  {
     
    render (){
        const { 
            actionGreen, 
            actionRed, 
            actionBlue, 
            color            
        } = this.props;

        return  (
            <div className="btn" > 
                <button onClick={actionGreen} style={{background: color, backgroundColor:"green"}}>GREEN</button>
                <button onClick={actionRed} style={{background: color, backgroundColor:"red"}}>RED</button>
                <button onClick={actionBlue} style={{background: color, backgroundColor:"blue" }}>BLUE</button>
            </div>
        )
    }
};


const mapStateToProps = (state) =>({ color: state.color});
const mapDispatchToProps = {
    actionGreen,
    actionRed,
    actionBlue,
};

export const SwitchContainer = connect(mapStateToProps, mapDispatchToProps )(Switcher);