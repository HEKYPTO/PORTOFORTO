import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb';

const Menu = () => {
    return (
        <div className="flex items-center justify-between bg-gray-300 p-4">
            <div className="mb-4">
                <div>
                    <h1 className="text-2xl font-bold">Portoforto</h1>
                    <h2 className="text-sm text-gray-600">
                        A professionally crafted portfolio designed for printing <br/>
                        Interactive with simple click hiding specific sections <br/>
                        With a customizable and polished print layout.
                    </h2>
                </div>
            </div>
            
            <div className="flex items-center space-x-4">
                <a href="https://github.com/HEKYPTO" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} color="#333" />
                </a>

                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                    <TbBrandNextjs size={32} color="#333" />
                </a>

                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                    <TbBrandVercel size={32} color="#333" />
                </a>
            </div>
        </div>
    );
};

export default Menu;