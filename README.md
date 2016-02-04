# visualDesign
基于jquery，html5和bootstrap的可视化设计封装库

###demo可以访问demo文件夹下的index.html或者访问 <a href="http://htmlpreview.github.io/?https://github.com/yubang/visualDesign/blob/master/demo/index.html" target="_blank">demo地址</a>

### 文件说明

- design.js
    这个是核心代码文件，实现了拖拽的相关实现封装
- design.component.js
    这个封装了一些可拖拽组件，用于实现功能增强
- design.simple.js
    这个是基于上面两个文件的高度封装，用于一行代码显示出可视化设计面板


### 文件依赖

- jquery
- bootstrap


### 使用手册

- 添加一个div
    

    <div id="draw"></div>

- 执行一句js
      

    $(document).ready(function(){
       set_a_drag_and_drop_div("draw");
    });
    
    

- 那就可以了


### 常用API

- set_a_drag_and_drop_div(一个div元素的id) 生成可视化面板
- clear_a_drag_and_drop_div() 清空可视化面板数据
- get_a_drag_and_drop_div_html() 获取生成的html，返回字符串
- show_a_drag_and_drop_div_html() 显示生成的html


### 更底层的API


- designLib.set_main_draw(一个jq选择器规则) 设置一个元素成为可以接受拖拽的面板
- designLib.get_a_new_id() 获取一个新的id
- designLib.set_able_drag_dom(一个jq选择器规则) 设置一个元素可以拖拽
- designLib.create_able_drap_dom(组件标题, 组件html代码, 生成的组件放置到的元素的jq选择器)
- designLib.get_draw_html(面板jq选择器规则) 返回生成的html字符串

- designComponentLib.build_button(生成的组件放置到的元素的jq选择器) 放置一个button组件
- designComponentLib.build_page(生成的组件放置到的元素的jq选择器) 放置一分页组件组件
- designComponentLib.build_progress(生成的组件放置到的元素的jq选择器) 放置一个进度条组件
- designComponentLib.build_label(生成的组件放置到的元素的jq选择器) 放置一个标签组件
- designComponentLib.build_p(生成的组件放置到的元素的jq选择器) 放置一个段落组件
- designComponentLib.build_title(生成的组件放置到的元素的jq选择器, int1~6) 放置一个标题组件
- designComponentLib.build_grid(生成的组件放置到的元素的jq选择器, 栅格比例列表) 放置一个栅格组件
