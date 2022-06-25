export const ContactBlock = ({ items }) => (
  <>
    <h3>Contacts</h3>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <a href={item.href}>
            {/* <svg>
              <use href={item.icon}></use>
            </svg> */}
            {item.address}
          </a>
        </li>
      ))}
    </ul>
    <address>
      {/* <svg>
        <use href="../img/sprite.svg#icon-icon-location"></use>
      </svg> */}
      Lviv, Ukraine
    </address>
  </>
);
