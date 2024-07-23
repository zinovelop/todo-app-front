import {PropTypes} from 'prop-types';

export default function CounterButton({by = 1, incrementMethod, decrementMethod}) { 
    // const buttonStyle = {
    //         fontSize:"16px",
    //         margin:"10px",
    //         padding:"15px",
    //         color:"white",
    //         backgroundColor:"#00a5ab",
    //         width:"100px",
    //         borderRadius:"30px"
    //     }
    
        // const[count, setCount] = useState(0);
    
    
        // function increment() {
        //     incrementMethod(by)
        // }
    
        // function decrement() {
        //     decrementMethod(by)
        // }
    
        return (
            <div className="CounterButton">
                <div>
                    <button className="counterButton" onClick={() => incrementMethod(by)}>
                            +{by}
                    </button>
                    <button className="counterButton" onClick={() => decrementMethod(by)}>
                            -{by}
                    </button>
                </div>
            </div>
        )
    }
    
    CounterButton.propTypes = {
        by: PropTypes.number
    }