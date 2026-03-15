"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faUser,
    faAddressCard
} from "@fortawesome/free-regular-svg-icons";
import {
    faBars,
    faCartShopping,
    faChevronDown,
    faMagnifyingGlass,
    faPhone,
    faUserPlus,
    faRightFromBracket,
    faPerson,
    faPersonDress,
    faBabyCarriage,
    faSuitcaseMedical,
    faBolt,
    faEllipsis,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/freshcart-logo.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppSelector } from "@/store/store/store";
import useLogout from "@/features/auth/hooks/useLogout";

export default function Navbar() {
    const{logout}=useLogout()

    const pathname = usePathname();
    const getActiveStyle = (href: string) =>
        pathname === href ? "text-primary-600" : "text-gray-600 hover:text-green-600";

    const getMobileActiveStyle = (href: string) =>
        pathname === href
            ? "text-primary-600 bg-primary-50"
            : "text-gray-600 hover:bg-gray-100";

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    function toggelMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    const {numOfCartItems} = useAppSelector((state)=>state.cart)

    const { isAuthenticated } = useSelector((appState: AppState) => appState.auth);

    return (
        <header className="w-full bg-white fixed z-1000">
            <div className="container">
                {/* Top */}
                <div className="hidden lg:flex justify-between items-center border-b border-gray-100 py-2 text-[13px] text-gray-500">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faPhone} className="text-[10px]" />
                            +1 (800) 123-4567
                        </span>
                        <span>support@freshcart.com</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href="/orders" className={getActiveStyle("/track-order")}>Track Order</Link>
                        <Link href="/about" className={getActiveStyle("/about")}>About</Link>
                        <Link href="/contact" className={getActiveStyle("/contact")}>Contact</Link>
                        <div className="flex gap-4 items-center ml-2">
                            <span className="cursor-pointer">EGP <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" /></span>
                            <span className="cursor-pointer font-sans">العربية <FontAwesomeIcon icon={faChevronDown} className="text-[9px]" /></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main */}
            <div className="py-5">
                <div className="container flex justify-between items-center gap-4">
                    <Link href="/" className="">
                        <Image src={logo} alt="Freshcart logo" priority />
                    </Link>
                    <div className="hidden lg:flex max-w-xl relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-78  form-control"
                        />
                        <FontAwesomeIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" icon={faMagnifyingGlass} />
                    </div>
                    <div className="hidden lg:flex items-center gap-5">
                        <Link href="/wishlist" className={`flex flex-col items-center transition-colors ${getActiveStyle("/wishlist")}`}>
                            <FontAwesomeIcon icon={faHeart} className="text-xl" />
                            <span className="text-[12px] mt-1">Wishlist</span>
                        </Link>
                        <Link href="/cart" className={`flex flex-col items-center transition-colors ${getActiveStyle("/cart")}`}>
                            <div className="relative">
                                <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                                <span className="absolute size-5 -translate-y-1/2 flex justify-center items-center rounded-full bg-primary-600 text-white text-sm left-4 top-0">{numOfCartItems}</span>
                            </div>
                            <span className="text-[12px] mt-1">Cart</span>
                        </Link>
                        <Link href="/account" className={`flex flex-col items-center transition-colors ${getActiveStyle("/account")}`}>
                            <FontAwesomeIcon icon={faUser} className="text-xl" />
                            <span className="text-[12px] mt-1">Account</span>
                        </Link>

                        {
                            isAuthenticated ? <button onClick={logout} className="flex flex-col items-center text-gray-600 hover:text-red-500 transition-colors">
                                <FontAwesomeIcon icon={faRightFromBracket} className="text-xl" />
                                <span className="text-[12px] mt-1">Logout</span>
                            </button> : <>
                                <Link href="/signup" className={`flex flex-col items-center transition-colors ${getActiveStyle("/signup")}`}>
                                    <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                                    <span className="text-[12px] mt-1">Sign up</span>
                                </Link>
                                <Link href="/login" className={`flex flex-col items-center transition-colors ${getActiveStyle("/login")}`}>
                                    <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
                                    <span className="text-[12px] mt-1">Login</span>
                                </Link>
                            </>
                        }

                    </div>
                    <button className="lg:hidden btn bg-primary-600 text-white" onClick={toggelMenu}>
                        {isMenuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
            </div>
            {/* Categories  */}
            <div className="border-t border-gray-100 bg-[#f8f9fa] lg:py-3 ">
                <div className="container hidden lg:flex items-center gap-8">
                    <div className=" group z-1 ">
                        <button className="btn flex items-center gap-3 bg-primary-600 text-white hover:bg-primary-700">
                            <FontAwesomeIcon icon={faBars} />
                            <Link href={'/categories'} className="text-sm">All Categories</Link>
                            <FontAwesomeIcon icon={faChevronDown} className="text-[10px] ml-1" />
                        </button>

                        <menu className="absolute group-hover:block min-w-60 hidden *:p-3 *:hover:bg-gray-100 divide-y divide-gray-300/30 rounded-lg bg-white shadow">
                            <Link href="" className="flex gap-2 items-center">
                                <li>
                                    <FontAwesomeIcon className="text-primary-600 text-lg me-2"  icon={faPerson} />
                                    <span>Men's Fashion</span>
                                </li>
                            </Link>
                            <li>
                                <Link href="" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="text-primary-600 text-lg" fixedWidth icon={faPersonDress} />
                                    <span>Women's Fashion</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="text-primary-600 text-lg" fixedWidth icon={faBabyCarriage} />
                                    <span>Baby & Toys</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="text-primary-600 text-lg" fixedWidth icon={faSuitcaseMedical} />
                                    <span>Beauty & Health</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="text-primary-600 text-lg" fixedWidth icon={faBolt} /> <span>Electronics</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories
                                " className="flex gap-2 items-center">
                                    <FontAwesomeIcon className="text-primary-600 text-lg" fixedWidth icon={faEllipsis} /> <span>View All Categories</span>
                                </Link>
                            </li>
                        </menu>
                    </div>

                    <nav>
                        <ul className="flex gap-8 text-[15px] font-medium">
                            <li><Link href="/" className={getActiveStyle("/")}>Home</Link></li>
                            <li><Link href="/account" className={getActiveStyle("/deals")}>change password</Link></li>
                            <li><Link href="/orders" className={getActiveStyle("/new-arrivals")}>Order</Link></li>
                            <li><Link href="/brands" className={getActiveStyle("/brands")}>Brands</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Offcanvas */}
            {
                isMenuOpen && <>
                    <div className=" background fixed inset-0 bg-black/50 z-30 cursor-pointer" onClick={toggelMenu}>
                    </div>
                    <div className=" offcanvas fixed z-40 bg-white top-0 bottom-0 p-5 space-y-7 w-80 animate-slide-in">
                        <div className="flex justify-between space-x-4 border-b-2 border-gray-300/50 pb-5 ">
                            <Image src={logo} alt="Freshcart logo" priority />
                            <button>
                                <FontAwesomeIcon icon={faXmark} className=" bg-gray-300 p-1.5 rounded-2xl " onClick={toggelMenu} />
                            </button>
                        </div>
                        <div className="flex-1 max-w-xl relative">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full form-control"
                            />
                            <FontAwesomeIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" icon={faMagnifyingGlass} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Main Menu</h2>
                            <Link href="/wishlist" className={`flex py-3 px-2 items-center transition-colors duration-200 ${getMobileActiveStyle("/wishlist")}`}>
                                <FontAwesomeIcon icon={faHeart} className="text-xl mb-0" />
                                <span className="text-[12px] ms-1">Wishlist</span>
                            </Link>
                            <Link href="/cart" className={`flex py-3 px-2 items-center transition-colors duration-200 ${getMobileActiveStyle("/cart")}`}>
                                <div className="relative mb-0">
                                    <FontAwesomeIcon icon={faCartShopping} className="text-xl " />
                                    <span className="absolute size-5 -translate-y-1/2 flex justify-center items-center rounded-full bg-primary-600 text-white text-sm left-4 top-0">{numOfCartItems}</span>
                                </div>
                                <span className="text-[12px] ms-1">Cart</span>
                            </Link>
                            <Link href="/account" className={`flex py-3 px-2 items-center transition-colors duration-200 ${getMobileActiveStyle("/account")}`}>
                                <FontAwesomeIcon icon={faUser} className="text-xl mb-0" />
                                <span className="text-[12px] ms-1">Account</span>
                            </Link>
                        </div>
                        <div className="border-t-2 border-gray-300 pt-5">
                            <h2 className="text-xl font-bold">Accont</h2>
                            {
                                isAuthenticated ? <button onClick={logout} className="flex py-3 px-2 hover:bg-gray-100 space-y-3 items-center content-center transition-colors duration-200">
                                    <FontAwesomeIcon icon={faRightFromBracket} className="text-xl mb-0" />
                                    <span className="text-[12px] ms-1 ">Logout</span>
                                </button> : <>
                                    <Link href="/signup" className={`flex py-3 px-2 items-center transition-colors duration-200 ${getMobileActiveStyle("/signup")}`}>
                                        <FontAwesomeIcon icon={faUserPlus} className="text-xl mb-0" />
                                        <span className="text-[12px] ms-1 ">Sign up</span>
                                    </Link>
                                    <Link  href="" className={`flex py-3 px-2 items-center transition-colors duration-200 ${getMobileActiveStyle("/login")}`}>
                                        <FontAwesomeIcon icon={faAddressCard} className="text-xl mb-0" />
                                        <span className="text-[12px] ms-1 ">Login</span>
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
                </>
            }
        </header>
    );
}