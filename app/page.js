 

function Header({ title }) {
  return (
    <h1 className="header-on-image">{title ? title : 'Default title'}</h1>
  );
}

function Description({ text }) {
  return (
    <p className="description-on-image">{text ? text : 'Default description'}</p>
  );
}

function HeaderImage({ src, alt }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }} />
      <Header title="Placeholder Title" />
      <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </div>
  );
}

export default function HomePage() {
 
  return (
    <div>
      <HeaderImage src="https://picsum.photos/800/400" alt="Description of image" />
    </div>
  );
}