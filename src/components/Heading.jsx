import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto  lg:mb-20 md:text-center text-color-7`}
    >
      {tag && <TagLine className="mb-4 md:justify-center text-color-7">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4 text-color-7">{text}</p>}
    </div>
  );
};

export default Heading;
