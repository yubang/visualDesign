/**
 * 可视化封装库，组件封装模块
 * @author: yubang
 */

 function DesignComponentLib(){
    // 创建组件
    function create_component(jq_dom_key, title, html){
        designLib.create_able_drap_dom(title, html, jq_dom_key);
    }

    // 生成栅格组件
    this.build_grid = function(jq_dom_key, grip_list){
        var html = '<div class="row">';
        for(var i in grip_list){
            var temp_id = designLib.get_a_new_id();
            html += '<div id="'+temp_id+'" drag_drop_sign="able_drop"  contenteditable="true" class="col-md-'+grip_list[i]+'">栅格布局</div>';
        }
        html += '</div>';
        create_component(jq_dom_key, "栅格布局", html);
    }

    // 生成标题
    this.build_title = function(jq_dom_key, title_type){
        var html = "<h"+title_type+" contenteditable=\"true\">这是标题</h"+title_type+">";
        create_component(jq_dom_key, "标题", html);
    }

    // 生成段落
    this.build_p = function(jq_dom_key){
        var html = "<p contenteditable=\"true\">这是标题</p>";
        create_component(jq_dom_key, "这是一个段落！", html);
    }

    // 生成标签
    this.build_label = function(jq_dom_key){
        var html = "<span class='label label-success' contenteditable=\"true\">这是标签</span >";
        create_component(jq_dom_key, "进度条", html);
    }

    // 生成进度条
    this.build_progress = function(jq_dom_key){
        var html = designLib.here_doc(function(){/*
            <div contenteditable="true" class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                <span>60% Complete</span>
              </div>
            </div>
        */});
        create_component(jq_dom_key, "标签", html);
    }

    // 生成分页
    this.build_page = function(jq_dom_key){
        var html = designLib.here_doc(function(){/*
            <nav contenteditable="true">
              <ul class="pagination">
                <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                <li ><a href="#">2 <span class="sr-only">(current)</span></a></li>
                <li ><a href="#">3 <span class="sr-only">(current)</span></a></li>
                <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>
              </ul>
            </nav>
        */});
        create_component(jq_dom_key, "标签", html);
    }

    // 生成按钮
    this.build_button = function(jq_dom_key){
        var html = designLib.here_doc(function(){/*
            <button contenteditable="true" type="button" class="btn btn-info">这是一个按钮</button>
        */});
        create_component(jq_dom_key, "标签", html);
    }

 }
 designComponentLib = new DesignComponentLib();
