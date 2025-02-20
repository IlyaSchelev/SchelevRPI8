const Setting = {
    rentOffersCount: 312,
  } as const;
  
  export {Setting};

  const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer/:id',
  } as const;

  export {AppRoute};