const baseUrl = "https://swapi.dev/api/";

export const ListItems = ({ items }) => {
  return (
    items.map(item => {
      const href = item.url.replace(baseUrl, '')
      return (<li key={item.url}><a href={href}>{item.name}{item.title}</a></li>)
    })
  );
};
