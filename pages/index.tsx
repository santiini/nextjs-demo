/** @format */

interface Person {
  name: string;
}

const Rashomon: Person = {
  name: 'rashomon',
};

export default () => {
  return <div>Nextjs Test222: {Rashomon.name}</div>;
};
