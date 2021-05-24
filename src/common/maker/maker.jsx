import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'ethan',
      work: 'QTI',
      theme: 'dark',
      job: 'Front_end programmer',
      email: 'kaka@me.com',
      message: 'hello',
      fileName: 'ethan',
      fileURL: null,
    },
    {
      id: 2,
      name: 'Cho',
      work: 'QTI1',
      theme: 'colorful',
      job: 'Back_end programmer',
      email: 'solue@me.com',
      message: 'hello world',
      fileName: 'cho',
      fileURL: '',
    },
    {
      id: 3,
      name: 'Donghyun',
      work: 'QTI2',
      theme: 'light',
      job: 'fullstack programmer',
      email: 'bjaguar@me.com',
      message: 'hello world !?',
      fileName: 'donghyun',
      fileURL: '',
    },
  ]);

  const history = useHistory();
  // 이름 , 직장, 테마선택, 직업, 이메일, 내용

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
