import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
    return (
      <article className="teacher-item">
        <header>
          <img src="https://scontent-gru2-2.cdninstagram.com/v/t51.2885-19/s150x150/16906360_415764808775839_4848488301557972992_a.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_ohc=68V9ufrA0XIAX9IUNIP&tp=1&oh=8f85bde735602c5cc9adb3b5dc422af2&oe=60275A0F" alt="Daniel Panzarini"></img>
          <div>
            <strong>Daniel Panzarini</strong>
            <strong>Matemática</strong>
          </div>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Aenean lobortis vulputate gravida. Nullam hendrerit nisl sapien, eu egestas dui ultrices sit amet. Sed ultrices ex a commodo venenatis. Vivamus posuere consequat gravida. Curabitur sed ultrices justo. Mauris ac velit consequat, blandit elit nec, lacinia leo.
        </p>

        <footer>
            <p>
              Preço/Hora
              <strong>R$ 100</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
        </footer>
      </article>
    )
}

export default TeacherItem;