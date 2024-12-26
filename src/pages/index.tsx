
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Card from '../components/Card/Card';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import UserList from "../components/UserList/UserList";

const HomePage = () => {
    const { t } = useTranslation('common');
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <Header />
            <main style={{ padding: '20px' }}>
                <LanguageSwitcher />

                <h1>{t('welcome')}</h1>
                <p>{t('description')}</p>

                <h2>Demo Components</h2>

                <Button onClick={() => setModalOpen(true)}>{t('button')}</Button>

                <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <h2>Modal Title</h2>
                    <p>This is a modal example.</p>
                </Modal>

                <h3>Cards</h3>
                <Card title="Card 1">
                    <p>Content of Card 1</p>
                </Card>
                <Card title="Card 2">
                    <p>Content of Card 2</p>
                </Card>

                <UserList />
            </main>
            <Footer />
        </div>
    );
};

export async function getServerSideProps({ locale }) {
    const fallbackLocale = 'en'; // Default locale if none is provided
    return {
        props: {
            ...(await serverSideTranslations(locale || fallbackLocale, ['common'])),
        },
    };
}

export default HomePage;
