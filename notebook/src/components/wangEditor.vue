<template lang="html">
<div>
  <div class="editor">
    <div ref="toolbar" class="toolbar">
    </div>
    <textarea ref="editor" class="text">
    </textarea>
  </div>
</div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    mounted() {
        this.editor = new E(this.$refs.toolbar, this.$refs.editor)
        this.editor.customConfig.menus = [
          'head', // 标题
          'bold', // 粗体
          'fontSize', // 字号
          'fontName', // 字体
          'italic', // 斜体
          'underline', // 下划线
          'strikeThrough', // 删除线
          'foreColor', // 文字颜色
          'backColor', // 背景颜色
          'link', // 插入链接
          'list', // 列表
          'justify', // 对齐方式
          'quote', // 引用
          'emoticon', // 表情
          'image', // 插入图片
          'table', // 表格
          'video', // 插入视频
          'code', // 插入代码
          'undo', // 撤销
          'redo', // 重复
          'fullscreen' // 全屏
        ]
        var $text1 = $('#text1')
        this.editor.customConfig.onchange = function (html) {
            // 监控变化，同步更新到 textarea
            $text1.val(html)
        }
        this.editor.create()
        // 初始化 textarea 的值
        $text1.val(editor.txt.html())
      // this.seteditor()
      // this.editor.txt.html(this.value)
    },
    
  }
  
  </script>
  


<style lang="css">
  
</style>