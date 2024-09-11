import { items } from '../tools/search';
const Help = () => {
  return (
    <div className='flex flex-col absolute bg-[#070424] w-full h-full text-md p-3'>
      {items
        .sort((a, b) => a.key.localeCompare(b.key))
        .map((item) => (
          <p key={item.key}>
            <strong>{item.key}</strong> | {item.label}
          </p>
        ))}
    </div>
  );
};

export default Help;
