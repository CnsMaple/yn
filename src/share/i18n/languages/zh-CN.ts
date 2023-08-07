/* eslint-disable quote-props */
import type { BaseLanguage } from './en'

const data: BaseLanguage = {
  'app-name': 'Yank Note',
  'about': '关于',
  'feedback': '反馈',
  'slogan': '一款强大可扩展的 Markdown 编辑器，为生产力而生',
  'cancel': '取消',
  'undo': '撤销',
  'ok': '确定',
  'demo-tips': 'DEMO 模式下一些功能不可用',
  'more': '更多',
  'copied': '已复制',
  'insert-different-repo-doc': '不能插入不同仓库的文档',
  'need-clipboard-permission': '请授予剪切板权限',
  'click-to-copy': '单击复制',
  'click-to-copy-link': '单击复制链接',
  'copy-code': '复制代码',
  'loading': '加载中',
  'add-image': '添加图片',
  'upload-image': '上传图片',
  'exit-presentation-msg': '按下 Esc 键退出演示模式',
  'reload': '重载',
  'open-in-new-window': '新窗口打开',
  'view-figure': '查看图形',
  'export': '导出',
  'no-password': '未输入密码',
  'save': '保存',
  'close': '关闭',
  'edit': '编辑',
  'discard': '放弃',
  'outline': '目录',
  'files': '文件',
  'install-extension-tips': '请先安装并启用 “%s” 扩展',
  'not-support-mas': '从 Mac Apple Store 中下载的应用不支持此拓展。',
  'learn-more': '了解更多',
  'default': '默认',
  'print': '打印',
  'premium': {
    'confetti': '彩色纸屑',
    'need-purchase': '[%s] 需要高级版',
    'buy-license': '立即购买',
    'free': '免费版',
    'premium': '高级版',
    'upgrade': '升级到高级版',
    'intro': {
      'intro': '介绍',
      'current-plan': '当前版本',
      'included': '已包含',
      'desc': 'Yank Note 是一款面向程序员的开源笔记应用，从 2018 年开始，一直在不断开发和更新。因为软件的开发和维护需要精力和资金，现推出付费高级版。如果你想支持我的开发工作，或需要使用高级版功能，可以选择购买高级版。',
      'free-desc': '满足大部分用户需求',
      'premium-desc': '更多高级功能',
      'free-list': '基础编辑功能\n图形嵌入\n运行代码片段\nHTML 小工具\n文档加密\n内置终端\n文档历史\n插件扩展',
      'premium-list': '基础编辑功能\n图形嵌入\n运行代码片段\nHTML 小工具\n文档加密\n内置终端\n文档历史 (增强)\n插件扩展 (更多)\n宏替换\n暗色主题',
    },
    'buy': {
      'buy': '购买',
    },
    'activation': {
      'license': '激活',
      'activation': '输入激活码',
      'placeholder': '请输入激活码',
      'get-license': '获取激活码',
      'info': '激活信息',
      'expired': '已过期',
      'expiring': '还有 %s 天过期',
      'need-refresh': '需要刷新激活信息',
      'refresh': '刷新',
      'renewal': '续费',
      'devices': '设备',
      'this-machine': '本机',
      'unbind': '解绑',
      'unbind-confirm': '确定要解绑 “%s” 吗？',
      'name': '名字: %s',
      'email': '邮箱: %s',
      'expires': '有效期至: %s',
      'plan': '方案: %s',
      'success': '激活成功',
      'activating': '激活中',
      'tips': '如果您在激活过程中遇到问题，请联系我',
      'tips-wechat': '微信',
      'activation-tips': '激活前请确保您的网络可以正常访问到 <a href="https://yank-note.com" target="_blank">https://yank-note.com</a>',
    },
  },
  'app': {
    'quit': '退出',
    'preferences': '偏好设置',
    'close-window': '关闭窗口',
    'toggle-fullscreen': '切换全屏',
    'tray': {
      'open-main-window': '打开主界面',
      'open-in-browser': '浏览器中打开',
      'open-main-dir': '打开主目录',
      'preferences': '偏好设置',
      'start-at-login': '开机启动',
      'version': '版本 %s',
      'quit': '退出',
      'dev': {
        'dev': '开发',
        'port-prod': '正式端口 (%s)',
        'port-dev': '开发端口 (%s)',
        'reload': '重载页面',
        'dev-tool': '主窗口开发工具',
        'restart': '重新启动',
        'force-quit': '强制退出',
      }
    },
    'updater': {
      'found-dialog': {
        'title': 'Yank Note - 发现新版本',
        'desc': '当前版本: %s\n新版本: %s',
        'buttons': {
          'download': '下载',
          'view-changes': '查看更新内容',
          'download-and-view-changes': '下载并查看更新内容',
          'cancel': '取消',
          'ignore': '忽略'
        }
      },
      'progress-bar': {
        'title': 'Yank Note - 下载',
        'detail': '下载中 %s',
        'failed': '下载失败: %s'
      },
      'failed-dialog': {
        'title': 'Yank Note - 出现了一些错误',
      },
      'install-dialog': {
        'title': 'Yank Note - 下载完成',
        'desc': '新版本下载完成，是否要立即安装？',
        'buttons': {
          'install': '安装',
          'delay': '推迟',
        }
      },
      'no-newer-dialog': {
        'title': 'Yank Note - 无新版本',
        'desc': '当前已是最新版本'
      }
    },
    'error': {
      'EADDRINUSE': '端口 (%s) 已被使用，请在设置中配置一个其他端口',
    }
  },
  'quit-check-dialog': {
    'title': '提示',
    'desc': '有文档未保存，是否要退出？',
    'buttons': {
      'cancel': '取消',
      'discard': '放弃保存并退出',
    },
  },
  'save-check-dialog': {
    'title': '提示',
    'desc': '文档尚未保存，是否要保存？',
  },
  'change-setting-reload-main-widow-dialog': {
    'title': '提示',
    'desc': '某些设置需要重载主窗口才能生效，是否要重载？',
  },
  'file-status': {
    'unsaved': '未保存',
    'saving': '保存中',
    'saved': '已保存',
    'save-failed': '保存失败！',
    'loaded': '加载完毕',
    'loading': '加载中…',
    'no-file': '未打开文件'
  },
  'modal': {
    'info': '提示',
    'input-placeholder': '请输入...',
  },
  'document': {
    'current-path': '当前路径: %s',
    'password-create': '[创建] 请输入密码',
    'password-save': '[保存] 请输入密码',
    'password-open': '[打开] 请输入密码',
    'wrong-password': '密码错误',
    'file-transform-error': '加密文件和非加密文件不能互相转换',
    'create-dialog': {
      'title': '创建文件（加密文件以 .c.md 结尾）',
      'hint': '文件名',
    },
    'create-dir-dialog': {
      'title': '创建文件夹',
      'hint': '文件夹名',
    },
    'duplicate-dialog': {
      'title': '重复文件',
      'hint': '目标路径',
    },
    'delete-dialog': {
      'title': '删除文件',
      'content': '确定要删除 [%s] 吗？'
    },
    'move-dialog': {
      'title': '移动文件',
      'content': '新的路径'
    },
    'save-encrypted-file-dialog': {
      'title': '提示',
      'content': '密码和上一次输入的密码不一致，是否用新密码保存？',
    },
    'switch-noent-dialog': {
      'title': '文件不存在',
      'content': '文件 [%s] 不存在，是否要创建？',
    }
  },
  'status-bar': {
    'view': {
      'view': '视图',
      'xterm': '显示终端',
      'preview': '显示预览',
      'editor': '显示编辑',
      'side-bar': '显示侧栏',
      'word-wrap': '文本换行',
      'typewriter-mode': '打字机模式',
      'editor-preview-exclusive': '编辑器/预览互斥',
    },
    'setting': '设置',
    'repo': {
      'repo': '仓库: %s',
      'no-data': '未选择仓库',
    },
    'nav': {
      'nav': '导航',
      'goto': '快速跳转',
      'forward': '前进',
      'back': '后退',
    },
    'insert': {
      'insert': '插入',
      'paste-rt': '粘贴富文本',
      'paste-img-base64': '粘贴图片',
    },
    'tool': {
      'tool': '工具',
      'convert-img-link': '下载外链图片',
      'macro-copy-markdown': '复制宏替换后的 Markdown',
      'copy-content': '复制内容',
      'doc-history': '文档历史版本',
      'share-preview': '分享预览',
      'print': '打印文档',
      'export': '导出文档',
    },
    'document-info': {
      'selected': '已选择',
      'lines': '总行数',
      'chars': '字符数',
      'selections': '选择',
    },
    'help': {
      'help': '帮助',
      'readme': '应用介绍',
      'features': '特色功能说明',
      'shortcuts': '快捷键',
      'plugin': '插件开发'
    },
    'terminal': '终端',
    'present': '预览',
    'get': {
      'get-application': '获取应用',
    },
    'extension': {
      'extension-manager': '扩展管理',
    },
    'theme': {
      'tips': '主题: %s',
      'dark': '深色',
      'light': '浅色',
      'system': '跟随系统',
    },
  },
  'view': {
    'outline': '目录',
    'print': '打印',
  },
  'tree': {
    'db-click-refresh': '双击刷新目录树',
    'add-repo': '添加仓库',
    'add-repo-hint': '选择一个位置保存笔记',
    'created-at': '创建于: %s',
    'updated-at': '更新于: %s',
    'context-menu': {
      'mark': '标记文件',
      'unmark': '取消标记',
      'duplicate': '重复文件',
      'create-doc': '创建文件',
      'create-dir': '创建文件夹',
      'rename': '重命名 / 移动',
      'delete': '删除',
      'open-in-os': '在系统中打开',
      'reveal-in-os': '在系统中显示',
      'refresh': '刷新目录',
      'open-in-terminal': '在终端中打开',
      'create-in-cd': '当前目录创建新文件',
      'copy-name': '复制名称',
      'copy-path': '复制路径',
      'find-in-folder': '在文件夹中查找',
    },
    'toast': {
      'moved': '[%s] 已移动到 [%s]',
      'copied': '[%s] 已复制到 [%s]',
    },
    'sort': {
      'asc': '升序',
      'desc': '降序',
      'by-name': '按名称 (%s)',
      'by-mtime': '按修改时间 (%s)',
      'by-birthtime': '按创建时间 (%s)',
      'by-serial': '按序号 (%s)',
    },
  },
  'tabs': {
    'close-others': '关闭其他',
    'close-right': '关闭右侧所有',
    'close-left': '关闭左侧所有',
    'close-all': '全部关闭',
    'pin': '固定',
    'unpin': '取消固定',
    'search-tabs': '搜索标签页',
    'new-tab': '新建标签页',
  },
  'export-panel': {
    'export': '导出',
    'format': '格式',
    'pdf': {
      'orientation': '方向',
      'portrait': '纵向',
      'landscape': '横向',
      'size': '尺寸',
      'zoom': '缩放',
      'use-browser': '将使用浏览器打印功能',
      'include-bg': '包含背景',
    },
    'use-html': '使用渲染后的 HTML 转换',
    'use-markdown': '使用 Markdown 转换',
    'loading': '转换中，请稍候……',
  },
  'title-bar': {
    'pin': '置顶窗口',
    'minimize': '最小化',
    'unmaximize': '还原',
    'maximize': '最大化',
  },
  'setting-panel': {
    'setting': '设置',
    'add': '添加%s',
    'delete-warning': '确定要删除吗？',
    'error-choose-repo-path': '请选择储存位置',
    'change-keyboard-shortcuts': '更改键盘快捷键',
    'schema': {
      'repos': {
        'repos': '仓库',
        'repo': '仓库',
        'name': '仓库名',
        'name-placeholder': '请输入',
        'path': '路径',
        'path-placeholder': '请选择一个路径'
      },
      'editor': {
        'mouse-wheel-zoom': '鼠标滚动缩放',
        'font-size': '字体大小',
        'tab-size': 'Tab 宽度',
        'ordered-list-completion': '有序列表补全',
        'minimap': '显示小地图',
        'line-numbers': '行号',
        'enable-preview': '开启预览 - 打开新文件使用临时标签，双击标签以更改',
        'font-family': '字体',
        'complete-emoji': '自动补全 Emoji - 输入 : 时显示 Emoji 列表',
        'todo-with-time': '勾选待办事项时自动添加时间',
      },
      'render': {
        'md-html': '启用 HTML',
        'md-breaks': '将 \\n 转换为 &lt;br&gt;',
        'md-linkify': '自动将类似 URL 的文本转换为链接',
        'md-typographer': '启用引号美化',
        'md-sup': '启用上标语法: 29^th^',
        'md-sub': '启用下标语法: H~2~O',
        'md-emoji': '启用 Emoji 语法: :smile:',
      },
      'theme': '主题',
      'language': '语言',
      'custom-css': '自定义 CSS',
      'assets-dir': '图片存放目录',
      'assets-desc': '支持相对路径和绝对路径（限于仓库内部）,可用变量：docName, docBasename, docSlug, date',
      'assets': {
        'path-type': '路径类型',
      },
      'shell': 'Shell',
      'envs': '环境变量',
      'auto-save': '自动保存',
      'plantuml-api': 'PlantUML 端点',
      'updater': {
        'source': '更新源',
      },
      'doc-history': {
        'number-limit': '版本保留数',
      },
      'search': {
        'number-limit': '搜索结果限制',
      },
      'server': {
        'host': '监听主机',
        'port': '监听端口',
        'port-desc': '需要重启应用',
      },
      'tree': {
        'exclude': '排除文件',
      },
      'proxy': {
        'enabled': '启用代理',
        'server': '代理服务器',
        'server-hint': '127.0.0.1:8080',
        'bypass-list': 'Bypass List',
        'pac-url': 'PAC URL',
      },
      'macros': {
        'macros': '宏',
        'match': '匹配',
        'replace': '替换',
        'match-placeholder': '%foo%',
        'replace-placeholder': '%foo% -> BAR',
      },
      'keep-running-after-closing-window': '关闭窗口后保持运行',
      'hide-main-window-on-startup': '启动时隐藏主窗口',
    },
    'tabs': {
      'repos': '仓库',
      'appearance': '外观',
      'editor': '编辑器',
      'render': '渲染',
      'image': '图片',
      'proxy': '代理',
      'macros': '宏替换',
      'other': '其他',
    },
  },
  'quick-open': {
    'input-placeholder': '键入字符……',
    'empty': '无结果',
    'files': '快速跳转',
    'marked': '已标记',
  },
  'editor': {
    'context-menu': {
      'paste-image': '粘贴图片',
      'paste-image-as-base64': '粘贴图片为 Base64',
      'paste-rt-as-markdown': '粘贴富文本为 Markdown',
      'add-attachment': '添加附件',
      'link-doc': '链接文档',
      'link-file': '链接文件',
      'insert-date': '插入当前日期',
      'insert-time': '插入当前时间',
      'reveal-line-in-preview': '在预览中聚焦',
      'force-insert-new-line': '强制插入新行',
      'force-insert-indent': '强制插入缩进',
    },
    'switch-editor': '切换编辑器',
    'default-editor': '默认编辑器',
  },
  'previewer': {
    'default-previewer': '默认预览器',
    'switch-previewer': '切换预览器',
  },
  'picgo': {
    'setting': {
      'api-title': 'PicGo 接口',
      'api-desc': 'PicGo 默认接口地址：http://127.0.0.1:36677/upload',
      'api-msg': '必须以 http:// 开头',
      'paste-title': '粘贴图片使用 PicGo 图床'
    },
    'uploading': '上传中……',
    'upload-failed': '上传失败',
    'need-api': '请先配置 PicGo 图床接口地址',
    'upload-all-images': '上传所有图片',
  },
  'code-run': {
    'run': '运行',
    'run-in-xterm-tips': '在终端中运行代码，%s + 单击不退出解释器',
    'run-in-xterm': '终端中运行',
    'running': '运行中……',
    'clear': '清空',
  },
  'mind-map': {
    'zoom-in': '放大',
    'zoom-out': '缩小',
    'fit-height': '适应高度',
    'switch-layout': '切换布局',
    'switch-loose': '紧凑/宽松',
    'convert-error': '转换错误\n    1. 请保证大纲只有一个根项目\n    2. 请保证大纲层级正确',
  },
  'table-cell-edit': {
    'esc-to-cancel': 'ESC 取消',
    'db-click-edit': '双击编辑',
    'canceled': '已取消编辑',
    'edit-hint': '单元格内容',
    'edit-title': '编辑单元格',
    'edit-error': '编辑出错',
    'limit-single-line': '只支持编辑单行文本',
    'context-menu': {
      'edit': '编辑',
      'quick-edit': '快速编辑',
      'sort-mode': '排序模式',
      'sort-asc': '升序',
      'sort-desc': '降序',
      'align-left': '左对齐',
      'align-center': '居中',
      'align-right': '右对齐',
      'align-normal': '取消对齐',
      'add-row-above': '在上面添加行',
      'add-row-below': '在下面添加行',
      'delete-row': '删除行',
      'add-col-left': '在左侧添加列',
      'add-col-right': '在右侧添加列',
      'delete-col': '删除列',
    },
  },
  'markdown-link': {
    'convert-to-titled-link': '转换为带标题的链接',
  },
  'custom-css': {
    'change-confirm': {
      'title': '提示',
      'content': '更改自定义 CSS 需要重载页面，是否继续？',
    }
  },
  'control-center': {
    'control-center': '控制中心 %s',
    'switch': {
      'side-bar': '侧栏 %s',
      'editor': '编辑器 %s',
      'view': '预览 %s',
      'sync-scroll': '同步滚动',
      'sync-rendering': '同步渲染',
      'word-wrap': '编辑器换行 %s',
      'typewriter-mode': '打字机模式',
    },
    'navigation': {
      'goto': '跳转 %s',
      'forward': '前进 %s',
      'back': '后退 %s',
      'refresh': '刷新 %s',
    }
  },
  'doc-history': {
    'clear': '清空',
    'apply-version': '应用选中版本',
    'no-history': '无历史版本',
    'content': '内容',
    'diff': '对比',
    'history': '历史',
    'current': '当前',
    'all': '全部',
    'marked': '已标记',
    'mark': '标记',
    'unmark': '取消标记',
    'delete': '删除',
    'edit-message': '编辑消息',
    'delete-dialog': {
      'title': '删除版本',
      'content': '你确定要删除版本 [%s] 吗？',
    },
    'clear-dialog': {
      'title': '清除版本',
      'content': '你确定要清除未标记的版本吗？',
    },
    'mark-dialog': {
      'title': '标记版本 [%s]',
      'hint': '输入一些信息（可选）',
    },
    'content-too-long-alert': {
      'title': '警告',
      'content': '出于性能考虑，超过 [%s] 字符的文档将不会存储历史。当前文档长度为 [%s] 字符。',
    },
  },
  'copy-content': {
    'options': '选项: ',
    'type': '复制类型: ',
    'inline-style': '内联样式',
    'include-style': '包含样式',
    'inline-image': '内联本地图片',
    'upload-image': '上传本地图片',
    'highlight-code': '高亮代码',
    'rt': '富文本',
    'complete': '转换完成，点击确定复制',
    'copy-tips': '如需复制部分内容，需要预览区选中后再操作',
    'copy-tips-selected': '复制选中的内容，%s 个字符',
  },
  'share-preview': {
    'expire': '到期',
    'tips': '请先在设置中配置监听主机 “0.0.0.0”',
  },
  'electron-zoom': {
    'zoom-in': '放大',
    'zoom-out': '缩小',
    'zoom-reset': '实际大小',
  },
  'extension': {
    'extension-manager': '扩展管理',
    'all': '全部',
    'installed': '已安装',
    'official': '官方',
    'unofficial': '非官方',
    'unknown': '未知',
    'author': '作者',
    'origin': '来源',
    'unpacked-size': '解包大小',
    'latest-version': '最新版本',
    'installed-version': '已安装版本',
    'homepage': '主页',
    'download': '下载',
    'toast-loaded': '扩展加载成功',
    'upgradable': '可升级',
    'incompatible': '不兼容',
    'not-installed': '未安装',
    'enabled': '已启用',
    'disabled': '已禁用',
    'reload-required': '需要重载',
    'no-extension': '没有扩展',
    'reload': '重载',
    'install': '安装',
    'installing': '正在安装',
    'uninstalling': '正在卸载',
    'uninstall': '卸载',
    'upgrade': '升级',
    'disable': '禁用',
    'enable': '启用',
    'uninstall-confirm': '你确定要卸载扩展 [%s] 吗？',
    'registry': '仓库源',
    'activation-time': '激活时间',
    'requirement': '需要',
    'auto-upgrade': '自动升级',
    'unknown-origin-tips': '使用未知来源的扩展可能有风险，仍然要启用吗？',
    'extensions-auto-upgraded': '%s 个扩展已升级',
    'fetch-registry-failed': '获取扩展仓库失败，请切换到其他仓库源或稍后重试',
  },
  'get-started': {
    'get-started': '开始使用',
    'start': '开始',
    'help': '帮助',
    'recent': '最近打开',
  },
  'search-panel': {
    'search-files': '搜索文件',
    'placeholder-search': '搜索',
    'for-history': '(⇅ 切换历史)',
    'files-to-include': '包含文件',
    'files-to-exclude': '排除文件',
    'match-case': '区分大小写',
    'match-whole-word': '匹配整词',
    'use-regex': '使用正则表达式',
    'expand-all': '展开所有',
    'collapse-all': '折叠所有',
  },
  'file-changed-alert': {
    'title': '文件已更改',
    'content': '文件已被其他应用更改，是否重新加载？',
    'reload': '重载',
  },
  'command-desc': {
    'base_find-in-repository': '在仓库中查找内容',
    'control-center_toggle': '展示/隐藏控制中心',
    'doc_show-history': '显示文档历史',
    'editor_toggle-wrap': '启用/禁用编辑器换行',
    'file-tabs_close-current': '关闭当前标签页',
    'file-tabs_search-tabs': '搜索标签页',
    'file-tabs_show-welcome': '显示欢迎页',
    'file-tabs_switch-left': '切换到左侧标签页',
    'file-tabs_switch-right': '切换到右侧标签页',
    'layout_toggle-editor': '显示/隐藏编辑器',
    'layout_toggle-side': '显示/隐藏侧栏',
    'layout_toggle-view': '显示/隐藏预览',
    'layout_toggle-xterm': '显示/隐藏终端',
    'plugin_copy-content_copy-content': '显示复制内容面板',
    'plugin_document-history-stack_back': '返回上一个文档',
    'plugin_document-history-stack_forward': '前进到下一个文档',
    'plugin_editor_focus-editor': '聚焦编辑器',
    'plugin_switch-todo_switch': '勾选/取消勾选待办事项（需在编辑器中选中内容）',
    'view_enter-presentation': '进入演示模式',
    'workbench_show-quick-open': '显示快速跳转',
    'workbench_toggle-outline': '显示/隐藏目录',
    'plugin_electron-zoom_zoom-in': '放大',
    'plugin_electron-zoom_zoom-out': '缩小',
    'plugin_electron-zoom_zoom-reset': '重置缩放',
  },
  'keyboard-shortcuts': {
    'keyboard-shortcuts': '键盘快捷键',
    'command': '命令',
    'keybinding': '快捷键',
    'not-set': '未设置',
    'clear': '清除',
    'change': '更改',
    'reset': '重置',
    'search': '键入以搜索，“*”搜索已更改',
    'empty': '无结果',
    'recorder': {
      'tip': '按下想要的键组合，然后按回车，按ESC取消。',
      'conflict-commands': '存在 %s 个命令使用了相同的快捷键',
    },
    'conflict': '冲突',
    'conflict-title': '冲突的快捷键 (%s)',
    'conflict-commands': '下面的命令使用了相同的快捷键：',
  },
}

export default data
