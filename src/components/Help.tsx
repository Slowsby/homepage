import { items } from '../tools/search';
import { getCurrentDate } from '../utils/getCurrentDate';
const Help = () => {
  return (
    <div
      className={`${getCurrentDate()} flex flex-col absolute bg-cover w-full h-full text-md p-3`}
    >
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
