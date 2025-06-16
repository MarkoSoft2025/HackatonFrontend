import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

const SignIn: React.FC = () => {
  return (
    <DefaultLayout>
      {/* <Breadcrumb pageName="Sign In" /> */}

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              {/* <Link className="mb-5.5 inline-block" href="/">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link> */}

              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>
                
              <span className="mt-15 inline-block">
                <svg width="350" height="350" viewBox="0 0 720 722.539" className="injected-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group_64" data-name="Group 64" transform="translate(-600.001 -166)">
                    <g id="Group_63" data-name="Group 63" transform="translate(39.127 -21.613)">
                      <path id="Path_1-589" data-name="Path 1" d="M275.321,690.449,270.949,673.2a223.916,223.916,0,0,0-23.758-8.524l-.552,8.015-2.238-8.83c-10.012-2.862-16.824-4.121-16.824-4.121s9.2,34.987,28.5,61.735l22.486,3.95-17.469,2.519a90.608,90.608,0,0,0,7.811,8.28c28.072,26.057,59.34,38.013,69.838,26.7s-3.749-41.6-31.822-67.656c-8.7-8.078-19.635-14.56-30.579-19.664Z" transform="translate(417.297 140.418)" fill="#f2f2f2"></path>
                      <path id="Path_2-590" data-name="Path 2" d="M345.1,652.214l5.171-17.023a223.933,223.933,0,0,0-15.931-19.578l-4.615,6.576,2.648-8.716c-7.093-7.623-12.273-12.221-12.273-12.221s-10.208,34.706-7.516,67.579l17.207,15-16.259-6.874a90.606,90.606,0,0,0,2.409,11.128c10.562,36.817,31.149,63.214,45.982,58.958s18.295-37.551,7.732-74.368c-3.274-11.414-9.283-22.614-16.013-32.638Z" transform="translate(389.102 159.921)" fill="#f2f2f2"></path>
                    </g>
                    <g id="Group_62" data-name="Group 62" transform="translate(44.037 -0.462)">
                      <path id="Path_22-591" data-name="Path 22" d="M734.978,247.559h-3.956V139.187A62.725,62.725,0,0,0,668.3,76.462H438.687a62.725,62.725,0,0,0-62.725,62.725V733.736a62.725,62.725,0,0,0,62.725,62.725H668.3a62.725,62.725,0,0,0,62.724-62.724V324.7h3.956Z" transform="translate(360 90)" fill="#e6e6e6"></path>
                      <path id="Path_23-592" data-name="Path 23" d="M671.423,93.336H641.454a22.255,22.255,0,0,1-20.607,30.659H489.306A22.254,22.254,0,0,1,468.7,93.335H440.708a46.843,46.843,0,0,0-46.843,46.843V733.864a46.843,46.843,0,0,0,46.843,46.843H671.423a46.843,46.843,0,0,0,46.843-46.843h0V140.177a46.843,46.843,0,0,0-46.842-46.842Z" transform="translate(359.405 89.439)" fill="#fff"></path>
                      <path id="Path_6-593" data-name="Path 6" d="M530.421,337.151a23.626,23.626,0,0,1,11.827-20.472,23.637,23.637,0,1,0,0,40.939,23.621,23.621,0,0,1-11.823-20.467Z" transform="translate(355.65 82.117)" fill="#ccc"></path>
                      <path id="Path_7-594" data-name="Path 7" d="M561.158,337.151a23.625,23.625,0,0,1,11.827-20.472,23.637,23.637,0,1,0,0,40.939,23.621,23.621,0,0,1-11.823-20.467Z" transform="translate(354.627 82.117)" fill="#ccc"></path>
                      <circle id="Ellipse_1" data-name="Ellipse 1" cx="23.637" cy="23.637" r="23.637" transform="translate(921.189 395.631)" fill="currentColor"></circle>
                      <path id="Path_8-595" data-name="Path 8" d="M627.963,409.252H490.2a4.953,4.953,0,0,1-4.947-4.947V266.543A4.953,4.953,0,0,1,490.2,261.6H627.963a4.953,4.953,0,0,1,4.947,4.947V404.3a4.953,4.953,0,0,1-4.947,4.947ZM490.2,263.576a2.971,2.971,0,0,0-2.968,2.968V404.306a2.971,2.971,0,0,0,2.968,2.968H627.963a2.971,2.971,0,0,0,2.968-2.968V266.544a2.971,2.971,0,0,0-2.968-2.968Z" transform="translate(356.366 83.844)" fill="#ccc"></path>
                      <rect id="Rectangle_1" data-name="Rectangle 1" width="211.284" height="1.979" transform="translate(803.805 598.696)" fill="#ccc"></rect>
                      <circle id="Ellipse_2" data-name="Ellipse 2" cx="6.672" cy="6.672" r="6.672" transform="translate(803.805 572.996)" fill="currentColor"></circle>
                      <rect id="Rectangle_2" data-name="Rectangle 2" width="211.284" height="1.979" transform="translate(803.805 665.417)" fill="#ccc"></rect>
                      <circle id="Ellipse_3" data-name="Ellipse 3" cx="6.672" cy="6.672" r="6.672" transform="translate(803.805 639.718)" fill="currentColor"></circle>
                      <path id="Path_977-596" data-name="Path 977" d="M658.244,670.068H591.472a4.355,4.355,0,0,1-4.35-4.35v-23.4a4.355,4.355,0,0,1,4.35-4.35h66.772a4.355,4.355,0,0,1,4.35,4.35v23.4a4.355,4.355,0,0,1-4.35,4.35Z" transform="translate(352.978 71.328)" fill="currentColor"></path>
                      <circle id="Ellipse_7" data-name="Ellipse 7" cx="6.672" cy="6.672" r="6.672" transform="translate(825.57 572.996)" fill="currentColor"></circle>
                      <circle id="Ellipse_8" data-name="Ellipse 8" cx="6.672" cy="6.672" r="6.672" transform="translate(847.335 572.996)" fill="currentColor"></circle>
                      <circle id="Ellipse_9" data-name="Ellipse 9" cx="6.672" cy="6.672" r="6.672" transform="translate(825.57 639.718)" fill="currentColor"></circle>
                      <circle id="Ellipse_10" data-name="Ellipse 10" cx="6.672" cy="6.672" r="6.672" transform="translate(847.335 639.718)" fill="currentColor"></circle>
                    </g>
                    <path id="Path_88-597" data-name="Path 88" d="M966.106,823.539H251.642c-1.529,0-2.768-.546-2.768-1.218s1.239-1.219,2.768-1.219H966.106c1.528,0,2.768.546,2.768,1.219S967.634,823.539,966.106,823.539Z" transform="translate(351.127 65)" fill="#e6e6e6"></path>
                    <g id="Group_61" data-name="Group 61" transform="translate(-21145.078 -2078.104)">
                      <path id="Path_92-598" data-name="Path 92" d="M893.722,361.268l-16.8,33.257L826.7,417.359c-5.364,9.065-22.409,9.759-23.649,3.9-1.391-6.576,20.7-17.161,20.7-17.161l42.012-28.416,3.676-24.463Z" transform="translate(21477.109 2335.737)" fill="#ffb9b9"></path>
                      <path id="Path_93-599" data-name="Path 93" d="M742.662,464.215,745.76,489l-17.969,1.24-1.858-26.023Z" transform="translate(21626.188 2455.967)" fill="#ffb9b9"></path>
                      <path id="Path_94-600" data-name="Path 94" d="M900.869,676.83a48.641,48.641,0,0,0,4.434-5.422c2.575-3.564,4.86,14.716,4.86,14.716s2.479,7.435,1.859,11.153-14.87,3.718-17.349,3.1-14.87,0-14.87,0H861.215c-16.11-7.435,0-12.392,0-12.392,4.957-.62,21.686-16.11,21.686-16.11l3.718-6.815c2.478-.62,4.957,8.674,4.957,8.674Z" transform="translate(21465.504 2264.419)" fill="#090814"></path>
                      <path id="Path_95-601" data-name="Path 95" d="M802.8,464.616l3.1,24.784-17.969,1.24-1.859-26.024Z" transform="translate(21612.521 2455.876)" fill="#ffb9b9"></path>
                      <path id="Path_96-602" data-name="Path 96" d="M961.005,677.231a48.7,48.7,0,0,0,4.434-5.422c2.575-3.564,4.86,14.716,4.86,14.716s2.478,6.816,1.859,10.533-14.87,3.717-17.349,3.1-14.87.62-14.87.62H921.351c-16.11-7.435,0-12.392,0-12.392,4.957-.62,21.686-16.11,21.686-16.11l3.718-6.815c2.478-.62,4.957,8.674,4.957,8.674Z" transform="translate(21451.836 2264.328)" fill="#090814"></path>
                      <path id="Path_97-603" data-name="Path 97" d="M930.929,446.165c2.479,3.1,1.239,13.631,1.239,13.631s4.337,34.078,2.478,37.176,1.239,5.576,3.1,9.914,3.718,14.87,3.718,14.87c10.533,8.674,9.914,48.329,9.914,48.329l3.717,35.317c-1.239,3.718-18.588,4.337-21.066,3.718s-9.914-56.384-9.914-56.384l-16.729-31.6s1.239,84.265,1.239,87.983-16.729,1.859-20.447,1.859-3.718-61.96-3.718-61.96l-3.718-16.109-19.827-73.732V450.5l3.1-4.337S928.451,443.067,930.929,446.165Z" transform="translate(21463.943 2314.471)" fill="#090814"></path>
                      <circle id="Ellipse_11" data-name="Ellipse 11" cx="19.208" cy="19.208" r="19.208" transform="translate(22348.404 2581.572)" fill="#ffb9b9"></circle>
                      <path id="Path_98-604" data-name="Path 98" d="M901.99,251.326c3.893,8.67,1.588,20.779-6.2,34.078l31.6-14.87-4.957-4.337,1.239-12.392Z" transform="translate(21456.018 2358.437)" fill="#ffb9b9"></path>
                      <path id="Path_99-605" data-name="Path 99" d="M894.154,275.527c-4.138,2.46-6.613,6.98-8.034,11.58a109.735,109.735,0,0,0-4.716,26.218l-1.5,26.64L861.316,410.6c16.109,13.631,25.4,10.533,47.089-.62S932.57,413.7,932.57,413.7s1.859-.62,0-2.478,0,0,1.859-1.859,0,0-.62-1.859,0-.62.62-1.239-2.478-6.2-2.478-6.2l4.957-46.47,6.2-65.677c-7.435-9.294-28.5-17.349-28.5-17.349L895.394,284.2c-6.2,2.478-1.239-7.435-1.239-7.435Z" transform="translate(21463.852 2354.064)" fill="currentColor"></path>
                      <path id="Path_100-606" data-name="Path 100" d="M968.242,343.937l2.478,37.176-31.6,45.231c0,10.533-5.576,13.012-5.576,13.012a81.9,81.9,0,0,1-5.576-10.533c-3.1-6.816,1.859-12.392,1.859-12.392l21.686-45.85-9.294-22.925Z" transform="translate(21448.936 2337.39)" fill="#ffb9b9"></path>
                      <path id="Path_101-607" data-name="Path 101" d="M960.1,293.046c10.533,3.718,12.392,43.992,12.392,43.992-12.392-6.816-27.262,4.337-27.262,4.337s-3.1-10.533-6.816-24.164a23.68,23.68,0,0,1,4.957-22.306S949.563,289.329,960.1,293.046Z" transform="translate(21446.549 2349.247)" fill="currentColor"></path>
                      <path id="Path_102-608" data-name="Path 102" d="M928.148,237.734c-2.445-1.956-5.781,1.6-5.781,1.6l-1.956-17.606s-12.226,1.467-20.051-.489-9.047,7.091-9.047,7.091a62.8,62.8,0,0,1-.245-11c.489-4.4,6.847-8.8,18.095-11.737s17.116,9.781,17.116,9.781C934.1,219.283,930.593,239.691,928.148,237.734Z" transform="translate(21457.121 2368.931)" fill="#090814"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              {/* <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to TailAdmin
              </h2> */}

              {/* <form>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                            fill=""
                          />
                          <path
                            d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_191_13499)">
                        <path
                          d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_191_13499">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign in with Google
                </button>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{" "}
                    <Link href="/auth/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;
