const theme = {
  color: {
    primary: '#c20c0c',
    secondary: ''
  },
  size: {},

  // 混入
  mixin: {
    wrapv1: `
            width:1100px;
            margin:0 auto;
        `,
    textNowrap: `
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `
  }
}

export default theme
