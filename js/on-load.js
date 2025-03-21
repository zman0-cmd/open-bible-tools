function loadScriptsAll(){
    var scripts = [
        "/js/theme.js",
        "/js/math.js",
        "/js/utils.js",
        "/js/main.js"
    ];
    scripts.forEach(function(script){
        var tag = document.createElement('script');
        tag.src = script;
        document.body.appendChild(tag);
    });
}

function loadScriptsGenPlans(){
    var scripts = [
        "/js/libs/jspdf.umd.min.js",
        "/tools/reading-plans/js/plan-js/wholeBible.js",
        "/tools/reading-plans/js/plan-js/newTestament.js",
        "/tools/reading-plans/js/plan-js/oldTestament.js"
    ];
    scripts.forEach(function(script){
        var tag = document.createElement('script');
        tag.src = script;
        document.body.appendChild(tag);
    });
}

/*
        <!-- Scripts to load -->
        <script src="../../js/theme.js"></script>
        <script src="js/math.js"></script> 
        <script src="js/utils.js"></script>
        <script src="js/main.js"></script>
        <script src="js/libs/jspdf.umd.min.js"></script>
        <script src="js/plan-js/wholeBible.js"></script>
        <script src="js/plan-js/newTestament.js"></script>
        <script src="js/plan-js/oldTestament.js"></script>
        <!-- Not yet used or implemented.
        <script src="js/plans/thematic.js"></script>
        <script src="js/plans/chronological.js"></script>
        -->
*/