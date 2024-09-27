export const ListItems = ({ items }) => {
  return (
    items.map(item => (<li key={item.url}>{item.name}{item.title}</li>))
  );
};
