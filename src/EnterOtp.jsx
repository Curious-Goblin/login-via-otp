import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import './Styles/EnterOtp.css'

let otp = [];

export default function EnterOtp() {
    return (
        <RecoilRoot>
            <EnterOtpComponent />
        </RecoilRoot>
    );
}

function EnterOtpComponent() {
    const navigate = useNavigate();
    const inputRefs = Array.from({ length: 6 }, () => useRef(null))
    otp = [];

    const handleChange = (index, e) => {
        const value = parseInt(e.target.value);
        otp[index] = value; // Update the corresponding index in the otp array
        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus(); // Move focus to the next input element if the value is entered
        }
    };

    const handleKeyPress = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && !e.target.value) {
            inputRefs[index - 1].current.focus(); // Move focus to the previous input element on backspace
        }
    };

    const Authentication = () => {
        if (otp.length === 6) {
            const enteredOTP = otp.join("");

            if (enteredOTP === localStorage.getItem('otp')) {
                navigate("/thankYou");
            }
            else {
                alert("You have entered the wrong OTP");
            }
        } else {
            alert("You have not entered all the digits");
        }
    };

    return (
        <div id="parentDiv">
            <div id='text'>Login via OTP</div>
            <div id='inputOtp'>
                {inputRefs.map((ref, index) => {
                    return <div key={index}>
                        <input className="inputOtp" key={index} ref={ref} type="text" maxLength={1} onChange={(e) => handleChange(index, e)}
                            onKeyDown={(e) => handleKeyPress(index, e)}
                        ></input>
                    </div>
                })}
            </div>
            <div>
                <button id="login" onClick={Authentication}>
                    Login
                </button>
            </div>
        </div>
    );
}
