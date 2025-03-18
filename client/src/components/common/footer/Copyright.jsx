import React from 'react'
import { LANGUAGES } from "../../../utils/constants/languages";

const Copyright = ({ isVisible }) => {
    const handleLanguageChange = (lang) => {
        console.log(`Language changed to ${lang}`);
    }

    return (
        <div
            className={`pt-6 mt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-5 transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <p className="text-white">
                &copy; {new Date().getFullYear()} AnyJob Platform. All rights
                reserved.
            </p>
            {/* Language selector */}
            <div className="flex gap-6">
                {LANGUAGES.map((lang) => (
                    <button
                        key={lang.code}
                        className="text-white hover:text-blue-green-500 transition-colors duration-300"
                        onClick={() => handleLanguageChange(lang.code)}
                    >
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Copyright