import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useRedirectAfterAuth } from "../../hooks/useRedirectAfterAuth";
import { useUserInputs } from "../../hooks/useUserInputs";
import { fetchRegister, fetchUser } from "../../store/thunks/user";

const Register = () => {
    const dispatch = useDispatch();
    const {value, setUsername, setPassword} = useUserInputs();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchRegister(value));
    }
    useRedirectAfterAuth()
    return (
        <div className="wrapper mx-auto flex">
            <div className="flex-col bg-app max-w-screen-sm rounded-3xl flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
                <h1 className="font-bold text-2xl my-10 text-white"> Регистрация </h1>
                <form action="" className="mt-2 flex flex-col lg:w-1/2 w-8/12">
                    <div className="flex flex-wrap border-textblack border-solid border items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
                        <div className="flex -mr-px justify-center w-15 py-4 px-2">
                            <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                                <i className="fas fa-user-circle"></i>
                            </span>
                        </div>
                        <input
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                            placeholder="Логин"
                        />
                    </div>
                    <div className="flex flex-wrap border-textblack border-solid border items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                        <div className="flex -mr-px justify-center w-15 py-4 px-2">
                            <span
                                className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                            >
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                            placeholder="Пароль"
                        />
                        <div className="flex -mr-px">
                            <span
                                className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                            >
                                <i className="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                    <button onClick={submitHandler} className="bg-purple py-4 text-center px-17 md:px-12 md:py-4 text-textwhite rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20">
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;