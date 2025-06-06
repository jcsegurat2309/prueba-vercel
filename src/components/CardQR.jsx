import React, { useState, useEffect } from 'react';

export default function CardQR({ title, description }) {
    const [esMovilOTablet, setEsMovilOTablet] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent;
        if (/mobile/i.test(ua) || /tablet|ipad|playbook|silk/i.test(ua)) {
            setEsMovilOTablet(true);
        }
    }, []);

    return (
        <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-[#EC651B] flex flex-col items-center justify-center w-full group">
            <p>{esMovilOTablet ? "Móvil o Tableta" : "PC"}</p>
            <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
                <p className="text-sm text-gray-800">{description}</p>
            </div>
            
            {!esMovilOTablet ? (<img
                src="./icons/qr-code-whatsapp.svg"
                alt="Código QR"
                className="h-64 w-64 mt-4 object-contain rounded transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
            />) : (
                <img
                    src="./icons/wa_icon_white.png"
                    alt="Logo"
                    className="h-12 w-auto mt-4 sm:mt-0 sm:ml-4 rounded"
                    loading="lazy"
                />
            )}
        </div>
    )
}
