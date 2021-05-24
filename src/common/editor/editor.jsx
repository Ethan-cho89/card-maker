import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, onDelete, onChange }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards &&
        cards.map((card) => {
          return (
            <CardEditForm
              key={card.id}
              card={card}
              onDelete={onDelete}
              onChange={onChange}
            />
          );
        })}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
