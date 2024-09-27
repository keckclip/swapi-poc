
export const ListItems = ({ items }) => {
  return (
    items.map(d => (<li key={d.id}>{d.name}</li>))
  );
};
