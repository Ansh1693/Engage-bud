import React from "react";
import { useNavigate } from "react-router-dom";
import BottomFlower from "../assets/BottomFlower";
import TopFlower from "../assets/TopFlower";
import { MyContext } from "./MyContext";

import Wheel from "../assets/Wheel";
import WheelPage from "./WheelPage";

const Home = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const mobileRef = React.useRef<HTMLInputElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [isValidMobileNumber, setIsValidMobileNumber] =
    React.useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = React.useState<boolean>(false);
  const [submit, setSubmit] = React.useState<boolean>(false);

  const handleMobileNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    const isValid = /^(\+?\d{1,3}[- ]?)?\d{10}$/.test(input);
    setIsValidMobileNumber(isValid);
    // setMobileNumber(input);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    setIsValidEmail(isValid);
  };

  // React.useEffect(()=>{
  //   const form = formRef.current;

  // },[])

  const check = (e: Event) => {
    e.preventDefault();
    // API call
    // const email= emailRef.current?.value;
    // const mobile= mobileRef.current?.value;

    // const res = await fetch('anyroute', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email,
    //     mobile
    //   })
    // });

    // if (res.ok) {
    //   navigate('spin');
    // } else {
    //
    // }
    if (isValidMobileNumber && isValidEmail) {
      setSubmit(true);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#C6EFC8] relative">
      {/* FLowers */}
      <TopFlower />

      <BottomFlower />

      {/* Main */}
      {!submit ? (
        <div className="flex flex-col items-center w-full  justify-center md:flex-row md:h-full">
          <Wheel />
          <div className="flex flex-col items-center w-full  justify-center gap-4 lg:pr-0 md:w-3/4 lg:w-1/2">
            <div className="font-poppins flex justify-center items-center text-3xl w-full leading-normal font-extrabold z-20 px-10 lg:text-4xl lg:pb-10">
              <span className="">
                This is how EngageBud looks like in action
              </span>
            </div>
            <form
              className="w-4/5 gap-4 flex flex-col z-10"
              action="/"
              method="POST"
              ref={formRef}
            >
              <label
                className={`flex items-start p-2 gap-6 h-24  bg-white border-b-2 rounded-tl-md rounded-tr-md ${
                  isValidEmail ? "border-black" : "border-red-500"
                }`}
              >
                <div className="lg:p-2 flex items-center justify-center w-1/12 h-full">
                  <svg
                    width="66"
                    height="53"
                    viewBox="0 0 66 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <path
                      d="M5.50541 52.3786C4.21463 52.3786 3.08519 51.8945 2.11711 50.9265C1.14902 49.9584 0.664978 48.8289 0.664978 47.5382V5.58777C0.664978 4.29699 1.14902 3.16756 2.11711 2.19947C3.08519 1.23139 4.21463 0.747345 5.50541 0.747345H60.3636C61.6544 0.747345 62.7838 1.23139 63.7519 2.19947C64.72 3.16756 65.204 4.29699 65.204 5.58777V47.5382C65.204 48.8289 64.72 49.9584 63.7519 50.9265C62.7838 51.8945 61.6544 52.3786 60.3636 52.3786H5.50541ZM60.3636 10.0248L34.2253 27.1277C34.0102 27.2352 33.8085 27.3294 33.6202 27.41C33.432 27.4907 33.2034 27.531 32.9345 27.531C32.6656 27.531 32.437 27.4907 32.2488 27.41C32.0605 27.3294 31.8589 27.2352 31.6437 27.1277L5.50541 10.0248V47.5382H60.3636V10.0248ZM32.9345 23.1747L60.0409 5.58777H5.90878L32.9345 23.1747ZM5.50541 10.0248V10.5896V7.40293V7.44327V5.58777V7.44327V7.3626V10.5896V10.0248V47.5382V10.0248Z"
                      fill="#49454F"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start w-4/5 h-max justify-center text-[#49454F] text-lg font-poppins overflow-x-hidden ">
                  <span className="lg:text-xl"> Email</span>
                  <div className="flex flex-col">
                    <input
                      className=""
                      type="email"
                      placeholder="joe@gmail.com"
                      id="email"
                      required
                      ref={emailRef}
                      onChange={handleEmailChange}
                    />
                    {!isValidEmail && (
                      <span className="text-xs text-red-500">
                        Enter Correct Email
                      </span>
                    )}
                  </div>
                </div>
              </label>

              <label
                className={`flex items-start p-2 gap-6  bg-white border-b-2 h-max rounded-tl-md rounded-tr-md ${
                  isValidMobileNumber ? " border-black" : "border-red-600"
                }`}
              >
                <div className="lg:p-2 flex items-center justify-center w-1/12 h-full">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <path
                      d="M46.9049 49.6207C41.3157 49.6207 35.7609 48.2463 30.2404 45.4975C24.7199 42.7487 19.7606 39.1753 15.3625 34.7772C10.9645 30.3792 7.39103 25.4199 4.64223 19.8994C1.89344 14.3789 0.519043 8.82406 0.519043 3.23485C0.519043 2.3644 0.816829 1.63139 1.4124 1.03581C2.00797 0.440242 2.74098 0.142456 3.61143 0.142456H13.2322C13.8736 0.142456 14.4348 0.360069 14.9158 0.795294C15.3969 1.23052 15.7061 1.81464 15.8436 2.54765L17.699 11.2063C17.7906 11.8477 17.7792 12.4319 17.6646 12.9587C17.5501 13.4856 17.3096 13.9322 16.9431 14.2987L10.0711 21.2394C12.6366 25.5001 15.5114 29.2109 18.6954 32.3721C21.8795 35.5332 25.4872 38.2132 29.5188 40.4123L36.0472 33.6777C36.5053 33.1738 37.0322 32.8187 37.6277 32.6126C38.2233 32.4064 38.8189 32.3721 39.4145 32.5095L47.5921 34.2962C48.2793 34.4336 48.852 34.7772 49.3101 35.327C49.7682 35.8768 49.9973 36.5182 49.9973 37.2512V46.5283C49.9973 47.3988 49.6995 48.1318 49.104 48.7274C48.5084 49.3229 47.7754 49.6207 46.9049 49.6207ZM8.0095 17.4599L13.5758 11.8248L11.9953 4.26565H4.64223C4.64223 6.05236 4.91711 8.01088 5.46687 10.1412C6.01663 12.2715 6.86417 14.7111 8.0095 17.4599ZM45.8741 45.4975V38.1445L38.796 36.7014L33.3671 42.4051C35.2455 43.2756 37.2841 43.9857 39.4832 44.5355C41.6822 45.0852 43.8125 45.4059 45.8741 45.4975Z"
                      fill="#49454F"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start w-4/5 h-full justify-center text-[#49454F] text-lg font-poppins overflow-x-hidden">
                  <span className="lg:text-xl"> Phone Number</span>
                  <div className="flex flex-col">
                    <input
                      className=""
                      type="text"
                      placeholder="+91 98256 XXXXX"
                      id="mobile"
                      ref={mobileRef}
                      onChange={handleMobileNumberChange}
                      required
                    />
                    {!isValidMobileNumber && (
                      <span className="text-xs text-red-500 ">
                        Enter Correct Phone Number
                      </span>
                    )}
                  </div>
                </div>
              </label>
              <label className="rounded-md border-2 border-black flex h-24 justify-center items-center gap-2 p-2">
                <input
                  type="checkbox"
                  className="h-8 w-8 flex-none accent-black"
                  required
                />
                <span className="text-sm text-left lg:text-base">
                  I agree to receiving recurring automated messages at the
                  number I have provided. Consent is not a condition to
                  purchase.
                </span>
              </label>
              <button
                className="rounded-full w-full p-6 font-poppins text-white text-2xl font-extrabold  bg-[#146531]"
                type="submit"
                onClick={(event:any) => {
                  check(event);
                }}
              >
                Try your luck
              </button>
            </form>

            <div className="z-10 flex flex-col text-sm">
              <span>*You can spin the wheel only once!</span>
              <span>
                *If you win, you can claim your coupon for 10 minutes only!
              </span>
            </div>
            <div className="flex gap-2 text-2xl font-poppins font-bold items-center justify-center z-10">
              <span>No I don't feel lucky</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <WheelPage />
      )}
    </div>
  );
};

export default Home;
