/*
 * 基于 jquery，html5 和 bootstrap 制作的可视化页面封装库
 * @author: yubang
 * 2016.02.03
 * version: 1.0
 */

function DesignLib(){

    var this_obj = this;
    var timer = 0;

    // 显示代码编辑框
    function show_edit_div(jq_dom){

        var html = this_obj.here_doc(function(){/*
            <div class="modal fade" id="drag_and_drop_deit_div">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">代码编辑</h4>
                  </div>
                  <div class="modal-body">
                    <textArea id="drag_and_drop_code_deit_div" style="width:100%;height:300px;overflow-x:scroll;overflow-y:scroll;"></textArea>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" id="drag_and_drop_deit_button">保存</button>
                  </div>
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->
        */})
        if($("#drag_and_drop_deit_div").html() == undefined){
            $("body").append(html);
        }
        $("#drag_and_drop_code_deit_div").html(jq_dom.html());
        $("#drag_and_drop_deit_button").on('click', function(){
            jq_dom.html($("#drag_and_drop_code_deit_div").val());
            $("#drag_and_drop_deit_div").modal('hide');
        });
        $("#drag_and_drop_deit_div").modal();

    }

    this.get_a_new_id = function(){
        var id = "able_drap_" + timer;
        timer++;
        return id;
    }

    // 获取多行字符
    this.here_doc = function(text) {
        return text.toString().split('\n').slice(1,-1).join('\n') + '\n'
    }

    // 添加一个dom对象（仅仅只有一份）
    this.save_data_use_set = function(id, html){

        if($("#"+id).html() == undefined){
            $("body").append("<div style='display:none;' id='"+id+"'></div>");
        }

        $("#"+id).html(html);

    }

    // 设置可以拖动的元素
    this.set_able_drag_dom = function(jq_dom_key){

        $(jq_dom_key).each(function(){
            $(this).attr("draggable", true);
            $(this)[0].ondragstart = function(ev){
                ev.dataTransfer.setData("Text", ev.target.id);
            }
        });

    }

    // 设置可接受拖拽元素
    this.set_able_drop_dom = function(jq_dom_key, handle_func){
        $(jq_dom_key).each(function(){
            $(this)[0].ondragover = function(ev){
                ev.preventDefault();
                // 阻止事件冒泡
                ev.stopPropagation();
            }
            $(this)[0].ondrop = function(ev){
                ev.preventDefault();
                handle_func(ev);
                // 阻止事件冒泡
                ev.stopPropagation();
            }
        });
    }

    // 设置画布（可视化设计主dom元素）
    this.set_main_draw = function(jq_dom_key){
        this_obj.set_able_drop_dom(jq_dom_key, function(ev){
            if(jq_dom_key == "#"+ev.dataTransfer.getData('Text') + " > div[drag_drop_sign='body']"){
                return;
            }
            var dom_obj = $("#"+ev.dataTransfer.getData('Text'));
            dom_obj.appendTo(jq_dom_key);
            // 绑定事件
            this_obj.handle_able_drap_dom(ev.dataTransfer.getData('Text'));
        });
    }

    // 解决组件复制之后事件重新绑定
    this.handle_able_drap_dom = function(dom_id){
        // 设置可以拖拽
        this_obj.set_able_drag_dom("#"+dom_id);

        // 设置排序
        this_obj.set_able_drop_dom("#"+dom_id+" > div[drag_drop_sign='title']", function(ev){
            var dom_obj = $("#"+ev.dataTransfer.getData('Text'));
            var jq_dom_key = "#"+dom_id+" > div[drag_drop_sign='title']";
            $(jq_dom_key).parent().before(dom_obj);
            // 绑定事件
            this_obj.handle_able_drap_dom(ev.dataTransfer.getData('Text'));
        });

        // 设置接受拖拽
        this_obj.set_main_draw("#"+dom_id+" > div[drag_drop_sign='body']");

        // 特殊组件绑定接受拖拽事件
        $("div[drag_drop_sign='able_drop']").each(function(){
            this_obj.set_main_draw("#"+$(this).attr('id'));
        });


        // 绑定删除事件
        $('a[drag_drop_sign="delete"]').each(function(){
            $(this).on("click", function(){
                $(this).parent().parent().parent().remove();
            });
        });

        // 绑定编辑事件
        $('a[drag_drop_sign="edit"]').each(function(){
            $(this).on("click", function(){
                show_edit_div($(this).parent().parent().parent().find('div[drag_drop_sign="body"]'));
            });
        });


    }

    // 创建可拖拽组件
    this.create_able_drap_dom = function(dom_title, dom_html, target_dom_id){
        var id = this_obj.get_a_new_id();
        var html = '<div id="'+id+'" class="panel panel-default">';
        html += '<div drag_drop_sign="title" class="panel-heading">';
        html += '<h3 align="right" class="panel-title">'+dom_title+'&nbsp;<a drag_drop_sign="delete" class="label label-danger">删除</a> &nbsp;<a drag_drop_sign="edit" class="label label-primary">编辑</a></h3>';
        html += '</div>';
        html += '<div drag_drop_sign="body" class="panel-body">';
        html += dom_html;
        html += '</div>';
        html += '</div>';
        $(target_dom_id).html(html);

        // 特殊处理
        this_obj.handle_able_drap_dom(id)

        return id;
    }

    // 获取画板的html代码
    this.get_draw_html = function(jq_dom_key){
        var html = $(jq_dom_key).html();
        this_obj.save_data_use_set("designLib_temp_code_div", html);
        $("#designLib_temp_code_div div[drag_drop_sign='title']").remove();
        $("#designLib_temp_code_div div[draggable='true']").removeAttr("draggable");
        $("#designLib_temp_code_div div[contenteditable='true']").removeAttr("contenteditable");
        return $("#designLib_temp_code_div").html();
    }

}
designLib = new DesignLib();