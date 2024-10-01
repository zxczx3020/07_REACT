
export const menuOO = ({ orderList }) => {
    return (
      <div>
        <h2>주문 확인</h2>
        {orderList.length > 0 ? (<ul>
            {orderList.map((menu, id) => (
              <li key={id}>
                {menu.name} - {menu.price}원
              </li>
            ))}
          </ul>
        ) : (
          <label>장바구니가 비어있습니다</label>
        )}
      </div>
    );
  };
  export default menuOO