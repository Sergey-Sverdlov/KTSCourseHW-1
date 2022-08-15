const bfs = (graph) => {
    if (!(Object.prototype.toString.call(graph) === "[object Object]")) {
        throw new Error("INVALID_ARGUMENT");
    }
    let res : any[] = []
    const bfs2 = (graph, source) => {
        const queue = [ source ];
        while (queue.length > 0) {
            const current = queue.shift();
            res.push(current);
            for (let item of graph[current]) {
                queue.push(item);
            }
        }
    }
    bfs2(graph, Object.keys(graph)[0]);
    return res

};

export default bfs;
