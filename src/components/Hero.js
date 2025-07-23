import dog from '../assets/dog.jpg';

const Hero = () => {
  return (
    <section className="p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1"></div>
        <img src={dog} alt="Golden Retriever on Couch" className="flex-1 w-full rounded-lg bg-transparent" style={{background: 'transparent'}} />
      </div>
    </section>
  );
};

export default Hero;
