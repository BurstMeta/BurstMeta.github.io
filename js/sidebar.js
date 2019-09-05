function initSidebar() {
    let sidebar = document.createElement('div');
    let mainContent = document.getElementById('main-content');
    document.body.insertBefore(sidebar, mainContent);
    sidebar.outerHTML = '' +
'<div id="sidebar">'+
'        <aside id="begin-news" class="side-block">'+
'            <div class="side-head">About Countries</div>'+
'            <div class="side-item"><img src="../icons/main.png"><a href="../about/china.html">About China</a></div>'+
'            <div class="side-item"><img src="../icons/main.png"><a href="../about/america.html">About USA</a></div>'+
'            <div class="side-item"><img src="../icons/main.png"><a href="../about/nigeria.html">About Nigeria</a></div>'+
'        </aside>'+
'        <a id="close-menu" href="#"></a>'+
'    </div>';
}