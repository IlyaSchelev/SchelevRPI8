const Setting = {
    RentalOffersCount: 312,
  } as const;
  
  export {Setting};

  const AppRoute = {
    Main : '/',
    Login : '/login',
    Favorites : '/favorites',
    Offer : '/offer/:id',
  } as const;

  export {AppRoute};

  const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
  } as const;

  export {AuthorizationStatus};