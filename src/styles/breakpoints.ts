export enum SCREEN_SIZE {
  mobileS = '320px',
  mobileM = '375px',
  mobileL = '425px',
  tablet = '768px',
  laptop = '1024px',
  laptopL = '1440px',
  desktop = '2560px'
}

export enum SCREEN_MQ {
  mobileS = '(min-width: ' + SCREEN_SIZE.mobileS + ')',
  mobileM = '(min-width: ' + SCREEN_SIZE.mobileM + ')',
  mobileL = '(min-width: ' + SCREEN_SIZE.mobileL + ')',
  tablet = '(min-width: ' + SCREEN_SIZE.tablet + ')',
  laptop = '(min-width: ' + SCREEN_SIZE.laptop + ')',
  laptopL = '(min-width: ' + SCREEN_SIZE.laptopL + ')',
  desktop = '(min-width: ' + SCREEN_SIZE.desktop + ')',
  desktopL = '(min-width: ' + SCREEN_SIZE.desktop + ')'
};

export enum SCREEN_PADDING {
  min = '15px 10px',
  mobileS = '15px 10px',
  mobileM = '15px 15px',
  mobileL = '15px 15px',
  tablet = '15px 15px',
  laptop = '15px 15px',
  laptopL = '15px 0px',
  desktop = '15px 0px'
}
