function ItemLoja({ produto, onClick }) {
  return (
    <li className="shopping-item">
      {produto} <span onClick={onClick}>deletar</span>
    </li>
  );
}
export default ItemLoja;
