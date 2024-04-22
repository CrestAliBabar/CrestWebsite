export type LayoutType = {
    _id: string;
    name: string;
    backgroundColor: {
      value: string;
    };
    image: {
      asset: {
        _id: string;
        url: string;
      };
    };
    backgroundGradient: {
      transitionDirection: string;
      startColor: {
        value: string;
      };
      endColor: {
        value: string;
      };
    };
  };