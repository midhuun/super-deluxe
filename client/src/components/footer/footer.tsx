// src/components/Footer.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Footer = () => {
    const products = useSelector((state:RootState) => state.Products);
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Logo Section */}
                    <div className="footer-logo mb-6 md:mb-0">
                        <img src="path/to/your/logo.png" alt="Logo" className="h-16" />
                    </div> 
                    {/* Explore */}

            <div className='mb-6 md:mb-0'>
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul className='mt-2 space-y-2'>
            
              {products.status==='succeeded' && products.items?.categories && products?.items?.categories.slice(0,5).map((category:any)=>
              <li className="hover:text-gray-400" key={category._id}>{category.name}</li>
            )}
            </ul>
            </div>
                    {/* Quick Links Section */}
                    <div className="footer-links mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/contact-us" className="hover:text-gray-400">Contact Us</a></li>
                            <li><a href="/about-us" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="/refund-policy" className="hover:text-gray-400">Refund Policy</a></li>
                            <li><a href="/shipping-policy" className="hover:text-gray-400">Shipping Policy</a></li>
                            <li><a href="/terms-and-conditions" className="hover:text-gray-400">Terms and Conditions</a></li>
                        </ul>
                    </div>

                    {/* Address Section */}
                    <div className="footer-address mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold">Address</h4>
                        <p className="mt-2">123 Main Street,<br />City, State, 12345</p>
                    </div>

                    {/* Social Media Links */}
                   
                </div>

              
                
                {/* Copyright Section */}
                <div className="mt-10 text-center text-sm">
                    © {new Date().getFullYear()} Super Deluxe. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;