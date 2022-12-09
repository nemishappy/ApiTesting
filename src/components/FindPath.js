import graph from '../assets/json/Graph.json';

//DFS traversal
// Time Complexity: O(V^V), The time complexity is exponential. From each vertex there are v vertices that can be visited from current vertex.
// Auxiliary space: O(V^V), To store the paths V^V space is needed.

export default function FindPath(s, d) {
  function comparePath(dataPath) {
    let shortest;
    let temp;
    let path = [];
    for (let i = 0; i < dataPath.length; i++) {
      //    console.log("round = "+i+" shortest : "+shortest+" temp : "+temp+" path : "+path);

      if (shortest == null) {
        shortest = dataPath[i][1];
        path.push(...dataPath[i][0]);
        //    console.log("---shortest = null---"+path);
      }
      temp = dataPath[i][1];
      if (temp < shortest) {
        shortest = temp;
        path = [];
        path.push(...dataPath[i][0]);
        //    console.log("temp<short -> "+" temp : "+temp+" Path : "+path);

        if ((temp = shortest)) {
          //    console.log(" temp==shortest -> ");
          temp = dataPath[i][1];

          // console.log("temp : "+temp);
          // console.log("shortest : "+shortest);

          // console.log("length 1 : "+dataPath[i][0].length);
          // console.log("path new : "+dataPath[i][0]);
          // console.log("path old : "+path);
          // console.log("lenght old path : "+path.length);

          if (dataPath[i][0].length > path.length) {
            //    console.log("temp.length>shortest.length -->");
            path = [];
            path.push(...dataPath[i][0]);
          }
        }
        if (dataPath[i][0].length > path.length) {
          // console.log("temp.length>shortest.length -->");
          path = [];
          path.push(...dataPath[i][0]);
        }
      }
    }

    //    console.log("sh-->"+shortest);
    return path;
  }

  // Prints all paths from
  // 's' to 'd'
  function printAllPaths(s, d) {
    //
    let v = Object.keys(graph);
    // console.log("all key-->"+v);

    let isVisited = new Array(v);
    //store all path
    let pathList = [];

    //value of path
    let valueList = [];

    let allPath = [];

    let result = [];

    for (let i = 0; i < v; i++) isVisited[i] = false;

    // add source to path[]
    pathList.push(s);
    //    console.log("path1-->"+pathList);

    // Call recursive utility
    result = printAllPathsUtil(s, d, isVisited, pathList, valueList, allPath);

    //  console.log(result);
    comparePath(result);
    //    console.log(comparePath(result));

    return comparePath(result);
  }

  // A recursive function to print
  // all paths from 'u' to 'd'.
  // isVisited[] keeps track of
  // vertices in current path.
  // localPathList<> stores actual
  // vertices in the current path
  function printAllPathsUtil(
    u,
    d,
    isVisited,
    localPathList,
    localValueList,
    allPathList,
  ) {
    let adjList = [];
    if (graph[u] === undefined) {
      return {};
    }
    adjList = Object.keys(graph[u]);
    // console.log("afj-->"+adjList);

    let value = [];
    value = Object.values(graph[u]);
    //    console.log("v-->"+value);

    if (u == d) {
      //    console.log(localPathList+"");
      // if match found then no need to
      // traverse more till depth

      let distance = 0;
      //    console.log("leght-->"+localValueList.length);

      for (let i = 0; i < localValueList.length; i++) {
        distance += localValueList[i];
      }

      //     console.log(localValueList+"");

      //    console.log(distance+"");

      allPathList.push([[...localPathList], distance]);
      // console.log(allPathList);
    }

    // Mark the current node
    isVisited[u] = true;

    // Recur for all the vertices
    // adjacent to current vertex
    for (let i = 0; i < adjList.length; i++) {
      if (!isVisited[adjList[i]]) {
        // store current node
        // in path[]

        localPathList.push(adjList[i]);
        // console.log("localPath-->"+localPathList);

        localValueList.push(value[i]);

        printAllPathsUtil(
          adjList[i],
          d,
          isVisited,
          localPathList,
          localValueList,
          allPathList,
        );
        // remove current node
        // in path[]
        localPathList.splice(localPathList.indexOf(adjList[i]), 1);

        localValueList.splice(localValueList.indexOf(value[i]), 1);
      }
    }

    // Mark the current node
    isVisited[u] = false;

    return allPathList;
  }

  //    // arbitrary source
  //    let s = "thankyou";

  //    // arbitrary destination
  //    let d = "mz";

  //    console.log("Following are all different paths from "+ s + " to " + d+" ");

  let allPath = printAllPaths(s, d).map(item => parseInt(item));

  //    console.log("final path : "+allPath);
  return allPath;
}
