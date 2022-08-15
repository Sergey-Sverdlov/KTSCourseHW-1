
const dfs = (graph) => {
    if (!(Object.prototype.toString.call(graph) === "[object Object]")) {
        throw new Error("INVALID_ARGUMENT");
    }
    let res : any[] = [];
    const dfs2 = (graph, source) => {
        res.push(source);
        for (let item of graph[source]) {
            dfs2(graph, item)
        }
    };
    dfs2(graph, Object.keys(graph)[0]);
    return res;
}

export default dfs;
