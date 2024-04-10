import { useNavigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { UsernameAtom } from "./OTP";
import './Styles/Login.css'

export default function Login() {
    return (
        <RecoilRoot>
            <LoginComponent />
        </RecoilRoot>
    )
}

function LoginComponent() {
    const navigate = useNavigate()
    const [username, setUsername] = useRecoilState(UsernameAtom)
    return <div id='parentDiv'>
        <div id='mainDiv'>
            <div id='text'>Login via OTP</div>
            <div>
                <input id='inputNumber' type='text' placeholder='number' onChange={function (e) {
                    const value = e.target.value
                    setUsername(value)
                }}></input>
            </div>
            <div>
                <button id='sendOtp' onClick={async () => {
                    navigate("/enterOTP")
                    const response = await fetch("http://localhost:3000/login", {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "username": username
                        }
                    })
                    const json = await response.json()
                    const otp = json.otp
                    localStorage.setItem('otp', otp)
                    alert(`otp is ${otp}`)
                }}>Send OTP</button>
            </div>
        </div>
    </div>
}