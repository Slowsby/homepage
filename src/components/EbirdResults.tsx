type Bird = {
  code: string;
  name: string;
};

export default function RenderBirdResults(birds: Bird[]) {
  return birds.map((el) => {
    const [name, ...sci] = el.name.split('-');
    return (
      <a
        className='bg-white p-3 justify-start items-start w-96 hover:bg-gray-300 focus:bg-gray-300 border-black border-1 text-left'
        href={`https://ebird.org/species/${el.code}`}
      >
        <div className='text-black'>
          <p>
            <span>{name}</span>
            <span className='text-gray-600 italic text-sm'>{sci}</span>
          </p>
        </div>
      </a>
    );
  });
}
