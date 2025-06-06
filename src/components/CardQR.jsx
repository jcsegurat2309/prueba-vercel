import React, { useState, useEffect } from 'react';
import * as UAParser from 'ua-parser-js';

export default function CardQR({ title, description, link }) {
    const [movilOTablet, setMovilOTablet] = useState(false);
    const [userAgent, setUserAgent] = useState('Sin datos ');

    useEffect(() => {
        const parser = new UAParser.UAParser();
        const deviceType = parser.getDevice().type;
        // Fallback manual si la librería no detecta el tipo
        if (
            deviceType === 'mobile' ||
            deviceType === 'tablet' ||
            /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet|kindle|silk|fennec|windows phone|maemo|symbian/i.test(navigator.userAgent)
        ) {
            setMovilOTablet(true);
        }
        setUserAgent(navigator.userAgent);
    }, []);

    return (
        <a href={link} className={`p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-[#EC651B] flex ${movilOTablet ? 'flex-row' : 'flex-col'} items-center justify-center w-full group`}>
            <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
                <p className="text-sm text-gray-800">{description}</p>
            </div>
            {!movilOTablet ? (
                <img
                    src="./icons/qr-code-whatsapp.svg"
                    alt="Código QR"
                    className="h-64 w-64 mt-4 object-contain rounded transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                />
            ) : (
                <img
                    src="./icons/wa_icon_white.png"
                    alt="Logo"
                    className="h-12 w-auto mt-4 sm:mt-0 sm:ml-4 rounded"
                    loading="lazy"
                />
            )}
        </a>
    )
}
