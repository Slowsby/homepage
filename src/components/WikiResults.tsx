type Thumbnail = {
  url: string;
};
type Wiki = {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail | null;
};

export default function RenderWikiResults(entries: Wiki[]) {
  return entries.map((el) => {
    const { thumbnail } = el;
    const thumbnailUrl =
      thumbnail !== null ? thumbnail.url : 'wikithumbnail.png';
    return (
      <a
        className='bg-white p-3 justify-start items-start w-96 hover:bg-gray-300 focus:bg-gray-300 border-black border-1 text-left'
        href={`https://en.wikipedia.org/?curid=${el.id}&useskin=vector`}
      >
        <div className='flex flex-row pr-2'>
          <img className='w-[15%] h-[15%]  rounded-md' src={thumbnailUrl} />

          <div className='text-black flex flex-col pl-3'>
            <p>
              <span>{el.title}</span>
            </p>
            <p className='text-gray-600 italic text-sm'>{el.description}</p>
          </div>
        </div>
      </a>
    );
  });
}
