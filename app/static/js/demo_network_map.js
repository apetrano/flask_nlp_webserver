// JS to get 
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Force Directed Graphs
   function doTheTreeViz(divName, inData) {
    // tweak the options
    var options = $.extend({
     stackHeight : 12,
     radius : 5,
     fontSize : 12,
     labelFontSize : 8,
     nodeLabel : null,
     markerWidth : 0,
     markerHeight : 0,
     width : $(divName).outerWidth(),
     gap : 1.5,
     nodeResize : "",
     linkDistance : 30,
     charge : -120,
     styleColumn : null,
     styles : null,
     linkName : null,
     height : $(divName).outerHeight()
    }, inData.d3.options);
    // set up the parameters
    options.gap = options.gap * options.radius;
    var width = options.width;
    var height = options.height;
    var data = inData.d3.data;
    var nodes = data.nodes;
    var links = data.links;
    var color = d3.scale.category20();

    var force = d3.layout.force().nodes(nodes).links(links).size([width, height]).linkDistance(options.linkDistance).charge(options.charge).on("tick", tick).start();

    var svg = d3.select(divName).append("svg:svg").attr("width", width).attr("height", height);

    // get list of unique values in stylecolumn
    linkStyles = [];
    if (options.styleColumn) {
     var x;
     for (var i = 0; i < links.length; i++) {
      if (linkStyles.indexOf( x = links[i][options.styleColumn].toLowerCase()) == -1)
       linkStyles.push(x);
     }
    } else
     linkStyles[0] = "defaultMarker";

    // do we need a marker?

    if (options.markerWidth) {
     svg.append("svg:defs").selectAll("marker").data(linkStyles).enter().append("svg:marker").attr("id", String).attr("viewBox", "0 -5 10 10").attr("refX", 15).attr("refY", -1.5).attr("markerWidth", options.markerWidth).attr("markerHeight", options.markerHeight).attr("orient", "auto").append("svg:path").attr("d", "M0,-5L10,0L0,5");
    }

    var path = svg.append("svg:g").selectAll("path").data(force.links()).enter().append("svg:path").attr("class", function(d) {
     return "link " + (options.styleColumn ? d[options.styleColumn].toLowerCase() : linkStyles[0]);
    }).attr("marker-end", function(d) {
     return "url(#" + (options.styleColumn ? d[options.styleColumn].toLowerCase() : linkStyles[0] ) + ")";
    });

    var circle = svg.append("svg:g").selectAll("circle").data(force.nodes()).enter().append("svg:circle").attr("r", function(d) {
     return getRadius(d);
    }).style("fill", function(d) {
     return color(d.group);
    }).call(force.drag);

    if (options.nodeLabel) {
     circle.append("title").text(function(d) {
      return d[options.nodeLabel];
     });
    }
    
    if (options.linkName) {
     path.append("title").text(function(d) {
      return d[options.linkName];
     });
    }
    var text = svg.append("svg:g").selectAll("g").data(force.nodes()).enter().append("svg:g");

    // A copy of the text with a thick white stroke for legibility.
    text.append("svg:text").attr("x", options.labelFontSize).attr("y", ".31em").attr("class", "shadow").text(function(d) {
     return d[options.nodeLabel];
    });

    text.append("svg:text").attr("x", options.labelFontSize).attr("y", ".31em").text(function(d) {
     return d[options.nodeLabel];
    });
    function getRadius(d) {
     return options.radius * (options.nodeResize ? Math.sqrt(d[options.nodeResize]) / Math.PI : 1);
    }

    // Use elliptical arc path segments to doubly-encode directionality.
    function tick() {
     path.attr("d", function(d) {
      var dx = d.target.x - d.source.x, dy = d.target.y - d.source.y, dr = Math.sqrt(dx * dx + dy * dy);
      return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
     });

     circle.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
     });

     text.attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
     });
    }

   }









//Raw Json:
window['mcpherTreeData'] = {"d3":{"options":{"radius":"10","fontSize":"12","labelFontSize":"7","nodeResize":"count","nodeLabel":"label","outerRadius":"480"},"data":{"nodes":[{"name":"John McTiernan","count":2,"group":"Action & Adventure","linkCount":2,"label":"John McTiernan"},{"name":"211292501","count":1,"group":"Action & Adventure","linkCount":2,"label":"The Hunt for Red October"},{"name":"Action & Adventure","count":20,"group":"Action & Adventure","linkCount":20,"label":"Action & Adventure"},{"name":"Brian De Palma","count":1,"group":"Thriller","linkCount":1,"label":"Brian De Palma"},{"name":"266641150","count":1,"group":"Thriller","linkCount":2,"label":"The Untouchables"},{"name":"Thriller","count":6,"group":"Thriller","linkCount":6,"label":"Thriller"},{"name":"Guy Hamilton","count":2,"group":"Action & Adventure","linkCount":2,"label":"Guy Hamilton"},{"name":"303823225","count":1,"group":"Action & Adventure","linkCount":2,"label":"Goldfinger"},{"name":"Stephen Norrington","count":1,"group":"Action & Adventure","linkCount":1,"label":"Stephen Norrington"},{"name":"273786637","count":1,"group":"Action & Adventure","linkCount":2,"label":"The League of Extraordinary Gentlemen"},{"name":"Terry Gilliam","count":1,"group":"Action & Adventure","linkCount":1,"label":"Terry Gilliam"},{"name":"381613567","count":1,"group":"Action & Adventure","linkCount":2,"label":"Time Bandits"},{"name":"Terence Young","count":3,"group":"Action & Adventure","linkCount":3,"label":"Terence Young"},{"name":"303781960","count":1,"group":"Action & Adventure","linkCount":2,"label":"Dr. No"},{"name":"303888092","count":1,"group":"Action & Adventure","linkCount":2,"label":"From Russia With Love"},{"name":"Kevin Reynolds","count":1,"group":"Action & Adventure","linkCount":1,"label":"Kevin Reynolds"},{"name":"297889543","count":1,"group":"Action & Adventure","linkCount":2,"label":"Robin Hood: Prince of Thieves (Extended Version)"},{"name":"338387285","count":1,"group":"Action & Adventure","linkCount":2,"label":"Thunderball"},{"name":"Rob Cohen","count":1,"group":"Action & Adventure","linkCount":1,"label":"Rob Cohen"},{"name":"280312978","count":1,"group":"Action & Adventure","linkCount":2,"label":"Dragonheart"},{"name":"303990510","count":1,"group":"Action & Adventure","linkCount":2,"label":"Diamonds Are Forever"},{"name":"Unknown","count":1,"group":"Action & Adventure","linkCount":1,"label":"Unknown"},{"name":"338391655","count":1,"group":"Action & Adventure","linkCount":2,"label":"You Only Live Twice"},{"name":"Gus Van Sant","count":1,"group":"Drama","linkCount":1,"label":"Gus Van Sant"},{"name":"277049498","count":1,"group":"Drama","linkCount":2,"label":"Finding Forrester"},{"name":"Drama","count":8,"group":"Drama","linkCount":8,"label":"Drama"},{"name":"Michael Crichton","count":1,"group":"Western","linkCount":1,"label":"Michael Crichton"},{"name":"250832973","count":1,"group":"Western","linkCount":2,"label":"The Great Train Robbery"},{"name":"Western","count":1,"group":"Western","linkCount":1,"label":"Western"},{"name":"Jon Amiel","count":1,"group":"Thriller","linkCount":1,"label":"Jon Amiel"},{"name":"289445986","count":1,"group":"Thriller","linkCount":2,"label":"Entrapment"},{"name":"Jerry Zucker","count":1,"group":"Action & Adventure","linkCount":1,"label":"Jerry Zucker"},{"name":"280686281","count":1,"group":"Action & Adventure","linkCount":2,"label":"First Knight"},{"name":"Russell Mulcahy","count":1,"group":"Sci-Fi & Fantasy","linkCount":1,"label":"Russell Mulcahy"},{"name":"431215034","count":1,"group":"Sci-Fi & Fantasy","linkCount":2,"label":"Highlander"},{"name":"Sci-Fi & Fantasy","count":3,"group":"Sci-Fi & Fantasy","linkCount":3,"label":"Sci-Fi & Fantasy"},{"name":"John Huston","count":1,"group":"Drama","linkCount":1,"label":"John Huston"},{"name":"372185439","count":1,"group":"Drama","linkCount":2,"label":"The Man Who Would Be King"},{"name":"Robert Stevenson","count":1,"group":"Kids & Family","linkCount":1,"label":"Robert Stevenson"},{"name":"296796330","count":1,"group":"Kids & Family","linkCount":2,"label":"Darby O\'Gill and the Little People"},{"name":"Kids & Family","count":1,"group":"Kids & Family","linkCount":1,"label":"Kids & Family"},{"name":"Peter Hyams","count":2,"group":"Sci-Fi & Fantasy","linkCount":2,"label":"Peter Hyams"},{"name":"293790412","count":1,"group":"Sci-Fi & Fantasy","linkCount":2,"label":"Outland"},{"name":"209044194","count":1,"group":"Thriller","linkCount":2,"label":"The Presidio"},{"name":"Arnold Glimcher","count":1,"group":"Thriller","linkCount":1,"label":"Arnold Glimcher"},{"name":"279599105","count":1,"group":"Thriller","linkCount":2,"label":"Just Cause"},{"name":"Alfred Hitchcock","count":1,"group":"Thriller","linkCount":1,"label":"Alfred Hitchcock"},{"name":"287447949","count":1,"group":"Thriller","linkCount":2,"label":"Marnie"},{"name":"John Milius","count":1,"group":"Action & Adventure","linkCount":1,"label":"John Milius"},{"name":"298031777","count":1,"group":"Action & Adventure","linkCount":2,"label":"The Wind and the Lion"},{"name":"Fred Schepisi","count":1,"group":"Thriller","linkCount":1,"label":"Fred Schepisi"},{"name":"284757072","count":1,"group":"Thriller","linkCount":2,"label":"The Russia House"},{"name":"216304892","count":1,"group":"Action & Adventure","linkCount":2,"label":"Medicine Man"},{"name":"John Boorman","count":1,"group":"Action & Adventure","linkCount":1,"label":"John Boorman"},{"name":"314918279","count":1,"group":"Action & Adventure","linkCount":2,"label":"Zardoz"},{"name":"Jean-Jacques Annaud","count":1,"group":"Drama","linkCount":1,"label":"Jean-Jacques Annaud"},{"name":"450182677","count":1,"group":"Drama","linkCount":2,"label":"The Name of the Rose"},{"name":"Martin Ritt","count":1,"group":"Drama","linkCount":1,"label":"Martin Ritt"},{"name":"272554778","count":1,"group":"Drama","linkCount":2,"label":"The Molly Maguires"},{"name":"Jeremiah Chechik","count":1,"group":"Action & Adventure","linkCount":1,"label":"Jeremiah Chechik"},{"name":"353421214","count":1,"group":"Action & Adventure","linkCount":2,"label":"The Avengers (1998)"},{"name":"Philip Kaufman","count":1,"group":"Action & Adventure","linkCount":1,"label":"Philip Kaufman"},{"name":"402396044","count":1,"group":"Action & Adventure","linkCount":2,"label":"Rising Sun"},{"name":"Willard Carroll","count":1,"group":"Comedy","linkCount":1,"label":"Willard Carroll"},{"name":"432472231","count":1,"group":"Comedy","linkCount":2,"label":"Playing By Heart"},{"name":"Comedy","count":4,"group":"Comedy","linkCount":4,"label":"Comedy"},{"name":"Richard Lester","count":1,"group":"Action & Adventure","linkCount":1,"label":"Richard Lester"},{"name":"278692911","count":1,"group":"Action & Adventure","linkCount":2,"label":"Robin and Marian"},{"name":"Sidney Lumet","count":4,"group":"Comedy","linkCount":4,"label":"Sidney Lumet"},{"name":"307210791","count":1,"group":"Comedy","linkCount":2,"label":"Family Business"},{"name":"Ronald Neame","count":1,"group":"Sci-Fi & Fantasy","linkCount":1,"label":"Ronald Neame"},{"name":"298253362","count":1,"group":"Sci-Fi & Fantasy","linkCount":2,"label":"Meteor"},{"name":"320793708","count":1,"group":"Drama","linkCount":2,"label":"The Anderson Tapes"},{"name":"Fred Zinnemann","count":1,"group":"Drama","linkCount":1,"label":"Fred Zinnemann"},{"name":"300147732","count":1,"group":"Drama","linkCount":2,"label":"Five Days One Summer"},{"name":"Richard Brooks","count":1,"group":"Action & Adventure","linkCount":1,"label":"Richard Brooks"},{"name":"323230488","count":1,"group":"Action & Adventure","linkCount":2,"label":"Wrong Is Right"},{"name":"Bruce Beresford","count":1,"group":"Comedy","linkCount":1,"label":"Bruce Beresford"},{"name":"415151219","count":1,"group":"Comedy","linkCount":2,"label":"A Good Man In Africa"},{"name":"Lewis Allen","count":1,"group":"Drama","linkCount":1,"label":"Lewis Allen"},{"name":"277698196","count":1,"group":"Drama","linkCount":2,"label":"Another Time, Another Place"},{"name":"321509957","count":1,"group":"Drama","linkCount":2,"label":"The Hill"},{"name":"296579133","count":1,"group":"Action & Adventure","linkCount":2,"label":"The Offence"},{"name":"Irvin Kershner","count":1,"group":"Comedy","linkCount":1,"label":"Irvin Kershner"},{"name":"316373516","count":1,"group":"Comedy","linkCount":2,"label":"A Fine Madness"} ],"links":[{"source":0,"target":1,"depth":6,"count":1},{"source":1,"target":2,"depth":6,"count":1},{"source":3,"target":4,"depth":6,"count":1},{"source":4,"target":5,"depth":6,"count":1},{"source":6,"target":7,"depth":6,"count":1},{"source":7,"target":2,"depth":6,"count":1},{"source":8,"target":9,"depth":6,"count":1},{"source":9,"target":2,"depth":6,"count":1},{"source":10,"target":11,"depth":6,"count":1},{"source":11,"target":2,"depth":6,"count":1},{"source":12,"target":13,"depth":6,"count":1},{"source":13,"target":2,"depth":6,"count":1},{"source":12,"target":14,"depth":6,"count":1},{"source":14,"target":2,"depth":6,"count":1},{"source":15,"target":16,"depth":6,"count":1},{"source":16,"target":2,"depth":6,"count":1},{"source":12,"target":17,"depth":6,"count":1},{"source":17,"target":2,"depth":6,"count":1},{"source":18,"target":19,"depth":6,"count":1},{"source":19,"target":2,"depth":6,"count":1},{"source":6,"target":20,"depth":6,"count":1},{"source":20,"target":2,"depth":6,"count":1},{"source":21,"target":22,"depth":6,"count":1},{"source":22,"target":2,"depth":6,"count":1},{"source":23,"target":24,"depth":6,"count":1},{"source":24,"target":25,"depth":6,"count":1},{"source":26,"target":27,"depth":6,"count":1},{"source":27,"target":28,"depth":6,"count":1},{"source":29,"target":30,"depth":6,"count":1},{"source":30,"target":5,"depth":6,"count":1},{"source":31,"target":32,"depth":6,"count":1},{"source":32,"target":2,"depth":6,"count":1},{"source":33,"target":34,"depth":6,"count":1},{"source":34,"target":35,"depth":6,"count":1},{"source":36,"target":37,"depth":6,"count":1},{"source":37,"target":25,"depth":6,"count":1},{"source":38,"target":39,"depth":6,"count":1},{"source":39,"target":40,"depth":6,"count":1},{"source":41,"target":42,"depth":6,"count":1},{"source":42,"target":35,"depth":6,"count":1},{"source":41,"target":43,"depth":6,"count":1},{"source":43,"target":5,"depth":6,"count":1},{"source":44,"target":45,"depth":6,"count":1},{"source":45,"target":5,"depth":6,"count":1},{"source":46,"target":47,"depth":6,"count":1},{"source":47,"target":5,"depth":6,"count":1},{"source":48,"target":49,"depth":6,"count":1},{"source":49,"target":2,"depth":6,"count":1},{"source":50,"target":51,"depth":6,"count":1},{"source":51,"target":5,"depth":6,"count":1},{"source":0,"target":52,"depth":6,"count":1},{"source":52,"target":2,"depth":6,"count":1},{"source":53,"target":54,"depth":6,"count":1},{"source":54,"target":2,"depth":6,"count":1},{"source":55,"target":56,"depth":6,"count":1},{"source":56,"target":25,"depth":6,"count":1},{"source":57,"target":58,"depth":6,"count":1},{"source":58,"target":25,"depth":6,"count":1},{"source":59,"target":60,"depth":6,"count":1},{"source":60,"target":2,"depth":6,"count":1},{"source":61,"target":62,"depth":6,"count":1},{"source":62,"target":2,"depth":6,"count":1},{"source":63,"target":64,"depth":6,"count":1},{"source":64,"target":65,"depth":6,"count":1},{"source":66,"target":67,"depth":6,"count":1},{"source":67,"target":2,"depth":6,"count":1},{"source":68,"target":69,"depth":6,"count":1},{"source":69,"target":65,"depth":6,"count":1},{"source":70,"target":71,"depth":6,"count":1},{"source":71,"target":35,"depth":6,"count":1},{"source":68,"target":72,"depth":6,"count":1},{"source":72,"target":25,"depth":6,"count":1},{"source":73,"target":74,"depth":6,"count":1},{"source":74,"target":25,"depth":6,"count":1},{"source":75,"target":76,"depth":6,"count":1},{"source":76,"target":2,"depth":6,"count":1},{"source":77,"target":78,"depth":6,"count":1},{"source":78,"target":65,"depth":6,"count":1},{"source":79,"target":80,"depth":6,"count":1},{"source":80,"target":25,"depth":6,"count":1},{"source":68,"target":81,"depth":6,"count":1},{"source":81,"target":25,"depth":6,"count":1},{"source":68,"target":82,"depth":6,"count":1},{"source":82,"target":2,"depth":6,"count":1},{"source":83,"target":84,"depth":6,"count":1},{"source":84,"target":65,"depth":6,"count":1} ]}}};</script>