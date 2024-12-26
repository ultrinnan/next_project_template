
import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const router = useRouter();

    const changeLanguage = (lang) => {
        router.push(router.pathname, router.asPath, { locale: lang });
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <button onClick={() => changeLanguage('en')} style={{ marginRight: '10px' }}>
                English
            </button>
            <button onClick={() => changeLanguage('uk')}>Українська</button>
        </div>
    );
};

export default LanguageSwitcher;
