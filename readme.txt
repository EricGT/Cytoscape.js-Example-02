
This is derived from blog/tutorial: Visualizing Glycolysis with Cytoscape.js
https://blog.js.cytoscape.org/2016/06/08/glycolysis/
https://github.com/cytoscape/cytoscape.js-blog/tree/gh-pages/public/demos/glycolysis

To run examples to avoid CORS error

Download and install node.js
    https://nodejs.org/en/download/
Install http-server package
    npm install --global http-server
Change to directory that is the root of the files for the web site
Create batch file to set Windows Path to nodejs and http-server, then start http-server
    SET PATH="C:\Program Files (x86)\nodejs";"C:\Users\<user>\AppData\Roaming\npm";"C:\Users\<user>\AppData\Roaming\npm\node_modules\http-server"
    REM http-server --cors
    http-server
Start http-server by running batch file
    http_server.bat
Using Internet browser access web pages
    http://127.0.0.1:8080