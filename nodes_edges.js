// Elements JSON - https://js.cytoscape.org/#notation/elements-json
// JSON used to load elements into Cytoscape.js
// The elements JSON may be keyed by group such as nodes and edges.

var NodesEdges = {

    nodes: [
        {
            data: {
                id: "a",
                name: "Glucose",
                image: 'glucose.svg'
            },
        },

        {
            data: {
                id: 'b',
                name: "2pg",
                image: '2pg.svg'
            }
        }
    ],

    edges: [
        {
            data: { id: 'ab', source: 'a', target: 'b' }
        }
    ]

};