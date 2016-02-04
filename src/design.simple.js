/**
 * 可视化封装库再封装库
 * @author: yubang
 * 2016.02.04
 * version: 1.0
 */

 // 设置可视化面板
 function set_a_drag_and_drop_div(id){

    function addComponent(buttonFunc, buttonText){
        var html = "<button class=\"btn btn-info\" onclick=\""+buttonFunc+"\">"+buttonText+"</button>";
        $("#drag_and_drop_companent_panel").append('<div class="col-md-6" style="margin-top:15px;"> '+html+"</div>");
    }

    var html = designLib.here_doc(function(){/*
            <div class="row">
        <div class="col-md-3">
                        <div class="panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title">操作</h3>
                </div>
                <div class="panel-body">
                    <a href="javascript:show_a_drag_and_drop_div_html();" class="btn btn-success">显示代码</a>
                    <a href="javascript:clear_a_drag_and_drop_div();" class="btn btn-danger">清空面板</a>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">拖拽面板</h3>
                </div>
                <div class="panel-body" id="drag_and_drop_div">

                </div>
            </div>
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h3 class="panel-title">组件面板</h3>
                </div>
                <div class="panel-body">
                    <div class="row"  id="drag_and_drop_companent_panel"></div>
                </div>
            </div>
        </div>
        <div class="col-md-9">

            <div class="panel panel-info">
                <div class="panel-heading">
                    <h3 class="panel-title">可视化设计面板</h3>
                </div>
                <div class="panel-body" style="min-height:500px;" id="drag_and_drop_companent_draw">

                </div>
            </div>

        </div>

        <div class="modal fade" id="drag_and_drop_div_target_code_div">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">生成代码</h4>
      </div>
      <div class="modal-body">
        <textarea id="drag_and_drop_div_target_code_div_text" style="width:100%;height:300px;overflow-x:scroll;overflow-y:scroll;"></textArea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->

    </div>
    */});
    $("#"+id).html(html);

    designLib.set_main_draw("#drag_and_drop_companent_draw");

    // 生成组件列表
    addComponent("designComponentLib.build_grid('#drag_and_drop_div', [12]);", "栅格（12）");
    addComponent("designComponentLib.build_grid('#drag_and_drop_div', [3,3,3,3]);", "栅格(3:3:3:3)");
    addComponent("designComponentLib.build_grid('#drag_and_drop_div', [6,3,3]);", "栅格（6:3:3）");
    addComponent("designComponentLib.build_grid('#drag_and_drop_div', [6,6]);", "栅格（6:6）");

    addComponent("designComponentLib.build_title('#drag_and_drop_div', 1);", "标题1");
    addComponent("designComponentLib.build_title('#drag_and_drop_div', 2);", "标题2");
    addComponent("designComponentLib.build_title('#drag_and_drop_div', 3);", "标题3");
    addComponent("designComponentLib.build_title('#drag_and_drop_div', 4);", "标题4");
    addComponent("designComponentLib.build_title('#drag_and_drop_div', 5);", "标题5");
    addComponent("designComponentLib.build_title('#drag_and_drop_div', 6);", "标题6");

    addComponent("designComponentLib.build_p('#drag_and_drop_div');", "段落");
    addComponent("designComponentLib.build_label('#drag_and_drop_div');", "标签");
    addComponent("designComponentLib.build_progress('#drag_and_drop_div');", "进度条");
    addComponent("designComponentLib.build_page('#drag_and_drop_div');", "分页");
    addComponent("designComponentLib.build_button('#drag_and_drop_div');", "按钮");
 }


 // 清空设计面板
 function clear_a_drag_and_drop_div(){
    $("#drag_and_drop_companent_draw").html("");
 }

 // 获取可用html代码
 function get_a_drag_and_drop_div_html(){
    return designLib.get_draw_html("#drag_and_drop_companent_draw");
 }

 // 显示html代码
 function show_a_drag_and_drop_div_html(){
    $("#drag_and_drop_div_target_code_div_text").html(get_a_drag_and_drop_div_html());
    $("#drag_and_drop_div_target_code_div").modal();
 }