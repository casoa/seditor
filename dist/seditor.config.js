etpl.config({
  commandOpen: '<%',
  commandClose: '%>'
});

window.UMEDITOR_CONFIG = {

  //为编辑器实例添加一个路径，这个不能被注释
  UMEDITOR_HOME_URL: './',

  //图片上传配置区
  imageUrl: "./php/imageUp.php",
  imagePath: "./php/",
  imageFieldName: "file",
  toolbar: [
    'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
    'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize',
    '| justifyleft justifycenter justifyright justifyjustify |',
    'link unlink | emotion image video  | map',
    '| horizontal print preview fullscreen', 'drafts', 'formula'
  ],
  lang: "zh-cn",
  langPath: "./lang/",

  //ie下的链接自动监测
  //autourldetectinie:false,

  theme: 'default',
  themePath: "./themes/",

  //针对getAllHtml方法，会在对应的head标签中增加该编码设置。
  charset: "utf-8",

  //默认显示编辑器
  isShow: true,

  // 初始化编辑器的内容
  initialContent: '',

  // 初始化编辑器宽度/高度
  //initialFrameWidth: 500,
  //initialFrameHeight: 500,

  // 是否自动清除编辑器初始内容
  // 注意：如果focus属性设置为true，这个也为true，那么编辑器一上来就会触发导致初始化的内容看不到了
  //,autoClearinitialContent:true

  // 提交表单时服务器获取编辑器提交内容的所用的参数
  // 多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值
  textarea: 'content',

  // 初始化时，是否让编辑器自动获得焦点
  focus: false,

  // getContent时，是否删除空的inlineElement节点（包括嵌套的情况）
  autoClearEmptyNode: true,

  //是否开启初始化时即全屏
  fullscreen: false,

  //编辑器初始化结束后,编辑区域是否是只读的
  readonly: false,

  // 编辑器层级的基数
  zIndex: 1000,

  //如果自定义，最好给p标签如下的行高，要不输入中文时，会有跳动感
  //注意这里添加的样式，最好放在.edui-editor-body .edui-body-container这两个的下边，防止跟页面上css冲突
  //,initialStyle: '.edui-editor-body .edui-body-container p{line-height:1em}'

  // 自动同步编辑器要提交的数据
  autoSyncData: true,

  // 是否开启表情本地化
  // 若要开启请确保emotion文件夹下包含官网提供的images表情文件夹
  emotionLocalization: false,

  // 提交到后台的数据是否包含整个html字符串
  allHtmlEnabled: false,

  // 字体设置
  fontfamily: [
    {name: 'songti', val: '宋体,SimSun'},
  ],

  // 字号设置
  fontsize: [10, 11, 12, 14, 16, 18, 20, 24, 36],

  //段落格式
  // 值留空时支持多语言自动识别，若配置，则以配置值为准
  //,'paragraph':{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''}

  //可以最多回退的次数,默认20
  maxUndoCount: 10,

  //当输入的字符数超过该值时，保存一次
  maxInputCount: 1,

  // 是否允许点击文件拖拽改变大小
  imageScaleEnabled: true,

  // 是否允许拖放图片到编辑区域
  dropFileEnabled: true,

  // 是否允许粘贴截屏
  pasteImageEnabled: true,

  // 是否自动高度
  autoHeightEnabled: true,

  // 是否保持toolbar的位置不动
  autoFloatEnabled: true

  // 浮动时工具栏距离浏览器顶部的高度，用于某些具有固定头部的页面
  //,topOffset:30

  //填写过滤规则
  //, filterRules: {}
  // xss 过滤是否开启,inserthtml等操作
  //, xssFilterRules: true
  //input xss过滤
  //, inputXssFilter: true
  //output xss过滤
  //, outputXssFilter: true
  // xss过滤白名单 名单来源: https://raw.githubusercontent.com/leizongmin/js-xss/master/lib/default.js
//   , whiteList: {
//     a: ['target', 'href', 'title', 'style', 'class', 'id'],
//     abbr: ['title', 'style', 'class', 'id'],
//     address: ['style', 'class', 'id'],
//     area: ['shape', 'coords', 'href', 'alt', 'style', 'class', 'id'],
//     article: ['style', 'class', 'id'],
//     aside: ['style', 'class', 'id'],
//     audio: ['autoplay', 'controls', 'loop', 'preload', 'src', 'style', 'class', 'id'],
//     b: ['style', 'class', 'id'],
//     bdi: ['dir'],
//     bdo: ['dir'],
//     big: [],
//     blockquote: ['cite', 'style', 'class', 'id'],
//     br: [],
//     caption: ['style', 'class', 'id'],
//     center: [],
//     cite: [],
//     code: ['style', 'class', 'id'],
//     col: ['align', 'valign', 'span', 'width', 'style', 'class', 'id'],
//     colgroup: ['align', 'valign', 'span', 'width', 'style', 'class', 'id'],
//     dd: ['style', 'class', 'id'],
//     del: ['datetime', 'style', 'class', 'id'],
//     details: ['open', 'style', 'class', 'id'],
//     div: ['style', 'class', 'id'],
//     dl: ['style', 'class', 'id'],
//     dt: ['style', 'class', 'id'],
//     em: ['style', 'class', 'id'],
//     embed: ['style', 'class', 'id', '_url', 'type', 'pluginspage', 'src', 'width', 'height', 'wmode', 'play', 'loop', 'menu', 'allowscriptaccess', 'allowfullscreen'],
//     font: ['color', 'size', 'face', 'style', 'class', 'id'],
//     footer: ['style', 'class', 'id'],
//     h1: ['style', 'class', 'id'],
//     h2: ['style', 'class', 'id'],
//     h3: ['style', 'class', 'id'],
//     h4: ['style', 'class', 'id'],
//     h5: ['style', 'class', 'id'],
//     h6: ['style', 'class', 'id'],
//     header: ['style', 'class', 'id'],
//     hr: ['style', 'class', 'id'],
//     i: ['style', 'class', 'id'],
// //             iframe: ['style', 'class', 'id', 'src', 'frameborder', 'data-latex'],
//     img: ['src', 'alt', 'title', 'width', 'height', 'style', 'class', 'id', '_url'],
//     ins: ['datetime', 'style', 'class', 'id'],
//     li: ['style', 'class', 'id'],
//     mark: [],
//     nav: [],
//     ol: ['style', 'class', 'id'],
//     p: ['style', 'class', 'id'],
//     pre: ['style', 'class', 'id'],
//     s: [],
//     section: [],
//     small: ['style', 'class', 'id'],
//     span: ['style', 'class', 'id'],
//     sub: ['style', 'class', 'id'],
//     sup: ['style', 'class', 'id'],
//     strong: ['style', 'class', 'id'],
//     table: ['width', 'border', 'align', 'valign', 'style', 'class', 'id'],
//     tbody: ['align', 'valign', 'style', 'class', 'id'],
//     td: ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class', 'id'],
//     tfoot: ['align', 'valign', 'style', 'class', 'id'],
//     th: ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class', 'id'],
//     thead: ['align', 'valign', 'style', 'class', 'id'],
//     tr: ['rowspan', 'align', 'valign', 'style', 'class', 'id'],
//     tt: ['style', 'class', 'id'],
//     u: [],
//     ul: ['style', 'class', 'id'],
//     svg: ['style', 'class', 'id', 'width', 'height', 'xmlns', 'fill', 'viewBox'],
//     video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'style', 'class', 'id']
//   }
};
