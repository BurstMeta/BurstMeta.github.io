function initHeader() {
    let header = document.createElement('header');
    let mainContent = document.getElementById('main-content');
    document.body.insertBefore(header, mainContent);
    header.outerHTML = '' +
'<header>'+
'        <h1>'+
'            <a href="../index.html">'+
'                <span id="title">Wellbeing Assignment</span>'+
'            </a>'+
'        </h1>'+
'        <h2>Anin, Xiaohan, Ayaan</h2>'+
'        <nav id="popup-menu">'+
'            <div class="popup-group">'+
'                <span class="popup-button"><a href="../countries/nigeria.html">Nigeria</a></span>'+
'			 </div>'+
'            <div class="popup-group">'+
'                <span class="popup-button"><a href="../countries/america.html">USA</a></span>'+
'            </div>'+
'            <div class="popup-group">'+
'                <span class="popup-button"><a href="../countries/china.html">China</a></span>'+
'            </div>'+
'            <div class="popup-group">'+
'                <span class="popup-button"><a href="../index.html">Home</a></span>'+
'			 </div>'+
'        </nav>'+
'        <div id="open-menu">'+
'            <a href="#sidebar">≡</a>'+
'        </div>'+
'    </header>';
}