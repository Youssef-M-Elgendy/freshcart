import Image from "next/image";
import logo from "../../assets/img/freshcart-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faTruck, faRotateLeft, faShieldHalved, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard, faCcPaypal, faCcVisa, faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return <>
    <footer>

      {/* Top */}
      <section className="bg-green-50 py-6">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="flex  items-center gap-4">
            <div className="bg-green-100 text-green-600 p-4 rounded-xl text-xl">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-gray-500 text-sm">On orders over 500 EGP</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-4 rounded-xl text-xl">
              <FontAwesomeIcon icon={faRotateLeft} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Easy Returns</h3>
              <p className="text-gray-500 text-sm">14-day return policy</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-4 rounded-xl text-xl">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-gray-500 text-sm">100% secure checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-green-100 text-green-600 p-4 rounded-xl text-xl">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-gray-500 text-sm">Contact us anytime</p>
            </div>
          </div>

        </div>
      </section>
      {/* Main */}
      <div className="bg-gray-900 border-b pt-6 lg:pt-0">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 container">
          <div className=" *:my-8 *:font-medium text-gray-400">
            <Image src={logo} alt="Freshcart logo" className="bg-white py-2.5 px-1.5 w-55 rounded-xl" />
            <p>FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.</p>
            <ul className="">
              <li className="flex gap-3">
                <span>
                  <FontAwesomeIcon className="text-green-600" icon={faPhone} />
                </span>
                +1 (800) 123-4567
              </li>
              <li className="flex gap-3">
                <span>
                  <FontAwesomeIcon className="text-green-600" icon={faEnvelope} />
                </span>
                support@freshcart.com
              </li>
              <li className="flex gap-3">
                <span>
                  <FontAwesomeIcon className="text-green-600" icon={faLocationDot} />
                </span>
                123 Commerce Street, New York, NY 10001
              </li>
            </ul>
            <ul className="flex *:text-xl gap-3 *:bg-gray-800 *:px-2.5 *:py-2 *:rounded-full *:hover:bg-primary-500 *:hover:text-white *:duration-200">
              <li>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </div>

          <div className=" *:my-8 *:font-medium text-gray-400">
            <h2 className=" text-2xl font-bold text-white">Shop</h2>
            <ul className="space-y-3">
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>All Products</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Categories</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Brands</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Electronics</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Men's Fashion</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Women's Fashion</Link>
              </li>
            </ul>
          </div>

          <div className=" *:my-8 *:font-medium text-gray-400">
            <h2 className="text-2xl font-bold text-white">Account</h2>
            <ul className="space-y-3 *:hover:text-green-400 *:duration-200">
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>My Account</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Order History</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Wishlist</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Shopping Cart</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Sign In</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Create Account</Link>
              </li>
            </ul>
          </div>

          <div className=" *:my-8 *:font-medium text-gray-400">
            <h2 className="text-2xl font-bold text-white">Support</h2>
            <ul className="space-y-3 *:hover:text-green-400 *:duration-200">
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Contact Us</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Help Center</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Shipping Info</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Returns & Refunds</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Track Order</Link>
              </li>
            </ul>
          </div>

          <div className=" *:my-8 *:font-medium text-gray-400">
            <h2 className="text-2xl font-bold text-white">Legal</h2>
            <ul className="space-y-3 *:hover:text-green-400 *:duration-200">
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Privacy Policy</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Terms of Service</Link>
              </li>
              <li className="*:hover:text-green-400 *:duration-200">
                <Link href={""}>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-gray-900 h-20 flex items-center">
        <div className="lg:flex container justify-between">
          <span className="text-gray-600 font-medium text-lg ">© 2026 FreshCart. All rights reserved.</span>
          <ul className="flex gap-4 *:flex *:gap-2 *:items-center *:text-gray-600">
            <li>
              <FontAwesomeIcon icon={faCcVisa} />
              <span>Visa</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCcMastercard} />
              <span>Master Card</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCcPaypal} />
              <span>Paypal</span>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  </>
}