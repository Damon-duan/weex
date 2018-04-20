/**
 * 处理字体图标
 */
let utilFunc = {
  initIconFont () {
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': 'url(http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf)'
    })
  }
}

export default utilFunc
