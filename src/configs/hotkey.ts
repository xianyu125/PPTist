export const enum KEYS {
  C = 'C',
  X = 'X',
  Z = 'Z',
  Y = 'Y',
  A = 'A',
  G = 'G',
  L = 'L',
  F = 'F',
  D = 'D',
  B = 'B',
  P = 'P',
  O = 'O',
  R = 'R',
  T = 'T',
  MINUS = '-',
  EQUAL = '=',
  DIGIT_0 = '0',
  DELETE = 'DELETE',
  UP = 'ARROWUP',
  DOWN = 'ARROWDOWN',
  LEFT = 'ARROWLEFT',
  RIGHT = 'ARROWRIGHT',
  ENTER = 'ENTER',
  SPACE = ' ',
  TAB = 'TAB',
  BACKSPACE = 'BACKSPACE',
  ESC = 'ESCAPE',
  PAGEUP = 'PAGEUP',
  PAGEDOWN = 'PAGEDOWN',
  F5 = 'F5',
}

interface HotkeyItem {
  type: string
  children: {
    label: string
    value?: string
  }[] 
}

export const HOTKEY_DOC: HotkeyItem[] = [
  {
    type: '通用',
    children: [
      { label: '剪切', value: 'Ctrl + X' },
      { label: '复制', value: 'Ctrl + C' },
      { label: '粘贴', value: 'Ctrl + V' },
      { label: '粘贴为纯文本', value: 'Ctrl + Shift + V' },
      { label: '快速复制粘贴', value: 'Ctrl + D' },
      { label: '全选', value: 'Ctrl + A' },
      { label: '撤销', value: 'Ctrl + Z' },
      { label: '恢复', value: 'Ctrl + Y' },
      { label: '删除', value: 'Delete / Backspace' },
      { label: '多选', value: '按住 Ctrl 或 Shift' },
      { label: '打开搜索替换', value: 'Ctrl + F' },
      { label: '打印', value: 'Ctrl + P' },
      { label: '关闭弹窗', value: 'ESC' },
    ],
  },
  {
    type: '幻灯片放映',
    children: [
      { label: '从头开始放映幻灯片', value: 'F5' },
      { label: '从当前开始放映幻灯片', value: 'Shift + F5' },
      { label: '切换上一页', value: '↑ / ← / PgUp' },
      { label: '切换下一页', value: '↓ / → / PgDown' },
      { label: '切换下一页', value: 'Enter / Space' },
      { label: '退出放映', value: 'ESC' },
    ],
  },
  {
    type: '幻灯片编辑',
    children: [
      { label: '新建幻灯片', value: 'Enter' },
      { label: '移动画布', value: 'Space + 鼠标拖拽' },
      { label: '缩放画布', value: 'Ctrl + 鼠标滚轮' },
      { label: '放大画布', value: 'Ctrl + =' },
      { label: '缩小画布', value: 'Ctrl + -' },
      { label: '使画布适应当前屏幕', value: 'Ctrl + 0' },
      { label: '上一页（未选中元素）', value: '↑' },
      { label: '下一页（未选中元素）', value: '↓' },
      { label: '上一页', value: '鼠标上滚 / PgUp' },
      { label: '下一页', value: '鼠标下滚 / PgDown' },
      { label: '快速创建文本', value: '双击空白处 / T' },
      { label: '快速创建矩形', value: 'R' },
      { label: '快速创建圆形', value: 'O' },
      { label: '快速创建线条', value: 'L' },
      { label: '退出绘制状态', value: '鼠标右键' },
    ],
  },
  {
    type: '元素操作',
    children: [
      { label: '移动', value: '↑ / ← / ↓ / →' },
      { label: '锁定', value: 'Ctrl + L' },
      { label: '组合', value: 'Ctrl + G' },
      { label: '取消组合', value: 'Ctrl + Shift + G' },
      { label: '置顶层', value: 'Alt + F' },
      { label: '置底层', value: 'Alt + B' },
      { label: '锁定宽高比例', value: '按住 Ctrl 或 Shift' },
      { label: '创建水平 / 垂直线条', value: '按住 Ctrl 或 Shift' },
      { label: '切换焦点元素', value: 'Tab' },
      { label: '确认图片裁剪', value: 'Enter' },
      { label: '完成自定义形状绘制', value: 'Enter' },
    ],
  },
  {
    type: '表格编辑',
    children: [
      { label: '聚焦到下一个单元格', value: 'Tab' },
      { label: '移动焦点单元格', value: '↑ / ← / ↓ / →' },
      { label: '在上方插入一行', value: 'Ctrl + ↑' },
      { label: '在下方插入一行', value: 'Ctrl + ↓' },
      { label: '在左侧插入一列', value: 'Ctrl + ←' },
      { label: '在右侧插入一列', value: 'Ctrl + →' },
    ],
  },
  {
    type: '图表数据编辑',
    children: [
      { label: '聚焦到下一行', value: 'Enter' },
    ],
  },
  {
    type: '文本编辑',
    children: [
      { label: '加粗', value: 'Ctrl + B' },
      { label: '斜体', value: 'Ctrl + I' },
      { label: '下划线', value: 'Ctrl + U' },
      { label: '行内代码', value: 'Ctrl + E' },
      { label: '上角标', value: 'Ctrl + ;' },
      { label: '下角标', value: `Ctrl + '` },
      { label: '选中段落', value: `ESC` },
    ],
  },
  {
    type: '其他快捷操作',
    children: [
      { label: '添加图片 - 粘贴来自系统剪贴板的图片' },
      { label: '添加图片 - 将本地图片拖拽到画布中' },
      { label: '添加图片 - 在画布中粘贴SVG代码' },
      { label: '添加图片 - 粘贴来自 pexels 的图片链接' },
      { label: '添加文本 - 将外部选中文字拖拽到画布中' },
      { label: '文本编辑 - 支持 markdown 语法创建列表和引用' },
    ],
  },
]