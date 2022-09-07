function Logo({ isLoading }) {
  const logo = (
    <div className='headerLogo'>
      <div className='logoPicture'>LOGO</div>
      <div className='wrapper'>
        <h1 className='titleBar'>Przelicznik walut</h1>
        {isLoading && <div id='loader' className='loader'></div>}
      </div>
    </div>
  );
  return logo;
}

export default Logo;
